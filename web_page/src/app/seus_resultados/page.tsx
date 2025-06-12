"use client";
import logo from "@/public/logo_home.png";
import { Previsao } from "@/types";
import { faMagnifyingGlass, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import "../globals.css";

export default function Seus_Resultados() {
    const navigate = useRouter();

    const [open, setOpen] = useState(false);
    const [idDelete, setIdDelete] = useState(0);

    const [lista, setLista] = useState<Previsao[]>([]);

    // Função para calcular o tempo de retorno
    const calcularRetorno = (previsao: Previsao): Previsao => {
        const { tamanho } = previsao;

        const quantidade_placa = (tamanho * 1000) / 3;
        const preco = 5000 * quantidade_placa;
        const producao_energia = (5 * quantidade_placa * 0.8) / 2.5;
        const economia_mensal = producao_energia * 0.8 * 30 - 2000;

        const retorno = economia_mensal > 0 ? (preco / economia_mensal) / 12 : Infinity;

        return { ...previsao, retorno };
    };

    const editarPrevisao = async (id: number, previsao: Previsao) => {
        const response = await fetch(`http://localhost:3000/api/previsao_res/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(previsao),
        });

        if (response.ok) {
            const updatedPrevisao = await response.json();
            console.log("Previsão atualizada:", updatedPrevisao);
            // Atualize a lista de previsões no estado
        } else {
            alert("Erro ao atualizar previsão");
        }
    };

    useEffect(() => {
        const chamadaApi = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/previsao_res");
                const data = await response.json();

                // Calcula o retorno para cada previsão e atualiza a lista
                const listaComRetorno = data.map((previsao: Previsao) => calcularRetorno(previsao));
                setLista(listaComRetorno);
            } catch (error) {
                console.error("Erro ao buscar previsões:", error);
            }
        };
        chamadaApi();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/previsao_res/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setLista((prev) => prev.filter((item) => item.id !== id));
                setOpen(false);
            } else {
                alert("Erro ao deletar o produto");
            }
        } catch (error) {
            console.error("Falha ao apagar registro.", error);
        }
    };

    const idModal = (id: number) => {
        setOpen(true);
        setIdDelete(id);
    };

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
                        <Link href="/previsao">Previsão</Link>
                    </div>
                    <div className="w-full bg-[#166814] mb-20 font-bold text-2xl">
                        <Link href="/login"><em>Seus Resultados</em></Link>
                    </div>
                </div>
            </section>

            <section>
                <h1 className="text-center mb-16 text-5xl font-bold">Suas Previsões</h1>
                <div>
                    <table className="w-2/3 m-auto">
                        <thead className="bg-green-700 text-white">
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Tamanho Disponível(ha)</th>
                                <th>Estado (UF)</th>
                                <th>Consumo (kWh/mês)</th>
                                <th>Tempo Retorno (Anos)</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map((p) => (
                                <tr key={p.id} className="text-center">
                                    <td>{p.id}</td>
                                    <td>{p.nome}</td>
                                    <td>{p.tamanho}</td>
                                    <td>{p.estado}</td>
                                    <td>{p.consumo}</td>
                                    <td>{p.retorno === Infinity ? "Indisponível" : p.retorno.toFixed(2)}</td>
                                    <td className="flex justify-center items-center gap-2">
                                        <button onClick={() => idModal(p.id)}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-green-900 text-white text-center">
                            <tr>
                                <td colSpan={7}>Total de Previsões: {lista.length}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <p className="text-center font-bold">Selecione uma opção</p>
                        <div className="flex justify-evenly mt-4">
                            <div className="text-center w-32 p-2 bg-gray-500 ml-2 rounded-xl">
                                <button className="btn btn-danger w-full text-white" onClick={() => handleDelete(idDelete)} >
                                    <FontAwesomeIcon icon={faTrashCan} shake style={{ color: "#942020", }} />
                                    Excluir
                                </button>
                            </div>
                            <div className="text-center w-32 p-2 bg-gray-500 text-white ml-2 rounded-xl">
                                <Link href={`/seus_resultados/resultado/${idDelete}`}>
                                    <button>
                                        <FontAwesomeIcon icon={faPencil} shake style={{ color: "#072964", }} />
                                        Editar
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
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
