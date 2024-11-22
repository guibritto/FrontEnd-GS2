"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_home.png";
import vida from "@/public/vida.jpg";
import { motion } from "framer-motion";


export default function Previsao() {
    const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

    // Map de imagens para cada opção
    const images: { [key: string]: string } = {
        grafico1: vida.src,
        grafico2: logo.src,
        grafico3: vida.src,
    };

    return (
        <main className="bg-[#e0f0e0]">
            <section className="flex flex-col">
                <header className="flex justify-center font-bold items-center bg-gradient-to-r from-green-800 to-green-400 text-white font-sans text-4xl xsm:text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl shadow-[0.5vh_0.5vh_rgba(58,58,58)] h-24 md:h-52">
                    <h1>Green Energy Provider</h1>
                    <Image src={logo} alt="Logo" className="sm:w-18 md:w-36 lg:w-72 mt-12 mb-2" />
                </header>

                <div className="grid grid-cols-3 gap-0 bg-[#e0f0e0] text-center text-white text-xs sm:text-sm lg:text-base h-16 md:h-28">
                    <div className="w-full bg-[#166814] mb-20 font-bold text-2xl">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="w-full bg-[#166814] mb-20 font-bold text-2xl">
                        <Link href="/previsao">
                            <em>Previsão</em>
                        </Link>
                    </div>
                    <div className="w-full bg-[#166814] mb-20 font-bold text-2xl">
                        <Link href="/login">Seus Resultados</Link>
                    </div>
                </div>
            </section>
            <div>
                <h1 className="font-bold text-5xl w-4/5 ml-32 mb-10">
                    A página de Previsões foi criada com o objetivo de informar e educar, mostrando como alternativas como{" "}
                    <strong className="font-bold text-green-700">energia solar</strong> pode beneficiar não apenas o meio ambiente, mas também pode acabar{" "}
                    <strong className="font-bold text-green-700">gerando economia a longo prazo</strong>!
                </h1>
            </div>
            <section className="flex flex-col justify-center text-center mt-52 mb-32 bg-[#0c360b] rounded-3xl shadow-2xl">
                <h2 className="text-center font-bold m-auto text-3xl mt-20 text-white w-5/6">Cada gráfico foi cuidadosamente desenvolvido para ilustrar dados relevantes, proporcionando insights claros e objetivos. Selecione o gráfico desejado e descubra informações valiosas que podem ajudar a entender melhor como essas soluções sustentáveis contribuem para a preservação do meio ambiente e a economia de recursos.</h2>
                <div className="flex justify-evenly mt-20 mb-10">
                    {/* Exibição condicional da imagem com base no rádio selecionado */}
                    <div className="w-2/5">
                        {selectedRadio && (
                            <motion.figure
                                className="text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <figure className="text-center">
                                    {/* Exibição da imagem */}
                                    <Image
                                        src={images[selectedRadio]}
                                        alt={selectedRadio}
                                        width={500} // Substitua pelo tamanho desejado
                                        height={300} // Substitua pelo tamanho desejado
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    {/* Legenda da imagem */}
                                    <figcaption className="mt-4 text-white font-bold text-2xl">
                                        {selectedRadio === "grafico1" && "Legenda do Gráfico 1"}
                                        {selectedRadio === "grafico2" && "Legenda do Gráfico 2"}
                                        {selectedRadio === "grafico3" && "Legenda do Gráfico 3"}
                                    </figcaption>
                                </figure>
                            </motion.figure>
                        )}
                    </div>
                    <form action="" className="formas">
                        <label className="form-control">
                            <input
                                type="radio"
                                name="radio"
                                onChange={() => setSelectedRadio("grafico1")}
                            />
                            Gráfico 1
                        </label>
                        <label className="form-control">
                            <input
                                type="radio"
                                name="radio"
                                onChange={() => setSelectedRadio("grafico2")}
                            />
                            Gráfico 2
                        </label>
                        <label className="form-control">
                            <input
                                type="radio"
                                name="radio"
                                onChange={() => setSelectedRadio("grafico3")}
                            />
                            Gráfico 3
                        </label>
                    </form>
                </div>
            </section>
            <section className="flex flex-col">
                <div>
                    <h2 className="font-bold text-3xl text-center w-8/9 mb-32">
                        A implemetação de <strong className="font-bold text-green-700">energia sustentável</strong> reduz a dependência de recursos importados, fomenta a economia local e cria novos empregos em tecnologias verdes. Ao investir em energia sustentável, estamos investindo em um futuro mais limpo e justo, garantindo que as próximas gerações possam, assim,{" "}
                        <strong className="font-bold text-green-700">viver em um mundo saudável</strong> e equilibrado.
                    </h2>
                </div>
                <div className="flex justify-evenly mb-32">
                    <div className="w-2/5">
                        <p className="font-bold text-2xl mt-52">Nosso programa ajuda produtores agropecuários a reduzir custos de energia, proteger sua produção contra oscilações no mercado e adotar práticas sustentáveis que valorizam o negócio e o meio ambiente. Com uma visão clara dos benefícios financeiros e ambientais, você estará preparado para crescer de forma estratégica e responsável.<strong className="font-bold text-green-700">Invista no futuro da sua propriedade e colha os frutos da sustentabilidade!</strong></p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-2xl hover:scale-105 duration-200">
                        <Image src={vida} alt="grafico pequeno" className="rounded-xl shadow-md"></Image>
                    </div>

                </div>
            </section>
        </main>
    );
}
