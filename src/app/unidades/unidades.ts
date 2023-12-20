import { Propiedades } from "../propiedades/propiedades";
import { Residentes } from "../residentes/residentes";

export class Unidades {
  id_unidad: number;
  cantidad_unidades: number;
  metros_cuadrados: number;
  cantidad_habitaciones: number;
  id_propiedad: Propiedades; // Cambiado a Propiedades
  residentes: Residentes[];
  }
  
