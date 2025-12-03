import Login from "@/components/auth/Login";

export default function Home() {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center p-10"
      style={{
        backgroundImage: 'url("/fondoLogin.png")'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 bg-white/95 flex w-[900px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <div className="hidden lg:block w-1/2 h-full">
          <img
            src="/edificios.png"
            alt="Edificios"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2   p-10 flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">AGENCIA INMOBILIARIA</h1>
            <h2 className="text-base md:text-xl mt-1 text-gray-600 text-center lg:text-left">Bienvenido a tu portal</h2>
          </div>

          <Login />
        </div>
      </div>
    </section>
  );
}
