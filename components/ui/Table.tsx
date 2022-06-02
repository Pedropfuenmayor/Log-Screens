import activityAlertLogData from "../../Data/SampleData";


export default function Table() {
  return (
    <div className="relative overflow-x-auto mt-8">
      <table className="w-72 text-[10px] text-left m-auto sm:text-[10px] sm:w-96">
        <tbody className=''>
        {activityAlertLogData.map((log
        )=>(
             <tr className="bg-white flex justify-between">
             <td className="w-[89px]">{log.date}</td>
             <td className="w-[18px]"><log.icon className="h-4 w-4" /></td>
             <td className="w-[68px]">{log.item}</td>
             <td className="w-[75px]">{log.status}</td>
           </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
