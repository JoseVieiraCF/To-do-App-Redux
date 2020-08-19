const INITIAL_STATE = {
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
    }


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        default:
            return state;
    }
};