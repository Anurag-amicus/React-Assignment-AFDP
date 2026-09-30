import Button from "../Button/Button";

function Pagination() {
    return (
        <div className="flex items-center justify-center gap-5 font-[Consolas,sans-serif] mb-10">
            <button
                type="button"
                className="border-0 bg-transparent p-0 text-[16px] font-bold text-orange cursor-pointer"
            >
                &lt; Previous
            </button>

            <div className="flex items-center gap-6">
                <Button
                    variant="primary"
                    className="flex! h-8.5! w-8.5! items-center! justify-center! rounded-[3px]! p-0! text-[16px]! font-bold!"
                >
                    1
                </Button>

                <button
                    type="button"
                    className="border-0 bg-transparent p-0 text-[16px] font-bold text-[#252525] cursor-pointer"
                >
                    2
                </button>

                <button
                    type="button"
                    className="border-0 bg-transparent p-0 text-[16px] font-bold text-[#252525] cursor-pointer"
                >
                    3
                </button>

                <button
                    type="button"
                    className="border-0 bg-transparent p-0 text-[16px] font-bold text-[#252525] cursor-pointer"
                >
                    4
                </button>

                <button
                    type="button"
                    className="border-0 bg-transparent p-0 text-[16px] font-bold text-[#252525] cursor-pointer"
                >
                    5
                </button>
            </div>

            <button
                type="button"
                className="border-0 bg-transparent p-0 text-[16px] font-bold text-orange cursor-pointer"
            >
                Next &gt;
            </button>
        </div>
    );
}

export default Pagination;