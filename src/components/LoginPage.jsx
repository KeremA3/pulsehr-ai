import {
  ShieldCheck,
  BrainCircuit,
  Sparkles
} from "lucide-react";

export default function LoginPage({

  email,
  setEmail,

  password,
  setPassword,

  handleLogin

}) {

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black flex items-center justify-center overflow-hidden relative">

      {/* BG EFFECTS */}

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[140px]" />

      {/* GRID */}

      <div className="relative z-10 grid grid-cols-2 gap-10 items-center w-full max-w-7xl px-10">

        {/* LEFT */}

        <div>

          <p className="text-blue-400 tracking-[6px] uppercase font-semibold mb-5">
            PulseHR AI
          </p>

          <h1 className="text-7xl font-black text-white leading-tight">

            Yeni Nesil
            <br />
            İnsan Kaynakları
            <br />
            Platformu

          </h1>

          <p className="text-gray-400 text-xl leading-9 mt-8 max-w-2xl">

            Yapay zekâ destekli enterprise HR sistemi ile
            çalışan yönetimi, canlı analizler ve modern şirket operasyonlarını
            tek platformda yönetin.

          </p>

          {/* FEATURES */}

          <div className="mt-12 space-y-5">

            {/* ITEM */}

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

              <div className="bg-blue-500/20 p-4 rounded-2xl">
                <ShieldCheck className="text-blue-400" size={32} />
              </div>

              <div>

                <h3 className="text-xl font-bold text-white">
                  Enterprise Security
                </h3>

                <p className="text-gray-400 mt-1">
                  Firebase destekli güvenli kimlik doğrulama sistemi.
                </p>

              </div>

            </div>

            {/* ITEM */}

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

              <div className="bg-purple-500/20 p-4 rounded-2xl">
                <BrainCircuit className="text-purple-400" size={32} />
              </div>

              <div>

                <h3 className="text-xl font-bold text-white">
                  AI Analytics
                </h3>

                <p className="text-gray-400 mt-1">
                  Gerçek zamanlı risk analizi ve performans değerlendirmesi.
                </p>

              </div>

            </div>

            {/* ITEM */}

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

              <div className="bg-pink-500/20 p-4 rounded-2xl">
                <Sparkles className="text-pink-400" size={32} />
              </div>

              <div>

                <h3 className="text-xl font-bold text-white">
                  Modern Experience
                </h3>

                <p className="text-gray-400 mt-1">
                  Ultra modern kullanıcı deneyimi ve canlı dashboard sistemi.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

          {/* HEADER */}

          <div className="mb-10">

            <p className="text-blue-400 uppercase tracking-[5px] font-semibold mb-4">
              Güvenli Giriş
            </p>

            <h2 className="text-5xl font-black text-white leading-tight">
              Hoş Geldiniz
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Hesabınıza giriş yaparak
              PulseHR AI platformuna erişin.
            </p>

          </div>

          {/* FORM */}

          <div className="space-y-6">

            {/* EMAIL */}

            <div>

              <label className="block text-gray-300 mb-3">
                Email Adresi
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="ornek@mail.com"
                className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300"
              />

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block text-gray-300 mb-3">
                Şifre
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="••••••••"
                className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300"
              />

            </div>

          </div>

          {/* BUTTON */}

          <button
            onClick={handleLogin}
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition-all duration-300 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl"
          >
            Giriş Yap
          </button>

          {/* FOOTER */}

          <div className="mt-8 text-center text-gray-500 text-sm leading-6">

            Enterprise AI destekli HR platformu.
            <br />
            Gerçek zamanlı güvenli erişim sistemi aktif.

          </div>

        </div>

      </div>

    </div>
  );
}