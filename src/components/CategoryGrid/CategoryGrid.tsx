import Button from "../Button/Button";

const categories = [
    "Electronics",
    "Fashion",
    "Home",
    "Clothing"
];

function CategoryGrid() {
    return (
        <section className="w-full bg-white px-6 py-7.5 max-[520px]:px-4.5 max-[520px]:pt-10 max-[520px]:pb-13.75">
            <div className="mx-auto w-full max-w-287.5 max-[900px]:max-w-175 max-[520px]:max-w-full">
                <h2 className="m-0 mb-7 text-black font-['Industry_Test',sans-serif] text-[32px] font-extrabold leading-[1.1] tracking-[0.3px] text-center max-[768px]:text-[28px] max-[480px]:text-[24px]">
                    Shop by Category
                </h2>

                <div className="grid grid-cols-4 gap-x-6.5 gap-y-3 max-[900px]:grid-cols-2 max-[900px]:gap-x-4.5 max-[520px]:grid-cols-1 max-[520px]:gap-2.5">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant="outline"
                            className="w-full! h-13! px-4! py-2.5! border-2! border-[#353535]! rounded-[5px]! bg-white! text-orange! font-['Consolas',sans-serif]! text-[14px]! font-bold! tracking-[0.1px]! whitespace-nowrap hover:bg-orange! hover:border-orange! hover:text-white! max-[520px]:h-12! max-[520px]:text-[13px]!"
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryGrid;