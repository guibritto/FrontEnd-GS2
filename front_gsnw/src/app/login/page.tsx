"use client"
import Link from "next/link"
import { useState } from "react"
import { Usuario } from "@/types"
import { FaArrowLeft } from "react-icons/fa"

export default function Login() {
    const [user, setUser] = useState<Usuario>({
        id: 0,
        nome: "",
        email: "",
        senha: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <main className="bg-[url('.././public/blur.png')] bg-no-repeat min-w-screen m-auto flex flex-col">
            <Link href={"/"} className="text-white font-bold p-4 text-2xl"><FaArrowLeft /></Link>
            <div className="w-full m-auto mt-10 mb-6">
                <div className="bg-white rounded-2xl flex flex-col mb-64 mt-32 ml-auto mr-auto w-1/4">
                    <h1 className="text-green-600 mt-10 text-center font-bold text-7xl mb-10 font-mono">Login</h1>
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="flex flex-col p-2 mb-2">
                            <label className="text-gray-700" htmlFor="idemail"></label>
                            <input className="border border-gray-700 p-1 rounded-md" type="text" required placeholder="Email:" name="email" value={user.email} id="idemail"
                                onChange={handleChange} />
                        </div>
                        <div className="flex flex-col p-2 ">
                            <label className="text-gray-700" htmlFor="idsenha1"></label>
                            <input className="border border-gray-700 p-1 rounded-md" type="password" required name="senha" placeholder="senha:" value={user.senha} id='idsenha1'
                                onChange={handleChange} />
                        </div>
                        <button className="bg-green-700 hover:bg-green-900 hover:scale-105 duration-200 text-white text-xl p-2 m-auto mt-6 place-content-center block rounded-md" type="submit">Concluído</button>
                    </form>
                    <div className="flex flex-col m-auto justify-center">
                        <p className="text-xl">Ainda não é cadastrado?</p>
                        <Link href={"/cadastro"} className="underline text-blue-900 text-center mb-6">Cadastre-se</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}