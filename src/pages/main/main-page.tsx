import { Filter } from "../../widgets/filter/filter";
import { Catalog } from "@/widgets";

export function MainPage() {
  return (
    <div className="mt-12">
      <Filter />
      <Catalog />
    </div>
  );
}
