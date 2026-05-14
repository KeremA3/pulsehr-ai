import {
  User,
  Mail,
  Briefcase,
  CalendarDays,
  ShieldCheck,
  BrainCircuit
} from "lucide-react";

export default function ProfileSystem() {

  const employees = [

    {
      id: 1,
      name: "Ahmet Yılmaz",
      role: "Frontend Developer",
      email: "ahmet@pulsehr.ai",
      department: "Yazılım",
      score: 94,
      joined: "2024"
    },

    {
      id: 2,
      name: "Ayşe Demir",
      role: "HR Specialist",
      email: "ayse@pulsehr.ai",
      department: "İnsan Kaynakları",
      score: 88,
      joined: "2023"
    },

    {
      id: 3,
      name: "Mehmet Kaya",
      role: "Operations Manager",
      email: "mehmet@pulsehr.ai",
      department: "Operasyon",
      score: 91,
      joined: "2022"
    }

  ];

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            Employee Profiles
          </p>

          <h2 className="text-5xl font-black text-white">
            Çalışan Profilleri
          </h2>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
          AI Profile Engine Active
        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-3 gap-6">

        {employees.map(
          (employee) => (

            <div
              key={employee.id}
              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >

              {/* AVATAR */}

              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-4xl font-black text-white mb-6">

                {employee.name.charAt(0)}

              </div>

              {/* NAME */}

              <h3 className="text-3xl font-black text-white">
                {employee.name}
              </h3>

              <p className="text-blue-400 mt-2 text-lg">
                {employee.role}
              </p>

              {/* INFO */}

              <div className="mt-8 space-y-4">

                {/* EMAIL */}

                <div className="flex items-center gap-4 bg-black/20 rounded-2xl p-4">

                  <Mail className="text-green-400" />

                  <span className="text-gray-300">
                    {employee.email}
                  </span>

                </div>

                {/* DEPARTMENT */}

                <div className="flex items-center gap-4 bg-black/20 rounded-2xl p-4">

                  <Briefcase className="text-purple-400" />

                  <span className="text-gray-300">
                    {employee.department}
                  </span>

                </div>

                {/* JOINED */}

                <div className="flex items-center gap-4 bg-black/20 rounded-2xl p-4">

                  <CalendarDays className="text-yellow-400" />

                  <span className="text-gray-300">
                    {employee.joined} yılında katıldı
                  </span>

                </div>

              </div>

              {/* AI SCORE */}

              <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-5">

                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-3">

                    <BrainCircuit className="text-blue-400" />

                    <span className="text-white font-semibold">
                      AI Performans
                    </span>

                  </div>

                  <span className="text-3xl font-black text-green-400">
                    {employee.score}
                  </span>

                </div>

                <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                    style={{
                      width: `${employee.score}%`
                    }}
                  />

                </div>

              </div>

              {/* STATUS */}

              <div className="mt-6 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="w-3 h-3 rounded-full bg-green-400" />

                  <span className="text-green-400 font-semibold">
                    Online
                  </span>

                </div>

                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-xl">

                  Active
                </div>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}