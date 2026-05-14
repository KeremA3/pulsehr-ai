import {
  FileText,
  Download,
  FileSpreadsheet,
  BarChart3,
  BrainCircuit
} from "lucide-react";

export default function ReportsSystem() {

  const reports = [

    {
      id: 1,
      title: "Attendance Report",
      description: "Çalışan giriş / çıkış analiz raporu",
      type: "PDF"
    },

    {
      id: 2,
      title: "AI Risk Analysis",
      description: "AI destekli departman risk raporu",
      type: "PDF"
    },

    {
      id: 3,
      title: "Employee Database",
      description: "Tüm çalışan verileri export sistemi",
      type: "EXCEL"
    },

    {
      id: 4,
      title: "Monthly Performance",
      description: "Aylık performans değerlendirmesi",
      type: "PDF"
    }

  ];

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            Enterprise Reports
          </p>

          <h2 className="text-5xl font-black text-white">
            Raporlama Sistemi
          </h2>

        </div>

        <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
          AI Report Engine Active
        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-6">

        {reports.map(
          (report) => (

            <div
              key={report.id}
              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >

              {/* TOP */}

              <div className="flex items-start justify-between mb-8">

                <div className="bg-blue-500/20 p-5 rounded-3xl">

                  {report.type === "PDF" ? (

                    <FileText
                      className="text-blue-400"
                      size={36}
                    />

                  ) : (

                    <FileSpreadsheet
                      className="text-green-400"
                      size={36}
                    />

                  )}

                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-xl">

                  {report.type}

                </div>

              </div>

              {/* CONTENT */}

              <h3 className="text-3xl font-black text-white leading-tight">
                {report.title}
              </h3>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                {report.description}
              </p>

              {/* STATS */}

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="bg-black/20 rounded-2xl p-4">

                  <div className="flex items-center gap-3 mb-3">

                    <BarChart3
                      className="text-blue-400"
                      size={22}
                    />

                    <span className="text-gray-300">
                      Analiz
                    </span>

                  </div>

                  <h4 className="text-2xl font-black text-white">
                    Active
                  </h4>

                </div>

                <div className="bg-black/20 rounded-2xl p-4">

                  <div className="flex items-center gap-3 mb-3">

                    <BrainCircuit
                      className="text-purple-400"
                      size={22}
                    />

                    <span className="text-gray-300">
                      AI Score
                    </span>

                  </div>

                  <h4 className="text-2xl font-black text-green-400">
                    96
                  </h4>

                </div>

              </div>

              {/* BUTTON */}

              <button className="w-full mt-8 flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.01] transition-all duration-300 py-5 rounded-3xl text-white font-bold text-lg shadow-2xl">

                <Download size={24} />

                Raporu İndir

              </button>

            </div>
          )
        )}

      </div>

    </div>
  );
}