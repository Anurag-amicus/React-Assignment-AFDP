import { useState } from "react";
import { type Product } from "../../types/product";
import Card from "../Card/Card";
import Button from "../Button/Button";
import QuantitySelector from "./QuantitySelector";

function ProductCard({
    id,
    name,
    category,
    price,
    imageUrl,
    discountPercentage,
    rating,
    discountedPrice,
    isNew,
}: Product) {
    const [quantity, setQuantity] = useState(1);

    const unitPrice = discountedPrice ?? price;
    const totalPrice = unitPrice * quantity;

    const handleClick = () => {
        console.log(`Added product ${id}: ${name} x ${quantity} to cart.`);
    };

    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <Card
            variant="elevated"
            className="flex flex-col min-h-120 p-0! overflow-hidden! bg-white border border-[#eef0f2] rounded-0.5! shadow-[0_4px_6px_-1px_#0000001a] transition-all duration-200 ease hover:border-[#d1d5db] hover:shadow-[0_6px_18px_rgba(24,24,24,0.09)] max-[768px]:min-h-127.5 max-[480px]:min-h-125"
        >
            <div className="relative w-full h-55 p-5 flex items-center justify-center bg-white max-[768px]:h-52.5 max-[480px]:h-57.5">
                <img
                    src={imageUrl}
                    alt={name}
                    className="block w-full h-full object-contain object-center transition-transform duration-250 ease"
                />

                {discountedPrice && (
                    <span className="absolute top-3 left-3 py-1.25 px-2 font-[Consolas,sans-serif] text-[10px] font-bold leading-none tracking-[0.5px] rounded-0.5 bg-orange text-white">
                        SALE
                    </span>
                )}

                {isNew && (
                    <span className="absolute top-3 right-3 py-1.25 px-2 font-[Consolas,sans-serif] text-[10px] font-bold leading-none tracking-[0.5px] rounded-0.5 bg-[#252525] text-white">
                        NEW
                    </span>
                )}
            </div>

            <div className="flex-1 pt-4.5 px-5 pb-5.5 flex flex-col items-center text-center">
                <div className="w-full">
                    <h2 className="w-full m-0 mb-1.75 text-orange font-['Industry_Test',sans-serif] text-[16px] font-bold leading-[1.35] tracking-[0.4px] uppercase line-clamp-2 overflow-hidden max-[480px]:text-[16px]">
                        {name}
                    </h2>
                </div>

                <div className="w-full mt-auto flex flex-col items-center">
                    <span className="block mb-3.25 text-[#666666] font-[Arial,sans-serif] text-[11px] font-semibold leading-[1.3] tracking-[0.6px] uppercase">
                        {category}
                    </span>

                    <div className="flex items-center justify-center gap-1.5 mb-3.75">
                        <span className="text-orange text-[18px] font-bold leading-none tracking-[-2px]">
                            {"★".repeat(fullStars)}

                            <span className="text-[#e5e7eb]">
                                {"★".repeat(emptyStars)}
                            </span>
                        </span>

                        <span className="ml-0.5 text-muted font-[Arial,sans-serif] text-[11px] font-medium leading-none">
                            {rating.toFixed(1)} (1)
                        </span>
                    </div>

                    <div className="m-0 mb-4 flex items-baseline justify-center gap-1 font-['Industry_Test',Arial,sans-serif] leading-[1.2]">
                        {discountedPrice ? (
                            <>
                                <span className="text-black text-[17px] font-bold leading-[1.2]">
                                    ₹{discountedPrice.toLocaleString("en-IN")}
                                </span>

                                <span className="text-muted text-[13px] font-medium line-through leading-[1.2]">
                                    ₹{price.toLocaleString("en-IN")}
                                </span>

                                <span className="text-muted font-[Consolas,sans-serif] text-[10px] font-semibold whitespace-nowrap leading-[1.2]">
                                    ({discountPercentage}% off)
                                </span>
                            </>
                        ) : (
                            <span className="text-black text-[17px] font-bold leading-[1.2]">
                                ₹{price.toLocaleString("en-IN")}
                            </span>
                        )}
                    </div>

                    <QuantitySelector
                        quantity={quantity}
                        onChange={setQuantity}
                        className="mb-2.5"
                    />

                    <p className="m-0 mb-4 text-black font-['Industry_Test',Consolas,sans-serif] text-[16px] font-bold leading-[1.2]">
                        Total: ₹{totalPrice.toLocaleString("en-IN")}
                    </p>
                </div>

                <Button
                    onClick={handleClick}
                    className="w-42! h-13! mt-3! py-3! px-4! rounded-0.5! font-['Industry_Test',sans-serif]! text-[16px]! font-bold! leading-none! tracking-[0.5px]! uppercase! whitespace-nowrap! shrink-0! hover:bg-[#cc4000]! active:translate-y-px! max-[480px]:w-45!"
                >
                    ADD TO CART
                </Button>
            </div>
        </Card>
    );
}

export default ProductCard;