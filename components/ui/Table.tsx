import activityAlertLogData from "../../data/data";
import {
  getLogsByDate,
  formatDateLabel,
  formatLogsDate,
  paginateLogs,
  filterLogsByType,
  filterLogsBySearch,
} from "../../helper/helper";

import { useEffect, useState } from "react";

export default function Table({ selected, inputText }) {
  const [logsByDate, setLogsByDate] = useState({});
  const [initialLogs, setInitialLogs] = useState([]);

  function increaseNumberOfLogs() {
    setInitialLogs(paginateLogs(activityAlertLogData, 30));
  }

  useEffect(() => {
    setInitialLogs(paginateLogs(activityAlertLogData, 20));
  }, []);

  useEffect(() => {
    const filteredLogsBytype = filterLogsByType(selected, initialLogs);
    const filteredLogsBySearch = filterLogsBySearch(inputText,filteredLogsBytype)

    setLogsByDate(getLogsByDate(filteredLogsBySearch));
  }, [selected, initialLogs, inputText]);

  return (
    <div className="relative overflow-x-auto mt-2">
      {Object.keys(logsByDate).map((date, i) => (
        <div key={i}>
          <h3 className="font-bold my-4 m-auto text-lg w-72 sm:w-96">
            {formatDateLabel(date, logsByDate)}
          </h3>
          <table className="w-72 text-[10px] text-left m-auto sm:text-sm sm:w-96">
            <tbody className="">
              {logsByDate[date].map((log, i) => (
                <tr key={i} className="bg-white flex justify-between">
                  <td className=" w-[94px] sm:w-[125px]">
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
      <div className="m-auto w-72 sm:w-96 items-center mt-4">
        <button
          onClick={increaseNumberOfLogs}
          className="bg-gray-900 text-white py-4 rounded-sm w-full text-center "
        >
          Load more data...
        </button>
      </div>
    </div>
  );
}
