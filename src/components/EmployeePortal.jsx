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
    <div className="min-h-screen bg-gray-900 text-white p-8">

      {/* TOP */}

      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-5xl font-bold">
            Employee Portal
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome back,
            {" "}
            {currentUserEmail}
          </p>
        </div>

        <div className="flex gap-4">

          <div className="bg-green-500/20 text-green-400 px-5 py-2 rounded-2xl border border-green-500/30">
            Active Employee
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-2xl"
          >
            Logout
          </button>

        </div>
      </div>

      {/* GRID */}

      <div className="grid grid-cols-3 gap-6">

        {/* CARD 1 */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Attendance
          </h2>

          <p className="text-5xl font-bold">
            96%
          </p>

          <p className="text-green-400 mt-3">
            Excellent performance
          </p>
        </div>

        {/* CARD 2 */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          <h2 className="text-xl font-bold mb-4">
            This Month
          </h2>

          <p className="text-5xl font-bold">
            22
          </p>

          <p className="text-gray-400 mt-3">
            Working days completed
          </p>
        </div>

        {/* CARD 3 */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          <h2 className="text-xl font-bold mb-4">
            AI Insight
          </h2>

          <p className="text-lg text-blue-300 leading-8">
            Your attendance performance
            is above company average.
          </p>
        </div>
      </div>

      {/* ACTIVITY */}

      <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="bg-black/20 rounded-2xl p-4 flex items-center justify-between">

            <span>
              Checked in successfully
            </span>

            <span className="text-green-400">
              Today
            </span>
          </div>

          <div className="bg-black/20 rounded-2xl p-4 flex items-center justify-between">

            <span>
              Monthly report generated
            </span>

            <span className="text-blue-400">
              Yesterday
            </span>
          </div>

          <div className="bg-black/20 rounded-2xl p-4 flex items-center justify-between">

            <span>
              AI performance analyzed
            </span>

            <span className="text-purple-400">
              2 days ago
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}