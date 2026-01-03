"use client";

import Image from "next/image";
import GithubIcon from "@/components/ui/github-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="flex flex-col items-start relative">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={400}
          height={112}
          priority
          className="dark:invert"
        />
        <p className="text-left mt-8 text-stone-500 dark:text-stone-400 italic">
          co-founder @{" "}
          <a
            href="https://www.humanworks.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            humanworks
          </a>
        </p>
        <p className="text-left text-stone-500 dark:text-stone-400 italic">
          data engineer @ kpi sight
        </p>
        <div className="mt-8 flex items-center gap-4 w-full justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/cooopmac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={24} color="currentColor" />
            </a>
            <a
              href="https://x.com/growingMRR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterXIcon size={24} color="currentColor" />
            </a>
            <a
              href="https://www.linkedin.com/in/cooper-macgregor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={24} color="currentColor" />
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
