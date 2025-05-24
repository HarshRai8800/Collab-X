"use client"
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NotFoundInner() {
  const params = useSearchParams(); 
  const q = params.get("q");

  return <div>404 - Page not found. Query: {q}</div>;
}

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          404
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          The page you are looking for does not exist
        </p>
        <div className="flex gap-4">
          <a 
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}
