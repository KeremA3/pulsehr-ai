import { useEffect, useState } from "react";

import ModernEmployeeCard from "./ModernEmployeeCard";

import {

  getEmployees,
  addEmployee,
  deleteEmployee

} from "../firebase/firestoreService";

import {

  exportEmployeesToExcel

} from "../utils/exportToExcel";

import {

  exportEmployeesToPDF

} from "../utils/exportToPDF";

export default function EmployeeManager() {

  const [employees,
    setEmployees] =
    useState([]);

  const [name,
    setName] =
    useState("");

  const [department,
    setDepartment] =
    useState("");

  /* LOAD */

  const loadEmployees =
    async () => {

      const data =
        await getEmployees();

      setEmployees(data);
    };

  useEffect(() => {

    loadEmployees();

  }, []);

  /* ADD */

  const handleAdd =
    async () => {

      if (
        !name ||
        !department
      ) return;

      await addEmployee({

        name,
        department

      });

      setName("");
      setDepartment("");

      loadEmployees();
    };

  /* DELETE */

  const handleDelete =
    async (id) => {

      await deleteEmployee(id);

      loadEmployees();
    };

  return (

    <div>

      {/* HEADER */}

      <div className="mb-8">

        <h2 className="text-5xl font-black text-white">
          Çalışan Yönetimi
        </h2>

        <p className="text-gray-400 mt-3 text-lg">
          Kurumsal çalışan yönetim sistemi
        </p>

      </div>

      {/* FORM */}

      <div className="bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px] mb-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <input
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            placeholder="Çalışan adı"
            className="bg-black/20 border border-white/10 rounded-[22px] px-6 py-5 text-white text-lg outline-none"
          />

          <input
            value={department}
            onChange={(e) =>
              setDepartment(
                e.target.value
              )
            }
            placeholder="Departman"
            className="bg-black/20 border border-white/10 rounded-[22px] px-6 py-5 text-white text-lg outline-none"
          />

        </div>

        {/* BUTTONS */}

        <div className="flex flex-wrap items-center gap-4 mt-6">

          {/* ADD */}

          <button
            onClick={handleAdd}
            className="px-7 py-4 rounded-[22px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:scale-105 transition-all duration-300"
          >

            Çalışan Ekle

          </button>

          {/* EXCEL */}

          <button
            onClick={() =>
              exportEmployeesToExcel(
                employees
              )
            }
            className="px-7 py-4 rounded-[22px] bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black shadow-[0_0_35px_rgba(34,197,94,0.35)] hover:scale-105 transition-all duration-300"
          >

            Excel'e Aktar

          </button>

          {/* PDF */}

          <button
            onClick={() =>
              exportEmployeesToPDF(
                employees
              )
            }
            className="px-7 py-4 rounded-[22px] bg-gradient-to-r from-red-500 to-pink-600 text-white font-black shadow-[0_0_35px_rgba(244,63,94,0.35)] hover:scale-105 transition-all duration-300"
          >

            PDF'e Aktar

          </button>

        </div>

      </div>

      {/* EMPLOYEES */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

        {employees.map(
          (employee) => (

            <ModernEmployeeCard
              key={employee.id}
              employee={employee}
              onDelete={handleDelete}
            />

          )
        )}

      </div>

    </div>
  );
}