export default function PremiumSkeleton() {

  return (

    <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

      {[1, 2, 3, 4].map((item) => (

        <div
          key={item}
          className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[28px] p-6 backdrop-blur-[30px]"
        >

          {/* TITLE */}

          <div className="w-[120px] h-4 rounded-full bg-white/10" />

          {/* VALUE */}

          <div className="w-[90px] h-10 rounded-full bg-white/10 mt-6" />

        </div>

      ))}

    </div>
  );
}