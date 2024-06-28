import Navbar from "../components/layout/navbar";
import Input from "../components/input/input";
import DropdownComponent from "../components/input/dropdownInput";
import { Pen, Trash2 } from "lucide-react";

export default function schoolAndClub() {
  const handleInput = (): void => {};

  return (
    <div className="bg-[#F5F8FE] h-screen w-full">
      <div className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[15px]">
        <div className="h-full">
          <Navbar title="School And Club" />

          <div className="pt-5s mx-auto mb-auto  p-2 md:pr-2">
            <div>
              <div className="mt-6 gap-5 md:grid-cols-2 !z-5 rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 shadow-sm">
                <div className="p-5 flex gap-5 justify-center">
                  <Input
                    type={"text"}
                    name={"text"}
                    label={"School ID"}
                    placeholder={"School ID"}
                    optional={true}
                    callBack={handleInput}
                  />
                  <div className="w-96">
                    <Input
                      type={"text"}
                      name={"text"}
                      label={"School Full Name"}
                      placeholder={"School Full Name"}
                      optional={true}
                      callBack={handleInput}
                    />
                  </div>
                  <div className="w-96">
                    <Input
                      type={"text"}
                      name={"text"}
                      label={"School Short Name"}
                      placeholder={"School Short Name"}
                      optional={true}
                      callBack={handleInput}
                    />
                  </div>
                  <div className="w-72">
                    <DropdownComponent
                      label="Select Boys / Girls or Mix"
                      name="gender"
                      selected="Select"
                      values={[
                        { value: "Boys", label: "Boys" },
                        { value: "Girls", label: "Girls" },
                        { value: "Mix", label: "Mix" },
                      ]}
                    />
                  </div>
                </div>
                <div className="pb-5 flex justify-end pr-36">
                  <button
                    type="button"
                    className="inline-block rounded bg-purple-700 px-12 pb-3 pt-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-purple-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-purple-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-purple-950 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="mt-7 gap-5 md:grid-cols-2 !z-5 rounded-sm bg-white bg-clip-border shadow-3xl shadow-shadow-500 shadow-sm">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-blue-100">
                    <thead className="text-xs text-white uppercase bg-indigo-500 text-center">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          School ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                          School Full Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          School Short Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Boys / Girls or Mix
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" border-b border-indigo-200 hover:bg-indigo-100 text-black text-center text-base">
                        <td className="px-6 py-4">S001</td>
                        <td className="px-6 py-4">Panadura Collage</td>
                        <td className="px-6 py-4">PC</td>
                        <td className="px-6 py-4">MIX</td>
                        <td className="px-6 py-4">
                          <button
                            className={
                              "bg-green-600 text-white p-1 rounded-full mx-2 hover:bg-green-700 hover:scale-[110%] transition duration-300 ease-out"
                            }
                          >
                            <Pen className="p-1"/>
                          </button>
                          <button
                            className={
                              "bg-red-600 text-white p-1 rounded-full mx-2 hover:bg-red-700 hover:scale-[110%] transition duration-300 ease-out"
                            }
                          >
                            <Trash2 className="p-1"/>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
