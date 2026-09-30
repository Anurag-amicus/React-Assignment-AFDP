import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import Button from "../Button/Button";

type QuantitySelectorProps = {
    quantity: number;
    onChange: (value: number) => void;
    className?: string;
};

function QuantitySelector({
    quantity,
    onChange,
    className = "",
}: QuantitySelectorProps) {
    const [inputValue, setInputValue] = useState(String(quantity));

    useEffect(() => {
        setInputValue(String(quantity));
    }, [quantity]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value === "") {
            setInputValue("");
            return;
        }

        if (!/^\d+$/.test(value)) {
            return;
        }

        setInputValue(value);

        const numericValue = Number(value);

        if (numericValue >= 1) {
            onChange(numericValue);
        }
    };

    const handleInputBlur = () => {
        if (inputValue === "" || Number(inputValue) < 1) {
            setInputValue("1");
            onChange(1);
        }
    };

    const handleDecrease = () => {
        onChange(Math.max(1, quantity - 1));
    };

    const handleIncrease = () => {
        onChange(quantity + 1);
    };

    return (
        <div
            className={`flex h-8 w-fit items-center overflow-hidden rounded-full border border-border bg-white ${className}`}
        >
            <Button
                variant="generic"
                className="m-0! h-8! w-8! min-w-8! rounded-l-full! rounded-r-none! p-0! font-[Consolas]! text-xl! font-bold! leading-none! text-black! hover:bg-orange! hover:text-white! disabled:cursor-not-allowed! disabled:opacity-40!"
                onClick={handleDecrease}
                disabled={quantity === 1}
            >
                −
            </Button>

            <input
                className="h-7.5 w-13 border-0 border-l border-r border-border bg-white p-0 text-center font-[Consolas] text-base font-bold leading-none text-black outline-none focus:bg-[#fafafa]"
                type="text"
                inputMode="numeric"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                aria-label="Product quantity"
            />

            <Button
                variant="generic"
                className="m-0! h-8! w-8! min-w-8! rounded-l-none! rounded-r-full! p-0! font-[Consolas]! text-xl! font-bold! leading-none! text-black! hover:bg-orange! hover:text-white!"
                onClick={handleIncrease}
            >
                +
            </Button>
        </div>
    );
}

export default QuantitySelector;