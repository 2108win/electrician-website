"use client";

import { Phone } from "lucide-react";

export function StickyCallButton() {
  return (
    <a
      href="tel:18007654321"
      className="fixed bottom-4 right-4 z-50 md:hidden bg-red-600 hover:bg-red-700 text-white font-bold p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce"
      aria-label="Gọi ngay thợ điện"
    >
      <Phone size={24} />
    </a>
  );
}