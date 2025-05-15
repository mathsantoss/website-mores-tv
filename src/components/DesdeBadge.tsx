
interface BadgeProps {
  className?: string;
}
export default function DesdeBadge({ className }: BadgeProps) {
  return (
    <span
      className={
        "bg-yellow-400 text-blue-900 font-bold px-3 py-1 rounded-full text-xs shadow-lg border border-yellow-300 " +
        (className || "")
      }
    >
      Desde 2007
    </span>
  );
}
