import React, {useState} from 'react'

export default function TodoForm() {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    
        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // });
    
        setInput('');
    };
    
    const handleChange = e => {
        setInput(e.target.value);
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type='text' 
                placeholder='Add Todo' 
                value={input} 
                name='text' 
                className='todo-input' onChange={handleChange}/>
            <button className='todo-button'>Add Todo</button>
        </form>
    )
}
