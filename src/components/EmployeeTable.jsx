import {
  Trash2,
  LogIn,
  LogOut,
  Circle,
  Eye
} from "lucide-react";

import { useState } from "react";

import EmployeeDetailModal from "./EmployeeDetailModal";

export default function EmployeeTable({

  filteredEmployees,

  checkIn,
  checkOut,

  deleteEmployee

}) {

  const [selectedEmployee,
    setSelectedEmployee] =
    useState(null);

  return (

    <div>

      {/* MODAL */}

      <EmployeeDetailModal
        employee={selectedEmployee}
        onClose={() =>
          setSelectedEmployee(null)
        }
      />

      {/* HEADER */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            Employee Database
          </p>

          <h2 className="text-4xl font-black text-white">
            Çalışan Yönetimi
          </h2>

        </div>

        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-3 rounded-2xl backdrop-blur-xl">
          ● Live System Active
        </div>

      </div>

      {/* TABLE */}

      <div className="overflow-x-auto rounded-[30px] border border-white/10">

        <table className="w-full">

          {/* HEAD */}

          <thead className="bg-white/5 backdrop-blur-xl">

            <tr className="text-left text-gray-300">

              <th className="p-6 font-semibold">
                Durum
              </th>

              <th className="p-6 font-semibold">
                Çalışan
              </th>

              <th className="p-6 font-semibold">
                Departman
              </th>

              <th className="p-6 font-semibold">
                Email
              </th>

              <th className="p-6 font-semibold">
                Giriş
              </th>

              <th className="p-6 font-semibold">
                Çıkış
              </th>

              <th className="p-6 font-semibold">
                Detay
              </th>

              <th className="p-6 font-semibold">
                İşlem
              </th>

            </tr>

          </thead>

          {/* BODY */}

          <tbody>

            {filteredEmployees.map(
              (employee) => (

                <tr
                  key={employee.id}
                  className="border-t border-white/5 hover:bg-white/5 transition-all duration-300"
                >

                  {/* STATUS */}

                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      <Circle
                        size={12}
                        className={
                          employee.checkIn
                            ? "fill-green-400 text-green-400"
                            : "fill-gray-500 text-gray-500"
                        }
                      />

                      <span className="text-sm text-gray-300">

                        {employee.checkIn
                          ? "Aktif"
                          : "Offline"}

                      </span>

                    </div>

                  </td>

                  {/* NAME */}

                  <td className="p-6">

                    <div>

                      <p className="font-semibold text-white text-lg">
                        {employee.name}
                      </p>

                      <p className="text-gray-400 text-sm mt-1">
                        AI Performance Active
                      </p>

                    </div>

                  </td>

                  {/* DEPARTMENT */}

                  <td className="p-6">

                    <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl inline-block">

                      {employee.department}

                    </div>

                  </td>

                  {/* EMAIL */}

                  <td className="p-6 text-gray-300">

                    {employee.email}

                  </td>

                  {/* CHECK IN */}

                  <td className="p-6">

                    {employee.checkIn ? (

                      <div className="text-green-400 font-semibold">
                        {employee.checkIn}
                      </div>

                    ) : (

                      <button
                        onClick={() =>
                          checkIn(
                            employee.id
                          )
                        }
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-all duration-300 px-5 py-3 rounded-2xl text-white font-semibold shadow-xl"
                      >

                        <LogIn size={18} />

                        Giriş

                      </button>

                    )}

                  </td>

                  {/* CHECK OUT */}

                  <td className="p-6">

                    {employee.checkOut ? (

                      <div className="text-red-400 font-semibold">
                        {employee.checkOut}
                      </div>

                    ) : (

                      <button
                        onClick={() =>
                          checkOut(
                            employee.id
                          )
                        }
                        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 px-5 py-3 rounded-2xl text-white font-semibold shadow-xl"
                      >

                        <LogOut size={18} />

                        Çıkış

                      </button>

                    )}

                  </td>

                  {/* DETAIL */}

                  <td className="p-6">

                    <button
                      onClick={() =>
                        setSelectedEmployee(
                          employee
                        )
                      }
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-5 py-3 rounded-2xl text-white font-semibold shadow-xl"
                    >

                      <Eye size={18} />

                      Görüntüle

                    </button>

                  </td>

                  {/* DELETE */}

                  <td className="p-6">

                    <button
                      onClick={() =>
                        deleteEmployee(
                          employee.id
                        )
                      }
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-all duration-300 px-5 py-3 rounded-2xl text-white font-semibold shadow-xl"
                    >

                      <Trash2 size={18} />

                      Sil

                    </button>

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}