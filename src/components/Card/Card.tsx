import type { CardProps } from "../../types/card";

function Card({
    variant = "elevated",
    children,
    className = "",
}: CardProps) {
    const variantClasses = {
        elevated:
            "bg-white border border-[#eeeeee] shadow-[0_3px_8px_rgba(0,0,0,0.18)]",

        bordered:
            "bg-white border-2 border-[#8a8a8a] shadow-none",

        flat:
            "bg-[#eeeeee] border border-[#eeeeee] shadow-none",
    };

    return (
        <article
           className={`flex h-full w-full min-h-55 flex-col justify-between rounded px-9 pt-6.25 pb-5.75 font-['Industry_Test'] ${variantClasses[variant]} ${className}`}
        >
            {children}
        </article>
    );
}

export default Card;