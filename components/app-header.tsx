"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { navigation } from "@/routes";
import { AppSidebar } from "./app-sidebar";

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-30 w-full bg-transparent">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-medium text-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm/6 font-semibold text-gray-50">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      
      <AppSidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </header>
  );
}
