import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlayButtonProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function PlayButton({ size = "sm", className }: PlayButtonProps) {
  const dims = size === "lg" ? "w-16 h-16" : "w-11 h-11";
  const iconDims = size === "lg" ? "w-6 h-6" : "w-4 h-4";

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border border-foreground/20 bg-background/40 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110",
        dims,
        className
      )}
    >
      <Play className={cn("translate-x-[1px] fill-foreground text-foreground", iconDims)} />
    </div>
  );
}
