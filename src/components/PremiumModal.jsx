export default function PremiumModal({

  open,
  onClose,
  title,
  children

}) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-[10px] p-6">

      {/* MODAL */}

      <div className="relative overflow-hidden w-full max-w-[850px] bg-[#081120]/95 border border-white/10 rounded-[45px] p-10 shadow-[0_0_120px_rgba(59,130,246,0.18)]">

        {/* GLOW */}

        <div className="absolute top-[-80px] right-[-80px] w-[240px] h-[240px] bg-cyan-500/20 rounded-full blur-[120px]" />

        {/* CONTENT */}

        <div className="relative z-10">

          {/* HEADER */}

          <div className="flex items-start justify-between gap-6">

            <div>

              <p className="text-cyan-400 uppercase tracking-[5px] text-sm font-semibold mb-4">
                Enterprise Detail Panel
              </p>

              <h2 className="text-6xl font-black text-white tracking-[-3px] leading-[0.95]">

                {title}

              </h2>

            </div>

            <button
              onClick={onClose}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white text-2xl hover:bg-white/10 transition-all duration-300"
            >

              ×

            </button>

          </div>

          {/* BODY */}

          <div className="mt-10">

            {children}

          </div>

        </div>

      </div>

    </div>
  );
}