export const increment = (number) => {
    return{
        type : 'INCRIMENT',
        payload: number
    };
};

export const decrement = () => {
    return{
        type : 'DECRIMENT'
    };
};