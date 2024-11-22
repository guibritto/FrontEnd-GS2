import { Usuario } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {

    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
    const users = JSON.parse(file);

    return NextResponse.json(users);

}
export async function POST(request: Request) {
    const filePath = process.cwd() + '/src/data/base.json';
    const file = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(file);
    const { nome, email, senha } = await request.json()
    const user = { nome, email, senha } as Usuario
    user.id = Number(Date.now())
    data.push(user)
    const json = JSON.stringify(data)
    await fs.writeFile(process.cwd() + '/src/data/base.json', json)

    return NextResponse.json(user)
}