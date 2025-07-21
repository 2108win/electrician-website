import { cn } from "@/lib/utils";

function SectionHeader({
  className,
  title,
  titleDescription,
}: {
  className?: string;
  title: string;
  titleDescription: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col items-center gap-2 text-center text-xs font-bold md:text-base",
        className,
      )}
    >
      {/* Section Header */}
      <p className="text-primary font-semibold tracking-wide italic">{title}</p>
      <h3 className="max-w-xl text-2xl font-bold md:text-4xl">
        {titleDescription}
      </h3>
    </div>
  );
}

export default SectionHeader;
