import { BlurryCircle } from "@/components/blurry-circle";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { DHL } from "./svg/clients/DHL";
import { PfeiferLangen } from "./svg/clients/PfeiferLangen";
import { Mondi } from "./svg/clients/Mondi";
import { Warsteiner } from "./svg/clients/Warsteiner";
import BeckerBesterLogo from "public/images/clients/BeckersBesterLogo.png"
import { AdaptiveImage } from "./adaptive-image";


const testimonials = [
  {
    name: "DHL",
    image: <DHL className="h-24" />,

  },
  {
    name: "Pfeifer & Langen",
    image: <PfeiferLangen className="h-24" />,
  },
  {
    name: "Mondi",
    image: <Mondi className="h-24" />,
  },
  {
    name: "Warsteiner",
    image: <Warsteiner className="h-24" />,
  },
  {
    name: "beckers bester",
    image:

      <AdaptiveImage
        lightSrc={BeckerBesterLogo}
        darkSrc={BeckerBesterLogo}
        className="h-24"
      />
    ,
  },

];

export function Testimonials() {
  return (
    <div className="relative pb-22">
      <div className="relative mb-22">
        <h3 className="mt-24 font-medium text-center text-3xl md:text-5xl mb-16 leading-snug">
          Kundenzufriedenheit ist unser Treiber
        </h3>
        <p className="text-center font-medium text-xl mb-2">„Sehr gute Beratung und überzeugende Preise.
          Wir arbeiten gerne mit YieldBase zusammen.“</p>
        <p className="text-center font-medium text-l mb-2 text-[#878787]" >Jens Sperrmann, Leiter Logistik Myposter.de</p>
      </div>
      <h3 className="font-medium text-xl mt-16 text-center">Ein Auszug unserer erfolgreichen Kunden</h3>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      <BlurryCircle className="absolute top-2 right-[200px] bg-[#3633D0]/10 -z-10 hidden md:block" />
    </div>
  );
}
