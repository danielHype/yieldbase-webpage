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

interface Step2EmailProps {
    length_in_mm: string;
    width_in_mm: string;
    height_in_mm: string;
}

export const Step2Email = ({
    length_in_mm = "", width_in_mm = "", height_in_mm = "",
}: Step2EmailProps) => {

    const text = `A new Step 2 Submission`;

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
                            Step 2 Submission
                        </Heading>

                        <br />

                        <span className="font-medium">Hi RevBoost,</span>
                        <Text className="text-[#121212]">
                            We've got a new submission of Step 2.
                            <br />
                            <br />
                            Please find the data here:
                            <br />
                            <br />
                            <br />
                            Länge in MM: {length_in_mm}
                            <br />
                            Breite in MM: {width_in_mm}
                            <br />
                            Höhe in MM: {height_in_mm}
                            <br />
                            <br />
                            <br />
                            That's it.
                            <br />
                        </Text>
                        <br />
                        <Text className="text-[#707070]">Best regards, RevBoost</Text>
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

export default Step2Email;
