import type { ReactNode } from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";

type CtaCardProps = {
    title: string;
    description: string;
    buttonText: string;
    icon?: ReactNode;
    variant?: "elevated" | "bordered" | "flat";
};

function CtaCard({
    title,
    description,
    buttonText,
    icon,
    variant
}: CtaCardProps) {
    return (
        <Card
            variant={variant}
            className="min-w-0! p-0! rounded-0.5! flex! max-[520px]:h-55!"
        >

            <div className="flex w-full h-full flex-col items-start gap-7 px-6 py-7">

                {icon && (
                    <div>
                        {icon}
                    </div>
                )}

                <h2 className="m-0 text-[#111111] font-sans text-[30px] font-bold leading-[1.1] tracking-[0.2px]">
                    {title}
                </h2>

                <p className="mx-0 mt-4 mb-5 text-[#666666] font-[Consolas,sans-serif] text-[15px] leading-normal">
                    {description}
                </p>

                <Button
                    variant="primary"
                    className="w-33.75! h-10.5! mt-auto! mx-auto! text-[16px]! tracking-[0.5px]! shrink-0!"
                >
                    {buttonText}
                </Button>

            </div>

        </Card>
    );
}

export default CtaCard;