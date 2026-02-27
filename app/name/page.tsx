import CurvedLoop from "@/components/CurvedLoop";

export default function NameMarquee() {
    return (
        <CurvedLoop
            marqueeText=" ♥ Chris__Codes"
            speed={2.2}
            curveAmount={200}
            interactive
            className="fill-pink-500!"
        />
    );
}
