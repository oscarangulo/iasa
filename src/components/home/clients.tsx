import Image from "next/image";

const clients = [
  { src: "/images/clients/cmpc.png", alt: "CMPC" },
  { src: "/images/clients/teck-resources.png", alt: "Teck Resources" },
  { src: "/images/clients/arauco.png", alt: "Arauco" },
  { src: "/images/clients/aes-chile.png", alt: "AES Chile" },
  { src: "/images/clients/bhp-billiton.png", alt: "BHP Billiton" },
  { src: "/images/clients/anglo-american.jpg", alt: "Anglo American" },
  { src: "/images/clients/resiter.jpg", alt: "Resiter" },
  { src: "/images/clients/coactiva.png", alt: "Coactiva" },
];

export default function Clients() {
  return (
    <section className="py-16 bg-cream overflow-hidden">
      <p className="text-xs uppercase tracking-[0.3em] text-text-light text-center mb-10">
        Confían en nosotros
      </p>

      {/* Marquee wrapper */}
      <div className="relative">
        <div className="flex animate-marquee w-max">
          {/* Duplicate the list for seamless loop */}
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.alt}-${i}`}
              className="flex items-center justify-center mx-10 md:mx-14"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={60}
                className="grayscale opacity-40 hover:opacity-80 transition-opacity duration-500 object-contain h-auto"
                style={{ maxWidth: 120, maxHeight: 50 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
