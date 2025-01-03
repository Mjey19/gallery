import { useInfiniteQuery } from "@tanstack/react-query";
import { catalogApi } from "../model/api";

export function useGetList() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      ...catalogApi.getCatalogList(),
    });
  const list = data || [];
  console.log(list);
  
  return { list, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage };
}
