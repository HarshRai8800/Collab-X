"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Laptop } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex pl-10">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Laptop className="h-6 w-6" />
        <span className="font-bold inline-block">CollabX</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/about" ? "text-foreground" : "text-foreground/60"
          )}
        >
          About
        </Link>
        <Link
          href="/dashboard/admin"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith("/brands") ? "text-foreground" : "text-foreground/60"
          )}
        >
          For Brands
        </Link>
        <Link
          href="/dashboard/creator/earnings"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith("/creators") ? "text-foreground" : "text-foreground/60"
          )}
        >
          For Creators
        </Link>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </nav>
    </div>
  )
}