import { ActivityAlertLogType } from "../../models/models";
import {
  getLogsByDate,
  formatDateLabel,
  formatLogsDate,
} from "../../helper/helper";
import { DateTime } from "luxon";
import {
  LockClosedIcon,
  LockOpenIcon,
  SunIcon,
  MoonIcon,
  BellIcon,
  FireIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";

const activityAlertLogData: ActivityAlertLogType[] = [
  {
    timestamp: DateTime.now().toSeconds(),
    device: "Door - Front",
    description: "Closed by you",
    icon: LockClosedIcon,
    type: "Notification",
  },
  {
    timestamp: DateTime.now().minus({ days: 1 }).toSeconds(),
    device: "Door - Front",
    description: "Closed by you",
    icon: LockClosedIcon,
    type: "Notification",
  },
  {
    timestamp: 1639392939,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639390359,
    device: "Main Lighting",
    description: "On",
    icon: SunIcon,
    type: "Notification",
  },
  {
    timestamp: 1639387299,
    device: "Temperature",
    description: "Below 4°C",
    icon: BellIcon,
    type: "Warning",
  },
  {
    timestamp: 1639308099,
    device: "Door - Front",
    description: "Closed by you",
    icon: LockClosedIcon,
    type: "Notification",
  },
  {
    timestamp: 1639307739,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639305339,
    device: "Main Lighting",
    description: "On",
    icon: SunIcon,
    type: "Notification",
  },
  {
    timestamp: 1639302339,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639182039,
    device: "Emergency",
    description: "Unit is on fire",
    icon: FireIcon,
    type: "Alert",
  },
  {
    timestamp: 1639218039,
    device: "Door - Front",
    description: "Opened by you",
    icon: LockOpenIcon,
    type: "Notification",
  },
];

export default function Table({ selected }) {
  const [logsByDate, setLogsByDate] = useState({});

  useEffect(() => {
    if (selected.name === "Show All") {
      setLogsByDate(getLogsByDate(activityAlertLogData));
      return;
    }

    const filteredLogs = activityAlertLogData.filter(({ type }) => {
      return type === selected.name;
    });

    setLogsByDate(getLogsByDate(filteredLogs));
  }, [selected]);

  return (
    <div className="relative overflow-x-auto mt-8">
      {Object.keys(logsByDate).map((date, i) => (
        <div key={i}>
          <h3 className="font-bold my-4 m-auto text-lg w-72 sm:w-96">
            {formatDateLabel(date, logsByDate)}
          </h3>
          <table className="w-72 text-[10px] text-left m-auto sm:text-sm sm:w-96">
            <tbody className="">
              {logsByDate[date].map((log, i) => (
                <tr key={i} className="bg-white flex justify-between">
                  <td className=" w-[89px] sm:w-[125px]">
                    {formatLogsDate(log.timestamp)}
                  </td>
                  <td className="w-[18px]">
                    <log.icon className="h-4 w-4" />
                  </td>
                  <td className="w-[68px] sm:w-[90px]">{log.device}</td>
                  <td className="w-[75px] sm:w-[100px]">{log.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
