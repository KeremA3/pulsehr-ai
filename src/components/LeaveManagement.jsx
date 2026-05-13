import {
  CalendarDays,
  CheckCircle2,
  XCircle,
  Clock3
} from "lucide-react";

export default function LeaveManagement() {

  const leaveRequests = [

    {
      id: 1,
      employee: "Ahmet Yılmaz",
      type: "Yıllık İzin",
      days: 5,
      status: "Onaylandı"
    },

    {
      id: 2,
      employee: "Ayşe Demir",
      type: "Hastalık İzni",
      days: 2,
      status: "Bekliyor"
    },

    {
      id: 3,
      employee: "Mehmet Kaya",
      type: "Mazeret İzni",
      days: 1,
      status: "Reddedildi"
    }

  ];

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            Leave Management
          </p>

          <h2 className="text-5xl font-black text-white">
            İzin Yönetim Sistemi
          </h2>

        </div>

        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
          AI Leave Tracking Active
        </div>

      </div>

      {/* CARDS */}

      <div className="grid grid-cols-3 gap-6 mb-10">

        {/* CARD */}

        <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl">

          <div className="flex items-center gap-4 mb-5">

            <div className="bg-blue-500/20 p-4 rounded-2xl">

              <CalendarDays
                className="text-blue-400"
                size={32}
              />

            </div>

            <div>

              <p className="text-gray-400">
                Toplam Talep
              </p>

              <h3 className="text-4xl font-black text-white">
                12
              </h3>

            </div>

          </div>

        </div>

        {/* CARD */}

        <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl">

          <div className="flex items-center gap-4 mb-5">

            <div className="bg-green-500/20 p-4 rounded-2xl">

              <CheckCircle2
                className="text-green-400"
                size={32}
              />

            </div>

            <div>

              <p className="text-gray-400">
                Onaylanan
              </p>

              <h3 className="text-4xl font-black text-white">
                8
              </h3>

            </div>

          </div>

        </div>

        {/* CARD */}

        <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl shadow-2xl">

          <div className="flex items-center gap-4 mb-5">

            <div className="bg-yellow-500/20 p-4 rounded-2xl">

              <Clock3
                className="text-yellow-400"
                size={32}
              />

            </div>

            <div>

              <p className="text-gray-400">
                Bekleyen
              </p>

              <h3 className="text-4xl font-black text-white">
                4
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* TABLE */}

      <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="text-left border-b border-white/10 text-gray-300">

                <th className="p-5">
                  Çalışan
                </th>

                <th className="p-5">
                  İzin Türü
                </th>

                <th className="p-5">
                  Gün
                </th>

                <th className="p-5">
                  Durum
                </th>

              </tr>

            </thead>

            <tbody>

              {leaveRequests.map(
                (leave) => (

                  <tr
                    key={leave.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-all duration-300"
                  >

                    <td className="p-5 text-white font-semibold">
                      {leave.employee}
                    </td>

                    <td className="p-5 text-gray-300">
                      {leave.type}
                    </td>

                    <td className="p-5 text-gray-300">
                      {leave.days} Gün
                    </td>

                    <td className="p-5">

                      {leave.status === "Onaylandı" && (

                        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-xl inline-block">
                          Onaylandı
                        </div>

                      )}

                      {leave.status === "Bekliyor" && (

                        <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-xl inline-block">
                          Bekliyor
                        </div>

                      )}

                      {leave.status === "Reddedildi" && (

                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-xl inline-block">
                          Reddedildi
                        </div>

                      )}

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}