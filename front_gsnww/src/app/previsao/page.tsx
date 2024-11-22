"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_home.png";
import mapa from "@/public/agrofotovoltaica-vale-este.avif";
import grafico1 from "@/public/Captura de tela 2024-11-22 165654.jpg";
import grafico2 from "@/public/Captura de tela 2024-11-22 171339.jpg";
import grafic3 from "@/public/Captura de tela 2024-11-22 171151.jpg"


export default function Previsao() {
    const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

    // Map de imagens para cada opção
    const images: { [key: string]: string } = {
        grafico1: grafico1.src,
        grafico2: grafico2.src,
        grafico3: grafic3.src,
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
                    <div className="w-2/5 mt-10">
                        {selectedRadio && (
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
                                    {selectedRadio === "grafico1" && "Objetivo: Identificar como o aumento no número de placas solares impacta o tempo necessário para atingir o ponto de equilíbrio financeiro. Espera-se uma tendência de redução no tempo de retorno à medida que o número de placas aumenta, embora com possíveis pontos de saturação dependendo do consumo e da geração energética."}
                                    {selectedRadio === "grafico2" && "Objetivo: Demonstrar a proporcionalidade entre espaço físico e capacidade de instalação. Este gráfico também ajuda a validar o dimensionamento do sistema em relação às necessidades energéticas e a verificar limites práticos de instalação."}
                                    {selectedRadio === "grafico3" && "Objetivo: Identificar pontos fortes e áreas de melhoria na experiência do usuário. Um alto nível de satisfação em todas as métricas indica que o simulador atende às expectativas dos usuários finais."}
                                </figcaption>
                            </figure>
                        )}
                    </div>
                    <form action="" className="formas">
                        <label className="form-control">
                            <input
                                type="radio"
                                name="radio"
                                onChange={() => setSelectedRadio("grafico1")}
                            />
                            Tempo Retorno x Quantidade Placas
                        </label>
                        <label className="form-control">
                            <input
                                type="radio"
                                name="radio"
                                onChange={() => setSelectedRadio("grafico2")}
                            />
                            Quantidade Placa x Área Disponível
                        </label>
                        <label className="form-control">
                            <input
                                type="radio"
                                name="radio"
                                onChange={() => setSelectedRadio("grafico3")}
                            />
                            Satisfação
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
                <p className="text-5xl font-bold m-auto mb-20 text-green-700">Energia Agrofotovoltaica</p>
                <div className="flex justify-evenly mb-32">
                    <div className="w-2/5">
                        <p className="font-bold text-2xl mt-6">
                            <strong className="text-6xl font-bold">A</strong> energia agrofotovoltaica combina a geração de energia solar com a agricultura no mesmo espaço, promovendo uma <strong className="font-bold text-green-700">solução sustentável para a segurança energética e alimentar</strong>. Esse modelo otimiza o uso do solo ao permitir a produção simultânea de alimentos e eletricidade, reduzindo a competição por terras. Além disso, a sombra gerada pelos painéis solares protege as culturas contra o excesso de radiação, diminui a evaporação da água, <strong className="font-bold text-green-700">melhora a eficiência hídrica e pode aumentar a produtividade agrícola</strong>, especialmente em climas quentes e áridos.</p>
                        <p className="font-bold text-2xl mt-4">
                            Além dos benefícios ambientais, como a <strong className="font-bold text-green-700">redução de emissões de gases de efeito estufa e a promoção da descarbonização, o sistema também oferece vantagens econômicas e sociais</strong>. Ele diversifica a renda dos agricultores por meio da venda de energia e incentiva o desenvolvimento de comunidades rurais, gerando empregos e fortalecendo a resiliência climática. Ao unir inovação tecnológica com práticas agrícolas sustentáveis, a agrofotovoltaica representa uma solução prática e eficaz para enfrentar os desafios globais de forma integrada.</p>
                    </div>
                    <div className="p-6 bg-green-900 rounded-xl shadow-2xl hover:scale-105 duration-200">
                        <Image src={mapa} alt="grafico pequeno" className="shadow-md"></Image>
                    </div>

                </div>
            </section>
        </main>
    );
}
