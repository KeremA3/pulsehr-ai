import {

  useEffect,
  useState

} from "react";

import {

  getAttendanceLogs

} from "../firebase/firestoreService";

export default function AdminAttendancePanel() {

  const [logs,
    setLogs] =
    useState([]);

  /* LOAD */

  const loadLogs =
    async () => {

      const data =
        await getAttendanceLogs();

      setLogs(data);
    };

  useEffect(() => {

    loadLogs();

  }, []);

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px]">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-cyan-500/10 rounded-full blur-[60px]" />

      {/* HEADER */}

      <div className="relative z-10 mb-6">

        <p className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
          Attendance Takibi
        </p>

        <h2 className="text-3xl font-black text-white">
          Canlı Personel Hareketleri
        </h2>

      </div>

      {/* LIST */}

      <div className="space-y-4">

        {logs.map((log) => (

          <div
            key={log.id}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-black/20 border border-white/10 rounded-[22px] px-5 py-4"
          >

            {/* LEFT */}

            <div>

              <h3 className="text-white font-bold text-lg">
                {log.employeeName}
              </h3>

              <p className="text-gray-400 text-sm mt-1">

                {
                  log.type ===
                  "check-in"

                    ? "Mesaiye giriş yaptı"

                    : "Mesaiyi bitirdi"
                }

              </p>

            </div>

            {/* STATUS */}

            <div
              className={`px-4 py-2 rounded-2xl text-sm font-bold

              ${
                log.type ===
                "check-in"

                  ? "bg-green-500/10 text-green-400 border border-green-500/20"

                  : "bg-red-500/10 text-red-400 border border-red-500/20"
              }
              `}
            >

              {
                log.type ===
                "check-in"

                  ? "Giriş"

                  : "Çıkış"
              }

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}