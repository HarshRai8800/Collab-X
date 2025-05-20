import Link from "next/link"
import { Laptop } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-12 md:py-16 lg:py-20 px-10">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Laptop className="h-6 w-6" />
            <span className="text-xl font-bold">CollabX</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Connecting brands with micro-creators for authentic and effective marketing campaigns.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Platform</h3>
          <div className="grid gap-3 text-sm">
            <Link href="/brands" className="text-muted-foreground hover:text-foreground">
              For Brands
            </Link>
            <Link href="/creators" className="text-muted-foreground hover:text-foreground">
              For Creators
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Resources</h3>
          <div className="grid gap-3 text-sm">
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="/help" className="text-muted-foreground hover:text-foreground">
              Help Center
            </Link>
            <Link href="/case-studies" className="text-muted-foreground hover:text-foreground">
              Case Studies
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Legal</h3>
          <div className="grid gap-3 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CollabX. All rights reserved.
        </p>
      </div>
    </footer>
  )
}