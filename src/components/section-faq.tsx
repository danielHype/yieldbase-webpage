import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  MdCatchingPokemon,
} from "react-icons/md";

export function SectionFAQ() {
  return (
    <section className="container mb-32" id="faq">
      <div className="mb-12">
        <h2 className="text-4xl mb-4">Die häufigsten Fragen</h2>
        <p className="text-[#707070]">
          Antworten zu den häufigsten Fragen.
        </p>
      </div>

      <div className="border border-border rounded-2xl bg-white dark:bg-[#121212] p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:space-x-16">
          <div className="w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex items-center justify-start space-x-2">
                  <MdCatchingPokemon size={32} className="!rotate-0" />
                  <span className="w-full text-left text-lg">Welche Arten von Kartonagen bieten Sie an?</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#707070]">
                  <div className="flex-col">
                    <p>
                      Wir bieten eine breite Palette von Kartonagen an, einschließlich Standardkartons, Wellpappkartons, maßgeschneiderte Verpackungen, Schachteln mit speziellen Einsätzen und umweltfreundlichen Verpackungslösungen. Alle unsere Produkte können an Ihre spezifischen Anforderungen angepasst werden.
                    </p>

                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="flex items-center justify-start space-x-2">
                  <MdCatchingPokemon size={32} className="!rotate-0" />
                  <span className="w-full text-left text-lg">Wie gewährleisten Sie die Qualität Ihrer Produkte?</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#707070]">
                  <div className="flex-col">
                    <p>
                      Unsere Qualitätssicherung beginnt bereits bei der Auswahl der Materialien und setzt sich über den gesamten Produktionsprozess fort. Wir führen regelmäßige Qualitätskontrollen durch und arbeiten mit modernsten Maschinen, um sicherzustellen, dass jede Kartonage den höchsten Standards entspricht. Zudem sind wir nach ISO 9001 zertifiziert.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="flex items-center justify-start space-x-2">
                  <MdCatchingPokemon size={32} className="!rotate-0" />
                  <span className="w-full text-left text-lg">Bieten Sie umweltfreundliche Verpackungslösungen an?</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#707070]">
                  <div className="flex-col">
                    <p>
                      Ja, Nachhaltigkeit ist uns sehr wichtig. Wir bieten umweltfreundliche Verpackungslösungen an, die aus recycelten Materialien hergestellt werden und vollständig recycelbar sind. Unsere Designs sind darauf ausgelegt, den Materialverbrauch zu minimieren und gleichzeitig maximalen Schutz für Ihre Produkte zu gewährleisten.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="flex items-center justify-start space-x-2">
                  <MdCatchingPokemon size={32} className="!rotate-0" />
                  <span className="w-full text-left text-lg">Können Sie individuelle Verpackungslösungen nach meinen Anforderungen erstellen?</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#707070]">
                  <div className="flex-col">
                    <p>
                      Selbstverständlich. Unser erfahrenes Inhouse-Designteam arbeitet eng mit Ihnen zusammen, um maßgeschneiderte Verpackungslösungen zu entwickeln, die Ihren spezifischen Anforderungen entsprechen. Wir nutzen modernste CAD-Software und Prototyping-Techniken, um sicherzustellen, dass das Endprodukt genau Ihren Vorstellungen entspricht.

                      Wenn Sie weitere Fragen haben oder detailliertere Informationen benötigen, stehen wir Ihnen jederzeit gerne zur Verfügung.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
