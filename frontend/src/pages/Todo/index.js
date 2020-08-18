import React from 'react';
import PageHeader from '../../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';
import api from '../../services/api';

export default class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {description: '', list: []};
        this.handleAdd = this.handleAdd.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);  
        this.handleDelete = this.handleDelete.bind(this);    
        this.handleAsDone = this.handleAsDone.bind(this);
        this.handleAsPending = this.handleAsPending.bind(this);
    }

    componentDidMount(){
        this.index();
    }
    

    async index(){
        await api.get('/todos').then(resp => this.setState({description: '',list:resp.data}));
        

    }


    async handleDelete(todo){
        await api.delete(`/todos/`+todo.id).then(resp => this.index());
        

    }

    async handleAdd(event){
        event.preventDefault();
        const data = {
            description: this.state.description,
            done: false
        }
        await api.post('/todos',data);
        this.index();
        
    }

    handleOnChange(event){
        this.setState({description: event.target.value});
    }
    
    handleAsDone(todo){
        api.put(`/todos/`+todo.id, {...todo, done: true}).then(resp => this.index()); 
    }

    handleAsPending(todo){
        api.put(`/todos/`+todo.id, {...todo, done: false}).then(resp => this.index());
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd} onChange={this.handleOnChange} />
                <TodoList 
                    handleAsDone={this.handleAsDone}
                    handleAsPending={this.handleAsPending} 
                    taskList={this.state.list} 
                    onClick={this.handleDelete}
                />
            </div>
        );
    }
}