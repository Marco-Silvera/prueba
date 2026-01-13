export function formatMoney(value) {
    const number = Number(value);

    if (Number.isNaN(number)) return null;

    return number.toFixed(2);
}

export function formatMoneyES(value) {
    const number = Number(value);
    if (Number.isNaN(number)) return "";

    return number.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}
