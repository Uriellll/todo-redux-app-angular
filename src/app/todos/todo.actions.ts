import { createAction, props } from "@ngrx/store";
export const limpiar = createAction('[TODO] Limpiar Todos');
export const crear = createAction('[TODO] Crea Todo',
props<{texto:string}>()
);
export const toggle =createAction('[TODO] Toggle Todo',
props<{id:number
}>());
export const editar =createAction('[TODO] Editar Todo',
props<{id:number, texto:string
}>());
export const eliminar =createAction('[TODO] Eliminar Todo',
props<{id:number
}>());
export const toggleAll =createAction('[TODO] Editar Todos Todo',
props<{completado:boolean
}>());