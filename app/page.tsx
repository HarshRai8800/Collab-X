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