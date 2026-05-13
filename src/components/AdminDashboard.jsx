import {
  Users,
  Activity,
  ShieldCheck,
  BrainCircuit
} from "lucide-react";

import Sidebar from "./Sidebar";
import DashboardCards from "./DashboardCards";
import AIAnalytics from "./AIAnalytics";
import EmployeeForm from "./EmployeeForm";
import SearchFilter from "./SearchFilter";
import EmployeeTable from "./EmployeeTable";

export default function AdminDashboard({

  darkMode,
  setDarkMode,

  handleLogout,

  totalEmployees,
  checkedInEmployees,
  lateEmployees,

  riskScore,
  riskColor,
  aiMessage,
  chartData,

  name,
  setName,

  department,
  setDepartment,

  employeeEmail,
  setEmployeeEmail,

  employeePassword,
  setEmployeePassword,

  addEmployee,

  search,
  setSearch,

  filterDepartment,
  setFilterDepartment,

  filteredEmployees,

  checkIn,
  checkOut,
  deleteEmployee,

  userRole

}) {

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black text-white overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      {/* CONTENT */}

      <div className="relative z-10 flex">

        {/* SIDEBAR */}

        <Sidebar />

        {/* MAIN */}

        <div className="flex-1 p-10">

          {/* TOPBAR */}

          <div className="flex items-center justify-between mb-12">

            <div>

              <p className="text-blue-400 tracking-[5px] uppercase font-semibold mb-3">
                PulseHR AI
              </p>

              <h1 className="text-6xl font-black leading-tight">
                Yönetim
                <br />
                Paneli
              </h1>

              <p className="text-gray-400 mt-5 text-lg">
                Enterprise İnsan Kaynakları Yönetim Sistemi
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
                👑 {userRole}
              </div>

              <button
                onClick={() =>
                  setDarkMode(
                    !darkMode
                  )
                }
                className="bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 px-6 py-3 rounded-2xl backdrop-blur-xl"
              >
                {darkMode
                  ? "☀️ Light"
                  : "🌙 Dark"}
              </button>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-6 py-3 rounded-2xl shadow-2xl"
              >
                Çıkış Yap
              </button>

            </div>

          </div>

          {/* QUICK STATS */}

          <div className="grid grid-cols-4 gap-6 mb-10">

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300">

              <Users className="mb-5 text-blue-400" size={40} />

              <p className="text-gray-400 mb-3">
                Toplam Çalışan
              </p>

              <h2 className="text-5xl font-black">
                {totalEmployees}
              </h2>

            </div>

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300">

              <Activity className="mb-5 text-green-400" size={40} />

              <p className="text-gray-400 mb-3">
                Aktif Giriş
              </p>

              <h2 className="text-5xl font-black">
                {checkedInEmployees}
              </h2>

            </div>

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300">

              <ShieldCheck className="mb-5 text-purple-400" size={40} />

              <p className="text-gray-400 mb-3">
                Güven Skoru
              </p>

              <h2 className="text-5xl font-black">
                98
              </h2>

            </div>

            {/* CARD */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300">

              <BrainCircuit className="mb-5 text-pink-400" size={40} />

              <p className="text-gray-400 mb-3">
                AI Risk
              </p>

              <h2 className="text-5xl font-black">
                %{riskScore}
              </h2>

            </div>

          </div>

          {/* MAIN CONTENT */}

          <div className="space-y-8">

            {/* ANALYTICS */}

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

              <AIAnalytics
                riskScore={riskScore}
                riskColor={riskColor}
                aiMessage={aiMessage}
                chartData={chartData}
              />

            </div>

            {/* EMPLOYEE CREATE */}

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

              <EmployeeForm
                name={name}
                setName={setName}

                department={department}
                setDepartment={setDepartment}

                employeeEmail={employeeEmail}
                setEmployeeEmail={setEmployeeEmail}

                employeePassword={employeePassword}
                setEmployeePassword={setEmployeePassword}

                addEmployee={addEmployee}
              />

            </div>

            {/* FILTER */}

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

              <SearchFilter
                search={search}
                setSearch={setSearch}

                filterDepartment={filterDepartment}
                setFilterDepartment={setFilterDepartment}
              />

            </div>

            {/* TABLE */}

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

              <EmployeeTable
                filteredEmployees={filteredEmployees}

                checkIn={checkIn}
                checkOut={checkOut}

                deleteEmployee={deleteEmployee}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}