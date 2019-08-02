export const editTodo = (id, estado) => {     
     console.log(`ID ${id}`);
     console.log(`State  ${estado}`);
     return {type: 'UPDATE', payload: estado};
}

export const toggleTodo = () => {
    console.log('Sample async function')
}

export const deleteTodo = (id, estado) => {    
    console.log(`ID ${id}`);
    console.log(`State  ${estado}`);
    return {type: 'DELETE', payload: estado};
}