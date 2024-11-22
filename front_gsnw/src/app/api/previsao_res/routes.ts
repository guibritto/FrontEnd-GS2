import { Previsao } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {

    const file = await fs.readFile(process.cwd() + '/src/data/base-previsao.json', 'utf-8');
    const previsoes = JSON.parse(file);

    return NextResponse.json(previsoes);

}
