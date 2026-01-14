import { useEffect, useState } from "react";
import { useContractStore } from "../../store/contractStore";
import ContractField from "./ContractField";
import { useContractRefs } from "./useContractRefs";
import { formatMoney, formatMoneyES } from "../../utils/money";
import { numberToWordsES } from "../../utils/numberToWordsEs";

export default function ContractPreview({ currentStep, onFieldHover }) {
    const data = useContractStore((state) => state.data);
    const { registerRef } = useContractRefs();

    const [highlightFurniture, setHighlightFurniture] = useState(false);
    const [highlightPayment, setHighlightPayment] = useState(false);

    useEffect(() => {
        if (data.arrender === true || data.arrender === false) {
            setHighlightFurniture(true);

            const timer = setTimeout(() => {
                setHighlightFurniture(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [data.arrender]);

    useEffect(() => {
        if (data.paymentMethod) {
            setHighlightPayment(true);

            const timer = setTimeout(() => {
                setHighlightPayment(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [data.paymentMethod]);

    return (
        <article className="max-w-[720px] mx-auto text-[14px] leading-6">
            <h2 className="text-center font-semibold mb-6 uppercase">
                Contrato de arrendamiento de vivienda
            </h2>

            <p>
                _______, con DNI/NIF _________, y con domicilio en:{" "}
                <ContractField
                    id="address"
                    step={0}
                    value={data.address}
                    currentStep={currentStep}
                    registerRef={registerRef}
                    onHover={onFieldHover}
                />
                .
            </p>
            <p>
                En adelante, el{" "}
                <span className="font-medium">"Arrendatario"</span>
            </p>
            <p>
                Y que, a continuación, serán referidas, individualmente como la{" "}
                <span className="font-medium">"Parte"</span> y, de forma
                conjunta, como las <span className="font-medium">"Partes"</span>
                . Las Partes, en la calidad con la que actúan, y reconociéndose
                capacidad jurídica para contratar y obligarse, y en especial
                para el otorgamiento del presente{" "}
                <span className="font-medium uppercase">
                    Contrato de arrendamiento de vivienda.
                </span>{" "}
                En adelante, el <span className="font-medium">"Contrato".</span>
            </p>

            <h2 className="text-center font-semibold mb-6 uppercase">
                Exponen
            </h2>

            <p>
                <span className="font-medium">I.</span> Que el Arrendador es
                propietario de la vivienda ubicada en:{" "}
                <ContractField
                    id="address"
                    step={0}
                    value={data.address}
                    currentStep={currentStep}
                    registerRef={registerRef}
                    onHover={onFieldHover}
                />
                , con la siguiente Referencia Catastral:{" "}
                <ContractField
                    id="reference"
                    step={0}
                    value={data.reference}
                    currentStep={currentStep}
                    registerRef={registerRef}
                    onHover={onFieldHover}
                />
                . La vivienda cuenta con{" "}
                <ContractField
                    id="meters"
                    step={0}
                    value={data.meters}
                    currentStep={currentStep}
                    registerRef={registerRef}
                    onHover={onFieldHover}
                />{" "}
                metros cuadrados de superficie, y presenta las siguientes
                características:
            </p>
            <p>
                <ContractField
                    id="characteristics"
                    step={0}
                    value={data.characteristics}
                    currentStep={currentStep}
                    registerRef={registerRef}
                    onHover={onFieldHover}
                />
            </p>
            <p>
                En adelante, la <span className="font-medium">"Vivienda".</span>
            </p>
            <p>
                Dicha duperficie y composición, así como sus características y
                estado son perfectamente conocidas y aceptadas por las partes
                intervinientes en este contrato. No obstante, la Vivienda se
                arrienda como cuerpo cierto, así de diferir la superficie real y
                la aquí descrita, esto no afectará de forma alguna a las
                condiciones y cláusulas que aquí se fijan, particularmente en lo
                relativo al precio de la renta.
            </p>

            {/* FALTA TEXTOOOOOOOOOOOOOOOOOO */}

            <h2 className="text-center font-semibold mb-6 uppercase">
                Cláusulas
            </h2>
            <h3 className="font-semibold uppercase">Primera. Objeto</h3>
            <p>En el presente Contrato...</p>
            <p>
                La Vivienda se pondrá a disposición del Arrendatario con la
                entrega de llaves, recibiendo la Vivienda en un estado adecuado
                al fin al que se destina y con conocimiento previo de las
                características de la misma, especialmente su estado de uso y
                conservación.{" "}
                <span
                    id="furnitureClause"
                    ref={(el) => registerRef("furnitureClause", el)}
                    className={`
                    transition-colors duration-500
                    ${highlightFurniture ? "bg-green-200" : ""}
                `}
                >
                    {data.arrender === true && (
                        <span>
                            Asimismo, la Vivienda se entrega amueblada con el
                            mobiliario detallado en el Anexo de este Contrato.
                        </span>
                    )}
                </span>
            </p>
            <p>
                1 La Vivienda{" "}
                {data.arrender === true && (
                    <span
                        id="furnitureClause2"
                        ref={(el) => registerRef("furnitureClause2", el)}
                        className={`
                        transition-colors duration-500
                        ${highlightFurniture ? "bg-green-200" : ""}
                    `}
                    >
                        y, en su caso, su mobiliario,
                    </span>
                )}{" "}
                es propiedad del Arrendador y deberá serle devuelta, a la
                finalización del presente contrato, en igual estado de
                conservación y limpieza con que lo entrega, salvo el desgaste
                normal y apropiedo del mismo. El arrendamiento es global y, en
                consecuencia, su extinción conjunta y total.
            </p>
            <h3 className="font-semibold uppercase">
                Segunda. Duración y Prórrogas
            </h3>
            <p>
                El arrendamiento se pacta por el plazo siguiente:{" "}
                <ContractField
                    id="period"
                    step={0}
                    value={data.period}
                    currentStep={currentStep}
                    registerRef={registerRef}
                    onHover={onFieldHover}
                />
                , a contar desde el siguiente día:
                <ContractField
                    id="startDate"
                    step={0}
                    value={data.startDate}
                    currentStep={currentStep}
                    registerRef={registerRef}
                    onHover={onFieldHover}
                />
                .
            </p>
            <p>...</p>
            <h3 className="font-semibold uppercase">
                Tercera. La renta y su actualización
            </h3>
            <p>
                La renta pactada por las Partes es de{" "}
                <span className="font-medium">
                    {data.amount && numberToWordsES(formatMoney(data.amount))}(
                    <ContractField
                        id="amount"
                        step={0}
                        value={data.amount}
                        currentStep={currentStep}
                        registerRef={registerRef}
                        onHover={onFieldHover}
                    />{" "}
                    €) mensuales
                </span>{" "}
                que el Arrendatario pagará al Arrendador cada mes,
                anticipadamente.
            </p>
            <p>
                El pago de cada una de las mensualidades se realizará dentro de
                los siete (7) primeros días del mes.
            </p>
            {data.paymentMethod === "other" && (
                <span
                    id="paymentClause"
                    ref={(el) => registerRef("paymentClause", el)}
                    className={`
                        transition-colors duration-500
                        ${highlightPayment ? "bg-green-200" : ""}
                    `}
                >
                    Las partes acuerdan como medio de pago la siguiente manera:
                    <br />
                    <ContractField
                        id="amount"
                        step={2}
                        value={data.amount}
                        currentStep={currentStep}
                        registerRef={registerRef}
                    />
                    <br />
                    El Arrendatario entregará la cantidad indicada en el párrafo
                    precedente y el Arrendador le hará entrega de un recibo del
                    pago que acredita la cantidad y conceptos en los que el
                    Arrendatario realiza el pago.
                </span>
            )}
            {data.paymentMethod === "cash" && (
                <span
                    id="paymentClause2"
                    ref={(el) => registerRef("paymentClause2", el)}
                    className={`
                        transition-colors duration-500
                        ${highlightPayment ? "bg-green-200" : ""}
                    `}
                >
                    El pago se realizará en efectivo en la Vivienda. El
                    Arrendatario entregará la cantidad indicada en el párrafo
                    precendente y el Arrendador le hará entrega de un recibo del
                    pago que acredita la cantidad y conceptos en los que el
                    Arrendatario realiza el pago.
                </span>
            )}
            {data.paymentMethod === "transfer" && (
                <span
                    id="paymentClause2"
                    ref={(el) => registerRef("paymentClause2", el)}
                    className={`
                        transition-colors duration-500
                        ${highlightPayment ? "bg-green-200" : ""}
                    `}
                >
                    El pago se realizará mediante ingreso o transferencia
                    bancaria a favor de la cuenta cuyos datos son:
                    <br />
                    <span>
                        <span className="font-medium">Entidad bancaria:</span>
                        <ContractField
                            id="amount"
                            step={2}
                            value={data.amount}
                            currentStep={currentStep}
                            registerRef={registerRef}
                        />
                    </span>
                    <br />
                    <span>
                        <span className="font-medium">
                            IBAN identificador de la cuenta:
                        </span>
                        <ContractField
                            id="amount"
                            step={2}
                            value={data.amount}
                            currentStep={currentStep}
                            registerRef={registerRef}
                        />
                    </span>
                    <br />
                    <span>
                        <span className="font-medium">
                            Titular de la cuenta:
                        </span>
                        <ContractField
                            id="amount"
                            step={2}
                            value={data.amount}
                            currentStep={currentStep}
                            registerRef={registerRef}
                        />
                    </span>
                    <br />
                    <span>
                        El comprobante de ingreso o transferencia resultante de
                        la realización de dicha transacción servirá como
                        comprobante o justificante del pago efectuado.
                    </span>
                </span>
            )}
            <p>
                Cualquier cambio en la forma de pago deberá ser acordada por
                escrito por ambas partes.
            </p>
        </article>
    );
}
