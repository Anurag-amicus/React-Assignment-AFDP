import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import heroImage from "../../assets/herosection.png";

function Hero() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmed = searchQuery.trim();
        if (trimmed) {
            navigate(`/products?search=${encodeURIComponent(trimmed)}`);
        } else {
            navigate("/products");
        }
    };

    return (
        <section
            className="relative w-full min-h-125 py-17.5 px-[7%] flex items-center justify-start text-left bg-cover bg-no-repeat bg-center max-[900px]:min-h-115 max-[900px]:py-15 max-[900px]:px-[6%] max-[768px]:min-h-125 max-[768px]:py-13.75 max-[768px]:px-6 max-[768px]:items-start max-[768px]:bg-position-[65%_center] max-[480px]:min-h-117.5 max-[480px]:py-11.25 max-[480px]:px-4.5 max-[480px]:bg-position-[68%_center]"
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(255, 248, 238, 0.92) 0%, rgba(255, 248, 238, 0.65) 55%, rgba(255, 248, 238, 0.15) 100%), url(${heroImage})`,
            }}
        >
            <div className="w-full max-w-155 flex flex-col items-start max-[768px]:max-w-140 max-[768px]:pt-6.25 max-[480px]:pt-3.75">
                <p className="m-0 mb-2 text-orange font-['Industry_Test',sans-serif] text-[14px] font-extrabold tracking-[1.8px] uppercase max-[480px]:text-[11px] max-[480px]:tracking-[1.4px] max-[480px]:mb-3">
                    ONLINE EXPRESS
                </p>

                <h1 className="m-0 text-black font-['Industry_Test',sans-serif] text-[54px] font-extrabold leading-[1.02] tracking-[0.4px] max-[900px]:text-[46px] max-[768px]:text-[40px] max-[480px]:text-[32px] max-[480px]:leading-[1.05]">
                    FIND THE RIGHT PRODUCTS
                </h1>

                <p className="max-w-125 mt-5.5 mb-6.5 text-[#3f3f3f] font-[Consolas,sans-serif] text-[16px] leading-[1.6] max-[900px]:max-w-112.5 max-[900px]:text-[15px] max-[768px]:mt-4.5 max-[768px]:mb-5.5 max-[480px]:max-w-82.5 max-[480px]:mt-4 max-[480px]:mb-5 max-[480px]:text-[14px] max-[480px]:leading-normal">
                    Discover quality products designed to fit your everyday needs.
                </p>

                {/* Hero Search Bar */}
                <form
                    onSubmit={handleSearchSubmit}
                    className="w-full max-w-130 mb-5 flex h-12 items-stretch overflow-hidden rounded-sm border border-[#d7d7d7] bg-white transition-[border-color,box-shadow] duration-200 focus-within:border-orange focus-within:ring-2 focus-within:ring-orange/20 max-[768px]:h-10.5 max-[480px]:max-w-full max-[480px]:h-10"
                >
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        aria-label="Search products"
                        className="min-w-0 flex-1 border-0 bg-transparent px-4 font-[Consolas,sans-serif] text-[14px] text-charcoal outline-none placeholder:text-[#999999] max-[768px]:text-[13px] max-[480px]:px-3 max-[480px]:text-[12px]"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            aria-label="Clear search input"
                            className="flex shrink-0 items-center justify-center border-0 bg-transparent px-1 text-[18px] text-muted cursor-pointer leading-none hover:text-charcoal"
                        >
                            ×
                        </button>
                    )}
                    <button
                        type="submit"
                        aria-label="Search"
                        className="flex h-full w-12 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
                    >
                        <span className="font-[Arial,sans-serif] text-[28px] font-normal leading-none text-orange transform-[scaleX(-1)] max-[768px]:text-[25px] max-[480px]:text-[23px]">
                            ⌕
                        </span>
                    </button>
                </form>

                {/* Primary CTA Button */}
                <Button
                    variant="primary"
                    onClick={() => navigate("/products")}
                    className="w-45! h-13! rounded! font-['Industry_Test',sans-serif]! text-[16px]! font-bold! tracking-[0.5px]! uppercase! flex items-center justify-center max-[480px]:w-37.5! max-[480px]:h-11.5! max-[480px]:text-[14px]!"
                >
                    Shop Now
                </Button>
            </div>
        </section>
    );
}

export default Hero;