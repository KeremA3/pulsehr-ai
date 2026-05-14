export default function FloatingBackground() {

  return (

    <>

      {/* CYAN */}

      <div className="absolute top-[10%] left-[10%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse" />

      {/* PURPLE */}

      <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[140px] animate-pulse" />

      {/* BLUE */}

      <div className="absolute top-[40%] right-[30%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />

    </>
  );
}