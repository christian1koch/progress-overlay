import { Progress } from "@/components/ui/progress";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
    weight: "400",
    subsets: ["cyrillic"],
});

export default function Home() {
    //  TODO: Move to colors later
    const GREY_AZURE = "#365b6d";
    const CYAN = "#41c1ba";
    const LIGHT_GREY = "#f7f7f7";

    return (
        <div
            className={`bg-background flex h-screen w-full items-center justify-center ${pressStart2P.className} `}
        >
            <div className="flex w-full flex-col">
                <p className="text-overlay-primary mb-5 text-5xl">
                    Project Progress
                </p>
                <Progress
                    value={50}
                    className="h-12"
                    indicatorColor={CYAN}
                    backgroundColor={GREY_AZURE}
                />
            </div>
        </div>
    );
}
