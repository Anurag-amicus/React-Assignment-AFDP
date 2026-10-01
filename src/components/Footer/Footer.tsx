import cardlogo from "../../assets/cardlogo.svg";
import helpcenterlogo from "../../assets/helpcenterlogo.svg";
import trucklogo from "../../assets/trucklogo.svg";

function Footer() {
    return (
        <footer className="w-full font-['Consolas',sans-serif]">

            {/* =========================
                Trust Bar
                ========================= */}

            <div className="w-full bg-[#2c2e35] py-8.5 px-6 max-[600px]:py-7.5 max-[600px]:px-4.5">
                <div className="mx-auto w-full max-w-287.5 grid grid-cols-3 gap-12.5 max-[900px]:gap-6.25 max-[600px]:grid-cols-1 max-[600px]:gap-6">
                    <div className="flex items-center gap-3.5">
                        <div className="flex w-12 h-12 shrink-0 items-center justify-center text-[#ffffff] text-[27px] leading-none">
                            <img
                                src={cardlogo}
                                alt=""
                                className="w-9.5 h-9.5 object-contain filter-[brightness(0)_invert(1)]"
                            />
                        </div>

                        <div>
                            <h3 className="m-0 mb-1 text-[#ffffff] font-['Industry_Test_Medium',sans-serif] text-[20px] font-medium leading-none tracking-[0.4px] max-[600px]:text-[15px]">
                                SECURE PAYMENTS
                            </h3>
                            <p className="m-0 text-[#d4d4d4] text-[11px] leading-[1.3]">
                                Safe and secure checkout
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                        <div className="flex w-12 h-12 shrink-0 items-center justify-center text-[#ffffff] text-[27px] leading-none">
                            <img
                                src={helpcenterlogo}
                                alt=""
                                className="w-9.5 h-9.5 object-contain filter-[brightness(0)_invert(1)]"
                            />
                        </div>

                        <div>
                            <h3 className="m-0 mb-1 text-[#ffffff] font-['Industry_Test_Medium',sans-serif] text-[20px] font-medium leading-none tracking-[0.4px] max-[600px]:text-[15px]">
                                HELP CENTER
                            </h3>
                            <p className="m-0 text-[#d4d4d4] text-[11px] leading-[1.3]">
                                We're here when you need us
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                        <div className="flex w-12 h-12 shrink-0 items-center justify-center text-[#ffffff] text-[27px] leading-none">
                            <img
                                src={trucklogo}
                                alt=""
                                className="w-9.5 h-9.5 object-contain filter-[brightness(0)_invert(1)]"
                            />
                        </div>

                        <div>
                            <h3 className="m-0 mb-1 text-[#ffffff] font-['Industry_Test_Medium',sans-serif] text-[20px] font-medium leading-none tracking-[0.4px] max-[600px]:text-[15px]">
                                RELIABLE SHIPPING
                            </h3>
                            <p className="m-0 text-[#d4d4d4] text-[11px] leading-[1.3]">
                                Fast and dependable delivery
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* =========================
                Main Footer
                ========================= */}

            <div className="w-full bg-[#f8f8f8] pt-9.5 px-6 pb-10.5 max-[600px]:pt-8.75 max-[600px]:pb-8.75 max-[600px]:px-4.5">
                <div className="mx-auto w-full max-w-287.5 grid grid-cols-[1fr_1fr_1fr_1.8fr] gap-13.75 max-[900px]:grid-cols-2 max-[900px]:gap-y-8.75 max-[600px]:grid-cols-2 max-[600px]:gap-y-8 max-[600px]:gap-x-5 max-[420px]:grid-cols-1">
                    <div className="flex flex-col items-start">
                        <h3 className="m-0 mb-5 text-[#111111] font-['Industry_Test',sans-serif] text-[13px] font-extrabold leading-none tracking-[0.4px]">
                            QUICK LINKS
                        </h3>

                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Home</a>
                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Products</a>
                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Categories</a>
                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">About Us</a>
                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Contact</a>
                    </div>

                    <div className="flex flex-col items-start">
                        <h3 className="m-0 mb-5 text-[#111111] font-['Industry_Test',sans-serif] text-[13px] font-extrabold leading-none tracking-[0.4px]">
                            SHOP
                        </h3>

                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Electronics</a>
                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Fashion</a>
                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Home</a>
                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Clothing</a>
                    </div>

                    <div className="flex flex-col items-start">
                        <h3 className="m-0 mb-5 text-[#111111] font-['Industry_Test',sans-serif] text-[13px] font-extrabold leading-none tracking-[0.4px]">
                            SUPPORT
                        </h3>

                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Help Center</a>
                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Shipping Information</a>
                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Returns & Refunds</a>
                        <a href="/" className="mb-2.75 text-[#ff5405] text-[12px] font-semibold leading-[1.2] no-underline transition-[color] duration-150 hover:text-[#cc4000]">Contact Us</a>
                    </div>

                    <div className="max-w-77.5 max-[900px]:max-w-full max-[420px]:max-w-full">
                        <p className="m-0 mb-3.5 text-[#111111] text-[12px] font-semibold leading-[1.3]">
                            Copyright © 2026 Online Express
                        </p>

                        <p className="m-0 text-[#555555] text-[11px] leading-[1.45]">
                            Online Express brings quality products
                            together in one simple shopping experience.
                            Discover everyday essentials across
                            electronics, fashion, home and more.
                        </p>
                    </div>
                </div>
            </div>


            {/* =========================
                Bottom Footer
                ========================= */}

            <div className="w-full bg-[#ffffff] py-0 px-6 border-t border-[#e1e1e1] max-[600px]:px-4.5">
                <div className="mx-auto w-full max-w-287.5 min-h-17.5 py-4 grid grid-cols-3 items-center max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:justify-items-center max-[600px]:py-4.5">
                    <div className="flex items-center gap-3.25 max-[900px]:justify-center">
                        <a href="/" aria-label="Facebook" className="text-[#333333] font-[Arial,sans-serif] text-[20px] font-bold leading-none no-underline transition-[color] duration-150 hover:text-[#ff5405]">
                            f
                        </a>

                        <a href="/" aria-label="Instagram" className="text-[#333333] font-[Arial,sans-serif] text-[20px] font-bold leading-none no-underline transition-[color] duration-150 hover:text-[#ff5405]">
                            ◎
                        </a>

                        <a href="/" aria-label="LinkedIn" className="text-[#333333] font-[Arial,sans-serif] text-[20px] font-bold leading-none no-underline transition-[color] duration-150 hover:text-[#ff5405]">
                            in
                        </a>

                        <a href="/" aria-label="X" className="text-[#333333] font-[Arial,sans-serif] text-[20px] font-bold leading-none no-underline transition-[color] duration-150 hover:text-[#ff5405]">
                            X
                        </a>

                        <a href="/" aria-label="YouTube" className="text-[#333333] font-[Arial,sans-serif] text-[20px] font-bold leading-none no-underline transition-[color] duration-150 hover:text-[#ff5405]">
                            ▶
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-0.5 whitespace-nowrap text-[#111111] text-[14px] max-[420px]:flex-wrap">
                        <a href="/" className="text-[#ff5405] text-[14px] font-semibold no-underline hover:text-[#cc4000]">Terms of Use</a>
                        <span className="text-[#111111] select-none">|</span>
                        <a href="/" className="text-[#ff5405] text-[14px] font-semibold no-underline hover:text-[#cc4000]">Contact Us</a>
                        <span className="text-[#111111] select-none">|</span>
                        <a href="/" className="text-[#ff5405] text-[14px] font-semibold no-underline hover:text-[#cc4000]">Privacy Policy</a>
                    </div>

                    <a href="/" className="justify-self-end max-[900px]:justify-self-center text-[#111111] font-['Industry_Test',sans-serif] text-[17px] font-extrabold tracking-[0.4px] no-underline">
                        ONLINE EXPRESS
                    </a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;