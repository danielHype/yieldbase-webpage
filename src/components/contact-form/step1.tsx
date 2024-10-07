'use client'

import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/form/form";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../form/card";
import { Input } from "../form/input";
import { Button } from "../form/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../form/select";
import { Progress } from "../form/progress";
import useFormStore from "store/useFormStore";
import { zodResolver } from '@hookform/resolvers/zod';
import { Step1FormValues, stepOneSchema } from "@/lib/zod";
import { Dispatch, SetStateAction } from "react";
import { useAction } from "next-safe-action/hooks";
import { sendStep1 } from "@/actions/sendStep1";
import { StepOneData } from "types/formStore";

interface Step1Props {
    setStep: Dispatch<SetStateAction<number>>;
}

export default function Step1({ setStep }: Step1Props) {
    const { stepOne, setData } = useFormStore();
    const { execute, result, status } = useAction(sendStep1)

    const methods = useForm<Step1FormValues>({
        mode: 'onSubmit',
        resolver: zodResolver(stepOneSchema),
        defaultValues: { ...stepOne, whatDoYouSend: stepOne?.whatDoYouSend || "" } || {},
    });

    const onSubmit = async (data: StepOneData, event) => {
        event.preventDefault(); // Prevent the form from causing a page reload
        console.log("Submitting form data:", data); // Check what is being submitted
        setData({ step: 1, data }); // Assuming setData is correctly handling asynchronous state updates
        setStep(2)
        execute(data)
    };

    const onInvalid = (errors) => console.error(errors)

    return (
        <Form {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit, onInvalid)}>
                <Card>
                    <CardHeader>
                        <Progress
                            className="w-full rounded-lg h-[6px] mb-4"
                            value={20}
                        />
                        <CardTitle>Schritt 1</CardTitle>
                        <CardDescription>
                            Bitte geben Sie Ihre Daten ein.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <FormField
                            control={methods.control}
                            name="quality"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Welche Qualität darf es sein?</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Qualität auswählen" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="1-wellig">1-wellig</SelectItem>
                                            <SelectItem value="2-wellig">2-wellig</SelectItem>
                                            <SelectItem value="3-wellig">3-wellig (Schwerwellqualität)</SelectItem>

                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={methods.control}
                            name="color"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Welche Grundfarbe darf es sein?</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Farbe auswählen" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="brown">Braun</SelectItem>
                                            <SelectItem value="white">Weiß</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={methods.control}
                            name="withPrint"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Soll der Karton einen Druck haben?</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Druck auswählen" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="print">Mit Print</SelectItem>
                                            <SelectItem value="noPrint">Ohne Print</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={methods.control}
                            name="howDoYouSend"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Wie versenden Sie?</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Versandart auswählen" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="deliveryService">Per Paketdienst</SelectItem>
                                            <SelectItem value="palletSpedition">Per Spedition auf Palette</SelectItem>
                                            <SelectItem value="deliveryServiceAndPalletSpedition">Sowohl aus auch</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={methods.control}
                            name="whatDoYouSend"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Was möchten Sie versenden?</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Kleidung, Flaschen, Arzneimittel, etc."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>

                    <CardFooter className="flex justify-between">
                        <div>Je präziser Sie sind, desto besser können wir helfen.</div>
                        {/* <Button type="submit" disabled={methods.formState.errors?.content ? true : false}>Next Step</Button>*/}
                        <Button type="submit">Nächster Schritt</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}
