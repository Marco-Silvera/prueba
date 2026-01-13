import { useEffect, useRef } from "react";

export default function ContractField({
    id,
    step,
    value,
    currentStep,
    registerRef,
    onHover,
}) {
    const ref = useRef(null);

    useEffect(() => {
        registerRef(id, ref);
    }, [id, registerRef]);

    const isActiveStep = step === currentStep;
    const isEmpty = !value;

    return (
        <span
            ref={ref}
            onMouseEnter={() => onHover?.(id)}
            onMouseLeave={() => onHover?.(null)}
            className={`
        inline-block px-1 rounded
        ${isActiveStep ? "bg-highlight" : ""}
        ${isEmpty ? "text-gray-500 italic" : "font-medium"}
    `}
        >
            {value
                ? id === "amount"
                    ? Number(value).toFixed(2) // aquí redondea 2 decimales
                    : value
                : "_____"}
        </span>
    );
}
