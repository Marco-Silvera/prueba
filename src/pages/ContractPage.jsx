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

    const currentStep = step ? Number(step) : 0;

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
                    <aside className="w-full bg-white max-w-[362px] p-[10px] rounded-[8px] border border-[#f1f1f1]">
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
                    <main className="flex-1 p-8 overflow-y-auto sticky top-4 bg-white rounded-2xl border border-gray-200 max-h-[calc(100vh-130px)] scrollbar-thin">
                        <ContractPreview 
                            currentStep={currentStep}
                            onFieldHover={setHoveredFieldId}
                        />
                    </main>

                    {/* Derecha: progreso */}
                    <aside className="w-full max-w-[220px] p-6 border-l sticky top-4 overflow-y-auto scrollbar-thin">
                        <h3 className="font-semibold mb-4">Progreso</h3>
                        <div className="text-sm text-gray-600">
                            Paso {currentStep} de 3
                        </div>
                    </aside>
                </div>
            </div>
        </ContractLayout>
    );
}
