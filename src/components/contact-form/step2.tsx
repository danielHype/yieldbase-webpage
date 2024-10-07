'use client'

import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/form/form";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../form/card";
import { Input } from "../form/input";
import { Button } from "../form/button";
import { Progress } from "../form/progress";
import useFormStore from "store/useFormStore";
import { zodResolver } from '@hookform/resolvers/zod';
import { Step2FormValues, stepTwoSchema } from "@/lib/zod";
import { Dispatch, SetStateAction } from "react";
import { sendStep2 } from "@/actions/sendStep2";
import { useAction } from "next-safe-action/hooks";

interface Step2Props {
    setStep: Dispatch<SetStateAction<number>>;
}

export default function Step2({ setStep }: Step2Props) {
    const { stepTwo, setData } = useFormStore();
    const { execute, result } = useAction(sendStep2)

    const methods = useForm<Step2FormValues>({
        mode: 'onSubmit',
        resolver: zodResolver(stepTwoSchema),
        defaultValues: { ...stepTwo, length_in_mm: 0,  width_in_mm: 0, height_in_mm: 0 } || {},
    });

    const onSubmit = async (data, event) => {
        event.preventDefault(); // Prevent the form from causing a page reload
        console.log("Submitting form data:", data); // Check what is being submitted
        setData({ step: 2, data }); // Assuming setData is correctly handling asynchronous state updates
        setStep(3)
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
                            value={50}
                        />
                        <CardTitle>Schritt 2</CardTitle>
                        <CardDescription>
                            Bitte geben Sie Ihre Maße ein.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>

                        <FormField
                            control={methods.control}
                            name="length_in_mm"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Länge in mm?</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Geben Sie die Länge ein"
                                            {...field}
                                            type="number"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={methods.control}
                            name="width_in_mm"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Breite in mm?</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Geben Sie die Breite ein"
                                            {...field}
                                            type="number"
                                            
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={methods.control}
                            name="height_in_mm"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Höhe in mm?</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Geben Sie die Höhe ein"
                                            {...field}
                                            type="number"
                                            
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                    </CardContent>

                    <CardFooter className="flex justify-between">
                        <Button onClick={() => setStep(1)} variant="ghost">Zurück</Button>
                        {/* <Button type="submit" disabled={methods.formState.errors?.content ? true : false}>Next Step</Button>*/}
                        <Button type="submit">Nächster Schritt</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}
