import { create } from "zustand";

// Cargar datos del localStorage
const loadFromLocalStorage = () => {
    try {
        const saved = localStorage.getItem("contractData");
        return saved ? JSON.parse(saved) : {};
    } catch (err) {
        console.error("Error cargando datos del localStorage:", err);
        return {};
    }
};

// Guardar datos en localStorage
const saveToLocalStorage = (data) => {
    try {
        localStorage.setItem("contractData", JSON.stringify(data));
    } catch (err) {
        console.error("Error guardando datos en localStorage:", err);
    }
};

export const useContractStore = create((set, get) => ({
    // Paso actual
    step: 1,
    totalSteps: 20,

    // Datos del formulario
    data: {
        address: "",
        meters: "",
        characteristics: "",
        arrender: null,
        reference: "",
        preiod: "",
        startDate: "",
        amount: "",
        ...loadFromLocalStorage(),
    },

    // Actualizar un campo
    updateField: (field, value) => {
        set((state) => {
            const newData = {
                ...state.data,
                [field]: value,
            };
            saveToLocalStorage(newData); // <-- guarda cada cambio
            return { data: newData };
        });
    },

    // Navegación
    nextStep: () =>
        set((state) => ({
            step: Math.min(state.step + 1, state.totalSteps),
        })),

    prevStep: () =>
        set((state) => ({
            step: Math.max(state.step - 1, 1),
        })),
}));
