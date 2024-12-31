import { CatalogTypes } from "@/shared/types/catalog-card.types";
import { CardContent, CardFooter, CardTitle } from "@/shared/ui/card";
export function Card({ src, photographer, name }: CatalogTypes) {
  return (
    <div className="min-h-[350px] flex flex-col justify-between rounded-t-[5px] cursor-pointer bg-white mb-4 break-inside-avoid overflow-x-hidden shadow-lg">
      <CardContent className="w-full  overflow-y-hidden">
        <div className="object-cover w-full max-h-72 min-h-52"></div>
        {/* <img
          className="object-cover w-full max-h-72 min-h-52"
          src={src?.original}
          alt=""
        /> */}
      </CardContent>
      <CardFooter className="text-[18px] mt-2 mb-3 pl-2">
        <CardTitle className="font-bold text-base">
          {name} <br />
          <b className="font-medium ml-2 text-sm">by {photographer}</b>
        </CardTitle>
      </CardFooter>
    </div>
  );
}
