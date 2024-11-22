import { Previsao } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/base_previsao.json', 'utf-8');
    const produtos: Previsao[] = JSON.parse(file);

    const produto = produtos.find(p => p.id == params.id);
    return NextResponse.json(produto);
}
export async function PUT(request: Request, { params }: { params: { id: number } }) {

    try {
        const file = await fs.readFile(process.cwd() + '/src/data/base_previsao.json', 'utf-8')
        const produtos: Previsao[] = JSON.parse(file)
        const index = produtos.findIndex(p => p.id == params.id)
        if (index != -1) {
            const body = await request.json()
            produtos.splice(index, 1, body)
            await fs.writeFile(process.cwd() + '/src/data/base previsao.json', JSON.stringify(produtos))
            return NextResponse.json({ msg: 'Previsão atualizado com sucesso' })
        }
    } catch (error) {
        return NextResponse.json({ msg: 'Erro ao atualizar previsão' + error }, { status: 500 })
    }
}