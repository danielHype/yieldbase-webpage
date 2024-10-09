"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "@/app/i18n/client"
import useLanguage from "@/hooks/useLanguage"

const riskStrategies = {
    "no-risk": { name: "No Risk", apy: 0.05 },
    "low-risk": { name: "Low Risk", apy: 0.10 },
    "medium-risk": { name: "Medium Risk", apy: 0.20 },
}

const currencies = {
    IDR: { name: "Indonesian Rupiah", symbol: "Rp", rate: 1 },
    USD: { name: "US Dollar", symbol: "$", rate: 1 }
}

type RiskStrategy = keyof typeof riskStrategies
type Currency = keyof typeof currencies

export default function EnhancedYieldCalculator() {

    const lng = useLanguage()
    const { t } = useTranslation(lng, "yieldCalculator")

    const [dailyDeposit, setDailyDeposit] = useState<number | null>(null)
    const [withdrawalInterval, setWithdrawalInterval] = useState<number>(7)
    const [riskStrategy, setRiskStrategy] = useState<RiskStrategy>("low-risk")
    const [periodYield, setPeriodYield] = useState<number | null>(null)
    const [annualYield, setAnnualYield] = useState<number | null>(null)
    const [currency, setCurrency] = useState<Currency>("IDR")
    const [error, setError] = useState<string | null>(null)

    const calculateYield = () => {
        if (dailyDeposit === null) {
            setError("Please enter a daily deposit amount")
            return
        }

        try {
            if (dailyDeposit < 0) {
                throw new Error("Daily deposit must be a non-negative number")
            }

            const totalDeposit = dailyDeposit * withdrawalInterval
            const annualYieldRate = riskStrategies[riskStrategy].apy
            const periodYieldAmount = (totalDeposit * annualYieldRate) / 365 * withdrawalInterval
            const annualYieldAmount = (periodYieldAmount * (365 / withdrawalInterval))

            setPeriodYield(periodYieldAmount)
            setAnnualYield(annualYieldAmount)
            setError(null)
        } catch (err) {
            console.error("Error calculating yield:", err)
            setError(err instanceof Error ? err.message : "An unexpected error occurred")
            setPeriodYield(null)
            setAnnualYield(null)
        }
    }

    const formatCurrency = (amount: number | null): string => {
        if (amount === null) return "N/A"
        const { symbol, rate } = currencies[currency]
        return `${symbol}${(amount * rate).toFixed(2)}`
    }

    const handleDailyDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setDailyDeposit(value === "" ? null : Number(value))
    }

    return (
        <Card className="w-full max-w-md mx-auto my-16">
            <CardHeader>
                <CardTitle>{t("yieldTitle")}</CardTitle>
                <CardDescription>{t("yieldDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="currency">{t("currency")}</Label>
                    <Select
                        value={currency}
                        onValueChange={(value: Currency) => setCurrency(value)}
                    >
                        <SelectTrigger id="currency">
                            <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(currencies).map(([key, { name }]) => (
                                <SelectItem key={key} value={key}>{name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="daily-deposit">{t("dailyDeposit")} ({currencies[currency].symbol}) - {t("yourRevenues")}</Label>
                    <Input
                        id="daily-deposit"
                        type="number"
                        placeholder={`${t("dailyDepositAmountIn")} ${currencies[currency].name}`}
                        value={dailyDeposit ?? ""}
                        onChange={handleDailyDepositChange}
                        min="0"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="withdrawal-interval">{t("withdrawalInterval")}</Label>
                    <Select
                        value={withdrawalInterval.toString()}
                        onValueChange={(value) => setWithdrawalInterval(Number(value))}
                    >
                        <SelectTrigger id="withdrawal-interval">
                            <SelectValue placeholder="Select interval" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7">{t("every7Days")}</SelectItem>
                            <SelectItem value="14">{t("every14Days")}</SelectItem>
                            <SelectItem value="30">{t("every30Days")}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="risk-strategy">{t("riskStrategy")}</Label>
                    <Select
                        value={riskStrategy}
                        onValueChange={(value: RiskStrategy) => setRiskStrategy(value)}
                    >
                        <SelectTrigger id="risk-strategy">
                            <SelectValue placeholder="Select strategy" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(riskStrategies).map(([key, { name, apy }]) => (
                                <SelectItem key={key} value={key}>
                                    {name} ({(apy * 100).toFixed(0)}% APY)
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-4">
                <Button
                    onClick={calculateYield}
                    className="w-full"
                    disabled={dailyDeposit === null}
                >
                    {dailyDeposit === null ? `${t("dailyDepositInput")}` : `${t("calculateYield")}`}
                </Button>
                {error && (
                    <div className="text-red-500 text-center w-full">{error}</div>
                )}
                {!error && periodYield !== null && annualYield !== null && (
                    <div className="text-center space-y-2 w-full">
                        <div className="bg-secondary p-4 rounded-md">
                            <p className="text-lg font-semibold">{t("estimatedYieldPerPeriod")}</p>
                            <p className="text-2xl font-bold text-primary">{formatCurrency(periodYield)}</p>
                            <p className="text-sm text-muted-foreground">{t("per")} {withdrawalInterval}{t("dayPeriod")}</p>
                        </div>
                        <div className="bg-secondary p-4 rounded-md">
                            <p className="text-lg font-semibold">{t("extraPolatedAnnualYield")}</p>
                            <p className="text-2xl font-bold text-primary">{formatCurrency(annualYield)}</p>
                            <p className="text-sm text-muted-foreground">{t("perYear")}</p>
                        </div>
                    </div>
                )}
            </CardFooter>
        </Card>
    )
}