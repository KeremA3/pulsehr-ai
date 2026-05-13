import {
  UserPlus,
  Mail,
  Lock,
  Briefcase,
  User
} from "lucide-react";

export default function EmployeeForm({

  name,
  setName,

  department,
  setDepartment,

  employeeEmail,
  setEmployeeEmail,

  employeePassword,
  setEmployeePassword,

  addEmployee

}) {

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            Employee Creation
          </p>

          <h2 className="text-4xl font-black text-white">
            Yeni Çalışan Oluştur
          </h2>

        </div>

        <div className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-5 py-3 rounded-2xl backdrop-blur-xl">
          AI Supported Recruitment
        </div>

      </div>

      {/* FORM */}

      <div className="grid grid-cols-2 gap-6">

        {/* NAME */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

          <div className="flex items-center gap-3 mb-4">

            <User className="text-blue-400" />

            <label className="text-gray-300 font-semibold">
              Çalışan Adı
            </label>

          </div>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            placeholder="Ahmet Yılmaz"
            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300"
          />

        </div>

        {/* DEPARTMENT */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

          <div className="flex items-center gap-3 mb-4">

            <Briefcase className="text-purple-400" />

            <label className="text-gray-300 font-semibold">
              Departman
            </label>

          </div>

          <select
            value={department}
            onChange={(e) =>
              setDepartment(
                e.target.value
              )
            }
            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-all duration-300"
          >

            <option className="bg-black">
              Yazılım
            </option>

            <option className="bg-black">
              İnsan Kaynakları
            </option>

            <option className="bg-black">
              Muhasebe
            </option>

            <option className="bg-black">
              Pazarlama
            </option>

            <option className="bg-black">
              Operasyon
            </option>

          </select>

        </div>

        {/* EMAIL */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

          <div className="flex items-center gap-3 mb-4">

            <Mail className="text-green-400" />

            <label className="text-gray-300 font-semibold">
              Email Adresi
            </label>

          </div>

          <input
            type="email"
            value={employeeEmail}
            onChange={(e) =>
              setEmployeeEmail(
                e.target.value
              )
            }
            placeholder="calisan@pulsehr.com"
            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300"
          />

        </div>

        {/* PASSWORD */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

          <div className="flex items-center gap-3 mb-4">

            <Lock className="text-red-400" />

            <label className="text-gray-300 font-semibold">
              Şifre
            </label>

          </div>

          <input
            type="password"
            value={employeePassword}
            onChange={(e) =>
              setEmployeePassword(
                e.target.value
              )
            }
            placeholder="••••••••"
            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-all duration-300"
          />

        </div>

      </div>

      {/* BUTTON */}

      <button
        onClick={addEmployee}
        className="mt-8 w-full flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.01] transition-all duration-300 py-5 rounded-3xl text-white font-bold text-xl shadow-2xl"
      >

        <UserPlus size={28} />

        Çalışan Oluştur

      </button>

    </div>
  );
}