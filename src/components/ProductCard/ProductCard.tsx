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
            className="
                product-card
                min-h-120!
                overflow-hidden!
                rounded-sm!
                p-0!
                transition-all!
                duration-200!
                hover:border-border!
                hover:shadow-[0_6px_18px_rgba(24,24,24,0.09)]!
                max-md:min-h-127.5!
                max-[30rem]:min-h-125!
            "
        >
            {/* Product Image */}
            <div
                className="
                    relative
                    flex
                    h-55
                    w-full
                    shrink-0
                    items-center
                    justify-center
                    bg-white
                    p-5
                    max-md:h-52.5
                    max-[30rem]:h-57.5
                "
            >
                <img
                    src={imageUrl}
                    alt={name}
                    className="
                        block
                        h-full
                        w-full
                        object-contain
                        object-center
                        transition-transform
                        duration-300
                        hover:scale-105
                    "
                />

                {discountedPrice && (
                    <span
                        className="
                            absolute
                            left-3
                            top-3
                            rounded-sm
                            bg-orange
                            px-2
                            py-1.25
                            font-[Consolas]
                            text-[0.625rem]
                            font-bold
                            leading-none
                            tracking-[0.03125rem]
                            text-white
                        "
                    >
                        SALE
                    </span>
                )}

                {isNew && (
                    <span
                        className="
                            absolute
                            right-3
                            top-3
                            rounded-sm
                            bg-charcoal
                            px-2
                            py-1.25
                            font-[Consolas]
                            text-[0.625rem]
                            font-bold
                            leading-none
                            tracking-[0.03125rem]
                            text-white
                        "
                    >
                        NEW
                    </span>
                )}
            </div>

            {/* Product Content */}
            <div
                className="
                    flex
                    flex-1
                    flex-col
                    items-center
                    px-5
                    pb-5.5
                    pt-4.5
                    text-center
                "
            >
                {/* Product Name */}
                <div className="w-full">
                    <h2
                        className="
                            mb-1.75
                            w-full
                            overflow-hidden
                            font-['Industry_Test']
                            text-base
                            font-bold
                            uppercase
                            leading-[1.35]
                            tracking-[0.025rem]
                            text-orange
                        "
                    >
                        {name}
                    </h2>
                </div>

                {/* Product Details */}
                <div className="mt-auto flex w-full flex-col items-center">
                    {/* Category */}
                    <span
                        className="
                            mb-3.25
                            block
                            font-[Arial]
                            text-[0.6875rem]
                            font-semibold
                            uppercase
                            leading-[1.3]
                            tracking-[0.0375rem]
                            text-muted
                        "
                    >
                        {category}
                    </span>

                    {/* Rating */}
                    <div
                        className="
                            mb-3.75
                            flex
                            items-center
                            justify-center
                            gap-1.5
                        "
                    >
                        <span
                            className="
                                font-[Arial]
                                text-lg
                                font-bold
                                leading-none
                                tracking-[-0.125rem]
                                text-orange
                            "
                        >
                            {"★".repeat(fullStars)}

                            <span className="text-border">
                                {"★".repeat(emptyStars)}
                            </span>
                        </span>

                        <span
                            className="
                                ml-0.5
                                font-[Arial]
                                text-[0.6875rem]
                                font-medium
                                leading-none
                                text-muted
                            "
                        >
                            {rating.toFixed(1)} (1)
                        </span>
                    </div>

                    {/* Unit Price */}
                    <div
                        className="
                            mb-4
                            flex
                            items-baseline
                            justify-center
                            gap-1
                            font-['Industry_Test']
                            leading-[1.2]
                        "
                    >
                        {discountedPrice ? (
                            <>
                                <span className="text-[1.0625rem] font-bold text-black">
                                    ₹
                                    {discountedPrice.toLocaleString("en-IN")}
                                </span>

                                <span className="text-[0.8125rem] font-medium text-muted line-through">
                                    ₹{price.toLocaleString("en-IN")}
                                </span>

                                <span
                                    className="
                                        whitespace-nowrap
                                        font-[Consolas]
                                        text-[0.625rem]
                                        font-semibold
                                        text-muted
                                    "
                                >
                                    ({discountPercentage}% off)
                                </span>
                            </>
                        ) : (
                            <span className="text-[1.0625rem] font-bold text-black">
                                ₹{price.toLocaleString("en-IN")}
                            </span>
                        )}
                    </div>

                    {/* Quantity */}
                    <QuantitySelector
                        quantity={quantity}
                        onChange={setQuantity}
                        className="mb-2.5"
                    />

                    {/* Total Price */}
                    <p
                        className="
                            mb-4
                            font-['Industry_Test']
                            text-base
                            font-bold
                            leading-[1.2]
                            text-black
                        "
                    >
                        Total: ₹{totalPrice.toLocaleString("en-IN")}
                    </p>
                </div>

                {/* Add To Cart */}
                <Button
                    onClick={handleClick}
                    className="
                        mt-3!
                        h-13!
                        w-42!
                        shrink-0!
                        rounded-sm!
                        px-4!
                        py-3!
                        font-['Industry_Test']!
                        text-base!
                        font-bold!
                        leading-none!
                        tracking-[0.03125rem]!
                        uppercase!
                        whitespace-nowrap!
                        active:translate-y-px!
                        max-[30rem]:w-45!
                    "
                >
                    ADD TO CART
                </Button>
            </div>
        </Card>
    );
}

export default ProductCard;