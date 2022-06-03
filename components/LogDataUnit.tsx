import { useState } from "react";
import ListBox from "./ui/ListBox";
import Table from "./ui/Table";

export default function LogDataUnit() {
  const [selectedEntrieType, setSelectedEntrieType] = useState({ name: "Show All" });
  return (
    <div className="w-11/12 mt-4 m-auto">
      <h1 className="font-bold m-auto text-lg w-72 sm:w-96">
        Log Data of Unit 1
      </h1>
      <form className="mt-4">
        <input
          className="block w-72 m-auto text-2xl p-0.5 rounded-md bg-gray-100 mb-2  sm:w-96 placeholder:text-sm"
          placeholder=""
        ></input>
      </form>
      <h2 className="m-auto mt-4 text-[10px] text-gray-800 w-72 sm:w-96">
        FILTER LOGGED EVENTS
      </h2>
      <ListBox selected={selectedEntrieType} setSelected={setSelectedEntrieType}/>
      <Table selected={selectedEntrieType} />
    </div>
  );
}
