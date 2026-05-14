export default function FuturePredictions() {

  const predictions = [

    {
      id: 1,
      title: "Performance Growth",
      value: "+18%",
      color: "text-green-400"
    },

    {
      id: 2,
      title: "Employee Retention",
      value: "92%",
      color: "text-blue-400"
    },

    {
      id: 3,
      title: "Burnout Risk",
      value: "Low",
      color: "text-pink-400"
    }

  ];

  return (

    <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl">

      {/* HEADER */}

      <div className="mb-10">

        <p className="text-cyan-400 tracking-[5px] uppercase text-sm font-semibold mb-4">
          AI Prediction Engine
        </p>

        <h2 className="text-5xl font-black text-white">
          Future Predictions
        </h2>

      </div>

      {/* LIST */}

      <div className="space-y-5">

        {predictions.map(
          (prediction) => (

            <div
              key={prediction.id}
              className="bg-black/20 border border-white/10 rounded-[30px] p-6 flex items-center justify-between"
            >

              <div>

                <h3 className="text-2xl font-black text-white">
                  {prediction.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  AI generated prediction
                </p>

              </div>

              <div className={`text-5xl font-black ${prediction.color}`}>

                {prediction.value}

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}