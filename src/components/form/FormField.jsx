import { forwardRef } from "react";
import HelpTooltip from "./HelpTooltip";

const FormField = forwardRef(
    (
        {
            label,
            name,
            value,
            placeholder = "",
            helpText,
            id,
            openTooltipId,
            setOpenTooltipId,
            numeric = false,
            allowNegative = false,
            onChange,
            onFocus,
            highlighted = false,
        },
        ref
    ) => {
        const handleChange = (rawValue) => {
            let newValue = rawValue;

            if (numeric) {
                newValue = newValue.replace(/[^0-9.-]/g, "");

                const parts = newValue.split(".");
                if (parts.length > 2) {
                    newValue = parts[0] + "." + parts.slice(1).join("");
                }

                if (!allowNegative) {
                    newValue = newValue.replace(/-/g, "");
                } else {
                    newValue = newValue.replace(/(?!^)-/g, "");
                }
            }

            onChange(name, newValue);
        };

        return (
            <div
                className={`p-[10px] ${
                    highlighted ? "bg-highlight" : ""
                } transition-colors duration-200`}
                id={id}
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

                <input
                    ref={ref}
                    type="text"
                    inputMode={numeric ? "decimal" : "text"}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e.target.value)}
                    onFocus={onFocus}
                    className="w-full rounded-[3px] border border-gray-100 hover:border-secondary px-[10px] h-[28px] text-sm outline-0 transition-colors duration-200 bg-white"
                />
            </div>
        );
    }
);

export default FormField;
