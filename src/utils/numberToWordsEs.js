const UNIDADES = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
];

const DIEZ_A_DIECINUEVE = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
];

const DECENAS = [
    "",
    "diez",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
];

const CENTENAS = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
];

function convertLessThan100(n) {
    if (n < 10) return UNIDADES[n];
    if (n < 20) return DIEZ_A_DIECINUEVE[n - 10];

    const ten = Math.floor(n / 10);
    const unit = n % 10;

    if (ten === 2 && unit !== 0) return `veinti${UNIDADES[unit]}`;

    return unit ? `${DECENAS[ten]} y ${UNIDADES[unit]}` : DECENAS[ten];
}

function convertLessThan1000(n) {
    if (n === 100) return "cien";
    if (n < 100) return convertLessThan100(n);

    const hundred = Math.floor(n / 100);
    const rest = n % 100;

    return rest
        ? `${CENTENAS[hundred]} ${convertLessThan100(rest)}`
        : CENTENAS[hundred];
}

// Para miles, millones y miles de millones
function numberToWordsLarge(n) {
    if (n === 0) return "cero";

    if (n < 1000) return convertLessThan1000(n);

    const billions = Math.floor(n / 1_000_000_000);
    n %= 1_000_000_000;

    const millions = Math.floor(n / 1_000_000);
    n %= 1_000_000;

    const thousands = Math.floor(n / 1000);
    n %= 1000;

    let parts = [];

    if (billions)
        parts.push(
            billions === 1
                ? "mil millones"
                : `${numberToWordsLarge(billions)} mil millones`
        );
    if (millions)
        parts.push(
            millions === 1
                ? "un millón"
                : `${numberToWordsLarge(millions)} millones`
        );
    if (thousands)
        parts.push(
            thousands === 1 ? "mil" : `${numberToWordsLarge(thousands)} mil`
        );
    if (n) parts.push(convertLessThan1000(n));

    return parts.join(" ");
}

export function numberToWordsES(value) {
    const number = Number(value);
    if (Number.isNaN(number)) return "";

    const euros = Math.floor(number);
    const cents = Math.round((number - euros) * 100);

    // Si es demasiado grande (más de 10 dígitos antes de decimales), devuelve el número en cifras
    if (euros > 9_999_999_999) return `${number.toFixed(2)}`;

    let eurosText = numberToWordsLarge(euros);

    eurosText += euros === 1 ? " euro" : " euros";

    if (cents === 0) return eurosText;

    const centsText =
        cents === 1 ? "un céntimo" : `${convertLessThan100(cents)} céntimos`;

    return `${eurosText} con ${centsText}`;
}
