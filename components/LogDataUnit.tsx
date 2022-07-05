import { useState } from "react";
import ListBox from "./ui/ListBox";
import Table from "./ui/Table";
import SearchBar from "./ui/SearchBar";
import { LogTypeObj } from "../models/models";

export default function LogDataUnit() {
  const [selectedEntrieType, setSelectedEntrieType] = useState<LogTypeObj>({
    type: "Show All",
  });
  const [inputText, setInputText] = useState("");

  const inputHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    //convert input text to lower case
    const lowerCase = e.currentTarget.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="w-11/12 mt-4 m-auto">
      <h2 className="font-bold text-lg m-auto w-72 sm:w-96 ">
        Log Data of Unit 1
      </h2>
      <SearchBar inputHandler={inputHandler} />
      <ListBox
        selected={selectedEntrieType}
        setSelected={setSelectedEntrieType}
      />
      <Table inputText={inputText} selected={selectedEntrieType} />
    </div>
  );
}
