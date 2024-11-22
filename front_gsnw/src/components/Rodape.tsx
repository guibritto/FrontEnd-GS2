
import "../app/globals.css"
import Link from "next/link";
import Image from "next/image";
import git from "@/public/real_git.png"
import lkd from "@/public/linked.in.png"
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Rodape() {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert("Preferiu não informar");
    };

    return (
        <main>
            <Link className="text-white bg-green-600 p-4 fixed bottom-2 right-2 rounded-lg delay-500" href={"#"}><FaAngleDoubleUp /></Link>
            <div className="box_footer1">
                <section className="text-center bg-black text-sm p-2 text-gray-100">
                    <h4 className="mt-4">
                        &copy; 2024 GreenEnergyProvider. Todos os direitos reservados.
                    </h4>
                    <section className="flex flex-col">
                        <div className="flex justify-evenly">
                            <div className="flex flex-col items-center mt-8">
                                <button type="button" className="bg-white w-48 flex justify-center p-2 rounded-lg scale-100 font-bold text-black text-xl">
                                    <Link href={"/integrantes"}>PÁGINA DE INTEGRANTES</Link>
                                </button>
                            </div>
                        </div>
                        <h5 className="flex justify-evenly mt-8">
                            <p>RM558475 - Guilherme Britto</p>
                            <p>RM555352 - Thiago Mendes</p>
                            <p>RM555287 - João Santis</p>
                        </h5>
                        <div className="flex justify-evenly ml-8">
                            <div className="flex">
                                <Link href={"https://github.com/guibritto"}><Image src={git} alt="git_logo" className="w-10" /></Link>
                                <Link href={"https://www.linkedin.com/in/guilherme-britto-baa450312/"}><Image src={lkd} alt="linkedin_logo" className="w-10" /></Link>
                            </div>
                            <div className="flex">
                                <Link href={"https://github.com/Offiline26"}><Image src={git} alt="git_logo" className="w-10" /></Link>
                                <Link href={"www.linkedin.com/in/thiago-mendes-2b170728b"}><Image src={lkd} alt="linkedin_logo" className="w-10" /></Link>
                            </div>
                            <div className="flex">
                                <Image src={git} alt="git_logo" className="w-10" />
                                <Image src={lkd} alt="linkedin_logo" className="w-10" />
                            </div>
                        </div>


                    </section>
                </section>
            </div>
        </main>
    );
}