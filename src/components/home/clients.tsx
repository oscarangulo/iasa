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
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-12 text-center">
          Clientes
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.alt} className="flex items-center justify-center">
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 object-contain max-w-[120px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
