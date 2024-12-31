import { Card } from "@/entities/catalog/card/ui/card";
import { useGetList } from "@/feature/catalog/hook/use-get-list";
import { CatalogTypes } from "@/shared/types/catalog-card.types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export function Catalog() {
  const { list, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetList();

  return (
    <div>
      <div className="mt-5 grid grid-cols-3 gap-8">
        {isLoading ? (
          <Skeleton height={300} width={300} />
        ) : (
          list.map((item: CatalogTypes, index) => (
            <Card
              key={index}
              id={item.id}
              name={item.name}
              photographer={item.photographer}
              src={item.src}
            />
          ))
        )}
      </div>
      <button
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  );
}
