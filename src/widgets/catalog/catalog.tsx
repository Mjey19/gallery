import { Card } from "@/entities/catalog/card/ui/card";
import { useGetList } from "@/feature/catalog/hook/use-get-list";
import { CatalogTypes } from "@/shared/types/catalog-card.types";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export function Catalog() {
  const { ref, inView } = useInView();
  const { list, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetList();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  const cardList = useMemo(() => {
    return list.map((item: CatalogTypes) => (
      <Card
        key={item.id}
        id={item.id}
        name={item.name}
        photographer={item.photographer}
        src={item.src}
      />
    ));
  }, [list]);
  return (
    <div>
      <div className="mt-5 flex flex-wrap justify-between">
        {isLoading ? (
          <div className="flex justify-between">
            <Skeleton height={300} width={300} />
            <Skeleton height={300} width={300} />
            <Skeleton height={300} width={300} />
          </div>
        ) : (
          cardList
          // list.map((item: CatalogTypes, index) => (
          //   <Card
          //     key={index}
          //     id={item.id}
          //     name={item.name}
          //     photographer={item.photographer}
          //     src={item.src}
          //   />
          // ))
        )}
      </div>
      <div className="w-full" ref={ref}>
        {isFetchingNextPage ? (
          <div className="mt-5 grid grid-cols-3 gap-8">
            <Skeleton height={300} width={300} />
            <Skeleton height={300} width={300} />
            <Skeleton height={300} width={300} />
          </div>
        ) : hasNextPage ? (
          "Load More"
        ) : (
          "Nothing more to load"
        )}
      </div>
    </div>
  );
}
