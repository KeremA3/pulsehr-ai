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

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      {/* LOGIN CARD */}

      <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

        {/* LOGO */}

        <div className="mb-10 text-center">

          <p className="text-blue-400 tracking-[5px] uppercase font-semibold mb-4">
            PulseHR AI
          </p>

          <h1 className="text-5xl font-black text-white leading-tight">
            Hoş
            <br />
            Geldiniz
          </h1>

          <p className="text-gray-400 mt-5 leading-7">
            Yapay zekâ destekli yeni nesil
            insan kaynakları yönetim sistemi.
          </p>

        </div>

        {/* INPUTS */}

        <div className="space-y-5">

          {/* EMAIL */}

          <div>

            <label className="text-gray-300 text-sm mb-2 block">
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

            <label className="text-gray-300 text-sm mb-2 block">
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
              className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-300"
            />

          </div>

        </div>

        {/* BUTTON */}

        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition-all duration-300 text-white font-bold py-4 rounded-2xl shadow-2xl"
        >
          Giriş Yap
        </button>

        {/* FOOTER */}

        <div className="mt-8 text-center text-gray-500 text-sm leading-6">

          Enterprise AI destekli HR platformu.
          <br />
          Güvenli giriş sistemi aktif.

        </div>

      </div>

    </div>
  );
}