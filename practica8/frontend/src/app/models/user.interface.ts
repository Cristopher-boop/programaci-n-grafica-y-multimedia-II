// src/app/models/user.interface.ts
export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export interface PaqueteRespuesta {
  mensaje: string;
  origen: string;
  cantidad_registros: number;
  resultados: User[]; 
}