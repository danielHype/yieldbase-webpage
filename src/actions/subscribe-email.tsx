"use server";

import { action } from "./safe-action";
import { Resend } from 'resend';
import { renderAsync } from "@react-email/components";
import { emailSchema } from "@/lib/zod";
import SubscriptionEmail from "emails/subscriptionEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const subscribeEmail = action(
    emailSchema,
    async (data) => {
        console.log(data);

        const welcome = await resend.emails.send({
            to: "daniel@wintermeyer-ventures.com",
            subject: "New Newsletter Submission",
            from: "Webapp RevBoost <app@app.hey-mpu.de>",
            html: await renderAsync(
                SubscriptionEmail({
                    email: data.email,
                })
            ),
        })

        console.log(welcome);

        return welcome;
    }
);
