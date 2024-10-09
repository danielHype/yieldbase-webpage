import {
    Body,
    Container,
    Font,
    Heading,
    Html,
    Preview,
    Tailwind,
    Text,
} from "@react-email/components";
import * as React from "react";

interface Step3EmailProps {
    companyName: string | undefined;
    name: string;
    street: string;
    houseNumber: string;
    zip: string;
    city: string;
    email: string;
    specialWishes: string | undefined;
}

export const Step3Email = ({
    companyName = "companyName", name = "name", street = "street", houseNumber = "houseNumber", zip = "zip", city = "city", email = "email", specialWishes = "specialWishes",
}: Step3EmailProps) => {

    const text = `A new Step 3 Submission`;

    return (
        <Html>
            <Tailwind>
                <head>
                    <Font
                        fontFamily="Geist"
                        fallbackFontFamily="Helvetica"
                        webFont={{
                            url: "https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.1/files/geist-sans-latin-400-normal.woff2",
                            format: "woff2",
                        }}
                        fontWeight={400}
                        fontStyle="normal"
                    />

                    <Font
                        fontFamily="Geist"
                        fallbackFontFamily="Helvetica"
                        webFont={{
                            url: "https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.1/files/geist-sans-latin-500-normal.woff2",
                            format: "woff2",
                        }}
                        fontWeight={500}
                        fontStyle="normal"
                    />
                </head>
                <Preview>{text}</Preview>

                <Body className="bg-[#fff] my-auto mx-auto font-sans">
                    <Container
                        className="border-transparent md:border-[#E8E7E1] my-[40px] mx-auto p-[20px] max-w-[600px]"
                        style={{ borderStyle: "solid", borderWidth: 1 }}
                    >
                        {/* <Logo baseUrl={baseUrl} /> */}
                        <Heading className="text-[#121212] text-[21px] font-normal text-center p-0 my-[30px] mx-0">
                            Step 3 Submission
                        </Heading>

                        <br />

                        <span className="font-medium">Hi YieldBase,</span>
                        <Text className="text-[#121212]">
                            We've got a new submission of Step 3.
                            <br />
                            <br />
                            Please find the data here:
                            <br />
                            <br />
                            <br />
                            Company Name: {companyName}
                            <br />
                            Name: {name}
                            <br />
                            Straße: {street}
                            <br />
                            Hausnummer: {houseNumber}
                            <br />
                            Zip: {zip}
                            <br />
                            Stadt: {city}
                            <br />
                            Email: {email}
                            <br />
                            specialWishes: {specialWishes}
                            <br />
                            <br />
                            <br />
                            That's it.
                            <br />
                        </Text>
                        <br />
                        <Text className="text-[#707070]">Best regards, YieldBase</Text>
                        <br />
                        <br />
                        {/* <GetStarted /> */}
                        <br />
                        {/* <Footer baseUrl={baseUrl} /> */}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default Step3Email;
