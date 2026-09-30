import type { ButtonProps } from "../../types/button";

function Button({
    variant = "primary",
    children,
    disabled = false,
    onClick,
    className = "",
    type = "button",
    form = "",
}: ButtonProps) {
    const variantClasses = {
        primary:
            "bg-orange text-white border-2 border-orange hover:bg-orange-dark hover:border-orange-dark",

        secondary:
            "bg-white text-black border-2 border-black hover:bg-black hover:border-black hover:text-white",

        outline:
            "bg-white text-orange border-2 border-orange hover:bg-orange hover:border-orange hover:text-white",

        danger:
            "bg-[#9b2020] text-white border-2 border-[#9b2020] hover:bg-[#610000] hover:border-[#610000]",

        generic:
            "bg-transparent border-none text-inherit hover:bg-transparent hover:border-transparent",
    };

    const handleClick = () => {
        console.log(`${children} button was clicked`);
        onClick?.();
    };

    return (
        <button
            type={type}
            form={form}
            className={`w-61.25 h-16 rounded text-[18px] font-[550] tracking-[1px] cursor-pointer font-sans transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${variantClasses[variant]} ${className}`}
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;