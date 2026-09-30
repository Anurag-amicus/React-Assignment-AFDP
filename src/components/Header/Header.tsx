import { Link } from "react-router-dom";
import type { HeaderProps } from "../../types/filterproptypes";
import Button from "../Button/Button";
function Header({ searchTerm, onSearchChange }: HeaderProps) {
    return (
        <header className="w-full border-b border-[#e5e5e5] bg-white">
            <div className="flex min-h-18 w-full items-center bg-white px-7 max-[1100px]:px-5 max-[768px]:px-4 max-[520px]:px-3">
                <button
                    type="button"
                    aria-label="Open navigation menu"
                    className="mr-4 flex h-8 w-8 shrink-0 cursor-pointer flex-col justify-center gap-1.5 border-0 bg-transparent p-1.5 max-[768px]:mr-2.5 max-[520px]:mr-1.5"
                >
                    <span className="block h-1 w-7.5 rounded bg-orange max-[768px]:h-0.75 max-[768px]:w-6.5" />
                    <span className="block h-1 w-7.5 rounded bg-orange max-[768px]:h-0.75 max-[768px]:w-6.5" />
                    <span className="block h-1 w-7.5 rounded bg-orange max-[768px]:h-0.75 max-[768px]:w-6.5" />
                </button>
                <Link
                    to="/home"
                    className="flex w-45 shrink-0 flex-col justify-center border-l border-[#bdbdbd] pl-4.5 leading-none no-underline max-[1100px]:w-40 max-[768px]:w-auto max-[768px]:pl-3 max-[520px]:pl-2"
                >
                    <span className="ml-0.5 font-['Industry_Test_Medium',sans-serif] text-[13px] font-medium tracking-[3px] text-[#555555] max-[768px]:text-[9px] max-[768px]:tracking-[2px] max-[520px]:text-[8px] max-[520px]:tracking-[1.5px]">
                        ONLINE
                    </span>
                    <span className="font-['Industry_Test',sans-serif] text-[29px] font-extrabold tracking-[-0.5px] text-[#444444] max-[1100px]:text-[25px] max-[768px]:text-[21px] max-[520px]:text-[18px]">
                        EXPRESS
                    </span>
                </Link>
                <div className="ml-auto mr-9 flex h-10.5 min-w-0 max-w-162.5 flex-[0_1_650px] items-stretch overflow-hidden rounded-sm border border-[#d7d7d7] bg-white transition-[border-color,box-shadow] duration-200 focus-within:border-orange focus-within:ring-2 focus-within:ring-orange/20 max-[1100px]:ml-6 max-[1100px]:mr-6 max-[1100px]:rounded-xs max-[768px]:ml-4 max-[768px]:mr-4 max-[768px]:h-9.5 max-[768px]:rounded-xs max-[520px]:ml-2.5 max-[520px]:mr-2.5 max-[520px]:h-9">
                    <input
                        type="text"
                        placeholder="Search products..."
                        aria-label="Search products"
                        value={searchTerm}
                        onChange={(event) =>
                            onSearchChange?.(event.target.value)
                        }
                        className="min-w-0 flex-1 border-0 bg-transparent px-3.5 font-[Consolas,sans-serif] text-[13px] text-[#252525] outline-none placeholder:text-[#999999] max-[768px]:text-[12px] max-[520px]:px-2.5 max-[520px]:text-[11px]"
                    />
                    <button
                        type="button"
                        aria-label="Search"
                        className="flex h-full w-12 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
                    >
                        <span className="font-[Arial,sans-serif] text-[28px] font-normal leading-none text-orange transform-[scaleX(-1)] max-[768px]:text-[25px] max-[520px]:text-[23px]">
                            ⌕
                        </span>
                    </button>
                </div>
                <nav
                    className="ml-auto flex shrink-0 items-center gap-6 max-[1100px]:gap-4 max-[768px]:gap-3"
                    aria-label="Main navigation"
                >
                    <Link
                        to="/products"
                        className="flex items-center whitespace-nowrap font-[Consolas,sans-serif] text-[14px] font-semibold leading-none text-[#777777] no-underline transition-colors duration-200 hover:text-orange"
                    >
                        <Button
                            variant="primary"
                            className="h-9.5! w-26.25! shrink-0! text-[12px]! font-semibold! tracking-[0.3px]! max-[768px]:hidden"
                        >
                            Shop Now
                        </Button>
                    </Link>
                    <Link
                        to="/home"
                        className="group flex items-center gap-1.75 whitespace-nowrap font-[Consolas,sans-serif] text-[14px] font-semibold leading-none text-[#777777] no-underline transition-colors duration-200 hover:text-orange max-[1100px]:hidden"
                    >
                        <span>Sign In</span>
                        <span className="font-[Arial,sans-serif] text-[21px] font-bold leading-none text-[#777777] transition-colors duration-200 group-hover:text-orange">
                            ↪
                        </span>
                    </Link>
                    <button
                        type="button"
                        aria-label="Shopping cart"
                        className="mr-1.5 flex cursor-pointer items-center gap-1.75 border-0 bg-transparent p-0 text-[#777777] transition-colors duration-200 hover:text-orange"
                    >
                        <span className="text-[21px] leading-none">🛒</span>
                        <span className="font-[Consolas,sans-serif] text-[13px] font-semibold leading-none">
                            0
                        </span>
                    </button>
                </nav>
            </div>
        </header>
    );
}
export default Header;
