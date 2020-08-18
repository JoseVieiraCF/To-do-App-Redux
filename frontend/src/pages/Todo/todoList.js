import React from 'react';
import Button from '../../template/button'


export default function TodoList(props){
    const list = props.taskList;
   const renderRows = list.map(todo => 
            <tr key={todo.id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <Button  style={'success'} icon={'check'} hide={todo.done} onClick={()=> props.handleAsDone(todo)}/>
                    <Button  style={'warning'} icon={'undo'} hide={!todo.done}onClick={()=> props.handleAsPending(todo)}/>
                    <Button  icon='trash -o' style={'danger'} hide={!todo.done}onClick={()=> props.onClick(todo)} />
                </td>
            </tr>
    
       );
    

    return(
        <table className="table table-hover tb-list">
            <thead className='thead '>
                <tr thead-list>
                    <th>Description</th>
                    <th className='table-actions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
    </table>
    );
    
}