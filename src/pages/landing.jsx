import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faq from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 px-4 max-w-screen-xl mx-auto">
      <section className="text-center">
        <h3 className="font-extrabold tracking-tighter py-4">
          {/* Baris pertama */}
          <div className="flex justify-center items-center gap-2 text-2xl sm:text-4xl lg:text-7xl whitespace-nowrap">Find Your Dream Job</div>

          {/* Baris kedua */}
          <div className="flex justify-center items-center gap-2 text-2xl sm:text-4xl lg:text-7xl whitespace-nowrap">
            and get
            <img src="/logo.png" alt="winniecode Logo" className="h-10 sm:h-16 lg:h-32" />
          </div>
        </h3>

        {/* Deskripsi */}
        <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-lg">Jelajahi ribuan lowongan kerja dan temukan kandidat terbaik untuk mendukung kesuksesan Anda.</p>
      </section>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/jobs">
          <Button size="xl" variant="pink">
            Post Jobs
          </Button>
        </Link>
      </div>

      <Carousel plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]} className="w-full py-10">
        <CarouselContent className="flex items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/2 sm:basis-1/3 lg:basis-1/6 flex justify-center">
              <img src={path} alt={name} className="h-9 sm:h-14 object-contain" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <img src="/banner.png" className="w-full" alt="Banner" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Employer</CardTitle>
          </CardHeader>
          <CardContent>Telusuri lowongan, kirim lamaran, pantau progresnya, dan nikmati berbagai fitur lainnya.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recruiter</CardTitle>
          </CardHeader>
          <CardContent>Unggah lowongan pekerjaan, atur proses rekrutmen, dan rekrut talenta terbaik.</CardContent>
        </Card>
      </section>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faq.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className="w-full border-b pb-4">
            <AccordionTrigger className="text-left w-full break-words whitespace-normal text-base sm:text-lg p-1">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-left w-full break-words whitespace-normal text-sm sm:text-base p-1 leading-relaxed">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
