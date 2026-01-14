import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ContractPage from "../pages/ContractPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/contrato" replace />} />
                <Route path="/contrato/:step" element={<ContractPage />} />
                <Route path="/contrato" element={<ContractPage />} />
                <Route path="*" element={<Navigate to="/contrato" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

