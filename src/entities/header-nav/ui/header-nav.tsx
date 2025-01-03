import { Link } from "react-router";
export function HeaderNav() {
  return (
    <nav className="flex items-center gap-32">
      <Link className="text-[18px] font-bold text-black" to={"/"}>
        Главная
      </Link>
      <div className="mt-9 w-16 h-16 border rounded-full bg-gray-500"></div>
      <Link className="text-[18px] font-bold text-black" to={"/author"}>
        Author
      </Link>
    </nav>
  );
}
