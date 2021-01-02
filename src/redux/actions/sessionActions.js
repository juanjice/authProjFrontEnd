//tipos de acciones en redux
export const ENTRY_SESSION ='ENTRY_SESSION'
export const EXIT_SESSION ='EXIT_SESSION'
//crear las acciones que retornan el tipo de accion
export const entrySesion = () => ({
    type: ENTRY_SESSION
  })
  export const exitSession= () => ({
    type: EXIT_SESSION
  })
// Combine todas las aciones en un thunk asyncrono
