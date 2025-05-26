export function Hero() {
  return (
    <div className="relative bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tecnología Premium Reacondicionada
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Equipos de alta gama a precios increíbles. Calidad garantizada y compromiso medioambiental.
          </p>
          <div className="flex gap-4">
            <a
              href="/productos"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Ver Productos
            </a>
            <a
              href="/como-funciona"
              className="bg-gray-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Cómo Funciona
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}