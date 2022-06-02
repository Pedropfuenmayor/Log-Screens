import { ChevronLeftIcon } from "@heroicons/react/outline";

export default function SearchInput() {
  return (
    <form>
      <input type="text" className="placeholder:italic placeholder:text-slate-400" placeholder="Search…" />{" "}
    </form>
  );
}
