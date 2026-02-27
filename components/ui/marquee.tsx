export default function Marquee({ items }: { items: string[] }) {
    return (
        <div className="border-border text-overlay-primary bg-secondary-background relative flex w-full overflow-x-hidden border-t-2 border-b-2">
            <div className="animate-marquee py-4 whitespace-nowrap">
                {items.map((item) => {
                    return (
                        <span
                            key={item}
                            className="mx-4 text-xl font-extrabold"
                        >
                            {item}
                        </span>
                    );
                })}
            </div>

            <div className="animate-marquee2 absolute top-0 py-4 whitespace-nowrap">
                {items.map((item) => {
                    return (
                        <span
                            key={item}
                            className="mx-4 text-xl font-extrabold"
                        >
                            {item}
                        </span>
                    );
                })}
            </div>

            {/* must have both of these in order to work */}
        </div>
    );
}
