"use client"

import Script from "next/script";

export default function Page() {
  return (
    <div className="mt-24">
      <iframe data-tally-src="https://tally.so/embed/n9E2pQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" height="284" frameBorder="0" marginHeight="0" marginWidth="0" title="Contact form"></iframe>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          Tally.loadEmbeds();
        }}
      />
    </div>
  );
}
