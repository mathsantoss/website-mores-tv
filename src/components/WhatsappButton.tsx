
const whatsappLink = "https://api.whatsapp.com/send?phone=5519999778547";
const message = encodeURIComponent("Olá! Quero um orçamento para conserto de TV.");

export default function WhatsappButton() {
  return (
    <a
      href={`${whatsappLink}&text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition"
      style={{ boxShadow: "0 0 0 0 #25d366" }}
      aria-label="Chamar no WhatsApp"
    >
      <img
          src="https://cdn.brandfetch.io/id6Zq084G_/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          alt="WhatsApp"
          className="h-5 w-5"
        />
        Chamar no WhatsApp
    </a>
  );
}
