import { Previsao } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

// Função para calcular o tempo de retorno
const calcularRetorno = (previsao: Previsao): Previsao => {
    const { tamanho } = previsao;

    const quantidade_placa = (tamanho * 1000) / 3;
    const preco = 5000 * quantidade_placa;
    const producao_energia = (5 * quantidade_placa * 0.8) / 2.5;
    const economia_mensal = producao_energia * 0.8 * 30 - 2000;

    const retorno = economia_mensal > 0 ? (preco / economia_mensal) / 12 : Infinity;

    return { ...previsao, retorno };
}

// Função para buscar uma previsão por ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const file = await fs.readFile(process.cwd() + "/src/data/base-previsao.json", "utf-8");
        const produtos: Previsao[] = JSON.parse(file);

        // Converte params.id para número antes de comparar
        const produto = produtos.find((p) => p.id === Number(params.id));

        if (!produto) {
            return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
        }

        return NextResponse.json(produto);
    } catch (error) {
        return NextResponse.json({ error: "Erro ao buscar produto: " + error }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const file = await fs.readFile(process.cwd() + "/src/data/base-previsao.json", "utf-8");
        const produtos: Previsao[] = JSON.parse(file);

        const index = produtos.findIndex((p) => p.id === Number(params.id));
        if (index === -1) {
            return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
        }

        const body = await request.json();

        // Calcular o retorno antes de atualizar o produto
        const previsaoComRetorno = calcularRetorno(body);

        // Substituir o produto na lista com a previsão calculada
        produtos.splice(index, 1, previsaoComRetorno);

        await fs.writeFile(process.cwd() + "/src/data/base-previsao.json", JSON.stringify(produtos));
        return NextResponse.json({ msg: "Previsão atualizada com sucesso" });
    } catch (error) {
        return NextResponse.json({ msg: "Erro ao atualizar previsão: " + error }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const file = await fs.readFile(process.cwd() + "/src/data/base-previsao.json", "utf-8");
        const produtos: Previsao[] = JSON.parse(file);

        const index = produtos.findIndex((p) => p.id === Number(params.id));
        if (index === -1) {
            return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
        }

        produtos.splice(index, 1);

        await fs.writeFile(process.cwd() + "/src/data/base-previsao.json", JSON.stringify(produtos));
        return NextResponse.json({ msg: "Produto apagado com sucesso" });
    } catch (error) {
        return NextResponse.json({ msg: "Erro ao apagar produto: " + error }, { status: 500 });
    }
}
