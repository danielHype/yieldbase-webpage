import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../form/card'
import { AdaptiveImage } from '../adaptive-image'
import placeholderImage from "public/dock/placeholder.jpg";
import CartonDefaultImage from "public/images/configurator/Carton_Configurator.webp";

export default function Visualization() {
    return (

<div className='mt-12'>
        <Card>
            {/* <CardHeader>

                <CardTitle></CardTitle>
                <CardDescription>
                  
                </CardDescription>
            </CardHeader> */}

                <CardContent className='mt-5 flex'>
                    <div className='align-middle items-center'>
                    <AdaptiveImage
                        darkSrc={CartonDefaultImage}
                        lightSrc={CartonDefaultImage}
                        quality={100}
                        className="object-contain md:max-w-96"
                        alt="Default Carton"
                    />
                    </div>
            </CardContent>

            <CardFooter className="flex justify-between">
                <div>Unser Entwicklungsteam arbeitet an einem Konfigurator. Bleiben Sie gespannt.</div>
            </CardFooter>
        </Card>
        </div>
         
    )
}
