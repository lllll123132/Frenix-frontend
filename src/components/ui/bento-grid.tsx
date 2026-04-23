import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon?: React.ElementType
  iconClassName?: string
  description: string
  href?: string
  cta?: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  iconClassName,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-[2.5rem] min-h-[320px] md:min-h-[360px]",
      // premium light mode styles
      "bg-white border border-slate-200",
      "shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 z-0">{background}</div>
    <div className="p-8 z-10 flex flex-col justify-end h-full">
      <div className="pointer-events-none flex transform-gpu flex-col gap-2 transition-all duration-500">
        {Icon && (
          <div className="size-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
             <Icon className={cn("h-7 w-7 text-slate-900", iconClassName)} />
          </div>
        )}
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
          {name}
        </h3>
        <p className="max-w-lg text-slate-600 text-base font-semibold leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
)

export { BentoCard, BentoGrid }
