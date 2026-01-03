"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Sun className="size-4 fill-current stroke-current" strokeWidth={1} />
        <Switch checked={false} disabled />
        <Moon className="size-4 fill-current" strokeWidth={1} />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`size-4 fill-current stroke-current ${
          isDark ? "opacity-50" : ""
        }`}
        strokeWidth={1.5}
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
      />
      <Moon
        className={`size-4 fill-current ${!isDark ? "opacity-50" : ""}`}
        strokeWidth={0}
      />
    </div>
  );
}
