import { useContractStore } from "../../../store/contractStore";
import SelectField from "../SelectField";

function Step2Form({ openTooltipId, setOpenTooltipId }) {
    const data = useContractStore((state) => state.data);
    const updateField = useContractStore((state) => state.updateField);

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">
                Paso 2 - Información adicional
            </h2>
            <SelectField
                id="paymentMethod"
                name="paymentMethod"
                value={data.paymentMethod || ""}
                onChange={updateField}
                label="El arrendatario realizará el pago de la renta:"
                placeholder="Selecciona metodo de pago"
                options={[
                    {
                        value: "transfer",
                        label: "Ingreso o transferencia bancaria",
                    },
                    { value: "cash", label: "En efectivo" },
                    {
                        value: "other",
                        label: "Otro medio de pago distinto de los anteriores",
                    },
                ]}
                openTooltipId={openTooltipId}
                setOpenTooltipId={setOpenTooltipId}
            />
            {/* Aquí puedes agregar más campos para el paso 2 */}
        </div>
    );
}

export default Step2Form;
