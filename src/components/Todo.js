import { keys } from 'lodash'
import React, {useState} from 'react'
import TodoForm from './TodoForm'

import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { findAllByDisplayValue } from '@testing-library/react'


function Todo({todos,completeTodo, removeTodo ,updateTodo}) {
    const[edit,setEdit] =useState({
        id: null,
        value:''
    });

    const submitUpdate= value => {
        updateTodo(edit.id , value)
        setEdit({
            id : null,
            value : ''
        })

    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    //  if( todos ){
    //      //console.log("yes");
    //      //return false;
    
    //     //   const testrr = (e) => {
    //     //     e.preventDefault();
    //     //   }
    //     if( todos.text == )
    //  }
    
    return todos.map((todo, index) =>(
        <div 
        className={todo.isComplete ? 'todo-row complete' :'todo-row'} 
        key={index}>
            <div key={todo.id} onClick={() => completeTodo.id(todo.id)}>
                <div className="test">{todo.text}</div>
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                onClick={ () => removeTodo(todo.id)}
                className='delete-icon'
                />
                <TiEdit 
                onClick={ () => setEdit({id : todo.id , value: todo.text})}
                className='edit-icon'
                />
            </div>
        </div>
    ))
}

export default Todo
