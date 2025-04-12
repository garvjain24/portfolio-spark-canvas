
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
  className?: string;
};

export function Tooltip({
  children,
  content,
  side = 'top',
  align = 'center',
  delayDuration = 300,
  className
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayDuration);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Position classes based on side and alignment
  const positionClasses = {
    top: {
      base: 'bottom-full mb-2',
      start: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      end: 'right-0'
    },
    right: {
      base: 'left-full ml-2',
      start: 'top-0',
      center: 'top-1/2 -translate-y-1/2',
      end: 'bottom-0'
    },
    bottom: {
      base: 'top-full mt-2',
      start: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      end: 'right-0'
    },
    left: {
      base: 'right-full mr-2',
      start: 'top-0',
      center: 'top-1/2 -translate-y-1/2',
      end: 'bottom-0'
    }
  };

  return (
    <div className="relative inline-block" ref={triggerRef}>
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-block"
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className={cn(
            'absolute z-50 px-3 py-2 text-xs rounded-md text-white bg-gray-800 shadow-md whitespace-nowrap',
            positionClasses[side].base,
            positionClasses[side][align],
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function TooltipTrigger({ children, ...props }: React.HTMLProps<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

export function TooltipContent({ children, className, ...props }: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("z-50 px-3 py-2 text-xs bg-gray-800 text-white rounded shadow-md", className)} {...props}>
      {children}
    </div>
  );
}
