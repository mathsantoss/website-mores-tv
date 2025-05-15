
import DesdeBadge from "./DesdeBadge";
import WhatsappButton from "./WhatsappButton";

export default function HeroSection() {
  return (
    <section
      className="w-full relative flex flex-col-reverse md:flex-row items-center justify-between px-6 py-14 md:py-20"
      style={{
        background:
          "linear-gradient(90deg, #0a3879 70%, #1756a1 100%)",
      }}
    >
      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center gap-6">
        <DesdeBadge className="mx-auto md:ml-0" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
          Conserto Especializado <br className="hidden md:block" />
          <span className="text-yellow-400">em TVs de todas as marcas</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-xl mb-4 mx-auto md:mx-0">
          Mais de 10 anos oferecendo agilidade, honestidade e <b>excelência no conserto de televisores</b> na região de Campinas.
        </p>
        <div className="flex justify-center md:justify-start">
          <WhatsappButton />
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <img
          src="/conserto_tvs.png"
          alt="Técnico arrumando televisão"
          className="rounded-xl shadow-2xl border-4 border-white max-h-[320px] md:max-h-[360px] object-cover"
        />
      </div>
    </section>
  );
}
