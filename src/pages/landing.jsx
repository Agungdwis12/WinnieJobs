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
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 mt-1 ml-2">
            and get
            <img src="/logo.png" alt="winniecode Logo" className="h-14 sm:h-24 lg:h-32" />
          </span>
        </h1>
        <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-lg">Explore thousands of job listings or find the perfect candidate</p>
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
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>Search and apply for jobs, track applications, and more.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>Post jobs, manage applications, and find the best candidate.</CardContent>
        </Card>
      </section>

      <Accordion type="single" collapsible>
        {faq.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
