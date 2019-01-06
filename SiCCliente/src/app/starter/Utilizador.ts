import { TipoUtilizador } from "./TipoUtilizador";

export class Utilizador {
    id: number;
    email: string;
    password: string;
    OTP: string;
    tipoUtilizador: TipoUtilizador;
}