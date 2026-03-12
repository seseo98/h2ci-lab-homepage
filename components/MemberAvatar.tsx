import Image from "next/image";
import { Member } from "@/lib/data";

interface Props {
  member: Member;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "w-10 h-10 text-sm",
  md: "w-14 h-14 text-base",
  lg: "w-20 h-20 text-xl",
  xl: "w-28 h-28 text-2xl",
};

// Gradient backgrounds for avatar initials
const gradients = [
  "from-orange-400 to-red-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-600",
  "from-orange-300 to-rose-400",
];

export default function MemberAvatar({ member, size = "md", className = "" }: Props) {
  const sizeClass = sizeMap[size];
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const gradientIndex = member.name.charCodeAt(0) % gradients.length;
  const gradient = gradients[gradientIndex];

  if (member.photo) {
    return (
      <div className={`relative rounded-full overflow-hidden flex-shrink-0 ${sizeClass} ${className}`}>
        <Image src={member.photo} alt={member.name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0 bg-gradient-to-br ${gradient} ${sizeClass} ${className}`}
    >
      {initials}
    </div>
  );
}
