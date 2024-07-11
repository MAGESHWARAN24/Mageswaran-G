import React from "react";
import {Pencil1Icon, TrashIcon} from "@radix-ui/react-icons";
import {useAppContext} from "@/hook/ApplicationContext";

export default function DataTable() {
  const {data, setData, edit, setEdit, setProperties, initialState} =
    useAppContext();
  return (
    <div className="h-full w-full overflow-y-auto overflow-x-auto p-5">
      <table className="border border-black">
        <thead className="border border-black">
          <tr>
            <th colSpan={"8"} className="text-center">
              Data Table
            </th>
          </tr>
          <tr>
            <th className="border border-black truncate">Name</th>
            <th className="border border-black truncate">Age</th>
            <th className="border border-black truncate">Address</th>
            <th className="border border-black truncate">Gender</th>
            <th className="border border-black truncate">Rating</th>
            <th className="border border-black truncate">Condition</th>
            <th className="border border-black truncate">Color</th>
            <th className="border border-black truncate">Experience</th>
            <th className="border border-black truncate">Dob</th>
            <th className="border border-black truncate">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr className="text-center">
              <td colSpan="8" className="text-center truncate">
                No record to display
              </td>
            </tr>
          )}
          {data.map((row, index) => (
            <tr key={index}>
              <td className="truncate border border-black">{row?.name}</td>
              <td className="truncate border border-black">{row?.age}</td>
              <td className="truncate border border-black">{row?.address}</td>
              <td className="truncate border border-black">{row?.gender}</td>
              <td className="truncate border border-black">{row?.rating}</td>
              <td className="truncate flex flex-grow items-center justify-center">
                <input
                  type="checkbox"
                  checked={row?.condition}
                  value={row?.condition}
                  className="size-8"
                />
              </td>
              <td className="truncate border border-black">
                <input type="color" value={row?.color} disabled />
              </td>
              <td className="truncate border border-black">
                {row?.experience}
              </td>
              <td className="truncate border border-black">{row?.dob}</td>

              <td className="flex items-center justify-between">
                <Pencil1Icon
                  className="size-8"
                  onClick={() => {
                    setEdit({id: index, isShow: !edit.isShow});
                    setProperties(data.find((_, id) => index === id));
                  }}
                />
                <TrashIcon
                  className="size-8 text-red-500"
                  onClick={() => {
                    if (confirm("Are sure to delete")) {
                      setProperties(initialState);
                      setData((previousValue) =>
                        previousValue.filter((_, id) => id != index)
                      );
                    }
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
