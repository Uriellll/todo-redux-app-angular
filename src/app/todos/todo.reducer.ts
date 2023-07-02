import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, editar, eliminar, limpiar, toggle, toggleAll } from './todo.actions';
export const estadoInicial: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Vencer a thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robas escudo del Capitan América')
];

export const todoReducer = createReducer(
  estadoInicial,
  on(limpiar,state=> state.filter(todo => !todo.completado)),
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(toggle, (state, {id}) => {
    return state.map(todo=>{
      if(todo.id === id){
      return{
        ...todo,
        completado: !todo.completado
      }
    }else{
      return todo;
    }
    })
  }),
  on(editar, (state, {id, texto}) => {
    return state.map(todo=>{
      if(todo.id === id){
      return{
        ...todo,
        texto: texto
      }
    }else{
      return todo;
    }
    })
  }),
  on(eliminar, (state, {id}) => state.filter((todo)=> todo.id !== id)),
  on(toggleAll, (state,{completado})=> state.map((todo)=> {
      return {...todo, completado:completado}
    })
  )

);