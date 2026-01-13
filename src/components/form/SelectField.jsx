export default function SelectField({
    label,
    name,
    value,
    options,
    onChange,
    placeholder = "Seleccione una opción",
}) {
    return (
        <div className="p-[10px]">
            <label className="block mb-2 text-[15px] font-medium">
                {label}
            </label>

            <select
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                className="
                    w-full h-[32px]
                    border border-gray-200 rounded-[3px]
                    text-sm px-[8px]
                    focus:outline-none focus:border-secondary
                "
            >
                <option value="" disabled>
                    {placeholder}
                </option>

                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
