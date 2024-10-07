import ContactForm from "@/components/contact-form/contact-form";
import Visualization from "@/components/contact-form/visualization";
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Anfrage",
};

export default function Page() {


    return (
        <div className="flex flex-col sm:flex-row gap-5 mt-24">
            <div className="mt-6 md:w-[60%]">
                <h3 className="font-medium text-xl md:text-2xl">
                    Fragen Sie Ihren Karton an
                </h3>
                <ContactForm />
            </div>
            <div className="mt-6">
                <h3 className="font-medium text-xl md:text-2xl">
                Ihr Karton
                </h3>
                <Visualization />
            </div>
        </div>
    );
}
