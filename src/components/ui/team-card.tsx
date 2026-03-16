import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  department: string;
  photo: string;
}

export default function TeamCard({ name, role, department, photo }: TeamCardProps) {
  const departmentStyles: Record<string, string> = {
    PROIECTA: "bg-primary/10 text-primary",
    PROAMBIENTE: "bg-secondary/10 text-secondary",
    PROCEANIC: "bg-primary/10 text-primary",
  };

  const badgeClass = departmentStyles[department] ?? "bg-primary/10 text-primary";

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center">
      <Image
        src={photo}
        alt={name}
        width={112}
        height={112}
        className="w-28 h-28 rounded-full mx-auto object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-primary font-heading">{name}</h3>
      <p className="text-sm text-text-secondary mt-1">{role}</p>
      <span
        className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${badgeClass}`}
      >
        {department}
      </span>
    </div>
  );
}
