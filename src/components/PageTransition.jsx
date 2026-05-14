export default function PageTransition({

  children

}) {

  return (

    <div className="animate-[fadeIn_0.5s_ease]">

      {children}

      <style>

        {`
          @keyframes fadeIn {

            from {

              opacity: 0;
              transform: translateY(20px);

            }

            to {

              opacity: 1;
              transform: translateY(0);

            }
          }
        `}

      </style>

    </div>
  );
}