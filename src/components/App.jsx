import React, { Component } from 'react';
import './App.css';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import Form from './Form/Form';
import Tarefas from './Tarefas/Tarefas';

// Tarefas
// import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))

    if(!tarefas) return;

    this.setState({tarefas})
  }

  componentDidUpdate (prevProps, prevState){
    const {tarefas} = this.state;

    if (tarefas === prevState ) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1)

    this.setState({
      tarefas: [...novasTarefas],
    })
  }

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    const edit = novasTarefas.splice(index, 1);

     this.setState({
      index: index,
      tarefas: [...novasTarefas],
      novaTarefa: edit,
     })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if(!novaTarefa) return;
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];
    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
      novaTarefa: ''
    });
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        < Form 
          handleSubmit = {this.handleSubmit} 
          handleChange = {this.handleChange} 
          novaTarefa = {novaTarefa} 
          
          />

        < Tarefas 
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tarefas = {tarefas}
        />
        
      </div>
    );
  }
}