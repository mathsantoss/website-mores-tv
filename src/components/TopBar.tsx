import { Phone } from "lucide-react";
import SiteLogo from "./SiteLogo";

const whatsappNumber = "5519999778547";

export default function TopBar() {
  return (
    <div className="w-full bg-blue-900 text-white flex items-center justify-between px-4 py-2 text-xs md:text-sm">
      <div className="flex items-center gap-3">
        <SiteLogo className="text-white" />
        <span className="font-semibold flex items-center gap-2">
          <Phone size={18} className="inline-block" />
          Ligue: <a href="tel:+5519999778547" className="underline">19 99977-8547</a>
        </span>
      </div>
      <a
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-semibold bg-green-600 hover:bg-green-700 px-3 md:px-4 py-1 rounded-md transition text-white"
        aria-label="Chamar no WhatsApp"
      >
        <img
          src="https://cdn.brandfetch.io/id6Zq084G_/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          alt="WhatsApp"
          className="h-5 w-5"
        />
        WhatsApp
      </a>
    </div>
  );
}
