import { create } from "zustand";

export const useContractStore = create((set) => ({
    // Paso actual
    step: 1,
    totalSteps: 20,

    // Datos del formulario
    data: {
        address: "",
        meters: "",
        // ...
    },

    // Actualizar un campo
    updateField: (field, value) =>
        set((state) => ({
            data: {
                ...state.data,
                [field]: value,
            },
        })),

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
