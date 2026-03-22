import { Hero } from "@/components/sections/Hero";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { CloudLab } from "@/components/sections/CloudLab";
import { Metrics } from "@/components/sections/Metrics";
import { Partners } from "@/components/sections/Partners";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <Partners />
      <ServicesBento />
      <Metrics />
      <CloudLab />
      <About />
      <Contact />
    </div>
  );
}
