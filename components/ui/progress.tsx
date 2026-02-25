"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressBar extends React.ComponentPropsWithoutRef<
    typeof ProgressPrimitive.Root
> {
    indicatorColor?: string;
    backgroundColor?: string;
}

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    ProgressBar
>(
    (
        { className, value, backgroundColor, indicatorColor, style, ...props },
        ref
    ) => {
        const backgroundStyle = {
            ...style,
            backgroundColor,
        };
        return (
            <ProgressPrimitive.Root
                ref={ref}
                className={cn(
                    "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
                    className
                )}
                style={backgroundStyle}
                {...props}
            >
                <ProgressPrimitive.Indicator
                    className="bg-primary h-full w-full flex-1 transition-all"
                    style={{
                        transform: `translateX(-${100 - (value || 0)}%)`,
                        backgroundColor: indicatorColor,
                    }}
                />
            </ProgressPrimitive.Root>
        );
    }
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
