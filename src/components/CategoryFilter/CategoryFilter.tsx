import type { CategoryFilterProps } from "../../types/filterproptypes";

function CategoryFilter({
    categories,
    selectedCategories,
    onChange,
}: CategoryFilterProps) {
    const handleCategoryChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            onChange(
                selectedCategories.filter(
                    (selectedCategory) => selectedCategory !== category
                )
            );
            return;
        }

        onChange([...selectedCategories, category]);
    };

    const handleAllChange = () => {
        onChange([]);
    };

    return (
        <div className="flex flex-col gap-2.5">
            <label className="group flex items-center gap-2 text-[#252525] font-[Consolas,sans-serif] text-[12px] leading-[1.2] cursor-pointer">
                <input
                    type="checkbox"
                    checked={selectedCategories.length === 0}
                    onChange={handleAllChange}
                    className="w-3.5 h-3.5 m-0 accent-orange cursor-pointer"
                />
                <span className="select-none leading-[1.2] group-hover:text-orange">All</span>
            </label>

            {categories.map((category) => (
                <label
                    className="group flex items-center gap-2 text-[#252525] font-[Consolas,sans-serif] text-[12px] leading-[1.2] cursor-pointer"
                    key={category}
                >
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="w-3.5 h-3.5 m-0 accent-orange cursor-pointer"
                    />
                    <span className="select-none leading-[1.2] group-hover:text-orange">
                        {category.toLocaleUpperCase()}
                    </span>
                </label>
            ))}
        </div>
    );
}

export default CategoryFilter;