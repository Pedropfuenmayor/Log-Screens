import { SearchIcon } from "@heroicons/react/outline";

export default function SearchBar({ inputHandler }) {
  return (
    <div className="m-auto w-72 sm:w-96">
      <div className="relative block mt-4">
        <input
          onChange={inputHandler}
          className="placeholder:font-bold placeholder:text-gray-400 block bg-gray-100 w-full rounded-md text-sm py-2 pl-4 pr-3 focus:outline-none focus:border-blue-700 focus:ring-blue-700 focus:ring-1"
          placeholder="Search..."
          type="text"
          name="search"
        />
        <span className="absolute inset-y-0 right-3 flex text-gray-500 items-center pl-2">
          <SearchIcon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}
