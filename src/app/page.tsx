import { ModeToggle } from "@/components/global/mode-toggle";
import { NavBar } from "@/components/global/nav-bar";
import { UserButton } from "@clerk/nextjs";

import React from "react";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex justify-between items-center p-2 px-5 border-b">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Nymera
        </div>
        <NavBar />
        <div className="flex items-center gap-2">
          <UserButton />
          <ModeToggle />
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="min-h-screen w-[90vw]  py-5 px-6">{children}</div>
      </div>
    </main>
  );
}
