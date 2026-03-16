import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  department: string;
  photo: string;
}

export default function TeamCard({ name, role, department, photo }: TeamCardProps) {
  const departmentStyles: Record<string, string> = {
    PROIECTA: "text-emerald",
    PROAMBIENTE: "text-emerald-dark",
    PROCEANIC: "text-stone",
  };

  const textClass = departmentStyles[department] ?? "text-emerald";

  return (
    <div className="group">
      <div className="overflow-hidden mb-4">
        <Image
          src={photo}
          alt={name}
          width={400}
          height={400}
          className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <h3 className="text-lg font-heading text-charcoal">{name}</h3>
      <p className="text-sm text-text-secondary mt-1">{role}</p>
      <span className={`text-xs ${textClass} mt-2 inline-block`}>
        {department}
      </span>
    </div>
  );
}
