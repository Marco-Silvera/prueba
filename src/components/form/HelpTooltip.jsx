import { useEffect, useRef } from "react";

export default function HelpTooltip({
    id,
    text,
    openTooltipId,
    setOpenTooltipId,
}) {
    const isOpen = openTooltipId === id;
    const tooltipRef = useRef(null);

    const toggleTooltip = () => {
        setOpenTooltipId(isOpen ? null : id);
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (
                tooltipRef.current &&
                !tooltipRef.current.contains(event.target)
            ) {
                setOpenTooltipId(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, setOpenTooltipId]);

    return (
        <div className="relative" ref={tooltipRef}>
            <button
                type="button"
                onClick={toggleTooltip}
                className="w-5 h-5 rounded-full bg-secondary text-primary font-medium text-[14px] cursor-pointer"
            >
                ?
            </button>

            {isOpen && (
                <div className="absolute z-10 -top-4 left-10 mt-2 w-[700px] border border-secondary rounded-lg bg-gray-200 p-3 text-sm leading-[21px] text-primary shadow">
                    <div className="flex justify-between items-start">
                        <p className="whitespace-pre-wrap">{text}</p>
                        <button
                            onClick={() => setOpenTooltipId(null)}
                            className="cursor-pointer"
                        >
                        ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
