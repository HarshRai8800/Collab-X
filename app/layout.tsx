import './globals.css';
import { Suspense } from "react"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@/components/analytics';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Navbar from '@/components/navbar/navabr';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CollabX - Connect Brands with Micro-Creators',
  description: 'A platform connecting brands with micro-creators for authentic marketing campaigns',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
            <Toaster />
            <Suspense fallback={null}>
            <Analytics />
             </Suspense>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider> 
  );
}