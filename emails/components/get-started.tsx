import { Button, Section } from "@react-email/components";
import React from "react";

export function GetStarted() {
  return (
    <Section className="text-center mt-[50px] mb-[50px]">
      <Button
        className="bg-transparent rounded-md text-primary text-[14px] text-[#121212] font-medium no-underline text-center px-6 py-3 border border-solid border-[#121212]"

        href="https://revboost-webapp-avyu.vercel.app"
      >
        Get started
      </Button>
    </Section>
  );
}
