"use client";

import Image from "next/image";

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Image
        src="/favicon.ico"
        alt="Favicon"
        width={64}
        height={64}
        className="rounded-full"
      />
      <p className="mt-4 text-2xl text-white">People Think I'm a Robot 🤖</p>
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mt-8"></div>
      <p className="mt-4 text-lg text-muted-foreground">Loading...</p>
    </div>
  );
}
