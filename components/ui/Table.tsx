import activityAlertLogData from "../../data/SampleData";

export default function Table() {
  return (
    <div className="relative overflow-x-auto mt-8">
      <table className="w-72 text-[10px] text-left m-auto sm:text-sm sm:w-96">
        <tbody className="">
          {activityAlertLogData.map((log) => (
            <tr className="bg-white flex justify-between">
              <td className="w-[89px] sm:w-[120px]">{log.timestamp}</td>
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
  );
}
