import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, PropsWithChildren, } from "react";
import { cn } from "~/utils";


const buttonVariants = cva(
  "inline-flex items-center capitalize rounded-lg justify-center whitespace-nowrap text-sm font-medium ring-offset-[background] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary  text-white hover:bg-primary/70",
        outline:
          "border border-primary bg-transparent hover:bg-accent text-primary",
        secondary:
          "bg-secondary text-white hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:border hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Slot =({children}:PropsWithChildren)=>{
  return children
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {asChild?:boolean}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild=false, size, ...props }, ref) => {

    const Btn = asChild?Slot:"button"
    return (
      <Btn
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button,buttonVariants };
