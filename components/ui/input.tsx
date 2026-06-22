import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        
        "h-12 w-full min-w-0 rounded-lg border border-[#d8d8d8] bg-background px-3 py-1 transition-colors outline-none",
        
        
        "text-body-regular md:text-sm", 
        
        // Placeholder
        "placeholder:text-muted-foreground",
        
        // Focus States
        "focus-visible:ring-1 focus-visible:ring-ring",
        
        // Form States (Disabled/Invalid)
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        
        // Custom overrides allow karne ke liye
        className
      )}
      {...props}
    />
  )
}

export { Input }