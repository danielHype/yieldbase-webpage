import { CalEmbed } from "@/components/cal-embed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeting",
};

export default function Page() {
  return (
    <div className="mt-24">
      <CalEmbed calLink="rickastley/15min" />
    </div>
  );
}
