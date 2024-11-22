export type Usuario = {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

export type Previsao = {
    id: number;
    nome: string;
    tamanho: number;
    estado: string;
    consumo: number;
}

export type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}