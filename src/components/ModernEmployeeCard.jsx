export default function ModernEmployeeCard({

  employee,
  onDelete

}) {

  const initials =
    employee.name
      ?.split(" ")
      .map(
        (word) =>
          word[0]
      )
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-[30px] hover:scale-[1.01] transition-all duration-300">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-cyan-500/10 rounded-full blur-[60px]" />

      {/* CONTENT */}

      <div className="relative z-10 flex items-center justify-between gap-5">

        {/* LEFT */}

        <div className="flex items-center gap-5">

          {/* AVATAR */}

          <div className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-black shadow-[0_0_35px_rgba(34,211,238,0.35)]">

            {initials}

          </div>

          {/* INFO */}

          <div>

            <h3 className="text-2xl font-black text-white">
              {employee.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {employee.department}
            </p>

          </div>

        </div>

        {/* DELETE */}

        <button
          onClick={() =>
            onDelete(
              employee.id
            )
          }
          className="px-5 py-3 rounded-[18px] bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold hover:scale-105 transition-all duration-300"
        >

          Sil

        </button>

      </div>

    </div>
  );
}