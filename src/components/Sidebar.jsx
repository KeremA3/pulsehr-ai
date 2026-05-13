export default function Sidebar() {
  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-black text-white p-6 shadow-2xl">
      <h1 className="text-3xl font-bold mb-10">
        PulseHR AI
      </h1>

      <div className="space-y-5 text-gray-300">
        <p className="hover:text-white cursor-pointer transition">
          Dashboard
        </p>

        <p className="hover:text-white cursor-pointer transition">
          Personeller
        </p>

        <p className="hover:text-white cursor-pointer transition">
          AI Analizi
        </p>

        <p className="hover:text-white cursor-pointer transition">
          Ayarlar
        </p>
      </div>

      <div className="mt-16 p-4 rounded-2xl bg-white/10 backdrop-blur">
        <p className="text-sm text-gray-300">
          PulseHR AI v1.0
        </p>

        <p className="text-xs text-gray-400 mt-2">
          Smart HR Management System
        </p>
      </div>
    </div>
  );
}