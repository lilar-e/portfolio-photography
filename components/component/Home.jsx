"use client"
import Link from "next/link"


export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background px-4 lg:px-6 py-6 border-b">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold text-primary">Leonel Ivan Photography</h1>
          <p className="text-muted-foreground mt-2">Capturing the beauty of the world through my lens.</p>
        </div>
        <title>Portfolio - Leonel Ivan</title>
        <meta property="og:title" content="Fotógrafo Profesional en General Pico, La Pampa"/>
        <meta property="og:description" content="Fotografía de bodas, retratos y paisajes en General Pico, La Pampa. Contáctame para tus proyectos."/>
        <meta property="og:image" content="https://i.postimg.cc/NQtytrcd/DSC5635.jpg"/>
        <meta property="og:url" content="https://portfolio-lilares-projects.vercel.app/"/>
      </header>
              <main className="flex-1">
                <section className="py-12 md:py-20 lg:py-28">
                  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link href="/landscape" className="group relative overflow-hidden rounded-lg shadow-lg">
                      <div className="group relative overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="https://i.postimg.cc/WjRTxcjn/DSC-4600.jpg"
                          width="600"
                          height="400"
                          alt="Photograph 1"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          style={{ aspectRatio: "600/600", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-bold text-primary-foreground">Landscape</h3>
                          <p className="text-primary-foreground mt-2 text-center">A tranquil scene captured in the golden hour and storms.</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="/pets" className="group relative overflow-hidden rounded-lg shadow-lg">
                      <div className="group relative overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="https://i.postimg.cc/1m3wQVDk/DSC-3684.jpg"
                          width="600"
                          height="400"
                          alt="Photograph 2"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          style={{ aspectRatio: "600/600", objectFit: "cover", objectPosition: "top" }}
                        />
                        <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-bold text-primary-foreground">Pets</h3>
                          <p className="text-primary-foreground mt-2">A collection of pets captured in B&W</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="/adrenaline" className="group relative overflow-hidden rounded-lg shadow-lg">
                      <div className="group relative overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="https://i.postimg.cc/NQtytrcd/DSC5635.jpg"
                          width="600"
                          height="400"
                          alt="Photograph 3"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          style={{ aspectRatio: "600/600", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-bold text-primary-foreground">Adrenaline</h3>
                          <p className="text-primary-foreground mt-2">A collection of motorsports</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </section>
                <section className="bg-muted py-12 md:py-20 lg:py-28">
                  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="text-3xl font-bold text-primary">About me</h2>
                      <p className="text-muted-foreground mt-4">
                        I am a passionate photographer with a deep appreciation for the beauty that surrounds us. My work is a
                        reflection of my personal journey, capturing moments that evoke emotion and inspire wonder. Through my
                        lens, I aim to share my unique perspective and invite others to see the world in a new light.
                      </p>
                      <p className="text-muted-foreground mt-4">
                        With a keen eye for detail and a commitment to technical excellence, I strive to create images that are
                        not only visually stunning but also deeply meaningful. Whether I&apos;m exploring the grandeur of nature or
                        the intricacies of the human experience, my goal is to tell a story that resonates with the viewer and
                        leaves a lasting impression.
                      </p>

                      <div className="mt-6 flex flex-col md:flex-row gap-4">
                        <Link target="_blank"
                          href="https://www.instagram.com/livank99/"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                          prefetch={false}
                        >
                          <InstagramIcon className="h-5 w-5" />
                          <span>Instagram</span>
                        </Link>
                        <Link target="_blank"
                          href="mailto:picod3v@gmail.com"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                          prefetch={false}
                        >
                          <MailIcon className="h-5 w-5" />
                          <span>Email</span>
                        </Link>
                        <Link target="_blank"
                          href="https://wa.me/542302354543"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                          prefetch={false}
                        >
                          <PhoneIcon className="h-5 w-5" />
                          <span>WhatsApp</span>
                        </Link>
                      </div>
                    </div>
                    <img
                      src="https://i.postimg.cc/KG9nr6s6/DSC-0149.jpg"
                      width="600"
                      height="500"
                      alt="Photographer"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                  </div>
                </section>
              </main>
            </div>
            )
}

            function InstagramIcon(props) {
  return (
            <svg
              {...props}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            )
}


            function MailIcon(props) {
  return (
            <svg
              {...props}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            )
}


            function PhoneIcon(props) {
  return (
            <svg
              {...props}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            )
}