
import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BrandsSection from "../components/BrandsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import GetNinjasReviews from "../components/GetNinjasReviews";
import GoogleReviewsSection from "../components/GoogleReviewsSection";

const Index = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
    <TopBar />
    <main className="flex-1 flex flex-col">
      <HeroSection />
      {/* INÍCIO seção Campinas e horário de atendimento */}
      <section className="bg-blue-100 py-6 mt-2 text-center flex flex-col items-center">
        <span className="block bg-yellow-300/90 text-blue-900 font-bold rounded-full text-sm md:text-lg px-5 py-2 mb-2 shadow">
          ATENDEMOS TODA REGIÃO DE CAMPINAS
        </span>
        <div className="text-blue-800 font-medium">
          <span className="mr-3">Horário de Atendimento</span>
          <span className="bg-white rounded px-3 py-1 shadow text-blue-900 font-bold">Seg a Sábado: 8:00 – 20:00</span>
        </div>
      </section>
      {/* FIM seção Campinas e horário */}
      {/* Ajuste: Remover padding excessiva acima da próxima seção, adicionar espaçamento entre seções */}
      <section className="section-padding mt-6 mb-2">
        <ServicesSection />
      </section>
      <section className="bg-white py-8 mt-0 mb-4">
        <BrandsSection />
      </section>
      <GoogleReviewsSection />
      <GetNinjasReviews />
      <section className="section-padding mt-4">
        <WhyChooseUsSection />
      </section>
    </main>
    <footer className="mt-8 py-4 bg-gray-100 text-sm text-gray-500 text-center">
      &copy; {new Date().getFullYear()} Moraes Conserto de TV. Todos os direitos reservados.
    </footer>
  </div>
);

export default Index;
