import { CiudadModel } from './Ciudad.Model';

interface IDepartamento{
    Id:string;
    Nombre:string;
    Ciudades:CiudadModel[];
}

export class DepartamentoModel implements IDepartamento
{
    Id:string;
    Nombre:string;
    Ciudades:CiudadModel[];
}