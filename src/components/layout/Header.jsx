import React from "react";

function Header() {
    return (
        <header className="w-full border-b border-gray-300 flex justify-center bg-white">
            <div className="h-[50px] w-full max-w-[1482px] flex justify-between">
                <div className="h-full w-full max-w-[252px] bg-primary flex items-center justify-center">
                    <p className="text-white uppercase text-[20px]">
                        <span className="font-light">Wonder</span>{" "}
                        <span className="font-bold">. Legal</span>{" "}
                        <span className="capitalize text-[14px]">España</span>
                    </p>
                </div>
                <nav>
                    <ul className="h-full text-primary flex items-center text-[15px] uppercase font-medium ">
                        <li className="hover:text-secondary px-[14px] h-full flex items-center transition-colors duration-200 cursor-pointer">
                            Inicio
                        </li>
                        <li className="hover:text-secondary px-[14px] h-full flex items-center transition-colors duration-200 cursor-pointer">
                            Documentos
                        </li>
                        <li className="hover:text-secondary px-[14px] h-full flex items-center transition-colors duration-200 cursor-pointer">
                            FAQ
                        </li>
                        <li className="hover:text-secondary px-[14px] h-full flex items-center transition-colors duration-200 cursor-pointer">
                            Mi cuenta
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center h-full w-full max-w-[196px]">
                    <div className="h-[36px] rounded-full border border-gray-300 flex gap-[4px] items-center px-[16px]">
                        <input
                            id="busqueda"
                            type="text"
                            placeholder="Buscar"
                            className="outline-0 text-[14px] w-full"
                        />
                        <label htmlFor="busqueda">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#01d29a"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-search-icon lucide-search"
                            >
                                <path d="m21 21-4.34-4.34" />
                                <circle cx="11" cy="11" r="8" />
                            </svg>
                        </label>
                    </div>
                </div>{" "}
            </div>
        </header>
    );
}

export default Header;
