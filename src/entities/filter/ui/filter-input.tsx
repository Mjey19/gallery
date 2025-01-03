import { Input } from "@/shared/ui/input";

export function FilterInput() {
  return (
    <div>
      <Input
        className="w-96 h-14 bg-darkgreen focus:outline-lightgreen"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
}
