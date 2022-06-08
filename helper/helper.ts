import { ActivityAlertLogType } from "../models/models";
import { DateTime } from "luxon";

export function getLogsByDate(logs: ActivityAlertLogType[]) {
  const sortedLogs = logs.sort((a, b) => b.timestamp - a.timestamp);
  const logsByDate = {};
  sortedLogs.forEach((log) => {
    const date = DateTime.fromSeconds(log.timestamp).toFormat("d'.'L'.'y");
    if (logsByDate.hasOwnProperty(date)) {
      logsByDate[date].push(log);
    } else {
      logsByDate[date] = [log];
    }
  });

  return logsByDate;
}

export function formatDateLabel(date, logsByDate) {
  const timestamp = logsByDate[date][0].timestamp;
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

export function formatLogsDate(timestamp) {
  const logsDate = DateTime.fromSeconds(timestamp);

  return logsDate.toFormat("d'.'L'.'y' - 'T");
}

export function paginateLogs(initialLogs, logsAmount) {
  return initialLogs.slice(0, logsAmount);
}
export function filterLogsByType(entriesTypes, initialLogs: ActivityAlertLogType[]) {
  if (entriesTypes.type === "Show All") {
    return initialLogs;
  } else {
    const filteredLogs = initialLogs.filter(({ type }) => {
      return type === entriesTypes.type;
    });
    return filteredLogs;
  }
}

export function filterLogsBySearch(searchedText, logs: ActivityAlertLogType[]) {
  const filteredLogsByDevice = logs.filter((log) => {
    //if no input the return the original
    if (searchedText === "") {
      return log;
    }
    //return the item which contains the user input
    else {
      return log.device.toLowerCase().includes(searchedText);
    }
  });

  return filteredLogsByDevice;
}
