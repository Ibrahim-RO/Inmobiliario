import Login from "@/components/auth/Login";

export default function Home() {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("/fondoLogin.png")'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 bg-white/95 flex w-[900px] h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <div className="w-1/2 h-full">
          <img
            src="/edificios.png"
            alt="Edificios"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 p-10 flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AGENCIA INMOBILIARIA</h1>
            <h2 className="text-xl mt-1 text-gray-600">Bienvenido a tu portal</h2>
          </div>

          <Login />
        </div>
      </div>
    </section>
  );
}
