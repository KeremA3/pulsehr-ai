export default function PremiumSectionHeader({

  title,
  description

}) {

  return (

    <div className="mb-10">

      <p className="text-cyan-400 tracking-[6px] uppercase text-sm font-semibold mb-4">
        Enterprise Workspace
      </p>

      <h1 className="text-7xl font-black text-white tracking-[-4px] leading-[0.95]">

        {title}

      </h1>

      <p className="text-gray-400 text-2xl mt-6 max-w-[850px] leading-[44px]">

        {description}

      </p>

    </div>
  );
}