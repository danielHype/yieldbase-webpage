"use server";

import { action } from "./safe-action";
import { Resend } from 'resend';
import { renderAsync } from "@react-email/components";
import { stepOneSchema } from "@/lib/zod";
import Step1Email from "emails/step1Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendStep1 = action(
    stepOneSchema,
    async (data) => {
        console.log(data);


        const welcome = await resend.emails.send({
            to: "daniel@wintermeyer-ventures.com",
            subject: "New Step 1 Form Submission",
            from: "Webapp YieldBase <app@app.hey-mpu.de>",
            html: await renderAsync(
                Step1Email({
                    quality: data.quality,
                    color: data.color,
                    withPrint: data.withPrint,
                    howDoYouSend: data.howDoYouSend,
                    whatDoYouSend: data.whatDoYouSend ?? ""
                })
            ),
        })

        console.log(welcome);

        return welcome;
    }
);
