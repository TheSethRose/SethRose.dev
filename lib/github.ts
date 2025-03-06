import { GitHubRepository, ProjectData } from '@/lib/types'

// Username to fetch repositories for
const GITHUB_USERNAME = 'TheSethRose' // Replace with your actual GitHub username

// Cache settings
const CACHE_DURATION = 60 * 60; // 1 hour in seconds
const CACHE_STALE_WHILE_REVALIDATE = 60 * 60 * 24; // 24 hours in seconds

/**
 * Fetch repositories for a user from GitHub
 */
export async function fetchGitHubRepositories(): Promise<GitHubRepository[]> {
  try {
    // GitHub API URL for user repositories
    const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

    // Query parameters
    const params = new URLSearchParams({
      sort: 'updated',
      direction: 'desc',
      per_page: '100'
    });

    // Headers according to GitHub API best practices
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'If-None-Match': '', // For ETag support
    };

    // Add authorization if token is available
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    // Fetch data with proper caching
    const response = await fetch(`${apiUrl}?${params.toString()}`, {
      headers,
      next: {
        revalidate: CACHE_DURATION,
        tags: ['github-repos']
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    return data as GitHubRepository[];
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

/**
 * Fetch contribution data for a user from GitHub using GraphQL API
 * Returns contribution data and total count
 */
export async function fetchGitHubContributions(username: string = GITHUB_USERNAME): Promise<{
  contributions: { date: string, count: number }[],
  totalContributions: number
}> {
  try {
    // GitHub GraphQL API endpoint
    const apiUrl = 'https://api.github.com/graphql';

    // Headers for GraphQL API
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    // Add authorization with token from environment variables
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      console.error('GITHUB_TOKEN environment variable is not set');
      throw new Error('GitHub token not found');
    }

    headers.Authorization = `bearer ${token}`;

    // Get current date in UTC with time component for GraphQL DateTime type
    const today = new Date();
    // Add one day to make sure we include today
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const toDate = tomorrow.toISOString();

    // Get date 90 days ago in UTC with time component for GraphQL DateTime type
    const fromDate = new Date(today);
    fromDate.setDate(fromDate.getDate() - 90);
    const fromDateString = fromDate.toISOString();

    // GraphQL query to get contribution data
    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    // Variables for the GraphQL query
    const variables = {
      username,
      from: fromDateString,
      to: toDate
    };

    // Fetch data from GitHub GraphQL API
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      next: {
        revalidate: CACHE_DURATION,
        tags: ['github-contributions']
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API error: ${response.status}`);
    }

    const data = await response.json();

    // Check for errors in the GraphQL response
    if (data.errors) {
      throw new Error(`GraphQL Error: ${data.errors[0].message}`);
    }

    // Extract contribution data from the response
    const contributionCalendar = data.data?.user?.contributionsCollection?.contributionCalendar;

    if (!contributionCalendar) {
      throw new Error('No contribution data found');
    }

    // Get the total contributions directly from the API
    const totalContributions = contributionCalendar.totalContributions;

    // Process the weeks and days to get a flat array of contributions
    const contributionData: { date: string, count: number }[] = [];

    contributionCalendar.weeks.forEach((week: { contributionDays: { date: string, contributionCount: number }[] }) => {
      week.contributionDays.forEach((day: { date: string, contributionCount: number }) => {
        contributionData.push({
          date: day.date,
          count: day.contributionCount
        });
      });
    });

    // Sort by date
    contributionData.sort((a, b) => a.date.localeCompare(b.date));

    // Return the data with the total contributions
    return {
      contributions: contributionData,
      totalContributions
    };
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    // If GraphQL API fails, fall back to mock data
    return {
      contributions: generateMockContributionData(),
      totalContributions: 0
    };
  }
}

/**
 * Generate mock contribution data for a full year
 * Used as fallback if the API fails
 */
function generateMockContributionData(): { date: string, count: number }[] {
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const contributionData: { date: string, count: number }[] = [];
  const currentDate = new Date(oneYearAgo);

  // Generate data for 1 year (365 days)
  while (currentDate <= today) {
    // Generate more realistic contribution patterns
    // Weekends have fewer contributions
    const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // Random factor with higher probability of activity on weekdays
    const random = Math.random();
    let count = 0;

    if (!isWeekend && random > 0.6) count = Math.floor(Math.random() * 3) + 1;
    if (!isWeekend && random > 0.85) count = Math.floor(Math.random() * 5) + 3;
    if (!isWeekend && random > 0.95) count = Math.floor(Math.random() * 10) + 8;
    if (isWeekend && random > 0.8) count = Math.floor(Math.random() * 3) + 1;
    if (isWeekend && random > 0.95) count = Math.floor(Math.random() * 5) + 3;

    contributionData.push({
      date: currentDate.toISOString().split('T')[0],
      count
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return contributionData;
}

/**
 * Determine the icon based on repository language or topics
 * Returns the icon name as a string
 */
function getIconForRepository(repo: GitHubRepository): string {
  // Check topics first
  const topics = repo.topics || []

  if (topics.some(topic => ['frontend', 'react', 'nextjs', 'vue'].includes(topic))) {
    return 'Code'
  }

  if (topics.some(topic => ['backend', 'api', 'server'].includes(topic))) {
    return 'Server'
  }

  if (topics.some(topic => ['database', 'sql', 'mongodb'].includes(topic))) {
    return 'Database'
  }

  if (topics.some(topic => ['ai', 'ml', 'bot', 'automation'].includes(topic))) {
    return 'Bot'
  }

  // Fallback to language
  const language = repo.language?.toLowerCase()

  if (['javascript', 'typescript', 'html', 'css', 'react'].includes(language || '')) {
    return 'Code'
  }

  if (['python', 'java', 'go', 'rust', 'c#', 'php'].includes(language || '')) {
    return 'Server'
  }

  // Default icon
  return 'Globe'
}

/**
 * Determine the size of the card based on repository metrics using a relative scale
 * This function is called after we've already filtered the repositories
 * @param repo The repository to determine size for
 * @param allRepos All repositories (filtered) to compare against
 */
function getSizeForRepository(
  repo: GitHubRepository,
  allRepos: GitHubRepository[]
): "small" | "medium" | "large" {
  // If there's a substantial description, prefer at least medium size
  const hasSubstantialDescription = repo.description && repo.description.length > 100;

  // Sort repos by stars to find relative position
  const sortedRepos = [...allRepos].sort((a, b) => b.stargazers_count - a.stargazers_count);

  // Find the index of the current repo in the sorted list
  const repoIndex = sortedRepos.findIndex(r => r.id === repo.id);

  // Calculate the percentile (0-1) of this repo compared to others
  const percentile = repoIndex / Math.max(1, sortedRepos.length - 1);

  // Top 33% get large cards
  if (percentile <= 0.33 || (hasSubstantialDescription && sortedRepos.length <= 3)) {
    return "large";
  }

  // Middle 33% get medium cards
  if (percentile <= 0.66) {
    return "medium";
  }

  // Bottom 33% get small cards, unless they have a substantial description
  return hasSubstantialDescription ? "medium" : "small";
}

/**
 * Map GitHub repositories to our ProjectData format
 */
export function mapRepositoriesToProjects(repositories: GitHubRepository[]): ProjectData[] {
  // First filter the repositories
  const filteredRepos = repositories.filter(repo => {
    // Filter out:
    // 1. GitHub Pages repositories
    // 2. Forks
    // 3. Private repositories (though these shouldn't be in the response anyway)
    // 4. Archived repositories
    return !repo.name.includes('.github.io') &&
           !repo.fork &&
           !repo.private &&
           !repo.archived;
  });

  // Limit to 6 projects and map to ProjectData
  return filteredRepos
    .slice(0, 6)
    .map(repo => ({
      title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
      description: repo.description || '',
      tags: [
        repo.language || 'Other',
        ...(repo.topics || []).slice(0, 4) // Limit to 4 topics
      ],
      url: repo.html_url,
      urlText: 'View on GitHub',
      icon: getIconForRepository(repo),
      size: getSizeForRepository(repo, filteredRepos)
    }));
}

// Function to fetch GitHub sponsors data
export async function fetchGitHubSponsors(username: string) {
  try {
    // GitHub GraphQL API endpoint
    const endpoint = 'https://api.github.com/graphql';

    // GraphQL query to fetch sponsors and goals
    const query = `
      query {
        user(login: "${username}") {
          sponsorshipsAsMaintainer(first: 10) {
            totalCount
            nodes {
              sponsorEntity {
                ... on User {
                  login
                  name
                  avatarUrl
                }
                ... on Organization {
                  login
                  name
                  avatarUrl
                }
              }
              tier {
                monthlyPriceInDollars
              }
            }
          }
          sponsorsListing {
            tiers(first: 10) {
              nodes {
                monthlyPriceInDollars
                name
                description
              }
            }
            goals(first: 5) {
              nodes {
                title
                description
                percentComplete
                targetValue
                kind
              }
            }
          }
        }
      }
    `;

    // Fetch data from GitHub API
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const result = await response.json();

    // Extract sponsors data
    const totalSponsors = result.data?.user?.sponsorshipsAsMaintainer?.totalCount || 0;
    const sponsors = result.data?.user?.sponsorshipsAsMaintainer?.nodes?.map((node: any) => ({
      login: node.sponsorEntity.login,
      name: node.sponsorEntity.name,
      avatarUrl: node.sponsorEntity.avatarUrl,
      tier: node.tier?.monthlyPriceInDollars || 0
    })) || [];

    // Extract tiers data
    const tiers = result.data?.user?.sponsorsListing?.tiers?.nodes?.map((tier: any) => ({
      price: tier.monthlyPriceInDollars,
      name: tier.name,
      description: tier.description
    })) || [];

    // Extract goals data
    const goals = result.data?.user?.sponsorsListing?.goals?.nodes || [];

    // Find the first goal related to number of sponsors (or use default if none found)
    let sponsorGoal = 10; // Default fallback
    let sponsorPercentage = 0;

    // Try to find a goal related to number of sponsors
    const sponsorCountGoal = goals.find((goal: any) =>
      goal.kind === 'TOTAL_SPONSORS_COUNT' ||
      (goal.title && goal.title.toLowerCase().includes('sponsor'))
    );

    if (sponsorCountGoal) {
      // Use the goal from GitHub if available
      sponsorGoal = sponsorCountGoal.targetValue || 10;
      sponsorPercentage = sponsorCountGoal.percentComplete ||
        Math.min(100, Math.round((totalSponsors / sponsorGoal) * 100));
    } else {
      // Calculate percentage based on our default goal
      sponsorPercentage = Math.min(100, Math.round((totalSponsors / sponsorGoal) * 100));
    }

    // Calculate monthly income
    const monthlyIncome = sponsors.reduce((sum: number, sponsor: any) => sum + (sponsor.tier || 0), 0);

    // Log the goals data for debugging
    console.log('GitHub Sponsor Goals:', goals);

    return {
      totalSponsors,
      sponsors,
      tiers,
      monthlyIncome,
      sponsorGoal,
      sponsorPercentage
    };
  } catch (error) {
    console.error('Error fetching GitHub sponsors:', error);
    // Return empty data on error
    return {
      totalSponsors: 0,
      sponsors: [],
      tiers: [],
      monthlyIncome: 0,
      sponsorGoal: 10,
      sponsorPercentage: 0
    };
  }
}
