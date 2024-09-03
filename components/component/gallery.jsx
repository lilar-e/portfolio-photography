
import Link from "next/link"

export function Gallery({ imagenes }) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <title>Portfolio - Leonel Ivan</title>
      <header className="text-white py-8 px-6">
        <nav className="flex justify-center items-center">
          <div className="flex justify-center max-w-16">
            <Link href="/" className="hover:text-gray-300 px-1">Home</Link>
            <Link href="/landscape" className="hover:text-gray-300 px-1">Landscape</Link>
            <Link href="/pets" className="hover:text-gray-300 px-1">Pets</Link>
            <Link href="/adrenaline" className="hover:text-gray-300 px-1">Adrenaline</Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-wrap justify-center">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {imagenes.map((imagen, index) => (
      <div
        key={index}
        className={`divImg ${imagen.classes}`}
        style={{ height: imagen.classes ? "auto" : "250px" }} // Ajusta la altura aquí
      >
        <Image
          src={imagen.url}
          alt={`Photograph ${index}`}
          className={`w-full h-full object-${imagen.objectFit}`}
        />
      </div>
    ))}
  </div>
      </main>
    </div>
  );
}
