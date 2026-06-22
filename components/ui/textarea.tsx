import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Base Sizing and Layout
        "flex min-h-24 w-full min-w-0 rounded-lg bg-background px-3 py-2 transition-colors outline-none",
        
        // Border Styles (Matching your Custom Input precisely)
        "border border-[#d8d8d8]",
        
        // Typography Matching
        "text-body-regular md:text-sm",
        
        // Placeholder Styling
        "placeholder:text-muted-foreground",
        
        // Focus States (Matching Input)
        "focus-visible:ring-1 focus-visible:ring-ring",
        
        // Form States (Disabled/Invalid - Matching Input)
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        
        // Allowing external className overrides
        className
      )}
      {...props}
    />
  )
}

export { Textarea }