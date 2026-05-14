export default function AdminDashboard({

  handleLogout,
  filteredEmployees = []

}) {

  return (

    <div className="min-h-screen bg-[#020617] text-white p-10">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-6xl font-black">
            PulseHR AI
          </h1>

          <p className="text-gray-400 mt-4 text-2xl">
            Admin Dashboard
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-2xl text-xl font-bold"
        >
          Çıkış Yap
        </button>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-[30px] p-10">

        <h2 className="text-4xl font-black mb-8">
          Çalışanlar
        </h2>

        <div className="space-y-4">

          {filteredEmployees.map(
            (employee) => (

              <div
                key={employee.id}
                className="bg-black/20 rounded-2xl p-5"
              >

                <p className="text-2xl font-bold">
                  {employee.name}
                </p>

                <p className="text-gray-400 mt-2">
                  {employee.department}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}