import { LogistikHeute } from "./svg/knowof/LogistikHeute";
import { BusinessInsider } from "./svg/knowof/BusinessInsider";
import { NeueVerpackung } from "./svg/knowof/NeueVerpackung";

export function Partners() {
    return (
        <div className="flex justify-center mt-8">
            <div className="grid gap-4 items-center">
                <p className="mt-4 md:mt-6 text-[#707070] text-center">
                    Bekannt aus
                </p>
                <div className="grid grid-cols-3 gap-8 sm:grid-cols-3 sm:gap-16">
                    <div className="flex items-center justify-center">
                        <a
                            href="https://www.google.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center justify-center"
                        >
                            <LogistikHeute className="h-6 w-24 sm:h-8 sm:w-32" />
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <a
                            href="https://www.google.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center justify-center"
                        >
                            <BusinessInsider className="h-6 w-24 sm:h-8 sm:w-32" />
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <a
                            href="https://www.google.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center justify-center"
                        >
                            <NeueVerpackung className="h-6 w-24 sm:h-8 sm:w-32" />
                        </a>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}