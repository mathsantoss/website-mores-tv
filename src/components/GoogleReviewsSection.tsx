
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

// Dados estáticos simulando avaliações
const FAKE_GOOGLE_REVIEWS = [
  {
    name: "Renato Gomes",
    photo: null,
    date: "19/07/2024",
    text: "O reparo mais rápido que já tivemos aqui na empresa! TV ficou NOVA.",
    stars: 5,
    source: "google",
    initial: "R",
  },
  {
    name: "Sandra Chad",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    date: "18/07/2024",
    text: "Achei ótimo o atendimento, rápido e eficaz.",
    stars: 5,
    source: "google",
    initial: "S",
  },
  {
    name: "Isabella Louise",
    photo: null,
    date: "17/07/2024",
    text: "Atendimento super rápido e preço justo, todos estão de parabéns.",
    stars: 5,
    source: "google",
    initial: "I",
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="bg-[#f1f0fb] py-8 px-2 sm:px-0 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-medium text-neutral-700 mb-6 text-center">
        Conheça a opinião de nossos clientes
      </h2>
      <div className="flex flex-col md:flex-row w-full max-w-5xl justify-center items-stretch gap-6">
        {/* Painel de resumo avaliações */}
        <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center min-w-[180px] max-w-[200px] mx-auto">
          <span className="font-bold text-xl text-gray-700 mb-2">EXCELENTE</span>
          <div className="flex gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} color="#FFC700" fill="#FFC700" className="inline" />
            ))}
          </div>
          <span className="text-sm text-gray-800 mb-2">
            Com base em <b className="font-bold text-black">181 avaliações</b>
          </span>
          <img src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" alt="Google" className="w-16 h-8 object-contain mt-2" />
        </div>

        {/* Cards das avaliações */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="flex justify-center gap-4 w-full">
            {FAKE_GOOGLE_REVIEWS.map((r, i) => (
              <div key={i} className="relative flex flex-col gap-3 bg-white rounded-xl shadow p-5 w-[290px] max-w-full">
                <div className="flex items-center gap-2">
                  {r.photo ? (
                    <img src={r.photo} alt={r.name} className="w-10 h-10 rounded-full object-cover border" />
                  ) : (
                    <span className="w-10 h-10 rounded-full bg-[#9b87f5] text-white text-lg font-bold flex items-center justify-center">{r.initial}</span>
                  )}
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800 text-base">{r.name}</span>
                    <span className="text-xs text-gray-500">{r.date}</span>
                  </div>
                  <img src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw" alt="Google" className="w-5 h-5 ml-auto" />
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={18} color="#FFC700" fill="#FFC700" className="inline" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{r.text}</p>
              </div>
            ))}
          </div>
          {/* Navegação do carrossel fictícia (desabilitada por enquanto) */}
          {/* 
          <div className="flex gap-2 justify-center mt-1">
            <Button variant="outline" size="icon" disabled className="opacity-60"><ArrowLeft /></Button>
            <Button variant="outline" size="icon" disabled className="opacity-60"><ArrowRight /></Button>
          </div>
          }
          <div className="text-center text-[15px] mt-2 text-gray-500">
            Faça como nossos clientes satisfeitos e solicite o seu orçamento sem compromisso.
          </div>
          {/* Botão com WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=5519999778547"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-bold px-7 py-5 rounded-full flex items-center gap-2 shadow transition-all duration-200 uppercase">
              <svg width="22" height="22" viewBox="0 0 32 32" className="inline mr-2"><path d="M16 2C8.28 2 2 8.27 2 16c0 2.73.73 5.27 2.07 7.48L2.03 30l6.65-1.75C11.79 29.13 13.84 30 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm0 24.92c-1.84 0-3.64-.5-5.2-1.46l-.37-.22-3.95 1.04 1.06-3.85-.24-.39C5.44 19.47 4.67 17.77 4.67 16c0-6.23 5.1-11.33 11.33-11.33S27.33 9.77 27.33 16c0 6.23-5.1 11.33-11.33 11.33zm6.28-8.45c-.34-.17-2.04-1-2.36-1.12-.32-.13-.56-.17-.8.17-.24.33-.92 1.12-1.12 1.36-.21.23-.4.25-.74.08-.34-.17-1.41-.52-2.69-1.66-.99-.88-1.66-1.98-1.86-2.32-.2-.33-.02-.51.15-.67.16-.15.34-.4.51-.6.17-.2.22-.33.34-.55.11-.23.06-.42-.03-.6-.08-.17-.8-1.92-1.09-2.65-.29-.7-.59-.6-.81-.61l-.68-.01c-.21 0-.55.08-.83.38-.28.3-1.09 1.07-1.09 2.6 0 1.53 1.11 3.01 1.27 3.22.16.2 2.2 3.34 5.34 4.55.74.32 1.31.51 1.76.65.74.24 1.41.21 1.94.13.6-.09 1.83-.74 2.09-1.46.26-.73.26-1.36.18-1.46-.1-.1-.32-.16-.67-.33z" fill="#25D366"/></svg>
              Solicite um orçamento pelo Whatsapp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
