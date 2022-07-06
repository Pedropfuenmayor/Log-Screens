import {
  ActivityAlertLogType,
  ActivityAlertLogWithDate,
  FormatLogsDateFunction,
  LogsByDateType,
  LogTypeObj,
} from "../models/models";
import { DateTime } from "luxon";

export function getLogsByDate(logs: ActivityAlertLogType[]): LogsByDateType {
  const sortedLogs = logs.sort((a, b) => b.timestamp - a.timestamp);
  const logsByDate = {};
  sortedLogs.forEach((log) => {
    const date = formatDateLabel(log.timestamp);
    if (logsByDate.hasOwnProperty(date)) {
      logsByDate[date].push(log);
    } else {
      logsByDate[date] = [log];
    }
  });

  return logsByDate;
}

export function formatDateLabel(timestamp: number): string {
  const today = DateTime.now();
  const logsDate = DateTime.fromSeconds(timestamp);
  const isToday = logsDate.hasSame(today, "day");
  const daysDiff = today.diff(logsDate, "days").values.days;
  const isYesterday = daysDiff >= 1 && daysDiff < 2;

  if (isToday) {
    return logsDate.toFormat("d'.'L'.'y', 'ccc'. Today:'");
  } else if (isYesterday) {
    return logsDate.toFormat("d'.'L'.'y', 'ccc'. Yesterday:'");
  }

  return logsDate.toFormat("d'.'L'.'y', 'ccc'. :'");
}

export function formatLogsDate(timestamp: number): string {
  const logsDate = DateTime.fromSeconds(timestamp);

  return logsDate.toFormat("d'.'L'.'y' - 'T");
}

export function paginateLogs(
  initialLogs: ActivityAlertLogType[],
  logsAmount: number
): ActivityAlertLogType[] {
  const sortedLogs = initialLogs.sort((a, b) => b.timestamp - a.timestamp);
  return sortedLogs.slice(0, logsAmount);
}
export function filterLogsByType(
  entriesTypes: LogTypeObj,
  initialLogs: ActivityAlertLogType[]
): ActivityAlertLogType[] {
  if (entriesTypes.type === "Show All") {
    return initialLogs;
  } else {
    const filteredLogs = initialLogs.filter(({ type }) => {
      return type === entriesTypes.type;
    });
    return filteredLogs;
  }
}

function addDateToLogs(
  logs: ActivityAlertLogType[],
  formatLogsDate: FormatLogsDateFunction
): ActivityAlertLogWithDate[] {
  const formatedLogsWithDate = logs.map((log) => {
    const date = formatLogsDate(log.timestamp);
    return { ...log, date };
  });

  return formatedLogsWithDate;
}

export function filterLogsBySearch(
  searchedText: string,
  logs: ActivityAlertLogType[]
): ActivityAlertLogWithDate[] {
  const logsWithDate = addDateToLogs(logs, formatLogsDate);

  const filteredLogsBySearch = logsWithDate.filter((log) => {
    //if no input the return the original
    if (searchedText.trim() === "") {
      return log;
    }
    //return the item which contains the user input
    else {
      const isSearched =
        log.device.toLowerCase().includes(searchedText) ||
        log.date.toLowerCase().includes(searchedText) ||
        log.description.toLowerCase().includes(searchedText) ||
        log.type.toLowerCase().includes(searchedText);
      return isSearched;
    }
  });

  return filteredLogsBySearch;
}

export function isData(obj) {
  if (obj) {
    return Object.keys(obj).length !== 0;
  }
  return false;
}
