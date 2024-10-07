import { z } from 'zod';
import { StepOneData, StepTwoData, StepThreeData } from 'types/formStore';
import { toZodUpdated } from './toZod';

export type Step1FormValues = z.infer<typeof stepOneSchema>;
export type Step2FormValues = z.infer<typeof stepTwoSchema>;
export type Step3FormValues = z.infer<typeof stepThreeSchema>;

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_type) {
        if (issue.expected === "string") {
            return { message: "Bitte geben Sie Worte an." };
        }
        if (issue.expected === "number") {
            return { message: "Bitte geben Sie eine Zahl ein." };
        }
    }
    return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);


export const stepOneSchema: toZodUpdated<StepOneData> = z.object({
    quality: z.string({ required_error: "Die Qualität ist notwendig." }),
    color: z.string({ required_error: "Die Farbe ist notwendig." }),
    withPrint: z.string({ required_error:" Die Frage, ob ein Druck erwünscht ist, ist notwendig."}),
    howDoYouSend: z.string({ required_error: "Wie sie versenden ist notwendig."}),
    whatDoYouSend: z.string({ required_error: "Was sie versenden möchten ist notwendig."}).min(10, "Bitte schreiben Sie etwas mehr.").optional(),
});

export const stepTwoSchema: toZodUpdated<StepTwoData> = z.object({
    length_in_mm: z.coerce.number({ required_error: 'Die Länge ist notwendig.'}).positive('Der Wert muss positiv sein.').max(10000, 'Kein Wert über 10000 möglich.'),
    width_in_mm: z.coerce.number({ required_error: 'Die Breite ist notwendig.'}).positive('Der Wert muss positiv sein.').max(10000, 'Kein Wert über 10000 möglich.'),
    height_in_mm: z.coerce.number({ required_error: 'Die Höhe ist notwendig.'}).positive('Der Wert muss positiv sein.').max(10000, 'Kein Wert über 10000 möglich.'),
    // identity_card: z.any().nonempty('File is required'), // z does not have a direct equivalent for yup.mixed() for file handling, additional implementation may be required.
    // score_file: z.any().nonempty('File is required'),
});

export const stepThreeSchema: toZodUpdated<StepThreeData> = z.object({
    companyName: z.string().optional(),
    name: z.string({ required_error: 'Der Name ist notwendig.' }),
    street: z.string({ required_error: 'Die Straße ist notwendig.' }),
    houseNumber: z.coerce.number({ required_error: 'Die Hausnummer ist notwendig.' }), 
    zip: z.coerce.number({ required_error: 'Die Postleitzahl ist notwendig.' }),
    city: z.string({ required_error: 'Die Stadt ist notwendig.' }),
    email: z.string({ required_error:'Ihre Email-Adresse ist notwendig.' }).email('Bitte eine Email eingeben.'),
    specialWishes: z.string().optional(),
});

export const emailSchema = z.object({
    email: z.string({ required_error: 'Ihre Email-Adresse ist notwendig.'}).email('Bitte eine Email eingeben.')
});
