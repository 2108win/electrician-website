"use client";

import { Button } from "@/components/ui/button";
import { callToAction } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

type Props = {
  phoneNumber?: string; // số điện thoại mặc định
  buttonText?: string; // text trên nút
  className?: string; // custom class
  iconClassName?: string; // custom icon class
};

export function CallButton({
  phoneNumber = callToAction.telephone,
  buttonText = "Hemen Ara",
  className,
  iconClassName,
}: Props) {
  const telHref = `tel:${phoneNumber.replace(/\s+/g, "")}`;

  return (
    <a href={telHref}>
      <Button
        variant="default"
        size="xl"
        className={cn(
          "hover:bg-background hover:text-primary hover:border-primary border-1 border-transparent",
          className,
        )}
      >
        <Phone className={cn("mr-2", iconClassName)} size={18} />
        {buttonText}
      </Button>
    </a>
  );
}
