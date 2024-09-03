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
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/landscape" className="group relative overflow-hidden rounded-lg shadow-lg">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://previews.dropbox.com/p/thumb/ACa4FWy2wZI6Wkjd_5f6X-5eBO5j4uMUWKtLMU4i8J_R42qywvtM4kZKSwNCDY7j1wxTVhWOstEFilnu4_f_MIV458Y_twiOYFPDnGV6NxGZiVxd0htiiC-fhKYeWK-REE2JF2YLPQ9LkoRlBX8gYiZCNQmIDnkFmPuTxMEyxzbbynrSO-pInMT37G8vPzcJPCFYsr9kI33mQT9_T1pQzGV_3Ux2kCB7--v_EF0hH3khx6wtf5jbxTsct18I3aTvomRJ-sJji4c_ocHoo1WEhQVRGTUxo4yjXgMoAHv3mx-2ivqL8-DegL6GNhBjT2WgBR0/p.jpeg"
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
                  src="https://previews.dropbox.com/p/thumb/ACYBHhwfl8Jgt81SIjTMyxIVdO9aSsLaSiCcAyvVdmtE-gksl42cbJydKd77ZzAQ7f1ryt1BXMbK18-mrFwvZ6QTcq1J3raOlVaAZ769MvYiFdGqLMvjhm55I7igE0cQlEMLMZvjc4vpSpsP0iAmn_9SYcZtRsPl9201CUTl02leUvZOUAuUKJUWYlqq4FbqCDx0gfE6SfM73m_K6M85X9eF80cdBqz7mmExcwRWdUTFSjb5doc9DY_wCuRYeF84DlTEa6kXeRUB2Nag7KpVMzKF5KQT6s1CVV_-uuxMbb5hT0l5tgjt5WwTB4r_EVvZTn4/p.jpeg"
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
                src="https://previews.dropbox.com/p/thumb/ACaZZJoB3GxONsp0Q60sAk_y3Z2OcW_2UBAccitB5EElcTyv20UGpWZYjrEBcM-wGm_uvIP7mt8BbE2VLPDYQXhjH8IfHz7vtiA4-hwd6OUSUAxZbW-daxlF3V8CLRtl0GJ4sZP85HwcnFUux6PSY0DUs6VOSwhy0LGEFJgadaFTUbDqS-jUiEgtWs9Do8lDPyH8DYKFCKd-jnHVTeNDuAmrn8XmMDVI7y9l_i5lWdtgp7_nhr-xKKKuP9n_Fvtas0H-SePmyTqN6CBs881DXJyPKxWQlg8IIIbCo7kcDRRjgbcNxDq_xefvl1aYRFQf3-OJQH-eZTA9nZYzuNh_iX3t/p.jpeg"
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
              <h2 className="text-3xl font-bold text-primary">About the Photographer</h2>
              <p className="text-muted-foreground mt-4">
                I am a passionate photographer with a deep appreciation for the beauty that surrounds us. My work is a
                reflection of my personal journey, capturing moments that evoke emotion and inspire wonder. Through my
                lens, I aim to share my unique perspective and invite others to see the world in a new light.
              </p>
              <p className="text-muted-foreground mt-4">
                With a keen eye for detail and a commitment to technical excellence, I strive to create images that are
                not only visually stunning but also deeply meaningful. Whether I'm exploring the grandeur of nature or
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
              src="https://previews.dropbox.com/p/thumb/ACYhUtZ99crpvvu7Vhds9AQ_tvuSYxjRVojnB54D9i9CMIIfysYHPdXqiaGfgPWCuOm27ut5uXfqtb1IncerRTXtR1eB_qU0zzHDfiG-VrIl8Tux9Dc14AfwGByEL2cTs3fT6Hf7qCopR5aa0G49rj0o72L-ElY4Zri7R-VnLoLPGbDhpzkkbIPB6OMNzafPHIzuZQ3ueWN62z5gQ6dYL5f3CJfmDvzaQbXWxdkR1t_n3xQtNJUBlhca93rYMa5MVC0yaz7LLhKJgOtbHi3BbGCPwpoze1zN7MvXRLplINDSzQ-iRsKAa6G0JMhiywMqCJM/p.jpeg"
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