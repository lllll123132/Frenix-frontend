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
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-[2.5rem] min-h-[480px]",
      // static premium styles
      "bg-white/[0.02] border border-white/5",
      "dark:[box-shadow:0_-20px_80px_-20px_#ffffff0a_inset]",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 z-0">{background}</div>
    <div className="p-8 z-10 flex flex-col justify-end h-full">
      <div className="pointer-events-none flex transform-gpu flex-col gap-2 transition-all duration-500">
        {Icon && (
          <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
             <Icon className={cn("h-7 w-7", iconClassName || "text-white/70")} />
          </div>
        )}
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
          {name}
        </h3>
        <p className="max-w-lg text-white/40 text-base font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
)

export { BentoCard, BentoGrid }
