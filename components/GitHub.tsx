"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Skeleton } from "@/components/ui/skeleton"
import { GitHubHeatmap } from "@/components/GitHubHeatmap"
import { fetchGitHubSponsors } from "@/lib/github"

type Sponsor = {
  login: string
  name: string
  avatarUrl: string
  tier: number
}

type Tier = {
  price: number
  name: string
  description: string
}

type SponsorsData = {
  totalSponsors: number
  sponsors: Sponsor[]
  tiers: Tier[]
  monthlyIncome: number
  sponsorGoal: number
  sponsorPercentage: number
}

type GitHubComponentProps = {
  username: string
  className?: string
}

export function GitHub({ username, className = "" }: GitHubComponentProps) {
  const [sponsorsData, setSponsorsData] = useState<SponsorsData | null>(null);
  const [, setLoading] = useState(true);
  const [previewPercentage, setPreviewPercentage] = useState<number | null>(null);

  // Toggle to show/hide the preview slider - set to false for production
  const showPreviewSlider = false;

  useEffect(() => {
    async function loadSponsors() {
      try {
        const data = await fetchGitHubSponsors(username);
        setSponsorsData(data);
      } catch (err) {
        console.error('Error loading sponsors:', err);
      } finally {
        setLoading(false);
      }
    }

    loadSponsors();
  }, [username]);

  // For preview purposes
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Round to nearest 10
    const value = parseInt(e.target.value, 10);
    setPreviewPercentage(Math.round(value / 10) * 10);
  };

  // Use preview percentage if available, otherwise use actual data
  const displayPercentage = previewPercentage !== null && showPreviewSlider
    ? previewPercentage
    : (sponsorsData?.sponsorPercentage || 0);

  return (
    <div className={`mt-16 ${className}`}>
      <div className="rounded-xl dark:bg-[var(--color-background)] dark:border-[#30363d] bg-white border border-gray-200 shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* GitHub Heatmap */}
          <div className="p-8 md:border-r dark:border-[#30363d] border-gray-200 flex flex-col items-center justify-center h-full">
            <div className="w-full flex flex-col items-center h-full">
              <Typography as="h3" variant="h3" className="text-center font-bold mb-3">
                GitHub Activity
              </Typography>
              <div className="flex-grow w-full flex flex-col">
                <GitHubHeatmap username={username} />

                {/* Spacer div to push the button to the bottom */}
                <div className="flex-grow"></div>

                {/* View More on GitHub button - styled to match sponsor button */}
                <div className="w-full flex justify-center mt-6">
                  <Button asChild size="lg" className="w-full max-w-xs dark:bg-transparent dark:border dark:border-[#30363d] dark:hover:border-[#6e7681] bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all duration-300 group">
                    <Link href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      View My Projects
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsor Card */}
          <div className="dark:bg-gradient-to-br dark:from-[#161b22] dark:to-[#0d1117] bg-gray-50 p-8 flex flex-col items-center justify-center text-center h-full">
            {/* Preview Slider - for development */}
            {showPreviewSlider && (
              <div className="mb-4 px-4 w-full">
                <label htmlFor="percentage-slider" className="block text-sm text-white mb-2">
                  Preview Percentage: {displayPercentage}%
                </label>
                <input
                  id="percentage-slider"
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  value={displayPercentage}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}

            <div className="flex-grow w-full flex flex-col">
              <div className="mb-6 w-full">
                {/* Octocat Preview - moved from GitHubSponsors component */}
                <div className="w-48 h-48 mx-auto mb-4">
                  <SponsorOctocat percentage={displayPercentage} />
                </div>

                <Typography as="h3" variant="h3" className="dark:text-white text-gray-800 font-bold mb-3 text-center">
                  Sponsor My Work
                </Typography>
                <Typography as="p" variant="subtle" className="dark:text-[#8b949e] text-gray-600 mb-6 max-w-xs mx-auto text-center">
                  Support my open source contributions and help me create more useful tools and content.
                </Typography>

                {/* Sponsor Goal Progress - moved between description and button */}
                <div className="mb-1">
                  <Typography as="h4" variant="subtle" className="dark:text-white text-gray-800 text-sm mb-3 text-center">
                    {displayPercentage}% towards {sponsorsData?.sponsorGoal || 10} monthly sponsors goal
                  </Typography>
                  <div className="h-4 dark:bg-[#30363d] bg-gray-200 rounded-full w-full max-w-xs mx-auto overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#238636] to-[#2ea043] transition-all duration-500"
                      style={{ width: `${displayPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Current Sponsors Section */}
              <GitHubSponsorsAvatars username={username} />

              {/* Spacer div to push the button to the bottom */}
              <div className="flex-grow"></div>

              {/* Sponsor Button - moved to bottom */}
              <div className="w-full flex justify-center mt-6">
                <Button asChild size="lg" className="w-full max-w-xs dark:bg-[#238636] dark:hover:bg-[#2ea043] dark:text-white bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <Link href={`https://github.com/sponsors/${username}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110">
                      <path fillRule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25z" fill="currentColor" />
                    </svg>
                    Sponsor on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Emotional Octocat that changes based on sponsorship percentage
function SponsorOctocat({ percentage }: { percentage: number }) {
  // Determine mouth path based on percentage
  // 0-25%: Sad, 26-50%: Neutral, 51-75%: Happy, 76-100%: Very Happy
  let mouthPath = "";
  let mouthTransform = "";

  // Add tear for 0% percentage
  const showTear = percentage < 20;

  if (percentage < 30) {
    // Sad mouth (upside down curve)
    mouthPath = "M178.23 159.69c-.26-.738.128-1.545.861-1.805.737-.26 1.546.128 1.805.861 1.134 3.198 4.167 5.346 7.551 5.346s6.417-2.147 7.551-5.346c.26-.738 1.067-1.121 1.805-.861s1.121 1.067.862 1.805c-1.529 4.324-5.639 7.229-10.218 7.229s-8.68-2.89-10.21-7.22z";
    mouthTransform = "rotate(180, 188.5, 160)";
  } else if (percentage < 60) {
    // Neutral mouth (straight line)
    mouthPath = "M178.23 159.69h20.54";
  } else if (percentage < 80) {
    // Happy mouth (curve)
    mouthPath = "M178.23 159.69c-.26-.738.128-1.545.861-1.805.737-.26 1.546.128 1.805.861 1.134 3.198 4.167 5.346 7.551 5.346s6.417-2.147 7.551-5.346c.26-.738 1.067-1.121 1.805-.861s1.121 1.067.862 1.805c-1.529 4.324-5.639 7.229-10.218 7.229s-8.68-2.89-10.21-7.22z";
  } else {
    // Very Happy mouth (bigger curve)
    mouthPath = "M178.23 159.69c-.26-.738.128-1.545.861-1.805.737-.26 1.546.128 1.805.861 1.134 3.198 4.167 5.346 7.551 5.346s6.417-2.147 7.551-5.346c.26-.738 1.067-1.121 1.805-.861s1.121 1.067.862 1.805c-1.529 4.324-5.639 7.229-10.218 7.229s-8.68-2.89-10.21-7.22z";
  }

  // Calculate star opacity based on percentage
  // Stars start appearing at 70% and become fully visible at 100%
  const starOpacity = percentage <= 70 ? 0 : (percentage - 70) / 30;

  // Add stars with opacity based on percentage
  const stars = (
    <>
      {/* Randomly positioned stars of different sizes with dynamic opacity */}
      <g transform="translate(35, 220) scale(2.0) rotate(15)" style={{ opacity: starOpacity }}>
        <path style={{ fill: "#ED8A19" }} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
      </g>
      <g transform="translate(310, 90) scale(0.80) rotate(-10)" style={{ opacity: starOpacity }}>
        <path style={{ fill: "#ED8A19" }} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
      </g>
      <g transform="translate(20, 5) scale(1.30) rotate(5)" style={{ opacity: starOpacity }}>
        <path style={{ fill: "#ED8A19" }} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
      </g>
      <g transform="translate(200, 0) scale(0.80) rotate(-20)" style={{ opacity: starOpacity }}>
        <path style={{ fill: "#ED8A19" }} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
      </g>
    </>
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.2 -1 379 334" className="w-full h-full">
      {/* Larger white circle background */}
      {/* Need to set transparency to 0.5 */}
      <circle cx="189" cy="166" r="185" fill="white" fillOpacity="0.07" />

      {stars}

      {/* Octocat - centered and properly sized */}
      <g transform="translate(20, 35) scale(0.90)">
        <path id="cat" fill="#000000" d="m378.18 141.32l.28-1.389c-31.162-6.231-63.141-6.294-82.487-5.49 3.178-11.451 4.134-24.627 4.134-39.32 0-21.073-7.917-37.931-20.77-50.759 2.246-7.25 5.246-23.351-2.996-43.963 0 0-14.541-4.617-47.431 17.396-12.884-3.22-26.596-4.81-40.328-4.81-15.109 0-30.376 1.924-44.615 5.83-33.94-23.154-48.923-18.411-48.923-18.411-9.78 24.457-3.733 42.566-1.896 47.063-11.495 12.406-18.513 28.243-18.513 47.659 0 14.658 1.669 27.808 5.745 39.237-19.511-.71-50.323-.437-80.373 5.572l.276 1.389c30.231-6.046 61.237-6.256 80.629-5.522.898 2.366 1.899 4.661 3.021 6.879-19.177.618-51.922 3.062-83.303 11.915l.387 1.36c31.629-8.918 64.658-11.301 83.649-11.882 11.458 21.358 34.048 35.152 74.236 39.484-5.704 3.833-11.523 10.349-13.881 21.374-7.773 3.718-32.379 12.793-47.142-12.599 0 0-8.264-15.109-24.082-16.292 0 0-15.344-.235-1.059 9.562 0 0 10.267 4.838 17.351 23.019 0 0 9.241 31.01 53.835 21.061v32.032s-.943 11.33-11.33 15.105c0 0-6.137 4.249.475 6.606 0 0 28.792 2.361 28.792-21.238v-34.929s-1.142-13.852 5.663-18.667v57.371s-.47 13.688-7.551 18.881c0 0-4.723 8.494 5.663 6.137 0 0 19.824-2.832 20.769-25.961l.449-58.06h4.765l.453 58.06c.943 23.129 20.768 25.961 20.768 25.961 10.383 2.357 5.663-6.137 5.663-6.137-7.08-5.193-7.551-18.881-7.551-18.881v-56.876c6.801 5.296 5.663 18.171 5.663 18.171v34.929c0 23.6 28.793 21.238 28.793 21.238 6.606-2.357.474-6.606.474-6.606-10.386-3.775-11.33-15.105-11.33-15.105v-45.786c0-17.854-7.518-27.309-14.87-32.3 42.859-4.25 63.426-18.089 72.903-39.591 18.773.516 52.557 2.803 84.873 11.919l.384-1.36c-32.131-9.063-65.692-11.408-84.655-11.96.898-2.172 1.682-4.431 2.378-6.755 19.25-.8 51.38-.79 82.66 5.46z"/>
        <path id="face" fill="#F4CBB2" d="m258.19 94.132c9.231 8.363 14.631 18.462 14.631 29.343 0 50.804-37.872 52.181-84.585 52.181-46.721 0-84.589-7.035-84.589-52.181 0-10.809 5.324-20.845 14.441-29.174 15.208-13.881 40.946-6.531 70.147-6.531 29.07-.004 54.72-7.429 69.95 6.357z"/>
        <path id="eye-left" fill="#FFF" d="m160.1 126.06 c0 13.994-7.88 25.336-17.6 25.336-9.72 0-17.6-11.342-17.6-25.336 0-13.992 7.88-25.33 17.6-25.33 9.72.01 17.6 11.34 17.6 25.33z"/>
        <path id="eye-right" fill="#FFF" d="m254.43 126.06 c0 13.994-7.88 25.336-17.6 25.336-9.72 0-17.6-11.342-17.6-25.336 0-13.992 7.88-25.33 17.6-25.33 9.72.01 17.6 11.34 17.6 25.33z"/>
        <path id="pupil-left" fill="#AD5C51" d="m154.46 126.38 c0 9.328-5.26 16.887-11.734 16.887s-11.733-7.559-11.733-16.887c0-9.331 5.255-16.894 11.733-16.894 6.47 0 11.73 7.56 11.73 16.89z"/>
        <path id="pupil-right" fill="#AD5C51" d="m248.88 126.38 c0 9.328-5.26 16.887-11.734 16.887s-11.733-7.559-11.733-16.887c0-9.331 5.255-16.894 11.733-16.894 6.47 0 11.73 7.56 11.73 16.89z"/>
        <path id="nose" fill="#AD5C51" d="M 188.5 141.00 a 4.401 4.401 0 1 0 0.0001 0"/>
        <path id="mouth" d={mouthPath} transform={mouthTransform} strokeWidth="1" stroke="#AD5C51" fill="none" strokeLinecap="round" />

        {/* Tear drop - only shown when percentage is 0% */}
        {showTear && (
          <path id="tear" fill="#599de8" d="m69.369 186.12l-3.066 10.683s-.8 3.861 2.84 4.546c3.8-.074 3.486-3.627 3.223-4.781z" transform="translate(114, -202) scale(1.85)" />
        )}

        <path id="octo1" fill="#C3E4D8" d="m80.641 179.82 c0 1.174-1.376 2.122-3.07 2.122-1.693 0-3.07-.948-3.07-2.122 0-1.175 1.377-2.127 3.07-2.127 1.694 0 3.07.95 3.07 2.13z"/>
        <path id="octo2" fill="#C3E4D8" d="m89.041 184.54 c0 1.174-1.376 2.122-3.07 2.122-1.693 0-3.07-.948-3.07-2.122 0-1.175 1.377-2.127 3.07-2.127 1.694 0 3.07.95 3.07 2.13z"/>
        <path id="octo3" fill="#C3E4D8" d="m94.234 190.68 c0 1.174-1.376 2.122-3.07 2.122-1.693 0-3.07-.948-3.07-2.122 0-1.175 1.377-2.127 3.07-2.127 1.694 0 3.07.95 3.07 2.13z"/>
        <path id="octo4" fill="#C3E4D8" d="m98.954 197.76 c0 1.174-1.376 2.122-3.07 2.122-1.693 0-3.07-.948-3.07-2.122 0-1.175 1.377-2.127 3.07-2.127 1.694 0 3.07.95 3.07 2.13z"/>
        <path id="octo5" fill="#C3E4D8" d="m104.142 204.37 c0 1.174-1.376 2.122-3.07 2.122-1.693 0-3.07-.948-3.07-2.122 0-1.175 1.377-2.127 3.07-2.127 1.694 0 3.07.95 3.07 2.13z"/>
        <path id="octo6" fill="#C3E4D8" d="m111.232 210.03 c0 1.174-1.376 2.122-3.07 2.122-1.693 0-3.07-.948-3.07-2.122 0-1.175 1.377-2.127 3.07-2.127 1.694 0 3.07.95 3.07 2.13z"/>
        <path id="octo7" fill="#C3E4D8" d="m121.142 213.81 c0 1.174-1.376 2.122-3.07 2.122-1.693 0-3.07-.948-3.07-2.122 0-1.175 1.377-2.127 3.07-2.127 1.694 0 3.07.95 3.07 2.13z"/>
        <path id="octo8" fill="#C3E4D8" d="m131.012 213.81 c0 1.174-1.376 2.122-3.07 2.122-1.693 0-3.07-.948-3.07-2.122 0-1.175 1.377-2.127 3.07-2.127 1.694 0 3.07.95 3.07 2.13z"/>
        <path id="octo9" fill="#C3E4D8" d="m141.022 212.17 c0 1.174-1.376 2.122-3.07 2.122-1.693 0-3.07-.948-3.07-2.122 0-1.175 1.377-2.127 3.07-2.127 1.694 0 3.07.95 3.07 2.13z"/>
      </g>
    </svg>
  );
}

// Renamed component to better reflect its purpose - only showing avatars now
export function GitHubSponsorsAvatars({ username }: { username: string }) {
  const [sponsorsData, setSponsorsData] = useState<SponsorsData | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSponsors() {
      try {
        setLoading(true);
        const data = await fetchGitHubSponsors(username);
        setSponsorsData(data);
      } catch (err) {
        console.error('Error loading sponsors:', err);
        setError('Could not load sponsors data');
      } finally {
        setLoading(false);
      }
    }

    loadSponsors();
  }, [username]);

  if (isLoading) {
    return (
      <div className="w-full">
        <Typography as="h4" variant="subtle" className="dark:text-white text-gray-800 text-sm mb-3 text-center">
        Loading Sponsor Data...
        </Typography>
        <div className="flex justify-center gap-2 mt-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    );
  }

  if (error) {
    return null; // Don't show anything if there's an error
  }

  // Only show avatars section
  return (
    <div className="w-full">
      {/* Current Sponsors */}
      {sponsorsData && sponsorsData.totalSponsors > 0 && (
        <>
          <Typography as="h4" variant="subtle" className="dark:text-white text-gray-800 text-sm mb-3 text-center">
            {sponsorsData.totalSponsors} {sponsorsData.totalSponsors === 1 ? 'Sponsor' : 'Sponsors'}
          </Typography>

          <div className="flex justify-center flex-wrap gap-2 mt-2">
            {sponsorsData.sponsors.map((sponsor) => (
              <Link
                key={sponsor.login}
                href={`https://github.com/${sponsor.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                title={sponsor.name || sponsor.login}
              >
                <div className="h-8 w-8 rounded-full overflow-hidden border dark:border-[#30363d] border-gray-300">
                  <Image
                    src={sponsor.avatarUrl}
                    alt={sponsor.name || sponsor.login}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
