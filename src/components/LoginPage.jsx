export default function LoginPage({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[420px]">
        <h1 className="text-4xl font-bold mb-2 text-center">
          PulseHR AI
        </h1>

        <p className="text-gray-500 text-center mb-8">
          HR Management Platform
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-xl"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            Giriş Yap
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-500 text-center">
          Demo giriş:
          <br />
          admin@pulsehr.com
          <br />
          123456
        </div>
      </div>
    </div>
  );
}