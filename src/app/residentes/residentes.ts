import { Pagos } from "../pagos/pagos";
import { Unidades} from "../unidades/unidades";
export class Residentes {
  id_residente: number;
  nombre: string;
  telefono: string;
  correo_electronico: string;
  fecha_ingreso: string; 

  pagos: Pagos[];


  id_unidad: Unidades;
}
