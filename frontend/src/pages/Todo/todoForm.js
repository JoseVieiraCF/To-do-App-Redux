import React from 'react';
import Button from '../../template/button';

export default props => (
    <div role='form' className='todoForm'> 
        <form className="form-inline">
            <div className="form-group col-md-10">
                <input type="text" className="form-control-plaintext input" onChange={props.onChange} value={props.description} placeholder='Adicione uma Tarefa'/>
            </div>
            <Button onClick={props.handleAdd} style={'primary'} icon={'plus'} />
            
        </form>
    </div>
);