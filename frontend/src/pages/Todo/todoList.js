import React from 'react';
import Button from '../../template/button';
import { connect } from 'react-redux';


function TodoList(props){
    const list = props.list;

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
                <tr>
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

const mapStateToProps = state => ({list:state.todo.list});

export default connect(mapStateToProps)(TodoList);