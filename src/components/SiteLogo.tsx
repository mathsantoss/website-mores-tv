
import { Tv } from "lucide-react";

export default function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-extrabold text-xl md:text-2xl text-blue-900 ${className}`}>
      <Tv size={32} className="text-yellow-400 drop-shadow" />
      <span>
        Moraes <span className="text-yellow-400">TV</span>
      </span>
    </div>
  );
}
