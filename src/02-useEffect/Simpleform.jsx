import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Message } from './Message';

export const Simpleform = () => {

	const [formstate, setFormstate] = useState({
		username:'carlos',
		email: 'carlos@gmail.com',
	});

	const { username, email} = formstate;

	const onInputChange = ({target}) => {
		const { name, value } = target;

		setFormstate({
			...formstate,
			[ name ] : value
		});
	}

	useEffect(() => {
		//console.log('useEffect called');
	}, [])

	useEffect(() => {
		//console.log('formstate changed!');
	}, [formstate])

	useEffect(() => {
		//console.log('email changed!');
	}, [email])

	
	


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
				onChange={(event) => onInputChange(event)}
            />

            <input
                type="email"
                className='form-control mt-3'
                placeholder='carlos@gmail.com'
                name="email"
				value={email}
				onChange={(event) => onInputChange(event)}
            />

            {

                (username === 'carlos2') && <Message />
            }



			

        </>
    )
}
