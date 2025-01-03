import { jsonApiInstance } from "@/shared/hook/api-instance";
import { CatalogTypes } from "@/shared/types/catalog-card.types";
import { infiniteQueryOptions } from "@tanstack/react-query";

const token = "yi4b5UcNVkJWyhqnZ1JMIpGqwjhhU6iJUCjHWqTwFV9MIMGn9VS7fodp";
const per_page = 15;
export const catalogApi = {
  basekey: "catalog",
  getCatalogList: () => {
    return infiniteQueryOptions({
      queryKey: [catalogApi.basekey],
      queryFn: async (meta) => {
        return await jsonApiInstance<{
          photos: CatalogTypes[];
          next_page: string | null;
        }>(`?page=${meta.pageParam || 1}&per_page=${per_page}`, {
          method: "GET",
          headers: {
            Authorization: token,
          },
          signal: meta.signal,
        });
      },
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.next_page ? allPages.length + 1 : undefined;
      },
      select: (result) => result.pages.flatMap((page) => page.photos),
    });
  },
};
