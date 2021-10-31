import React from 'react'

const Clima = ({response}) => {

	const {name, main} = response;

	if (!name) return null

	const kelvin = 273.15;

	return (
		<React.Fragment>
			<div className="card text-dark bg-light mb-3">
			  <div className="card-header">El clima de {name} es: </div>
			  <div className="card-body">
			    <h5 className="card-title display-4">{parseInt(main.temp-kelvin)}<sup> &#x2103;</sup></h5>
			  </div>
			</div>
		</React.Fragment>
	)
}

export default Clima