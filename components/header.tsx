"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { callToAction, companyDetails, navigation } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CallButton } from "./CallButton";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="relative h-fit shadow-lg">
        {mobileMenuOpen && (
          <div
            className="absolute z-[-1] h-screen w-full bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}

        <div className="bg-background z-10 mx-auto max-w-7xl px-4 transition-all duration-500 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4">
            {/* Logo */}
            <Logo className="md:mr-auto lg:mr-0" />
            {/* Desktop Navigation */}
            <nav className="hidden gap-4 lg:flex xl:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary-foreground hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            {/* <DialogAppointment className="hidden md:flex" /> */}
            <CallButton className="hidden md:flex" />
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:text-primary"
              >
                {mobileMenuOpen ? (
                  <X size={24} className="!size-6" />
                ) : (
                  <Menu size={24} className="!size-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="bg-background absolute top-full z-10 mx-auto h-fit w-full max-w-7xl overflow-hidden px-4 pb-4 outline-hidden transition-all duration-300 ease-in-out lg:hidden">
            <nav className="flex transform flex-col gap-4 transition-transform duration-300 ease-in-out">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary font-medium text-gray-700 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-gray-200 pt-4">
                <p className="mb-2 text-sm text-gray-500">
                  {companyDetails.mainService}
                </p>
                <p className="text-primary mb-4 text-lg font-bold">
                  {callToAction.telephone}
                </p>
                <CallButton className="w-full" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
