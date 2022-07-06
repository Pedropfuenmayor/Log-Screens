import { Dispatch, SetStateAction } from "react";

export type LogType = "Show All" | "Notification" | "Warning" | "Alert";

export type LogTypeObj = {
  type: "Show All" | "Notification" | "Warning" | "Alert";
};

export type LogsByDateType = {
  [index:string]:ActivityAlertLogWithDate[]
}

export interface ActivityAlertLogType  {
  timestamp: number;
  device: string;
  description: string;
  icon: any;
  type: "Show All" | "Notification" | "Warning" | "Alert";
};

export interface ActivityAlertLogWithDate extends ActivityAlertLogType{
  date: string;
}

export type SearchBarProps = {
  inputHandler: (e: React.FormEvent<HTMLInputElement>) => void;
};

export type ListBoxProps = {
  selected: LogTypeObj,
  setSelected: Dispatch<SetStateAction<LogTypeObj>>
};

export type TableProps = {
  selected: LogTypeObj,
  inputText: string
};


export type FormatLogsDateFunction = (timestamp: number) => string;
