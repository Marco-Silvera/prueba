import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import ContractLayout from "../components/layout/ContractLayout";
import Step1Form from "../components/form/steps/Step1Form";
import Step2Form from "../components/form/steps/Step2Form";
import FormNavigation from "../components/form/FormNavigation";
import ContractPreview from "../components/contract/ContractPreview";

export default function ContractPage() {
    const { step } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    console.log("STEP:", step);
    const totalStep = 20;

    const currentStep = step ? Number(step) : 0;

    let progressBar = Math.round((currentStep / totalStep) * 100);

    console.log(progressBar);

    if (Number.isNaN(currentStep)) {
        navigate("/contrato", { replace: true });
    }

    const NextStep = () => {
        navigate(`/contrato/${currentStep + 1}`);
    };

    const PrevStep = () => {
        if (currentStep === 1) {
            navigate("/contrato");
        } else {
            navigate(`/contrato/${currentStep - 1}`);
        }
    };

    const [openTooltipId, setOpenTooltipId] = useState(null);
    const [hoveredFieldId, setHoveredFieldId] = useState(null);

    return (
        <ContractLayout>
            <div className="flex flex-col pb-[18px]">
                <h1 className="text-[26px] text-primary font-medium leading-[26px] pt-[18px] pb-[8px]">
                    Contrato de arrendamiento de vivienda habitual
                </h1>

                <div className="flex w-full max-w-[1482px] self-center gap-4 items-start">
                    {/* Izquierda: formulario */}
                    <aside className="w-full bg-white max-w-[362px] p-[10px] rounded-[8px] border border-border-container">
                        {currentStep === 0 && (
                            <Step1Form
                                openTooltipId={openTooltipId}
                                setOpenTooltipId={setOpenTooltipId}
                                hoveredFieldId={hoveredFieldId}
                            />
                        )}
                        {currentStep === 1 && (
                            <Step2Form
                                openTooltipId={openTooltipId}
                                setOpenTooltipId={setOpenTooltipId}
                            />
                        )}
                        {currentStep >= 2 && (
                            <div className="text-gray-500 text-sm">
                                Paso {currentStep} - Próximamente
                            </div>
                        )}
                        <FormNavigation
                            currentStep={currentStep}
                            PrevStep={PrevStep}
                            NextStep={NextStep}
                        />
                    </aside>
                    {/* Centro: contrato */}
                    <main className="flex-1 p-8 overflow-y-auto sticky top-4 bg-white rounded-2xl border border-border-container max-h-[calc(100vh-130px)] scrollbar-thin">
                        <ContractPreview
                            currentStep={currentStep}
                            onFieldHover={setHoveredFieldId}
                        />
                    </main>

                    {/* Derecha: progreso */}
                    <aside className="w-full max-w-[220px] p-[10px] sticky top-4 overflow-y-auto scrollbar-thin">
                        <h3 className="font-semibold text-sm mb-4">
                            Progresión:
                        </h3>
                        <div className="w-[200px] bg-primary h-[22px] flex items-center justify-start p-[3px] rounded-lg relative">
                            <p className="absolute pl-[5px] text-white font-medium text-xs leading-[12px]">
                                {progressBar}%
                            </p>
                            <div
                                className="h-full bg-gray-400 transition-all duration-500 ease-out rounded-lg"
                                style={{ width: `${progressBar}%` }}
                            ></div>
                        </div>
                    </aside>
                </div>
            </div>
        </ContractLayout>
    );
}
