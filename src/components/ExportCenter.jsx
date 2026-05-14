import {
  FileSpreadsheet,
  FileText,
  Database,
  Download,
  ShieldCheck,
  BrainCircuit
} from "lucide-react";

export default function ExportCenter() {

  const exports = [

    {
      id: 1,
      title: "Employee Excel Export",
      description:
        "Tüm çalışan verilerini Excel formatında dışa aktar.",
      icon: (
        <FileSpreadsheet
          className="text-green-400"
          size={38}
        />
      ),
      button: "Excel İndir"
    },

    {
      id: 2,
      title: "Attendance PDF Report",
      description:
        "Attendance ve giriş çıkış raporlarını PDF oluştur.",
      icon: (
        <FileText
          className="text-red-400"
          size={38}
        />
      ),
      button: "PDF Oluştur"
    },

    {
      id: 3,
      title: "AI Analytics Export",
      description:
        "AI analiz sonuçlarını export sistemine aktar.",
      icon: (
        <BrainCircuit
          className="text-pink-400"
          size={38}
        />
      ),
      button: "AI Export"
    },

    {
      id: 4,
      title: "Database Backup",
      description:
        "Realtime Firebase database backup sistemi.",
      icon: (
        <Database
          className="text-blue-400"
          size={38}
        />
      ),
      button: "Backup Oluştur"
    }

  ];

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            Export Center
          </p>

          <h2 className="text-5xl font-black text-white">
            Export & Backup
          </h2>

        </div>

        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
          Enterprise Export Active
        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-6">

        {exports.map(
          (item) => (

            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >

              {/* TOP */}

              <div className="flex items-start justify-between mb-8">

                <div className="bg-black/20 p-5 rounded-3xl">

                  {item.icon}

                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-xl">
                  Secure
                </div>

              </div>

              {/* CONTENT */}

              <h3 className="text-3xl font-black text-white leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                {item.description}
              </p>

              {/* STATUS */}

              <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-5">

                <div className="flex items-center gap-4">

                  <ShieldCheck
                    className="text-green-400"
                    size={28}
                  />

                  <div>

                    <p className="text-white font-semibold">
                      Enterprise Security
                    </p>

                    <p className="text-gray-400 mt-1">
                      Export işlemleri güvenli şekilde korunuyor.
                    </p>

                  </div>

                </div>

              </div>

              {/* BUTTON */}

              <button className="w-full mt-8 flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition-all duration-300 py-5 rounded-3xl text-white font-bold text-lg shadow-2xl">

                <Download size={24} />

                {item.button}

              </button>

            </div>
          )
        )}

      </div>

    </div>
  );
}