import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'

export const OutlineTooltipContent = ({
    className,
    sideOffset = 4,
    children,
    ...props
  }: React.ComponentProps<typeof TooltipPrimitive.Content>) => {
    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          data-slot="tooltip-content"
          sideOffset={sideOffset}
          className={cn(
            'bg-background text-foreground border animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs',
            className,
          )}
          {...props}
        >
          {children}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    )
  }