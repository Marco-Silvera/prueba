import { useRef } from "react";
import { useContractStore } from "../../../store/contractStore";
import DateField from "../DateField";
import FormField from "../FormField";
import RadioField from "../RadioField";
import TextareaField from "./TextareaField";

function Step1Form({ openTooltipId, setOpenTooltipId, hoveredFieldId }) {
    const data = useContractStore((state) => state.data);
    const updateField = useContractStore((state) => state.updateField);

    const fieldRefs = useRef({});

    const scrollToField = (id) => {
        const el = fieldRefs.current[id];
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
            el.focus?.();
        }
    };

    return (
        <div>
            <FormField
                ref={(el) => (fieldRefs.current.address = el)}
                id="address"
                name="address"
                onFocus={() => scrollToField("address")}
                value={data.address}
                onChange={updateField}
                label="Dirección completa de la vivienda que se desea alquilar"
                placeholder="Ej. C/ Rey, 15, 2º C. 28003. Madrid."
                openTooltipId={openTooltipId}
                setOpenTooltipId={setOpenTooltipId}
                highlighted={hoveredFieldId === "address"}
            />
            <FormField
                id="meters"
                name="meters"
                value={data.meters}
                onChange={updateField}
                label="Número de metros cuadrados construidos que dispone la vivienda:"
                numeric
                placeholder="Escribe un número"
                helpText={`Indique el número (la cifra) de metros cuadrados totales construidos que componen la vivienda que va a ser alquilada por la parte arrendataria.

La cantidad total de metros cuadrados incluirá la superficie de la vivienda en sí misma y, además, la superficie de todas las partes, dependencias o espacios anexos o accesorios de la vivienda que son ofrecidos en el mismo contrato de arrendamiento y por la misma parte arrendadora.

¿Necesita ayuda personalizada?
Al final, tendrá la opción de consultar a un abogado.`}
                openTooltipId={openTooltipId}
                setOpenTooltipId={setOpenTooltipId}
                highlighted={hoveredFieldId === "meters"}
            />
            <TextareaField
                id="characteristics"
                name="characteristics"
                value={data.characteristics}
                onChange={updateField}
                label="Describa las partes, dependencias o espacios que forman la vivienda:"
                placeholder="Ej: Salón con cocina americana, tres dormitorios, dos baños, un aseo, un salón, una plaza de garaje y trasteros en el sótano."
                helpText={`Enumere todas las partes, estancias o espacios que forman la vivienda.

Se debe indicar el número de habitaciones que tiene la vivienda, así como el número de baños o aseos y sus principales características (p. ej. dispone de cocina americana, cuenta con trastero, etc.). Asimismo, en caso de tener balcones o terrazas, el número de ellos.

¿Necesita ayuda personalizada?
Al final, tendrá la opción de consultar a un abogado.`}
                height={80}
                openTooltipId={openTooltipId}
                setOpenTooltipId={setOpenTooltipId}
                highlighted={hoveredFieldId === "characteristics"}
            />
            <RadioField
                id="arrender"
                name="arrender"
                value={data.arrender}
                onChange={updateField}
                label="¿El arrendador entrega la vivienda amueblada?"
                numeric
                options={[
                    { label: "No", value: false },
                    { label: "Si", value: true },
                ]}
                helpText={`Seleccione "Sí" en el caso de que el arrendador entregue al arrendatario la vivienda debidamente amueblada, de forma que éste puede disfrutar de la vivienda y de los muebles que el propietario de la vivienda pone a su disposición.

Para enumerar los bienes muebles con los que se alquila la vivienda, se debe adjuntar un anexo de inventario de bienes muebles al contrato.

¿Necesita ayuda personalizada?
Al final, tendrá la opción de consultar a un abogado.`}
                openTooltipId={openTooltipId}
                setOpenTooltipId={setOpenTooltipId}
            />
            <FormField
                id="reference"
                name="reference"
                value={data.reference}
                onChange={updateField}
                label="Introduzca la Referencia Catastral de la vivienda:"
                placeholder="Ej. 4359406SC4754J0002PB"
                helpText={`Utilice este espacio para introducir la Referencia Catastral de la vivienda.

Se puede comprobar dicha referencia a través del portal online del catastro en catrastro.es o bien en la escritura pública donde se recoge la titularidad de la vivienda (como por ejemplo, la escritura de compraventa de la vivienda).

¿Necesita ayuda personalizada?
Al final, tendrá la opción de consultar a un abogado.`}
                openTooltipId={openTooltipId}
                setOpenTooltipId={setOpenTooltipId}
                highlighted={hoveredFieldId === "reference"}
            />
            <FormField
                id="period"
                name="period"
                value={data.period}
                onChange={updateField}
                label="Periodo de duración de este contrato de arrendamiento:"
                placeholder="Ej. 1 año; 3 años; 18 meses; 5 años"
                helpText={`Utilice este espacio para introducir la Referencia Catastral de la vivienda.

Se puede comprobar dicha referencia a través del portal online del catastro en catrastro.es o bien en la escritura pública donde se recoge la titularidad de la vivienda (como por ejemplo, la escritura de compraventa de la vivienda).

¿Necesita ayuda personalizada?
Al final, tendrá la opción de consultar a un abogado.`}
                openTooltipId={openTooltipId}
                setOpenTooltipId={setOpenTooltipId}
                highlighted={hoveredFieldId === "period"}
            />
            <DateField
                id="startDate"
                name="startDate"
                value={data.startDate}
                onChange={updateField}
                label="Fecha en la que el arrendador podrá la vivienda a disposición del arrendatario:"
                openTooltipId={openTooltipId}
                setOpenTooltipId={setOpenTooltipId}
                highlighted={hoveredFieldId === "startDate"}
            />
            <FormField
                id="amount"
                name="amount"
                value={data.amount}
                onChange={updateField}
                label="Cantidad en euros de la renta o alquiler mensual que el arrendatario debe abonar al arrendador:"
                numeric
                placeholder="Escribe un número"
                openTooltipId={openTooltipId}
                setOpenTooltipId={setOpenTooltipId}
                highlighted={hoveredFieldId === "amount"}
            />
        </div>
    );
}

export default Step1Form;
