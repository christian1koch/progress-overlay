import { Bricolage_Grotesque as our_Font } from "next/font/google";

const pressStart2P = our_Font({
    weight: "400",
    subsets: ["latin"],
});
export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main className={`${pressStart2P.className}`}>{children}</main>
            </body>
        </html>
    );
}
