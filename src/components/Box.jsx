export default function Box({
  title,
  value
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow w-56">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}