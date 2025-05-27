import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/navigation/main-nav";
import { SignedIn, SignedOut, SignIn, SignOutButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
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
  )
}

export default Navbar