import { ChevronLeftIcon } from "@heroicons/react/outline";

export default function BackBotton() {
  return (
      <button className="text-gray-800 ml-7 flex items-center hover:text-blue-600 transition duration-300">
        <ChevronLeftIcon className="h-4 w-4" />
        <span className="pl-2 text-sm">Back</span>
      </button>
  );
}
