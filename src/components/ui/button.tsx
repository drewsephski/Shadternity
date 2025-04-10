import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:scale-105 hover:shadow-lg hover:shadow-destructive/30 active:scale-95",
                outline:
                    "border-2 border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-accent hover:scale-105 hover:shadow-md active:scale-95",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20 active:scale-95",
                ghost:
                    "hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95",
                link:
                    "text-primary underline-offset-4 hover:underline hover:text-primary/80 transition-colors hover:translate-x-1",
                gradient:
                    "bg-gradient-to-r from-primary to-purple-600 text-white shadow-md hover:shadow-lg hover:shadow-primary/40 hover:scale-105 hover:from-primary/90 hover:to-purple-500 active:scale-95",
                glow:
                    "bg-primary text-primary-foreground shadow-md hover:shadow-[0_0_15px_rgba(var(--primary-rgb)/0.5)] hover:scale-105 active:scale-95 transition-shadow",
                soft:
                    "bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 active:scale-95 transition-colors",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                xl: "h-12 rounded-md px-10 text-base",
                icon: "h-9 w-9",
                pill: "h-9 px-6 rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    loading?: boolean
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant,
        size,
        loading = false,
        icon = null,
        iconPosition = "left",
        children,
        disabled,
        onClick,
        ...props
    }, ref) => {
        const [isRippling, setIsRippling] = React.useState(false);
        const [coords, setCoords] = React.useState({ x: -1, y: -1 });
        const buttonRef = React.useRef<HTMLButtonElement>(null);

        // Combine refs
        const combinedRef = (node: HTMLButtonElement) => {
            buttonRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
        };

        // Handle ripple effect
        React.useEffect(() => {
            if (coords.x !== -1 && coords.y !== -1) {
                setIsRippling(true);
                const timer = setTimeout(() => setIsRippling(false), 600);
                return () => clearTimeout(timer);
            }
        }, [coords]);

        React.useEffect(() => {
            if (!isRippling) setCoords({ x: -1, y: -1 });
        }, [isRippling]);

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (disabled || loading) return;

            // Calculate ripple position
            const rect = buttonRef.current?.getBoundingClientRect();
            if (rect) {
                setCoords({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }

            if (onClick) onClick(e);
        };

        return (
            <button
                className={cn(
                    buttonVariants({ variant, size, className }),
                    loading && "relative cursor-wait"
                )}
                ref={combinedRef}
                disabled={disabled || loading}
                onClick={handleClick}
                {...props}
            >
                {isRippling && (
                    <span
                        className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
                        style={{
                            left: coords.x,
                            top: coords.y,
                            transform: "translate(-50%, -50%) scale(0)",
                        }}
                    />
                )}

                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-inherit z-10">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    </div>
                )}

                <span className={cn("flex items-center gap-2", loading && "invisible")}>
                    {icon && iconPosition === "left" && (
                        <span className="icon-left">{icon}</span>
                    )}
                    {children}
                    {icon && iconPosition === "right" && (
                        <span className="icon-right">{icon}</span>
                    )}
                </span>
            </button>
        )
    }
)
Button.displayName = "Button"

// Create specialized button variants as separate components for easier use
const PrimaryButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
    (props, ref) => <Button variant="default" ref={ref} {...props} />
)
PrimaryButton.displayName = "PrimaryButton"

const SecondaryButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
    (props, ref) => <Button variant="secondary" ref={ref} {...props} />
)
SecondaryButton.displayName = "SecondaryButton"

const OutlineButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
    (props, ref) => <Button variant="outline" ref={ref} {...props} />
)
OutlineButton.displayName = "OutlineButton"

const DestructiveButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
    (props, ref) => <Button variant="destructive" ref={ref} {...props} />
)
DestructiveButton.displayName = "DestructiveButton"

const GhostButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
    (props, ref) => <Button variant="ghost" ref={ref} {...props} />
)
GhostButton.displayName = "GhostButton"

const LinkButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
    (props, ref) => <Button variant="link" ref={ref} {...props} />
)
LinkButton.displayName = "LinkButton"

const GradientButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
    (props, ref) => <Button variant="gradient" ref={ref} {...props} />
)
GradientButton.displayName = "GradientButton"

const GlowButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
    (props, ref) => <Button variant="glow" ref={ref} {...props} />
)
GlowButton.displayName = "GlowButton"

const SoftButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
    (props, ref) => <Button variant="soft" ref={ref} {...props} />
)
SoftButton.displayName = "SoftButton"

export {
    Button,
    PrimaryButton,
    SecondaryButton,
    OutlineButton,
    DestructiveButton,
    GhostButton,
    LinkButton,
    GradientButton,
    GlowButton,
    SoftButton,
};
