'use client'

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../form/card";
import { Progress } from "../form/progress";
import formCompleted from "public/form-complete.png";
import Image from "next/image";
import { Button } from "../form/button";
import { useRouter } from "next/navigation";

export default function Step4() {

    const router = useRouter()

    return (
        <Card>
            <CardHeader>
                <Progress
                    className="w-full rounded-lg h-[6px] mb-4"
                    value={100}
                />
                <CardTitle className="text-center font-medium text-xl md:text-2xl mb-4">Geschafft!</CardTitle>
            </CardHeader>
            <div className="flex justify-center items-center">
                <Image src={formCompleted}
                    quality={100}
                    className="object-contain max-w-[500px]"

                    alt="Form completed." ></Image>
            </div>

            <CardContent className="text-center">
                Wir haben Ihre Daten erhalten. Wir melden uns innerhalb von zwei Werktagen.
            </CardContent>

            <CardFooter className="flex  justify-center items-center">
                <Button onClick={() => router.push("/")}>Zurück zur Startseite</Button>
            </CardFooter>
        </Card>

    )
}
