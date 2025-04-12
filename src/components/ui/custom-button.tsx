
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'gradient';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    // Base classes
    const baseStyles = "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-95";
    
    // Variant classes
    const variantStyles = {
      default: "bg-portfolio-purple text-white shadow-md hover:shadow-lg hover:bg-portfolio-purple/90",
      outline: "border-2 border-portfolio-purple bg-transparent hover:bg-portfolio-purple/10 text-portfolio-purple",
      ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
      link: "bg-transparent underline-offset-4 hover:underline text-portfolio-purple p-0 h-auto",
      destructive: "bg-red-500 text-white shadow-md hover:shadow-lg hover:bg-red-600",
      gradient: "bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-orange text-white shadow-md hover:shadow-lg"
    };
    
    // Size classes
    const sizeStyles = {
      default: "h-10 py-2 px-5",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10"
    };
    
    const classes = cn(
      baseStyles,
      variantStyles[variant as keyof typeof variantStyles],
      sizeStyles[size as keyof typeof sizeStyles],
      className
    );

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
