
// GitHub API response types
export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  language: string | null
  created_at: string
  updated_at: string
  homepage: string | null
  fork: boolean
  private: boolean
  archived: boolean
}

// Mapped project type for our application
export interface ProjectData {
  title: string
  description: string
  tags: string[]
  url: string
  urlIcon?: string
  urlText: string
  icon: string
  size: "small" | "medium" | "large"
}
