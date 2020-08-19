import { combineReducers }   from 'redux';

const rootReducers = combineReducers({
    todo: ()=>({
      description: 'Ler Livro',
      list: [{
          id: 1,
          description: 'Pagar cartão',
          done:0
      },
      {
        id: 2,
        description: 'Estudar',
        done:0
    }
    ]  
    })
});

export default rootReducers;