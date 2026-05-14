import { useState } from "react";

import PremiumModal from "./PremiumModal";

export default function QuickActions() {

  const [selectedAction,
    setSelectedAction] =
    useState(null);

  const actions = [

    {
      id: 1,
      title: "Rapor Oluştur",
      glow: "from-cyan-500 to-blue-600",
      description:
        "Yapay zeka destekli kurumsal çalışan raporları oluşturulur."
    },

    {
      id: 2,
      title: "AI Çalışan Taraması",
      glow: "from-purple-500 to-pink-600",
      description:
        "Gerçek zamanlı neural workforce analiz sistemi."
    },

    {
      id: 3,
      title: "Bulut Senkronizasyonu",
      glow: "from-green-500 to-emerald-600",
      description:
        "Premium cloud sync sistemi aktif durumda."
    }

  ];

  return (

    <>

      {/* GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {actions.map(
          (action) => (

            <button
              key={action.id}
              onClick={() =>
                setSelectedAction(action)
              }
              className={`relative overflow-hidden rounded-[28px] p-6 bg-gradient-to-r ${action.glow} text-white text-left shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:scale-[1.02] transition-all duration-300`}
            >

              <div className="relative z-10">

                <p className="text-xs uppercase tracking-[4px] opacity-70">
                  Hızlı İşlem
                </p>

                <h3 className="text-2xl font-black mt-4 leading-tight">

                  {action.title}

                </h3>

              </div>

            </button>
          )
        )}

      </div>

      {/* MODAL */}

      <PremiumModal
        open={!!selectedAction}
        onClose={() =>
          setSelectedAction(null)
        }
        title={selectedAction?.title}
      >

        <div className="space-y-6">

          <div className="bg-white/[0.04] border border-white/10 rounded-[28px] p-6">

            <p className="text-gray-300 text-xl leading-[38px]">

              {selectedAction?.description}

            </p>

          </div>

        </div>

      </PremiumModal>

    </>
  );
}