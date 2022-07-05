import { Dispatch, SetStateAction } from "react";

export type LogType = "Show All" | "Notification" | "Warning" | "Alert";

export type LogTypeObj = {
  type: LogType
};

export type ActivityAlertLogType = {
  timestamp: number;
  device: string;
  description: string;
  icon: any;
  type: LogType;
};

export type SearchBarProps = {
  inputHandler: (e: React.FormEvent<HTMLInputElement>) => void;
};

export type ListBoxProps = {
  selected: LogTypeObj;
  setSelected: Dispatch<SetStateAction<LogTypeObj>>
};
