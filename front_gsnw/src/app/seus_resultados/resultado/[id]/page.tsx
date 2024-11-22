"use client"
import { Previsao } from "@/types";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function resultado({ params }: { params: { id: number } }) {

    const navigate = useRouter()

    const [previsao, setPrevisao] = useState<Previsao>({
        id: 0,
        nome: "",
        tamanho: 0,
        estado: "",
        consumo: 0
    })

    const id = params.id

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch(`http://localhost:3000/api/previsao_res/${id}`)
            const data = await response.json()
            setPrevisao(data)
            console.log(data);
        }
        chamadaApi()
    }, [id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPrevisao({ ...previsao, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cabecalho = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(previsao)
        }

        try {
            const response = await fetch("http://localhost:3000/api/previsao_res", cabecalho)

            if (response.ok) {
                alert(`Previsão atualizada com sucesso!`)
                setPrevisao({ id: 0, nome: "", tamanho: 0, estado: "", consumo: 0 })
                navigate.push('/seus_resultados')
            } else {
                alert("Erro ao atualizar previsão!")
            }
        } catch (error) {
            console.error("Erro ao atualizar previsão", error);
        }
    }

    return (
        <main className="bg-[url('.././public/blur.png')] bg-no-repeat min-w-screen m-auto flex flex-col">
            <Link href={"/seus_resultados"} className="text-white font-bold p-4 text-2xl"><FaArrowLeft /></Link>
            <div className="w-full m-auto">
                <div className="bg-white rounded-2xl flex flex-col mb-56 mt-20 ml-auto mr-auto w-1/4">
                    <h1 className="text-green-600 mt-10 text-center font-bold text-6xl mb-16 font-mono">Editar Previsão</h1>
                    <form onSubmit={handleSubmit} className="p-4">
                        <div className="flex flex-col p-2">
                            <label className="text-gray-700" htmlFor="idnome">Nome:</label>
                            <input className="border border-gray-700 p-1 rounded-md" type="text" name="nome" value={previsao.nome} id="idnome"
                                onChange={handleChange} />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="text-gray-700" htmlFor="idgeracao">Tamanho(ha):</label>
                            <input className="border border-gray-700 p-1 rounded-md" type="number" name="tamanho" value={previsao.tamanho} id='idgeracao'
                                onChange={handleChange} />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="text-gray-700" htmlFor="idestado">Estado(UF):</label>
                            <input className="border border-gray-700 p-1 rounded-md" type="text" name="estado" value={previsao.estado} id="idestado"
                                onChange={handleChange} />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="text-gray-700" htmlFor="idconsumo">Consumo(kwh/m):</label>
                            <input className="border border-gray-700 p-1 rounded-md" type="number" name="consumo" id="idconsumo" value={previsao.consumo}
                                onChange={handleChange} />
                        </div>
                        <button className="bg-green-700 hover:bg-green-900 hover:scale-105 duration-200 text-white text-xl p-2 m-auto mt-6 place-content-center block rounded-md mb-10" type="submit">Editar Previsão</button>
                    </form>
                </div>
            </div>
        </main>
    )
}