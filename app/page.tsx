"use client";

import Image from "next/image";
import GithubIcon from "@/components/ui/github-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Page() {
  const logoRef = useRef<HTMLDivElement>(null);
  const role1Ref = useRef<HTMLParagraphElement>(null);
  const role2Ref = useRef<HTMLParagraphElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const themeToggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      logoRef.current &&
      role1Ref.current &&
      role2Ref.current &&
      socialIconsRef.current &&
      themeToggleRef.current
    ) {
      const tl = gsap.timeline();

      // Set initial states
      gsap.set(logoRef.current, {
        opacity: 0,
        x: -400,
      });

      gsap.set([role1Ref.current, role2Ref.current], {
        opacity: 0,
        y: 20,
        rotationX: -90,
      });

      const socialIcons = Array.from(socialIconsRef.current.children);
      gsap.set([...socialIcons, themeToggleRef.current], {
        opacity: 0,
        y: 10,
      });

      // Slide in logo from left with sudden hard stop
      tl.to(logoRef.current, {
        opacity: 1,
        x: 0, // Overshoot past the final position
        duration: 0.8,
        ease: "expo.out",
      })
        .to(
          [role1Ref.current, role2Ref.current],
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            ease: "back.out(1.2)",
            stagger: 0.1,
          },
          "-=0.2"
        )
        // Bottom row items come in one at a time
        .to(
          [...socialIcons, themeToggleRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.1"
        );
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="flex flex-col items-start relative">
        <div ref={logoRef}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={400}
            height={112}
            priority
            className="dark:invert"
          />
        </div>
        <p
          ref={role1Ref}
          className="text-left mt-8 text-stone-500 dark:text-stone-400 italic"
        >
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
        <p
          ref={role2Ref}
          className="text-left text-stone-500 dark:text-stone-400 italic"
        >
          data engineer @ kpi sight
        </p>
        <div className="mt-8 flex items-center gap-4 w-full justify-between">
          <div ref={socialIconsRef} className="flex items-center gap-4">
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
          <div ref={themeToggleRef}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
