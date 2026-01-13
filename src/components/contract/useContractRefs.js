import { useRef } from "react";

export function useContractRefs() {
    const refs = useRef({});

    const registerRef = (id, ref) => {
        refs.current[id] = ref;
    };

    const scrollToField = (id) => {
        const ref = refs.current[id];
        if (ref?.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return {
        registerRef,
        scrollToField,
    };
}
