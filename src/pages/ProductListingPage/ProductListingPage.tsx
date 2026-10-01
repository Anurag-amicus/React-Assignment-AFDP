import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import Button from "../../components/Button/Button";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductSkeleton from "../../components/ProductSkeleton/ProductSkeleton";
import SortFilter from "../../components/SortFilter/SortFilter";
import type { SortOption, SortDirection } from "../../types/filterproptypes";
import { type Product } from "../../types/product";
import { ApiService } from "../../services/apiService";
import { transformProducts } from "../../utils/dataTransformation";
import Pagination from "../../components/Pagination/Pagination";
import Footer from "../../components/Footer/Footer";

const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "wearables",
];

const apiService = new ApiService();

function ProductListingPage() {
    const [searchParams] = useSearchParams();
    const queryParam = searchParams.get("search") || "";
    const categoryParam = searchParams.get("category");

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        categoryParam ? [categoryParam] : []
    );
    const [selectedSort, setSelectedSort] = useState<SortOption | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);

    const [searchInput, setSearchInput] = useState<string>(queryParam);
    const [searchTerm, setSearchTerm] = useState<string>(
        queryParam.trim().toLowerCase()
    );

    const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

    const handleSortChange = (sort: SortOption) => {
        setSelectedSort(sort);
        setSortDirection(null);
    };

    const handleClearSort = () => {
        setSelectedSort(null);
        setSortDirection(null);
    };

    const fetchProducts = async (signal: AbortSignal) => {
        setLoading(true);
        setError(null);

        const result = await apiService.getProducts({ signal });

        if (signal.aborted) {
            return;
        }

        if (!result.success) {
            setError(result.error);
            setLoading(false);
            return;
        }

        const transformedProducts = transformProducts(result.data.products);
        setProducts(transformedProducts);
        setLoading(false);
    };

    const handleRefresh = () => {
        const controller = new AbortController();
        fetchProducts(controller.signal);
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchProducts(controller.signal);

        return () => {
            controller.abort();
        };
    }, []);

    useEffect(() => {
        const query = searchParams.get("search");
        if (query !== null && query !== searchInput) {
            setSearchInput(query);
            setSearchTerm(query.trim().toLowerCase());
        }

        const category = searchParams.get("category");
        if (category !== null && !selectedCategories.includes(category)) {
            setSelectedCategories(category ? [category] : []);
        }
    }, [searchParams]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(searchInput.trim().toLowerCase());
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [searchInput]);

    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            searchTerm === "" ||
            product.name.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(product.category);

        return matchesSearch && matchesCategory;
    });

    const sortedProducts = [...filteredProducts];

    if (selectedSort && sortDirection) {
        sortedProducts.sort((a, b) => {
            if (selectedSort === "name") {
                const comparison = a.name.localeCompare(b.name);
                return sortDirection === "asc" ? comparison : -comparison;
            }

            if (selectedSort === "price") {
                const comparison = a.price - b.price;
                return sortDirection === "asc" ? comparison : -comparison;
            }

            const comparison = a.rating - b.rating;
            return sortDirection === "asc" ? comparison : -comparison;
        });
    }

    const sortLabel =
        selectedSort === "name"
            ? "Name"
            : selectedSort === "price"
                ? "Price"
                : selectedSort === "rating"
                    ? "Ratings"
                    : null;

    const directionLabel =
        sortDirection === "asc"
            ? selectedSort === "name"
                ? "A → Z"
                : "Low to High"
            : sortDirection === "desc"
                ? selectedSort === "name"
                    ? "Z → A"
                    : "High to Low"
                : null;

    return (
        <div className="w-full min-h-screen bg-white">
            <Header searchTerm={searchInput} onSearchChange={setSearchInput} />

            <main className="w-full mx-auto pt-9.5 px-6 pb-15 max-[520px]:pt-7 max-[520px]:px-4 max-[520px]:pb-10">
                <div className="mb-4 flex items-center justify-between max-[520px]:items-start max-[520px]:gap-4">
                    <h1 className="m-0 text-charcoal font-['Industry_Test',Arial,sans-serif] text-[36px] font-bold leading-[1.15] max-[520px]:text-[22px]">
                        Product Listing
                    </h1>

                    <Button
                        onClick={handleRefresh}
                        className="w-30! h-10.5! py-2.5! px-4! rounded-0.5! font-['Industry_Test',sans-serif]! text-[14px]! font-bold! leading-none! tracking-[0.4px]! uppercase! inline-flex items-center justify-center shrink-0 max-[520px]:w-25! max-[520px]:h-9.5! max-[520px]:py-2! max-[520px]:px-3! max-[520px]:text-[12px]!"
                    >
                        Refresh
                    </Button>
                </div>

                <div className="grid grid-cols-[200px_minmax(0,1fr)] gap-6.5 items-start max-[800px]:grid-cols-1 max-[800px]:gap-4.5">
                    <aside className="w-full mt-9 p-3 border border-border bg-white sticky top-4 self-start max-[800px]:static max-[800px]:mt-0 max-[800px]:p-0">
                        <button
                            type="button"
                            className={`w-full m-0 p-0 pb-1.75 flex items-center justify-between border-t-0 border-x-0 border-b-2 border-orange bg-transparent text-charcoal font-['Arial',sans-serif]! text-[15px]! font-bold! leading-tight text-left cursor-pointer outline-none select-none max-[800px]:min-h-11 max-[800px]:px-3 max-[800px]:py-0 max-[800px]:border-b-0 ${filtersOpen
                                    ? "max-[800px]:border-b-2! max-[800px]:border-orange!"
                                    : ""
                                }`}
                            onClick={() => setFiltersOpen((isOpen) => !isOpen)}
                            aria-expanded={filtersOpen}
                        >
                            <span>FILTERS</span>

                            <span className="hidden text-orange font-['Arial',sans-serif]! text-[20px]! font-normal leading-none max-[800px]:w-5 max-[800px]:h-5 max-[800px]:inline-flex! max-[800px]:items-center max-[800px]:justify-center">
                                {filtersOpen ? "−" : "+"}
                            </span>
                        </button>

                        <div
                            className={`block max-[800px]:px-3 max-[800px]:pb-3 max-[800px]:pt-0 ${filtersOpen
                                    ? "max-[800px]:block!"
                                    : "max-[800px]:hidden!"
                                }`}
                        >
                            <div className="pt-2.5">
                                <h3 className="m-0 mb-2.5 text-charcoal font-[Arial,sans-serif] text-[13px] font-bold leading-normal">
                                    Category
                                </h3>

                                <CategoryFilter
                                    categories={categories}
                                    selectedCategories={selectedCategories}
                                    onChange={setSelectedCategories}
                                />
                            </div>

                            <div className="pt-2.5">
                                <h3 className="m-0 mb-2.5 text-charcoal font-[Arial,sans-serif] text-[13px] font-bold leading-normal">
                                    Sort by
                                </h3>

                                <SortFilter
                                    selectedSort={selectedSort}
                                    selectedDirection={sortDirection}
                                    onSortChange={handleSortChange}
                                    onDirectionChange={setSortDirection}
                                    onClearSort={handleClearSort}
                                />
                            </div>
                        </div>
                    </aside>

                    <section className="min-w-0">
                        {!loading && !error && (
                            <div className="w-full min-h-6 mb-3 flex items-center justify-between max-[520px]:items-start max-[520px]:gap-2.5">
                                <p className="m-0 font-[Consolas,sans-serif] text-[14px] leading-none">
                                    Showing {sortedProducts.length} results
                                    {searchTerm && ` for "${searchTerm}"`}
                                </p>

                                {sortLabel && directionLabel && (
                                    <p className="m-0 text-muted font-[Consolas,sans-serif] text-[12px] leading-[1.2] text-right">
                                        Sorted by:{" "}
                                        <strong className="text-charcoal font-bold">
                                            {sortLabel}
                                        </strong>{" "}
                                        {directionLabel}
                                    </p>
                                )}
                            </div>
                        )}

                        {loading && (
                            <div className="w-full grid grid-cols-4 gap-4 max-[1100px]:grid-cols-3 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <ProductSkeleton key={index} />
                                ))}
                            </div>
                        )}

                        {!loading && error && (
                            <div className="min-h-75 flex flex-col items-center justify-center gap-4.5 border border-border text-muted font-[Consolas,sans-serif] text-[16px] text-center">
                                <p className="m-0 leading-normal">{error}</p>

                                <Button
                                    onClick={handleRefresh}
                                    className="w-30! h-10.5! py-2.5! px-4! rounded-0.5! font-['Industry_Test',sans-serif]! text-[14px]! font-bold! leading-none! tracking-[0.4px]! uppercase! inline-flex items-center justify-center shrink-0 max-[520px]:w-25! max-[520px]:h-9.5! max-[520px]:py-2! max-[520px]:px-3! max-[520px]:text-[12px]!"
                                >
                                    Retry
                                </Button>
                            </div>
                        )}

                        {!loading &&
                            !error &&
                            (sortedProducts.length === 0 ? (
                                <div className="min-h-80 flex flex-col items-center justify-center gap-2 border border-border text-center">
                                    <p className="m-0 text-charcoal font-[Consolas,sans-serif] text-[18px] font-bold leading-normal">
                                        No products found
                                    </p>
                                    <p className="m-0 text-muted font-[Consolas,sans-serif] text-[14px] leading-normal">
                                        Try changing your search or filters.
                                    </p>
                                </div>
                            ) : (
                                <div className="w-full grid grid-cols-4 gap-4 max-[1100px]:grid-cols-3 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1">
                                    {sortedProducts.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            {...product}
                                        />
                                    ))}
                                </div>
                            ))}
                    </section>
                </div>
            </main>
            <Pagination />
            <Footer />
        </div>
    );
}

export default ProductListingPage;