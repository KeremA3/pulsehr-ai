import {

  useState

} from "react";

import {

  loginUser

} from "../firebase/authService";

import PremiumToast from "./PremiumToast";

export default function Login() {

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [toast,
    setToast] =
    useState(null);

  /* LOGIN */

  const handleLogin =
    async () => {

      try {

        await loginUser(

          email,
          password

        );

      } catch {

        setToast(
          "Giriş başarısız."
        );

        setTimeout(() => {

          setToast(null);

        }, 2500);
      }
    };

  return (

    <>

      {toast && (

        <PremiumToast
          message={toast}
          type="error"
        />

      )}

      <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#081120] to-black flex items-center justify-center p-6">

        <div className="relative overflow-hidden w-full max-w-[520px] bg-white/[0.04] border border-white/10 rounded-[40px] p-10 backdrop-blur-[30px]">

          {/* GLOW */}

          <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-cyan-500/10 rounded-full blur-[80px]" />

          {/* CONTENT */}

          <div className="relative z-10">

            <p className="text-cyan-400 uppercase tracking-[5px] text-xs font-semibold mb-4">
              PulseHR AI
            </p>

            <h1 className="text-5xl font-black text-white leading-tight">
              Enterprise Workforce Platform
            </h1>

            <p className="text-gray-400 mt-5 leading-8">
              Modern insan kaynakları yönetim sistemi.
            </p>

            {/* FORM */}

            <div className="mt-10 space-y-5">

              <input
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="Email adresi"
                className="w-full bg-black/20 border border-white/10 rounded-[24px] px-6 py-5 text-white outline-none"
              />

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="Şifre"
                className="w-full bg-black/20 border border-white/10 rounded-[24px] px-6 py-5 text-white outline-none"
              />

            </div>

            {/* BUTTON */}

            <button
              onClick={handleLogin}
              className="w-full mt-8 py-5 rounded-[24px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-lg shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:scale-[1.02] transition-all duration-300"
            >

              Giriş Yap

            </button>

          </div>

        </div>

      </div>

    </>

  );
}