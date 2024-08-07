import React from 'react'

function SearchBar() {
	return (
		<div className='flex justify-center mx-auto mt-5 p-4'>
			<div className='flex border border-black w-[580px]'>
				<input type='text' placeholder='Найти шаблоны ' className='pl-3' />
				<button type='submit' className='text-white p-2 flex ml-auto'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z'
							fill='#414141'
						/>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M15.4463 15.4465C15.6415 15.2512 15.9581 15.2512 16.1534 15.4465L21.3534 20.6465C21.5486 20.8418 21.5486 21.1583 21.3534 21.3536C21.1581 21.5489 20.8415 21.5489 20.6463 21.3536L15.4463 16.1536C15.251 15.9583 15.251 15.6418 15.4463 15.4465Z'
							fill='#414141'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default SearchBar
