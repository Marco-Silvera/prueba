export default function FormNavigation({ currentStep, PrevStep, NextStep }) {
    return (
        <div className="flex flex-col gap-4">
            <div
                className={`flex ${
                    currentStep > 0 ? "justify-between" : "justify-end"
                } mt-4`}
            >
                {currentStep > 0 && <button type="button" onClick={PrevStep} className="bg-gray-300 rounded-full px-4 py-1 text-[13px] text-white font-bold cursor-pointer">{"<"} Paso anterior</button>}

                <button
                type="button"
                    onClick={NextStep}
                    className="bg-tertiary rounded-full px-4 py-1 text-[13px] text-primary font-bold cursor-pointer"
                >
                    Paso siguiente {">"}
                </button>
            </div>
            <div className="text-xs underline text-[#6b6868] leading-[12px] flex flex-col gap-1">
                <p className="">Modificar el modelo</p>
                <p className="">
                    Guárdalo(y sigue después)
                </p>
            </div>
        </div>
    );
}
