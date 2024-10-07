import { WaitlistInput } from "./waitlist-input";

export function SectionNewsletter() {
    return (
        <section>
            <div className="w-full flex flex-col items-center justify-center mt-24">
                <h1 className="text-6xl font-medium text-center relative z-20">
                    Bleiben Sie informiert.
                </h1>

                <p className="text-[#707070] mt-4 mb-8 text-center max-w-[550px]">
                    Jetzt auf dem Laufenden bleiben mit unserem Newsletter.
                </p>


                <div className="w-full flex items-center flex-col z-10">
                    <WaitlistInput />
                </div>
            </div>
        </section>

    );
}
