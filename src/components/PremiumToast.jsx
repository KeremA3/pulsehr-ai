export default function PremiumToast({

  message,
  type = "success"

}) {

  return (

    <div
      className={`fixed top-8 right-8 z-[9999] px-6 py-5 rounded-[24px] border backdrop-blur-[30px] shadow-2xl animate-[toastIn_.4s_ease]

      ${
        type === "success"

          ? "bg-green-500/10 border-green-500/20 text-green-400"

          : "bg-red-500/10 border-red-500/20 text-red-400"
      }
      `}
    >

      <p className="font-bold text-lg">

        {message}

      </p>

    </div>
  );
}