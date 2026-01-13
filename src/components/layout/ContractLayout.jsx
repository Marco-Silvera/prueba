import Header from "./Header";


function ContractLayout({ children }) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 w-full max-w-[1482px] self-center">
                {children}
            </main>
        </div>
    );
}

export default ContractLayout;
