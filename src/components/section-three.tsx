import { BentoCard } from "./bento-card";

export default function SectionThree() {
    return (
        <div className="mx-2 mt-2 rounded-4xl  py-32">

            <h4 className="font-medium text-xl md:text-2xl font-white mb-4">Qualität</h4>

            <h4 className="font-medium text-2xl md:text-4xl mb-4">Customer outreach has never been easier.</h4>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                <BentoCard
                    dark
                    eyebrow="Networking"
                    title="Sell at the speed of light"
                    description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
                    graphic={
                        <div className="h-80  bg-[size:851px_344px] bg-no-repeat" />
                    }
                    fade={['top']}
                    className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
                />
                <BentoCard
                    dark
                    eyebrow="Integrations"
                    title="Meet leads where they are"
                    description="With thousands of integrations, no one will be able to escape your cold outreach."
                    graphic={
                        <div className="h-80  bg-[size:851px_344px] bg-no-repeat" />
                    }
                    // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
                    className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
                />
                <BentoCard
                    dark
                    eyebrow="Meetings"
                    title="Smart call scheduling"
                    description="Automatically insert intro calls into your leads' calendars without their consent."
                    graphic={
                        <div className="h-80  bg-[size:851px_344px] bg-no-repeat" />
                    }
                    className="lg:col-span-2 lg:rounded-bl-4xl"
                />
                <BentoCard
                    dark
                    eyebrow="Engagement"
                    title="Become a thought leader1"
                    description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
                    graphic={
                        <div className="h-80  bg-[size:851px_344px] bg-no-repeat" />
                    }
                    fade={['top']}
                    className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
                />
            </div>

        </div>
    )
}