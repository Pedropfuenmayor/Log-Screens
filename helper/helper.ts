import { ActivityAlertLogType } from "../models/models";


export function getLogsByDate(logs: ActivityAlertLogType[]) {
    const logsByDate = {};
    logs.forEach((log) => {
      if (logsByDate.hasOwnProperty(log.timestamp)) {
        logsByDate[log.timestamp].push(log);
      } else {
        logsByDate[log.timestamp] = [log];
      }
    });
  
    return logsByDate;
  }