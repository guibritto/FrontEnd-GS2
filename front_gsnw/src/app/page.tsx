"use client"

import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import logo from "@/public/logo_home.png"
import vida from "@/public/vida.jpg"

export default function Home() {

  return (
    <main className="home">
      <section className="flex flex-col">
        <header className="flex justify-center font-bold items-center bg-gradient-to-r from-green-800 to-green-400 text-white font-sans text-4xl xsm:text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl shadow-[0.5vh_0.5vh_rgba(58,58,58)] h-24 md:h-52">
          <h1>Green Energy Provider</h1>
          <Image src={logo} alt="Logo" className="sm:w-18 md:w-36 lg:w-72 mt-12 mb-2" />
        </header>

        <div className="grid grid-cols-3 gap-0 bg-[#e0f0e0] text-center text-white text-xs sm:text-sm lg:text-base h-16 md:h-28">
          <div className="w-full bg-[#166814] mb-20 font-bold text-2xl">
            <Link href="/">
              <em>Home</em>
            </Link>
          </div>
          <div className="w-full bg-[#166814] mb-20 font-bold text-2xl">
            <Link href="/previsao">Previsão</Link>
          </div>
          <div className="w-full bg-[#166814] mb-20 font-bold text-2xl">
            <Link href="/login">Seus Resultados</Link>
          </div>
        </div>
      </section>
      <section className="box_home1">
        <header>
          <h2 id="titulo1_home">
            "PORQUE O NOME GREEN ENERGY PROVIDER?"
          </h2>
          <h3 id="titulo12_home">
            <p>
              Nossa equipe desenvolveu o nome para ser bem objetivo. Já que <strong>"GreenEnergyProvider"</strong>, ou <strong id="G">G</strong><strong id="E">E</strong><strong id="P">P</strong>, significa ser um provedor de soluções energéticas renováveis e sustentáveis. "Green" reflete a conexão com a natureza e práticas ecológicas, enquanto "Energy Provider" enfatiza a entrega confiável de energia limpa para um futuro mais sustentável.
            </p>
          </h3>
        </header>
        <div id="corpo11_home">
          <Image src={vida} alt="cara_no_telefone" className="imgjoia" />
          <article id="corpo12_home">
            <p className="id_home1">Descubra como a tecnologia pode transformar o uso de energia no seu dia a dia!</p>
            <p className="id_home2">Economize dinheiro, proteja o meio ambiente e valorize sua propriedade!</p>
          </article>
        </div>
      </section>
      <section id="box_home2">
        <p id="texto_home2">Uma das principais vantagens do GreenEnergyProvider é sua abordagem inovadora e acessível para democratizar o uso de energia renovável. Ao oferecer um simulador personalizado, o projeto capacita comunidades agricolas a entenderem os benefícios econômicos e ambientais de investir em soluções sustentáveis, como painéis solares. Isso reduz barreiras como o alto custo inicial e a falta de informações claras, promovendo escolhas mais conscientes.</p>
        <div id="img_vida">
          <Image src={vida} alt="grafico" />
        </div>
        <article id="texto_home21">
          <p>Além disso, o projeto reflete uma forte preocupação com o meio ambiente, ao incentivar a transição para fontes de energia limpa que contribuem para a descarbonização do planeta.</p><br /><br />
          <p className="text-5xl"><em>"Cada instalação simulada potencialmente reduz as emissões de carbono, diminuindo a dependência de combustíveis fósseis e mitigando os impactos das mudanças climáticas. Essa combinação de impacto ambiental positivo com inclusão social fortalece a conexão entre desenvolvimento sustentável e qualidade de vida."</em></p><br />
          <p><em>"BRITTO. Guilherme"</em></p><br /><br />
        </article>
        <div className="flex flex-col items-center mb-12">
          <p className="font-bold text-6xl text-white mb-10">Deseja ver como essas previsões são feitas?</p><br />
          <button type="button" className="bg-white w-48 flex justify-center p-2 rounded-lg scale-100 font-bold text-green-800 text-3xl hover:scale-125 duration-200"><Link href={"/previsao"}>IR AGORA</Link></button>
        </div>

      </section>
    </main>
  );
}