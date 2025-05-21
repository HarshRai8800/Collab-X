import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { HeroSection } from "@/components/home/hero-section";
import { FeatureSection } from "@/components/home/feature-section";
import { StarCreators } from "@/components/home/star-creators";
import { CTASection } from "@/components/home/cta-section";
import { MainNav } from "@/components/navigation/main-nav";
import { SiteFooter } from "@/components/navigation/site-footer";
import BrandShowcase from "@/components/home/brand-showcase";
import { SignedIn, SignedOut, SignIn, SignOutButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav />
          <div className="flex flex-1 items-center justify-end space-x-4 pr-10">
            <nav className="flex items-center space-x-4">
              <SignedOut>
                <Link
                href="/sign-in"
                className={buttonVariants({ size: "sm" })}
              >
                Register
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({ size: "sm"})}
                >
                  SignUp
                </Link>
              </SignedOut>
             <SignedIn >
              <UserButton />
              <SignOutButton/>
             </SignedIn>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <BrandShowcase />
        <StarCreators />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}