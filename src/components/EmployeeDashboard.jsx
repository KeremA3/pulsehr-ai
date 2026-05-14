import AttendancePanel from "./AttendancePanel";
import LeaveRequestPanel from "./LeaveRequestPanel";
import EmployeeNotifications from "./EmployeeNotifications";
import WorktimeCard from "./WorktimeCard";

export default function EmployeeDashboard({

  handleLogout

}) {

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#081120] to-black text-white p-6 lg:p-10">

      {/* TOPBAR */}

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px]">

        <div>

          <p className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
            Personel Paneli
          </p>

          <h1 className="text-4xl font-black">
            Hoş Geldiniz
          </h1>

        </div>

        <button
          onClick={handleLogout}
          className="px-7 py-4 rounded-[22px] bg-gradient-to-r from-red-500 to-pink-600 text-white font-black shadow-[0_0_35px_rgba(244,63,94,0.35)] hover:scale-105 transition-all duration-300"
        >

          Çıkış Yap

        </button>

      </div>

      {/* CONTENT */}

      <div className="mt-8 space-y-8">

        <AttendancePanel />

        <LeaveRequestPanel />

        <EmployeeNotifications />

        <WorktimeCard />

      </div>

    </div>
  );
}