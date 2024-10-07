"use server";

import { action } from "./safe-action";
import { Resend } from 'resend';
import { renderAsync } from "@react-email/components";
import { stepThreeSchema } from "@/lib/zod";
import Step3Email from "emails/step3Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendStep3 = action(
    stepThreeSchema,
    async (data) => {
        console.log(data);

        const welcome = await resend.emails.send({
            to: "daniel@wintermeyer-ventures.com",
            subject: "New Step 3 Form Submission",
            from: "Webapp RevBoost <app@app.hey-mpu.de>",
            html: await renderAsync(
                Step3Email({
                    companyName: data.companyName ?? "",
                    name: data.name,
                    street: data.street,
                    houseNumber: data.houseNumber.toString() ?? "",
                    zip: data.zip.toString() ?? "",
                    city: data.city,
                    email: data.email,
                    specialWishes: data.specialWishes ?? "",
                })
            ),
        })

        console.log(welcome);

        return welcome;
    }
);
