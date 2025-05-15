
import { Truck, Tv, Wrench, Calendar } from "lucide-react";

const services = [
  {
    title: "Manutenção de TVs",
    desc: "Serviço especializado em televisores de todas as marcas e modelos.",
    icon: Tv,
  },
  {
    title: "Reparo de Placas",
    desc: "Reparo avançado em placas, fontes e componentes eletrônicos.",
    icon: Wrench,
  },
  {
    title: "Garantia diferenciada de 01 ano",
    desc: "Garantia estendida de 12 meses para sua maior tranquilidade.",
    icon: Calendar,
  },
  {
    title: "Atendimento Delivery",
    desc: "Retirada e entrega grátis: facilidade e comodidade na sua casa.",
    icon: Truck,
  },
];

export default function ServicesSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10">
        Serviços
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <item.icon size={36} className="text-blue-900 mb-3" />
            <h3 className="font-bold text-md mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
