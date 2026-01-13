import HelpTooltip from "../HelpTooltip";

export default function TextareaField({
    id,
    label,
    name,
    value,
    onChange,
    placeholder = "",
    height = 120,
    helpText,
    openTooltipId,
    setOpenTooltipId,
    highlighted = false,
}) {
    return (
        <div
            className={`p-[10px] ${
                highlighted ? "bg-highlight" : ""
            } transition-colors duration-200`}
        >
            <div className="flex items-start justify-between gap-2 mb-2">
                <label className="text-[15px] leading-[20px] font-medium">
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

            <textarea
                name={name}
                value={value || ""}
                placeholder={placeholder}
                onChange={(e) => onChange(name, e.target.value)}
                style={{ height }}
                className="w-full rounded-[3px] border border-gray-100 hover:border-secondary px-[10px] py-[6px] text-sm outline-0 transition-colors resize-none bg-white"
            />
        </div>
    );
}
