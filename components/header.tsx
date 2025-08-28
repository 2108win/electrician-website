"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/constants";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

        <div className="z-10 mx-auto max-w-7xl px-4 transition-all duration-500 sm:px-6 lg:px-8">
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
            
            {/* Desktop Call Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:18007654321"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} className="inline mr-2" />
                GỌI NGAY
              </a>
            </div>
            
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
                <p className="mb-2 text-sm text-gray-500">Khẩn Cấp 24/7</p>
                <p className="text-primary mb-4 text-lg font-bold">
                  1 (800) 765-4321
                </p>
                <a
                  href="tel:18007654321"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-all duration-300"
                >
                  <Phone size={16} className="inline mr-2" />
                  GỌI NGAY
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
