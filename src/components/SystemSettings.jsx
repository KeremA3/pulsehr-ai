import {

  useTheme

} from "../context/ThemeContext";

export default function SystemSettings() {

  const {

    theme,
    setTheme

  } = useTheme();

  return (

    <div className="space-y-8">

      {/* THEME */}

      <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-7 backdrop-blur-[30px]">

        {/* GLOW */}

        <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-cyan-500/10 rounded-full blur-[60px]" />

        {/* CONTENT */}

        <div className="relative z-10">

          <p className="text-cyan-400 uppercase tracking-[5px] text-xs font-semibold mb-4">
            Tema Sistemi
          </p>

          <h2 className="text-4xl font-black text-white">
            Görünüm Modu
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Premium arayüz görünümünü yönetin.
          </p>

          {/* OPTIONS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

            {/* DARK */}

            <button
              onClick={() =>
                setTheme("dark")
              }
              className={`rounded-[28px] p-6 border transition-all duration-300 text-left

              ${
                theme === "dark"

                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white"

                  : "bg-white/[0.04] border-white/10 text-gray-300"
              }
              `}
            >

              <h3 className="text-2xl font-black">
                Dark Mode
              </h3>

              <p className="mt-3 text-sm opacity-70">
                Sinematik premium görünüm
              </p>

            </button>

            {/* LIGHT */}

            <button
              onClick={() =>
                setTheme("light")
              }
              className={`rounded-[28px] p-6 border transition-all duration-300 text-left

              ${
                theme === "light"

                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 border-yellow-300 text-white"

                  : "bg-white/[0.04] border-white/10 text-gray-300"
              }
              `}
            >

              <h3 className="text-2xl font-black">
                Light Mode
              </h3>

              <p className="mt-3 text-sm opacity-70">
                Temiz modern görünüm
              </p>

            </button>

            {/* AUTO */}

            <button
              className="rounded-[28px] p-6 border bg-white/[0.04] border-white/10 text-gray-300 text-left"
            >

              <h3 className="text-2xl font-black">
                Auto Mode
              </h3>

              <p className="mt-3 text-sm opacity-70">
                Sistem temasını kullan
              </p>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}