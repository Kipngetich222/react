const counterReducer = (state = 0, Action) =>{
      switch (Action.type) {
        case 'INCRIMENT':
          return state + Action.payload;
    
        case 'DECRIMENT':
          return state - 1;
        
        default:
          return state;
      
      }
    };

    export default counterReducer;