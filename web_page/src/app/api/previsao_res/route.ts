import { Previsao } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {

    const file = await fs.readFile(process.cwd() + '/src/data/base-previsao.json', 'utf-8');
    const previsoes = JSON.parse(file);

    return NextResponse.json(previsoes);

}

export async function POST(request: Request) {
    const file = await fs.readFile(process.cwd() + '/src/data/base-previsao.json', 'utf-8')
    const data = JSON.parse(file)
    const { nome, tamanho, estado, consumo } = await request.json()
    const previsao = { nome, tamanho, estado, consumo } as Previsao
    previsao.id = Number(Date.now())
    data.push(previsao)
    const json = JSON.stringify(data)
    await fs.writeFile(process.cwd() + '/src/data/base-previsao.json', json)

    return NextResponse.json(previsao)
}