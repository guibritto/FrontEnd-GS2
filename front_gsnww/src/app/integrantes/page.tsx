"use client"
import gui from "@/public/guil.jpg"
import donny from "@/public/johnny.png"
import lkd from "@/public/linked.in.png"
import git from "@/public/real_git.png"
import thi from "@/public/thi.png"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"
import Link from "next/link"


export default function Integrantes() {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert("Preferiu não informar");
    };
    return (
        <main className="bg-black flex flex-col">
            <Link href={"/"} className="text-white font-bold p-4 text-2xl"><FontAwesomeIcon icon={faArrowLeft} /></Link>
            <h1 className="font-bold text-6xl text-white text-center justify-center mt-16">Integrantes - 1TDSPK</h1>
            <div className="flex mt-44 justify-evenly mb-44">
                <div className="flex flex-col items-center">
                    <Image src={gui} alt="Guilherme" className="rounded-full w-64" />
                    <p className="text-white font-bold text-2xl mt-10">RM558475 - Guilherme Britto</p>
                    <div className="flex justify-center mt-10">
                        <Link href={"https://github.com/guibritto"}><Image src={git} alt="git_logo" className="w-10" /></Link>
                        <Link href={"https://www.linkedin.com/in/guilherme-britto-baa450312/"}><Image src={lkd} alt="linkedin_logo" className="w-10" /></Link>
                    </div>
                </div>
                <div className="flex flex-col items-center ">
                    <Image src={thi} alt="Thigas" className="rounded-full w-64 " />
                    <p className="text-white font-bold text-2xl mt-10">RM555352 - Thiago Nascimento</p>
                    <div className="flex justify-center mt-10">
                        <Link href={"https://github.com/Offiline26"}><Image src={git} alt="git_logo" className="w-10" /></Link>
                        <Link href={"https://www.linkedin.com/in/thiago-mendes-2b170728b"}><Image src={lkd} alt="linkedin_logo" className="w-10" /></Link>
                    </div>
                </div>
                <div className="flex flex-col items-center w-82">
                    <Image src={donny} alt="Jhonny" className="rounded-full w-64" />
                    <p className="text-white font-bold text-2xl mt-10">RM555287 - João Victor Santis</p>
                    <div className="flex justify-center mt-10">
                        <Link href={"#"} onClick={handleClick}><Image src={git} alt="git_logo" className="w-10" /></Link>
                        <Link href={"#"} onClick={handleClick}><Image src={lkd} alt="linkedin_logo" className="w-10" /></Link>
                    </div>
                </div>
            </div>
        </main >
    )
}