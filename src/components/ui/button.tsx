import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "sm" | "default" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const classes = cn(
      "btn",
      variant && `btn-${variant}`,
      size && `btn-${size}`,
      className
    )
    return <button className={classes} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button }
