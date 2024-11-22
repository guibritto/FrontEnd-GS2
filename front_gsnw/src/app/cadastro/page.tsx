"use client"
import Link from "next/link"
import { Usuario } from "@/types"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Modal from "@/app/Modal"
import { FaArrowLeft } from "react-icons/fa6"

export default function Cadastro() {

    const [open, setOpen] = useState(false)

    const idModal = () => {
        setOpen(true)
    }
    const navigate = useRouter()

    const [lista, setLista] = useState<Usuario[]>([])

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch("http://localhost:3000/api/usuario")
            const data = await response.json()
            setLista(data)
            console.log(data);
        }
        chamadaApi()
    }, [])

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

        const cabecalho = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }

        try {
            const response = await fetch("http://localhost:3000/api/usuario", cabecalho)

            if (response.ok) {
                alert(`${user.nome} cadastrado com sucesso!`)
                setUser({
                    id: 0,
                    nome: '',
                    email: "",
                    senha: "",
                })
                setOpen(true)
            } else {
                alert("Erro ao cadastrar!")
            }
        } catch (error) {
            console.error("Erro ao cadastrar o produto", error);
        }
    }

    return (
        <main className="bg-[url('.././public/blur.png')] bg-no-repeat min-w-screen m-auto flex flex-col">
            <Link href={"/login"} className="text-white font-bold p-4 text-2xl"><FaArrowLeft /></Link>
            <div className="w-full m-auto">
                <div className="bg-white rounded-2xl flex flex-col mb-64 mt-32 ml-auto mr-auto w-1/4">
                    <h1 className="text-green-600 mt-10 text-center font-bold text-6xl mb-10 font-mono">Cadastro do Usuário</h1>
                    <form onSubmit={handleSubmit} className="p-4">
                        <div className="flex flex-col p-2">
                            <label className="text-gray-700" htmlFor="idnomecad"></label>
                            <input className="border border-gray-700 p-1 rounded-md" type="text" required placeholder="Nome:" name="nome" value={user.nome} id="idnomecad"
                                onChange={handleChange} />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="text-gray-700" htmlFor="idemailcad"></label>
                            <input className="border border-gray-700 p-1 rounded-md" type="text" required placeholder="Email:" name="email" value={user.email} id="idemailcad"
                                onChange={handleChange} />
                        </div>
                        <div className="flex flex-col p-2">
                            <label className="text-gray-700" htmlFor="idsenhacad"></label>
                            <input className="border border-gray-700 p-1 rounded-md" type="password" required name="senha" placeholder="Senha:" value={user.senha} id='idsenhacad'
                                onChange={handleChange} />
                        </div>
                        <div className="flex ml-6 mt-4">
                            <input type="checkbox" className="mr-8" required />
                            <p className="">Concordo com os termos de serviço e a política de privacidade <button type="button" className="underline text-blue-900" onClick={() => idModal()}>Ler termos.</button></p>
                        </div>
                        <Modal open={open} onClose={() => setOpen(false)}>
                            <div className="text-center w-full">
                                <h3 className="text-lg font-black text-gray-800" >Termos de Uso para GreenEnergyProvider</h3>
                                <p className="text-gray-500 text-sm mt-4"><strong>Aceitação dos Termos:</strong>
                                    Ao acessar e utilizar o site GreenEnergyProvider ("Plataforma"), você concorda com os Termos de Uso descritos abaixo. Caso não concorde com qualquer parte destes termos, não utilize a Plataforma.
                                </p>
                                <p className="text-gray-500 text-sm mt-4"><strong>Descrição do Serviço:</strong>
                                    O GreenEnergyProvider oferece um simulador que auxilia usuários a compreenderem o custo-benefício da implementação de soluções de energia renovável, como painéis solares e turbinas eólicas. A Plataforma é destinada para fins informativos e educacionais. As simulações fornecem estimativas aproximadas e não constituem uma oferta vinculativa ou substituem consultas especializadas.
                                </p>
                                <p className="text-gray-500 text-sm mt-4"><strong>Cadastro e Segurança:</strong>
                                    Para acessar determinados recursos, é necessário criar uma conta. Você concorda em fornecer informações precisas e atualizadas no cadastro. É sua responsabilidade manter suas credenciais de login seguras. Qualquer atividade realizada com sua conta será considerada de sua responsabilidade.

                                </p>
                                <p className="text-gray-500 text-sm mt-4"><strong>Restrições de Uso:</strong>
                                    Ao utilizar a Plataforma, você concorda em NÃO: Usar o serviço para fins ilegais ou não autorizados. Modificar, copiar ou distribuir qualquer conteúdo da Plataforma sem autorização prévia. Interferir ou comprometer a integridade da Plataforma, incluindo a introdução de vírus ou código malicioso.
                                </p>
                                <p className="text-gray-500 text-sm mt-4"><strong>Propriedade Intelectual:</strong>
                                    Todos os direitos sobre o conteúdo da Plataforma, incluindo textos, imagens, gráficos e software, pertencem ao GreenEnergyProvider ou a seus licenciadores. O uso não autorizado pode resultar em penalidades legais.
                                </p>
                                <p className="text-gray-500 text-sm mt-4"><strong>Limitação de Responsabilidade:</strong>
                                    A Plataforma não se responsabiliza por: Decisões tomadas com base nas estimativas fornecidas. Danos indiretos, acidentais ou consequentes decorrentes do uso do serviço. Problemas técnicos fora do controle da administração.
                                </p>
                                <p className="text-gray-500 text-sm mt-4"><strong>Política de Privacidade:</strong>
                                    Ao utilizar a Plataforma, você concorda com a coleta e uso de informações conforme descrito em nossa Política de Privacidade.
                                </p>
                                <p className="text-gray-500 text-sm mt-4"><strong>Alterações nos Termos</strong>
                                    O GreenEnergyProvider reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor assim que publicadas na Plataforma.
                                </p>
                                <p className="text-gray-500 text-sm mt-4 ml-4 mr-4 mb-10"><strong>Contato:</strong>
                                    Em caso de dúvidas ou sugestões, entre em contato conosco: Email: suporte@greenenergyprovider.com | Telefone: (11) 97573-7266 | Ao continuar a usar a Plataforma, você concorda em cumprir os Termos de Uso atualizados.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button className="btn btn-light w-full" type="button" onClick={() => setOpen(false)}>Fechar</button>
                            </div>
                        </Modal>
                        <button className="bg-green-700 hover:bg-green-900 hover:scale-105 duration-200 text-white text-xl p-2 m-auto mt-6 place-content-center block rounded-md mb-10" type="submit">Finalizar Cadastro</button>
                    </form>
                </div>
            </div>
        </main>
    )
}