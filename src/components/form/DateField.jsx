import HelpTooltip from "./HelpTooltip";

export default function DateField({
    id,
    label,
    name,
    value,
    onChange,
    helpText,
    openTooltipId,
    setOpenTooltipId,
    min,
    max,
    highlighted = false,
}) {
    return (
        <div className={`p-[10px] ${highlighted ? "bg-highlight" : ""} transition-colors duration-200`}>
            <div className="flex items-start justify-between gap-2 mb-2">
                <label
                    htmlFor={id}
                    className="text-[15px] leading-[20px] font-medium"
                >
                    {label}
                </label>

                {helpText && (
                    <HelpTooltip
                        id={id}
                        text={helpText}
                        openTooltipId={openTooltipId}
                        setOpenTooltipId={setOpenTooltipId}
                    />
                )}
            </div>

            <input
                id={id}
                type="date"
                name={name}
                value={value || ""}
                min={min}
                max={max}
                onChange={(e) => onChange(name, e.target.value)}
                className="w-full rounded-[3px] border border-gray-100 hover:border-secondary px-[10px] h-[28px] text-sm outline-0 transition-color bg-white"
            />
        </div>
    );
}
