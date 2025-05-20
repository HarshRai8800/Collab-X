"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would normally add your analytics tracking code
    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`
    console.log(`Page view: ${url}`)
  }, [pathname, searchParams])

  return null
}