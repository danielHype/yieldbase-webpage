"use server";

import { action } from "./safe-action";
import { Resend } from 'resend';
import { renderAsync } from "@react-email/components";
import { stepTwoSchema } from "@/lib/zod";
import Step1Email from "emails/step1Email";
import { Step2Email } from "emails/step2Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendStep2 = action(
    stepTwoSchema,
    async (data) => {
        console.log(data);


        const welcome = await resend.emails.send({
            to: "daniel@wintermeyer-ventures.com",
            subject: "New Step 2 Form Submission",
            from: "Webapp YieldBase <app@app.hey-mpu.de>",
            html: await renderAsync(
                Step2Email({
                    length_in_mm: data.length_in_mm ?? "",
                    width_in_mm: data.width_in_mm ?? "",
                    height_in_mm: data.height_in_mm ?? "",
                })
            ),
        })

        console.log(welcome);

        return welcome;
    }
);
