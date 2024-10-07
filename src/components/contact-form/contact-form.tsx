'use client'

import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

export default function ContactForm() {
    const [page, setPage] = useState(1)


    return (
        <div className="mt-12">
            {
                page === 1 && <Step1 setStep={setPage} />
            }
            {
                page === 2 && <Step2 setStep={setPage} />
            }
            {
                page === 3 && <Step3 setStep={setPage} />
            }
            {
                page === 4 && <Step4 />
            }

        </div>
    );
}
