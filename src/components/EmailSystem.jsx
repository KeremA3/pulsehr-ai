import {
  Mail,
  Send,
  Bell,
  ShieldCheck,
  BrainCircuit,
  CheckCircle2
} from "lucide-react";

export default function EmailSystem() {

  const emails = [

    {
      id: 1,
      title: "İzin Onay Maili",
      description:
        "Çalışana otomatik izin onay maili gönderilir.",
      status: "Aktif"
    },

    {
      id: 2,
      title: "Hoş Geldin Maili",
      description:
        "Yeni çalışan sisteme eklenince welcome mail gönderilir.",
      status: "Aktif"
    },

    {
      id: 3,
      title: "AI Risk Bildirimi",
      description:
        "AI risk analizi admin mailine iletilir.",
      status: "Monitoring"
    },

    {
      id: 4,
      title: "Attendance Alert",
      description:
        "Geç kalan çalışan raporları yöneticilere gönderilir.",
      status: "Live"
    }

  ];

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="text-blue-400 tracking-[4px] uppercase font-semibold mb-3">
            Email Automation
          </p>

          <h2 className="text-5xl font-black text-white">
            Email System
          </h2>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-2xl backdrop-blur-xl">
          SMTP Automation Active
        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-6">

        {emails.map(
          (email) => (

            <div
              key={email.id}
              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >

              {/* TOP */}

              <div className="flex items-start justify-between mb-8">

                <div className="bg-black/20 p-5 rounded-3xl">

                  <Mail
                    className="text-blue-400"
                    size={38}
                  />

                </div>

                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-xl">
                  {email.status}
                </div>

              </div>

              {/* CONTENT */}

              <h3 className="text-3xl font-black text-white leading-tight">
                {email.title}
              </h3>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                {email.description}
              </p>

              {/* STATUS */}

              <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-5">

                <div className="flex items-center gap-4">

                  <BrainCircuit
                    className="text-pink-400"
                    size={28}
                  />

                  <div>

                    <p className="text-white font-semibold">
                      Smart Email Automation
                    </p>

                    <p className="text-gray-400 mt-1">
                      Sistem otomatik email senaryolarını yönetiyor.
                    </p>

                  </div>

                </div>

              </div>

              {/* BUTTON */}

              <button className="w-full mt-8 flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:scale-[1.02] transition-all duration-300 py-5 rounded-3xl text-white font-bold text-lg shadow-2xl">

                <Send size={24} />

                Mail Sistemini Yönet

              </button>

            </div>
          )
        )}

      </div>

      {/* FOOTER */}

      <div className="mt-8 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-white/10 rounded-[35px] p-6">

        <div className="flex items-center gap-5">

          <div className="bg-black/20 p-4 rounded-2xl">

            <ShieldCheck
              className="text-green-400"
              size={30}
            />

          </div>

          <div>

            <h3 className="text-2xl font-black text-white">
              Enterprise Mail Security
            </h3>

            <p className="text-gray-400 mt-2">
              Tüm email işlemleri güvenli SMTP altyapısıyla korunuyor.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}