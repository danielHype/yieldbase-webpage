// src/components/Roadmap.jsx
import React from 'react';
import { useTranslation } from '@/app/i18n/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useLanguage from '@/hooks/useLanguage';

const milestones = [
    {
        key: "Q4_2024",
        items: ["localBankOnramp", "dashboardDevelopment"],
    },
    {
        key: "Q1_2025",
        items: ["communityBuilding", "farmingStrategiesImplementation"],
    },
    {
        key: "Q2_2025",
        items: ["auditFinancialProtocols", "goLiveMVP"],
    },
    {
        key: "Q3_2025",
        items: ["goLivePublic"],
    },
];

export default function Roadmap() {
    const lng = useLanguage()
    const { t } = useTranslation(lng, "roadmap");

    return (
        <div className="container mx-auto p-4" id="roadmap">
            <h1 className="text-3xl font-bold mb-8 text-center">{t('productRoadmap')}</h1>
            <div className="space-y-12">
                {milestones.map((milestone, index) => (
                    <div key={index} className="relative">
                        <div className="sticky top-20 z-10 bg-background py-4">
                            <h2 className="text-2xl font-semibold">{t(`milestones.${milestone.key}`)}</h2>
                        </div>
                        <div className="space-y-6">
                            {milestone.items.map((itemKey, itemIndex) => {
                                const item = t(`items.${itemKey}`, { returnObjects: true });
                                return (
                                    <Card key={itemIndex} className="relative">
                                        <CardHeader>
                                            <CardTitle>{item.title}</CardTitle>
                                            <CardDescription>{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <h4 className="font-semibold mb-2">{t('Key Tasks:')}</h4>
                                            <ul className="list-disc pl-5 mb-4 space-y-1">
                                                {item.tasks.map((task, taskIndex) => (
                                                    <li key={taskIndex}>{task}</li>
                                                ))}
                                            </ul>
                                            <Badge variant="secondary">{item.timeline}</Badge>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
