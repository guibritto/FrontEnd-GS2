"use client"; // Adicionado para habilitar o cliente

import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import git from "../public/real_git.png";
import lkd from "../public/linked.in.png";

export default function Rodape() {
    return (
        <footer>
            <div className="box_footer1">
                <section className="text-center bg-black text-sm p-2 text-gray-100">
                    <h4 className="mt-4">
                        &copy; 2024 GreenEnergyProvider. Todos os direitos reservados.
                    </h4>
                    <section className="flex flex-col">
                        <div className="flex justify-evenly">
                            <div className="flex flex-col items-center mt-8">
                                <Link href={"/integrantes"}>
                                    <button type="button" className="bg-white w-48 flex justify-center p-2 rounded-lg scale-100 font-bold text-black text-xl">
                                        PÁGINA DE INTEGRANTES
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <h5 className="flex justify-evenly mt-8">
                            <p>RM558475 - Guilherme Britto</p>
                            <p>RM555352 - Thiago Mendes</p>
                            <p>RM555287 - João Santis</p>
                        </h5>
                        <div className="flex justify-evenly ml-8">
                            <div className="flex">
                                <Link href={"https://github.com/guibritto"} target="_blank" rel="noopener noreferrer">
                                    <Image src={git} alt="Logo do GitHub de Guilherme" className="w-10" />
                                </Link>
                                <Link href={"https://www.linkedin.com/in/guilherme-britto-baa450312/"} target="_blank" rel="noopener noreferrer">
                                    <Image src={lkd} alt="Logo do LinkedIn de Guilherme" className="w-10" />
                                </Link>
                            </div>
                            <div className="flex">
                                <Link href={"https://github.com/Offiline26"} target="_blank" rel="noopener noreferrer">
                                    <Image src={git} alt="Logo do GitHub de Thiago" className="w-10" />
                                </Link>
                                <Link href={"https://www.linkedin.com/in/thiago-mendes-2b170728b"} target="_blank" rel="noopener noreferrer">
                                    <Image src={lkd} alt="Logo do LinkedIn de Thiago" className="w-10" />
                                </Link>
                            </div>
                            <div className="flex">
                                <Image src={git} alt="Logo do GitHub genérico" className="w-10" />
                                <Image src={lkd} alt="Logo do LinkedIn genérico" className="w-10" />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </footer>
    );
}
