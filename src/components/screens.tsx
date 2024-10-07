"use client";

import { AdaptiveImage } from "@/components/adaptive-image";
// import screen1Light from "public/screen-1-light.png";
// import screen1 from "public/screen-1.png";
// import screen2Light from "public/screen-2-light.png";
// import screen2 from "public/screen-2.png";
// import screen3Light from "public/screen-3-light.png";
// import screen3 from "public/screen-3.png";
// import screen4Light from "public/screen-4-light.png";
// import screen4 from "public/screen-4.png";
// import screen5Light from "public/screen-5-light.png";
// import screen5 from "public/screen-5.png";
import { useState } from "react";
import { BlurryCircle } from "./blurry-circle";
import { CardStack } from "./card-stack";
import { Dock } from "./dock";
import Carton1 from "public/dock/Cartonox_Carton1.webp"
import Carton2 from "public/dock/Cartonox_Carton2.webp"
import Carton3 from "public/dock/Cartonox_Carton3.webp"
import Carton4 from "public/dock/Cartonox_Carton4.webp"
import Carton5 from "public/dock/Cartonox_Carton5.webp"
import Carton6 from "public/dock/Cartonox_Carton6.webp"
import Carton7 from "public/dock/Cartonox_Carton7.webp"

export function Screens() {
  const [activeApp, setActiveApp] = useState<"cal" | "example">("example");

  const apps = [
    {
      id: "example",
      icon: Carton1,
      name: "Karton 1",
    },
    {
      id: "example",
      icon: Carton2,
      name: "Karton 2",
      onClick: () => setActiveApp("example"),
    },
    {
      id: "example",
      icon: Carton3,
      name: "Karton 3",
      onClick: () => setActiveApp("example"),
    },
    {
      id: "example",
      icon: Carton4,
      name: "Karton 4",
      onClick: () => setActiveApp("example"),
    },
    {
      id: "example",
      icon: Carton5,
      name: "Karton 5",
      onClick: () => setActiveApp("example"),
    },
    {
      id: "example",
      icon: Carton6,
      name: "Karton 6",
      onClick: () => setActiveApp("example"),
    },
    {
      id: "example",
      icon: Carton7,
      name: "Karton 7",
      onClick: () => setActiveApp("example"),
    },
  ];

  const renderActiveApp = () => {
    switch (activeApp) {
      case "example":
        return (
          <div className="relative">
            <BlurryCircle className="absolute -top-2 right-[320px]  hidden md:block bg-[#FFECBB] dark:bg-[#FFECBB]/40" />
            <BlurryCircle className="absolute -bottom-6 left-6 hidden md:block bg-[#FFECBB]/50 dark:bg-[#FFECBB]/20" />
            <BlurryCircle className="absolute -bottom-[60px] right-0 bg-[#3633D0]/5 dark:bg-[#3633D0]/10 -z-10 hidden md:block" />

            <CardStack
              items={[
                {
                  id: 1,
                  name: "Karton 1",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Karton 1"
                      darkSrc={Carton1}
                      lightSrc={Carton1}
                      width={1031}
                      height={670}
                      priority
                    />
                  ),
                },
                {
                  id: 2,
                  name: "Karton 2",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Karton 2"
                      darkSrc={Carton2}
                      lightSrc={Carton2}
                      width={1031}
                      height={670}
                    />
                  ),
                },
                {
                  id: 3,
                  name: "Inbox",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Karton 3"
                      darkSrc={Carton3}
                      lightSrc={Carton3}
                      width={1031}
                      height={670}
                    />
                  ),
                },
                {
                  id: 4,
                  name: "Vault",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Karton 4"
                      darkSrc={Carton4}
                      lightSrc={Carton4}
                      width={1031}
                      height={670}
                    />
                  ),
                },
                {
                  id: 5,
                  name: "Dashboard - Transactions",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Karton 5"
                      darkSrc={Carton5}
                      lightSrc={Carton5}
                      width={1031}
                      height={670}
                    />
                  ),
                },
                {
                  id: 6,
                  name: "Karton 6",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Karton 6"
                      darkSrc={Carton6}
                      lightSrc={Carton6}
                      width={1031}
                      height={670}
                    />
                  ),
                },
                {
                  id: 7,
                  name: "Karton 7",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Karton 7"
                      darkSrc={Carton7}
                      lightSrc={Carton7}
                      width={1031}
                      height={670}
                    />
                  ),
                },
              ]}
            />
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center mt-12 md:mt-14 flex-col">
      {renderActiveApp()}

      {/* <div className="-mt-10">
        <Dock apps={apps} />
      </div> */}
    </div>
  );
}
