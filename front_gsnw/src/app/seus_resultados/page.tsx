"use client"
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import logo from "@/public/logo_home.png"
import { useState, useEffect } from "react";
import { Previsao } from "@/types";
import { useRouter } from "next/navigation";
import Modal from "../Modal"
import { FaFileInvoice, FaSearch, FaTrashAlt } from "react-icons/fa"
import { FaPencil } from "react-icons/fa6";

export default function Seus_Resultados() {

    const navigate = useRouter()

    const [open, setOpen] = useState(false)
    const [idDelete, setIdDelete] = useState(0)

    const idModal = (id: number) => {
        setOpen(true)
        setIdDelete(id)
    }

    const [lista, setLista] = useState<Previsao[]>([])

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch("http://localhost:3000/api/previsao_res")
            const data = await response.json()
            setLista(data)
            console.log(data);
        }
        chamadaApi()
    }, [])

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3002/api/previsao_res/${id}`, { method: "DELETE" })
            if (response.ok) {
                setOpen(false)
                window.location.reload()
            } else {
                alert("Erro ao deletar o produto")
                setOpen(false)
                navigate.push('/produtos')
            }
        } catch (error) {
            console.error("Falha ao apagar registro.", error);
        }
    }

    return (
        <main>
            <section className="flex flex-col">
                <header className="flex justify-center font-bold items-center bg-gradient-to-r from-green-800 to-green-400 text-white font-sans text-4xl xsm:text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl shadow-[0.5vh_0.5vh_rgba(58,58,58)] h-24 md:h-52">
                    <h1>Green Energy Provider</h1>
                    <Image src={logo} alt="Logo" className="sm:w-18 md:w-36 lg:w-72 mt-12 mb-2" />
                </header>

                <div className="grid grid-cols-3 gap-0 bg-[#ffffff] text-center text-white text-xs sm:text-sm lg:text-base h-16 md:h-28">
                    <div className="w-full bg-[#166814] mb-20 font-bold text-2xl">
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    <div className="w-full bg-[#166814] mb-20 font-bold text-2xl">
                        <Link href="/seus_resultados">Previsao</Link>
                    </div>
                    <div className="w-full bg-[#166814] mb-20 font-bold text-2xl">
                        <Link href="/suporte"><em>Seus Resultados</em></Link>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="text-center mb-16 text-5xl font-bold">
                    Suas Previsões
                </h1>
                <div>
                    <table className="w-2/3 m-auto">
                        <thead className="bg-green-700 text-white">
                            <tr>
                                <th>Id</th><th>Nome</th><th>Tamanho Disponível</th><th>Estado(UF)</th><th>Consumo(kWh/mês)</th><th>Tempo Retorno</th><th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lista.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.nome}</td>
                                        <td>{p.tamanho}</td>
                                        <td>{p.estado}</td>
                                        <td>{p.consumo}</td>
                                        <td>{p.id}</td>
                                        <td className="flex justify-center items-center gap-2">
                                            <button onClick={() => idModal(p.id)}><FaSearch /></button>
                                            <Link title="Editar" className="text-blue-700 hover:text-blue-900" href={`/seus_resultados/resultado/${p.id}`}>
                                                <FaFileInvoice />
                                            </Link>
                                            {" | "}
                                            <button title="Excluir" className="text-red-700" onClick={() => idModal(p.id)}>
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot className="bg-green-300 text-black text-center">
                            <tr>
                                <td colSpan={6}>Total de Previsões: {lista.length}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <div>
                            <div className="text-center w-56">
                                <button className="btn btn-danger w-full" onClick={() => handleDelete(idDelete)} >
                                    <FaTrashAlt size={32} className="mx-auto text-red-500 hover:text-red-700 hover:scale-150 transition duration-200" />
                                    Excluir
                                </button>
                            </div>
                            <div>
                                <button>
                                    <FaPencil size={32} className="mx-auto text-blue-500 hover:text-blue-700 hover:scale-150 transition duration-200" />
                                    Editar
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="btn btn-light w-full" onClick={() => setOpen(false)}>
                                Cancelar
                            </button>
                        </div>
                    </Modal>
                </div>
                <div className="flex justify-center mt-20 mb-20">
                    <button className="bg-green-800 p-2 rounded-md text-2xl text-white font-bold hover:scale-125 duration-200 hover:text-gray-200 hover:bg-green-900">
                        <Link href={"/seus_resultados/add_previsao"}>Adicionar Previsão</Link>
                    </button>
                </div>
            </section>
        </main>
    );
}