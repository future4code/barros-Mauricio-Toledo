import React from 'react'
import './style.css'

export function SecaoComentario(props) {

	return (

		<div className='CommentContainer'>
			<input type='text' className='InputComentario'
				placeholder={'Comentario'}
				
				onChange={props.onChangeComentario}
			/>
			

			
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}