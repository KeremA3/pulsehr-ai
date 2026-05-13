import { signOut } from "firebase/auth";

import { auth } from "../firebase";

export default function EmployeePortal({
  currentUserEmail
}) {

  const handleLogout =
    async () => {
      await signOut(auth);
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white overflow-hidden">

      {/* BACKGROUND BLUR */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]" />

      {/* CONTENT */}

      <div className="relative z-10 p-10">

        {/* TOPBAR */}

        <div className="flex items-center justify-between mb-12">

          <div>

            <p className="text-blue-400 font-semibold tracking-[4px] uppercase mb-3">
              PulseHR AI
            </p>

            <h1 className="text-6xl font-black leading-tight">
              Employee
              <br />
              Portal
            </h1>

            <p className="text-gray-400 mt-5 text-lg">
              Welcome back,
              {" "}
              {currentUserEmail}
            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
              ● Active
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-6 py-3 rounded-2xl shadow-2xl"
            >
              Logout
            </button>

          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-6 mb-10">

          {/* CARD */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[30px] p-8 hover:scale-[1.02] transition-all duration-300 shadow-2xl">

            <p className="text-gray-400 mb-5">
              Attendance Rate
            </p>

            <h2 className="text-6xl font-black">
              96%
            </h2>

            <div className="mt-5 text-green-400">
              ▲ +12% this month
            </div>

          </div>

          {/* CARD */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[30px] p-8 hover:scale-[1.02] transition-all duration-300 shadow-2xl">

            <p className="text-gray-400 mb-5">
              Completed Tasks
            </p>

            <h2 className="text-6xl font-black">
              48
            </h2>

            <div className="mt-5 text-blue-400">
              AI productivity boosted
            </div>

          </div>

          {/* CARD */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[30px] p-8 hover:scale-[1.02] transition-all duration-300 shadow-2xl">

            <p className="text-gray-400 mb-5">
              AI Performance
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Excellent
            </h2>

            <div className="mt-5 text-purple-400">
              Above company average
            </div>

          </div>

        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-3 gap-6">

          {/* LEFT */}

          <div className="col-span-2 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[30px] p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold">
                Recent Activity
              </h2>

              <div className="text-blue-400">
                Live Updates
              </div>

            </div>

            <div className="space-y-5">

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5 flex items-center justify-between">

                <div>
                  <p className="font-semibold text-lg">
                    Check-in completed
                  </p>

                  <p className="text-gray-400 mt-1">
                    AI verified attendance successfully
                  </p>
                </div>

                <span className="text-green-400">
                  Today
                </span>

              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5 flex items-center justify-between">

                <div>
                  <p className="font-semibold text-lg">
                    Performance Report Generated
                  </p>

                  <p className="text-gray-400 mt-1">
                    Monthly analytics completed
                  </p>
                </div>

                <span className="text-blue-400">
                  Yesterday
                </span>

              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5 flex items-center justify-between">

                <div>
                  <p className="font-semibold text-lg">
                    AI Risk Analysis
                  </p>

                  <p className="text-gray-400 mt-1">
                    No attendance risk detected
                  </p>
                </div>

                <span className="text-purple-400">
                  2 days ago
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[30px] p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8">
              AI Assistant
            </h2>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 rounded-3xl p-6">

              <p className="text-lg leading-9 text-gray-200">
                Your productivity and attendance metrics are performing above company standards.
                Keep maintaining your consistency for AI promotion scoring.
              </p>

            </div>

            <div className="mt-8 space-y-4">

              <div className="bg-black/20 rounded-2xl p-4 flex justify-between">

                <span>
                  Attendance Score
                </span>

                <span className="text-green-400">
                  9.4
                </span>

              </div>

              <div className="bg-black/20 rounded-2xl p-4 flex justify-between">

                <span>
                  AI Trust Index
                </span>

                <span className="text-blue-400">
                  High
                </span>

              </div>

              <div className="bg-black/20 rounded-2xl p-4 flex justify-between">

                <span>
                  Promotion Chance
                </span>

                <span className="text-purple-400">
                  87%
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}