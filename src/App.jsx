import { useState } from "react";

import Dashboard from "./components/Dashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";

import {

  loginUser

} from "./firebase/authService";

export default function App() {

  const [loggedIn,
    setLoggedIn] =
    useState(false);

  const [userRole,
    setUserRole] =
    useState(null);

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const [error,
    setError] =
    useState("");

  /* LOGIN */

  const handleLogin =
    async () => {

      try {

        setLoading(true);
        setError("");

        await loginUser(
          email,
          password
        );

        /* SAVE USER */

        localStorage.setItem(
          "pulsehr-user",
          email
        );

        /* ROLE */

        if (
          email ===
          "admin@pulsehr.com"
        ) {

          setUserRole(
            "admin"
          );

        } else {

          setUserRole(
            "employee"
          );
        }

        setLoggedIn(true);

      } catch {

        setError(
          "Email veya şifre hatalı."
        );

      } finally {

        setLoading(false);
      }
    };

  /* ADMIN */

  if (
    loggedIn &&
    userRole === "admin"
  ) {

    return (

      <Dashboard
        handleLogout={() => {

          localStorage.removeItem(
            "pulsehr-user"
          );

          setLoggedIn(false);
          setUserRole(null);

        }}
      />

    );
  }

  /* EMPLOYEE */

  if (
    loggedIn &&
    userRole === "employee"
  ) {

    return (

      <EmployeeDashboard
        handleLogout={() => {

          localStorage.removeItem(
            "pulsehr-user"
          );

          setLoggedIn(false);
          setUserRole(null);

        }}
      />

    );
  }

  /* LOGIN SCREEN */

  return (

    <div className="min-h-screen bg-[#020617] overflow-hidden relative flex">

      {/* LEFT */}

      <div className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden">

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.05]">

          <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:70px_70px]" />

        </div>

        {/* GLOW */}

        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px]" />

        {/* CONTENT */}

        <div className="relative z-10 max-w-[650px] px-16">

          <p className="text-cyan-400 tracking-[7px] uppercase text-sm font-semibold mb-6">
            Kurumsal Yapay Zeka Platformu
          </p>

          <h1 className="text-[110px] font-black text-white leading-[0.9] tracking-[-6px]">

            PulseHR
            <br />
            AI

          </h1>

          <p className="text-gray-400 text-2xl mt-10 leading-[50px]">

            Yeni nesil yapay zeka destekli premium insan kaynakları platformu.

          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-[700px] relative flex items-center justify-center p-10">

        {/* CARD */}

        <div className="relative z-10 w-full max-w-[520px] bg-white/[0.06] border border-white/10 backdrop-blur-[30px] rounded-[50px] p-12 shadow-[0_0_120px_rgba(59,130,246,0.15)] overflow-hidden">

          {/* GLOW */}

          <div className="absolute top-[-50px] right-[-50px] w-[250px] h-[250px] bg-cyan-500/20 rounded-full blur-[100px]" />

          {/* CONTENT */}

          <div className="relative z-10">

            <div className="w-28 h-28 rounded-[35px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-black shadow-[0_0_60px_rgba(34,211,238,0.4)]">

              HR

            </div>

            {/* TITLE */}

            <div className="mt-10">

              <p className="text-cyan-400 tracking-[5px] uppercase text-sm font-semibold mb-4">
                Güvenli Giriş
              </p>

              <h2 className="text-6xl font-black text-white leading-tight">

                Tekrar
                <br />
                Hoş Geldiniz

              </h2>

            </div>

            {/* FORM */}

            <div className="mt-12 space-y-6">

              <input
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="Kurumsal email"
                className="w-full bg-black/20 border border-white/10 rounded-[24px] px-7 py-6 text-white text-xl outline-none"
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
                className="w-full bg-black/20 border border-white/10 rounded-[24px] px-7 py-6 text-white text-xl outline-none"
              />

              {/* ERROR */}

              {error && (

                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-4 rounded-2xl">

                  {error}

                </div>

              )}

              {/* BUTTON */}

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.015] transition-all duration-300 py-6 rounded-[24px] text-white font-black text-2xl shadow-[0_0_60px_rgba(34,211,238,0.35)]"
              >

                {
                  loading

                    ? "Giriş Yapılıyor..."

                    : "Platforma Giriş Yap"
                }

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}