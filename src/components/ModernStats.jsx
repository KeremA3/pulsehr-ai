import {

  useEffect,
  useState

} from "react";

import PremiumSkeleton from "./PremiumSkeleton";

export default function ModernStats() {

  const [loading,
    setLoading] =
    useState(true);

  const [counts,
    setCounts] =
    useState({

      employees: 0,
      departments: 0,
      efficiency: 0,
      stability: 0

    });

  /* LOADING */

  useEffect(() => {

    const timeout =
      setTimeout(() => {

        setLoading(false);

      }, 1400);

    return () =>
      clearTimeout(
        timeout
      );

  }, []);

  /* COUNTER */

  useEffect(() => {

    if (loading) return;

    const interval =
      setInterval(() => {

        setCounts((prev) => ({

          employees:
            prev.employees < 248
              ? prev.employees + 4
              : 248,

          departments:
            prev.departments < 12
              ? prev.departments + 1
              : 12,

          efficiency:
            prev.efficiency < 98
              ? prev.efficiency + 2
              : 98,

          stability:
            prev.stability < 99
              ? prev.stability + 2
              : 99

        }));

      }, 35);

    return () =>
      clearInterval(
        interval
      );

  }, [loading]);

  /* LOADING */

  if (loading) {

    return <PremiumSkeleton />;
  }

  const stats = [

    {
      id: 1,
      title: "Toplam Çalışan",
      value:
        counts.employees,
      suffix: "",
      color: "text-cyan-400"
    },

    {
      id: 2,
      title: "Aktif Departman",
      value:
        counts.departments,
      suffix: "",
      color: "text-purple-400"
    },

    {
      id: 3,
      title: "AI Verimlilik",
      value:
        counts.efficiency,
      suffix: "%",
      color: "text-green-400"
    },

    {
      id: 4,
      title: "Sistem Stabilitesi",
      value:
        counts.stability,
      suffix: "%",
      color: "text-orange-400"
    }

  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

      {stats.map((stat) => (

        <div
          key={stat.id}
          className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[28px] p-6 backdrop-blur-[30px]"
        >

          {/* GLOW */}

          <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-cyan-500/10 rounded-full blur-[50px]" />

          {/* CONTENT */}

          <div className="relative z-10">

            <p className="text-gray-400 text-sm uppercase tracking-[4px]">
              {stat.title}
            </p>

            <h2 className={`text-4xl font-black mt-5 ${stat.color}`}>

              {stat.value}

              {stat.suffix}

            </h2>

          </div>

        </div>

      ))}

    </div>
  );
}