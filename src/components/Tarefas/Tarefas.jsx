import React from "react";
import PropTypes from 'prop-types'
import './Tarefas.css'
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';


export default function Tarefas ({ handleDelete, handleEdit, tarefas}) {
  return (
    <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
                <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
              </span>
            </li>
          ))}
        </ul>
  )
}

Tarefas.propType = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
}