import type { SortFilterProps } from "../../types/filterproptypes";

function SortFilter({
    selectedSort,
    selectedDirection,
    onSortChange,
    onDirectionChange,
    onClearSort,
}: SortFilterProps) {
    const radioClassName =
        "!appearance-none !w-[14px] !h-[14px] !shrink-0 !m-0 !p-0 !block !bg-white !border !border-[#999999] !rounded-full !cursor-pointer !transition-[border-color,background-color,box-shadow] !duration-200 hover:!border-orange checked:!border-orange checked:!bg-orange checked:!shadow-[inset_0_0_0_3px_white]";

    return (
        <div className="flex flex-col gap-2.5">
            {/* =========================
                Name
                ========================= */}

            <div className="w-full">
                <label className="flex h-5 w-full items-center gap-2 text-[12px] leading-none font-normal text-[#252525] font-[Consolas,sans-serif] cursor-pointer hover:text-orange">
                    <input
                        type="radio"
                        name="sort"
                        checked={selectedSort === "name"}
                        onChange={() => onSortChange("name")}
                        className={radioClassName}
                    />

                    <span className="select-none">Name</span>

                    {selectedSort === "name" && (
                        <button
                            type="button"
                            onClick={onClearSort}
                            aria-label="Clear name sort"
                            className="ml-auto flex w-5 h-5 items-center justify-center border-0 bg-transparent p-0 font-[Arial,sans-serif] text-[18px] font-normal leading-none text-orange cursor-pointer transition-[color,transform] duration-200 hover:text-orange-dark hover:scale-110"
                        >
                            ×
                        </button>
                    )}
                </label>

                <div
                    className={`ml-5.5 pl-2.5 flex flex-col gap-2 overflow-hidden border-l-2 transition-[max-height,padding,transform,border-color] duration-300 ease-in-out ${
                        selectedSort === "name"
                            ? "max-h-25 py-1.75 border-orange translate-y-0"
                            : "max-h-0 py-0 border-transparent -translate-y-2"
                    }`}
                >
                    <label className="flex items-center gap-2 text-[12px] leading-[1.2] font-[Consolas,sans-serif] text-[#252525] cursor-pointer transition-colors duration-200 hover:text-orange">
                        <input
                            type="radio"
                            name="name-direction"
                            checked={selectedDirection === "asc"}
                            onChange={() => onDirectionChange("asc")}
                            className={radioClassName}
                        />

                        <span>A → Z</span>
                    </label>

                    <label className="flex items-center gap-2 text-[12px] leading-[1.2] font-[Consolas,sans-serif] text-[#252525] cursor-pointer transition-colors duration-200 hover:text-orange">
                        <input
                            type="radio"
                            name="name-direction"
                            checked={selectedDirection === "desc"}
                            onChange={() => onDirectionChange("desc")}
                            className={radioClassName}
                        />

                        <span>Z → A</span>
                    </label>
                </div>
            </div>

            {/* =========================
                Price
                ========================= */}

            <div className="w-full">
                <label className="flex h-5 w-full items-center gap-2 text-[12px] leading-none font-normal text-[#252525] font-[Consolas,sans-serif] cursor-pointer hover:text-orange">
                    <input
                        type="radio"
                        name="sort"
                        checked={selectedSort === "price"}
                        onChange={() => onSortChange("price")}
                        className={radioClassName}
                    />

                    <span className="select-none">Price</span>

                    {selectedSort === "price" && (
                        <button
                            type="button"
                            onClick={onClearSort}
                            aria-label="Clear price sort"
                            className="ml-auto flex w-5 h-5 items-center justify-center border-0 bg-transparent p-0 font-[Arial,sans-serif] text-[18px] font-normal leading-none text-orange cursor-pointer transition-[color,transform] duration-200 hover:text-orange-dark hover:scale-110"
                        >
                            ×
                        </button>
                    )}
                </label>

                <div
                    className={`ml-5.5 pl-2.5 flex flex-col gap-2 overflow-hidden border-l-2 transition-[max-height,padding,transform,border-color] duration-300 ease-in-out ${
                        selectedSort === "price"
                            ? "max-h-25 py-1.75 border-orange translate-y-0"
                            : "max-h-0 py-0 border-transparent -translate-y-2"
                    }`}
                >
                    <label className="flex items-center gap-2 text-[12px] leading-[1.2] font-[Consolas,sans-serif] text-[#252525] cursor-pointer transition-colors duration-200 hover:text-orange">
                        <input
                            type="radio"
                            name="price-direction"
                            checked={selectedDirection === "asc"}
                            onChange={() => onDirectionChange("asc")}
                            className={radioClassName}
                        />

                        <span>Low to High</span>
                    </label>

                    <label className="flex items-center gap-2 text-[12px] leading-[1.2] font-[Consolas,sans-serif] text-[#252525] cursor-pointer transition-colors duration-200 hover:text-orange">
                        <input
                            type="radio"
                            name="price-direction"
                            checked={selectedDirection === "desc"}
                            onChange={() => onDirectionChange("desc")}
                            className={radioClassName}
                        />

                        <span>High to Low</span>
                    </label>
                </div>
            </div>

            {/* =========================
                Ratings
                ========================= */}

            <div className="w-full">
                <label className="flex h-5 w-full items-center gap-2 text-[12px] leading-none font-normal text-[#252525] font-[Consolas,sans-serif] cursor-pointer hover:text-orange">
                    <input
                        type="radio"
                        name="sort"
                        checked={selectedSort === "rating"}
                        onChange={() => onSortChange("rating")}
                        className={radioClassName}
                    />

                    <span className="select-none">Ratings</span>

                    {selectedSort === "rating" && (
                        <button
                            type="button"
                            onClick={onClearSort}
                            aria-label="Clear rating sort"
                            className="ml-auto flex w-5 h-5 items-center justify-center border-0 bg-transparent p-0 font-[Arial,sans-serif] text-[18px] font-normal leading-none text-orange cursor-pointer transition-[color,transform] duration-200 hover:text-orange-dark hover:scale-110"
                        >
                            ×
                        </button>
                    )}
                </label>

                <div
                    className={`ml-5.5 pl-2.5 flex flex-col gap-2 overflow-hidden border-l-2 transition-[max-height,padding,transform,border-color] duration-300 ease-in-out ${
                        selectedSort === "rating"
                            ? "max-h-25 py-1.75 border-orange translate-y-0"
                            : "max-h-0 py-0 border-transparent -translate-y-2"
                    }`}
                >
                    <label className="flex items-center gap-2 text-[12px] leading-[1.2] font-[Consolas,sans-serif] text-[#252525] cursor-pointer transition-colors duration-200 hover:text-orange">
                        <input
                            type="radio"
                            name="rating-direction"
                            checked={selectedDirection === "asc"}
                            onChange={() => onDirectionChange("asc")}
                            className={radioClassName}
                        />

                        <span>Low to High</span>
                    </label>

                    <label className="flex items-center gap-2 text-[12px] leading-[1.2] font-[Consolas,sans-serif] text-[#252525] cursor-pointer transition-colors duration-200 hover:text-orange">
                        <input
                            type="radio"
                            name="rating-direction"
                            checked={selectedDirection === "desc"}
                            onChange={() => onDirectionChange("desc")}
                            className={radioClassName}
                        />

                        <span>High to Low</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default SortFilter;

