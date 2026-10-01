function ProductSkeleton() {
    return (
        <div className="product-skeleton flex min-h-120 flex-col overflow-hidden rounded-0.5 border border-[#eef0f2] bg-white shadow-[0_4px_6px_-1px_#0000001a] max-[768px]:min-h-127.5 max-[480px]:min-h-125">
            <div className="h-55 w-full bg-[#eeeeee] max-[768px]:h-52.5 max-[480px]:h-57.5" />

            <div className="flex flex-1 flex-col items-center px-5 pt-4.5 pb-5.5">
                <div className="h-4.5 w-4/5 bg-[#eeeeee]" />

                <div className="mt-auto flex w-full flex-col items-center">
                    <div className="mb-3.5 h-2.75 w-1/2 bg-[#eeeeee]" />
                    <div className="mb-3.75 h-3.5 w-21.25 bg-[#eeeeee]" />
                    <div className="mb-4 h-4.25 w-17.5 bg-[#eeeeee]" />
                    <div className="mt-3 h-13 w-42 rounded-0.5 bg-[#eeeeee] max-[480px]:w-45" />
                </div>
            </div>
        </div>
    );
}

export default ProductSkeleton;