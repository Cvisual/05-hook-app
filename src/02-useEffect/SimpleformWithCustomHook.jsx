import React from 'react'
import { useForm } from '../hooks/useForm';

export const SimpleformWithCustomHook = () => {	

    const { formstate, onInputChange, onResetForm, username, email, password } = useForm({
		username:'',
		email: '',
        password: ''
	})

    //const  { username, email, password } = formstate;

    return (
        <>
            <h1>Formulario simple </h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='UseName'
                name="username"
				value={username}
				onChange={ onInputChange }
            />

            <input
                type="email"
                className='form-control mt-3'
                placeholder='carlos@gmail.com'
                name="email"
				value={email}
				onChange={ onInputChange }
            />

            <input
                type="password"
                className='form-control mt-3'
                placeholder='contraseña'
                name="password"
				value={password}
				onChange={ onInputChange }
            />        		


            <button className='btn btn-primary mt-3'
            onClick={ onResetForm }
            >Reset</button>
        </>
    )
}
