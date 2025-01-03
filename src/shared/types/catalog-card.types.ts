export type CatalogTypes = {
  photographer: string;
  id: number;
  src?: {
    original: string;
    large: string;
    medium: string;
    small: string;
    landscape: string;
  } | null;
  name: string;
};
