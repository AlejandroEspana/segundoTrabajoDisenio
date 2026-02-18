import Image from "next/image";

export default function Home() {
  // URLs de las imágenes de fondo
  const liamImageUrl = "https://images.unsplash.com/photo-1557672172-298e090d0f80?w=500&h=300&fit=crop";
  const alexImageUrl = "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=300&fit=crop";
  
  // URLs de los perfiles
  const liamProfileUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYHaD2MIX6VtuBBKiV9YnaJgHMAKP0hr7QA&s";
  const alexProfileUrl = "https://static.vecteezy.com/system/resources/thumbnails/047/493/988/small/hairy-fluffy-cat-playing-png.png";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      {/* Grid container para las dos tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        
        {/* Tarjeta 1 - Liam O'Connor (Oscura) */}
        <div className="bg-black rounded-3xl overflow-hidden shadow-2xl w-full h-96 flex flex-col">
          
          {/* Sección superior con imagen de fondo */}
          <div 
            className="relative h-40 bg-cover bg-center flex items-start justify-between p-4"
            style={{
              backgroundImage: `url('https://media.istockphoto.com/id/2149296478/es/vector/mascotas-sin-costuras-gato-y-perro-patr%C3%B3n-de-fondo-del-tema-de-animales.jpg?s=612x612&w=0&k=20&c=fhjtCSfX6AanOTNRzlEFNbcYfwIAq0X1t4Nmv7g43gU=')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Foto de perfil en esquina superior izquierda */}
            <div className="relative z-1 pt-20">
              <div className="w-20 h-20 rounded-full bg-gray-800 border-4 border-black flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src={liamProfileUrl}
                  alt="Liam O'Connor"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Badge "Things" en esquina superior derecha */}
            <div className="relative z-10 mt-25 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1 rounded-full">
              <span className="text-blue-400">✓</span>
              <span className="text-white text-xs font-bold">Dog</span>
            </div>
          </div>
          
          {/* Sección inferior con contenido */}
          <div className="flex-1 bg-black px-6 py-4 flex flex-col justify-between">
            
            {/* Nombre, profesión e icono */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white text-lg font-bold">Lechona</h3>
                <p className="text-gray-400 text-sm">Playfull</p>
              </div>
              <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-500">
                <span className="text-gray-300 text-xs">⌘</span>
              </div>
            </div>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-white font-bold text-sm">5.0</span>
                </div>
                <span className="text-gray-400 text-xs">Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-blue-400 text-lg">📍</span>
                  <span className="text-white font-bold text-sm">$49</span>
                </div>
                <span className="text-gray-400 text-xs">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-purple-400 text-lg">◉</span>
                  <span className="text-white font-bold text-sm">12</span>
                </div>
                <span className="text-gray-400 text-xs">Month</span>
              </div>
            </div>
            
            {/* Botón Get in Touch */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 rounded-2xl transition duration-200 text-sm">
              Get in Touch
            </button>
          </div>
        </div>
        
        {/* Tarjeta 2 - Alex Turner (Clara) */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full h-96 flex flex-col">
          
          {/* Sección superior con imagen de fondo */}
          <div 
            className="relative h-40 bg-cover bg-center flex items-start justify-between p-4"
            style={{
              backgroundImage: `url('https://img.freepik.com/vector-premium/fondo-transparente-azul-huellas-patas-gato-perro_560021-99.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Foto de perfil en esquina superior izquierda */}
            <div className="relative z-10 pt-20">
              <div className="w-20 h-20 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src={alexProfileUrl}
                  alt="Alex Turner"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Badge "Sketch" en esquina superior derecha */}
            <div className="relative z-10 mt-25 flex items-center gap-1 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
              <span className="text-red-500 text-sm">❤</span>
              <span className="text-gray-700 text-xs font-bold ">Cat</span>
            </div>
          </div>
          
          {/* Sección inferior con contenido */}
          <div className="flex-1 bg-white px-6 py-4 flex flex-col justify-between">
            
            {/* Nombre, profesión e icono */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-gray-900 text-lg font-bold">Don Gato</h3>
                <p className="text-gray-500 text-sm">Sleep</p>
              </div>
              <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                <span className="text-gray-600 text-xs">⌘</span>
              </div>
            </div>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-gray-900 font-bold text-sm">5.0</span>
                </div>
                <span className="text-gray-500 text-xs">Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-blue-500 text-lg">📍</span>
                  <span className="text-gray-900 font-bold text-sm">$150</span>
                </div>
                <span className="text-gray-500 text-xs">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-purple-500 text-lg">◉</span>
                  <span className="text-gray-900 font-bold text-sm">24</span>
                </div>
                <span className="text-gray-500 text-xs">Month</span>
              </div>
            </div>
            
            {/* Botón Get in Touch */}
            <button className="w-full bg-gray-100 hover:bg-gray-400 text-gray-700 font-bold py-3 rounded-2xl transition duration-200 text-sm">
              Get in Touch
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
