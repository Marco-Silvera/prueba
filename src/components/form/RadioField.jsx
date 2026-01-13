import HelpTooltip from "./HelpTooltip";

export default function RadioField({
    id,
    label,
    name,
    value,
    onChange,
    options,
    helpText,
    openTooltipId,
    setOpenTooltipId,
}) {
    return (
        <div className="p-[10px]">
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

            <div className="flex flex-col gap-2">
                {options.map((opt) => (
                    <label
                        key={opt.value}
                        className="flex items-center gap-2 cursor-pointer text-sm"
                    >
                        <input
                            type="radio"
                            name={name}
                            value={opt.value}
                            checked={value === opt.value}
                            onChange={() => onChange(name, opt.value)}
                        />
                        <span>{opt.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
