'use client'

import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/form/form";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../form/card";
import { Input } from "../form/input";
import { Button } from "../form/button";
import { Progress } from "../form/progress";
import useFormStore from "store/useFormStore";
import { zodResolver } from '@hookform/resolvers/zod';
import { Step3FormValues, stepThreeSchema } from "@/lib/zod";
import { Dispatch, SetStateAction } from "react";
import { Textarea } from "../form/textarea";
import { useAction } from "next-safe-action/hooks";
import { sendStep3 } from "@/actions/sendStep3";


interface Step3Props {
    setStep: Dispatch<SetStateAction<number>>;
}

export default function Step3({ setStep }: Step3Props) {
    const { stepThree, setData } = useFormStore();
    const { execute, result, status } = useAction(sendStep3)

    const methods = useForm<Step3FormValues>({
        mode: 'onSubmit',
        resolver: zodResolver(stepThreeSchema),
        defaultValues: stepThree || {},
    });

    const onSubmit = async (data, event) => {
        event.preventDefault(); // Prevent the form from causing a page reload
        console.log("Submitting form data:", data); // Check what is being submitted
        setData({ step: 3, data }); // Assuming setData is correctly handling asynchronous state updates
        setStep(4)
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
                            value={90}
                        />
                        <CardTitle>Schritt 3</CardTitle>
                        <CardDescription>
                            Bitte geben Sie Ihre Daten ein.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>

                        <FormField
                            control={methods.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bestellen Sie für eine Firma?</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Ihr Firmennamen"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={methods.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Wie ist ihr Name?</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Geben Sie Ihren Namen ein"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex flex-col md:flex-row md:gap-8">
                            <FormField
                                control={methods.control}
                                name="street"
                                render={({ field }) => (
                                    <FormItem className="w-[50%]">
                                        <FormLabel>Ihre Straße</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Ihre Straße"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={methods.control}
                                name="houseNumber"
                                render={({ field }) => (
                                    <FormItem className="w-[50%]">
                                        <FormLabel>Hausnummer</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Ihre Hausnummer"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full flex flex-col md:flex-row md:gap-8">
                            <FormField
                                control={methods.control}
                                name="zip"
                                render={({ field }) => (
                                    <FormItem className="w-[50%]">
                                        <FormLabel>Ihre Postleitzahl</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Ihre Postleitzahl"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={methods.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem className="w-[50%]">
                                        <FormLabel>Ihre Stadt</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Ihre Stadt"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={methods.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ihre Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Ihre Email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={methods.control}
                            name="specialWishes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Haben Sie besondere Wünsche an uns?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Weitere Wünsche"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </CardContent>

                    <CardFooter className="flex justify-between">
                        <Button onClick={() => setStep(1)} variant="ghost">Zurück</Button>
                        <Button type="submit" disabled={methods.formState.errors?.content ? true : false}>Absenden</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}
