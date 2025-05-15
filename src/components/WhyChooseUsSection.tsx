
import { Wrench, Tv, RefreshCw, Monitor } from "lucide-react";

const items = [
  {
    icon: Wrench,
    label: "Técnicos certificados e experientes",
  },
  {
    icon: Tv,
    label: "Todas as marcas e modelos",
  },
  {
    icon: RefreshCw,
    label: "Atendimento rápido e eficiente",
  },
  {
    icon: Monitor,
    label: "Consultoria para compra e instalação",
  },
];

export default function WhyChooseUsSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10">
        Por que escolher a gente?
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center">
            <div className="bg-blue-100 text-blue-800 rounded-xl p-4 mb-3">
              <item.icon size={32} />
            </div>
            <div className="text-base font-semibold">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
