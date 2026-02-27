import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
    weight: "400",
    subsets: ["cyrillic"],
});
export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
