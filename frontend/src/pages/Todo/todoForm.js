import React from 'react';
import Button from '../../template/button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription} from '../../store/todoActions';

const todoForm = props => (
    <div role='form' className='todoForm'> 
        <form className="form-inline">
            <div className="form-group col-md-10">
                <input type="text" className="form-control-plaintext input" onChange={props.changeDescription} value={props.description} placeholder='Adicione uma Tarefa'/>
            </div>
            <Button onClick={props.handleAdd} style={'primary'} icon={'plus'} />
            
        </form>
    </div>
);

function mapStateToProps(state){
    return{
        description: state.todo.description
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeDescription},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(todoForm);