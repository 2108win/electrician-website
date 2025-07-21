import { companyDetails } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import Link from "next/link";

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-lg p-2">
        <div className="animate-flash via-background/50 absolute h-1/2 w-[300%] rotate-45 bg-gradient-to-b from-transparent to-transparent"></div>
        <Zap size={24} />
      </div>
      <h2 className="text-2xl font-bold">{companyDetails.name}</h2>
    </Link>
  );
}

export default Logo;
