import React, {useState} from 'react'
import Error from './Error.js'

const Formulario = ({busqueda, guardarBosqueda, guardarConsultar}) => {

	const [error, setError] = useState(false)

	const {ciudad, pais} = busqueda;

	// Resolver/handle cambio en entradas
	function handleChange(e) {
		guardarBosqueda({
			...busqueda,
			[e.target.name] : e.target.value
		});
	}

	// Resolver Submit
	function handleSubmit(e) {
		e.preventDefault();

		// Validando
		if (ciudad.trim()===''||pais.trim()==='') {
			setError(true);
			return;
		}setError(false);

		guardarConsultar(true);


	}

	return (
		<React.Fragment>
			<form
				onSubmit={handleSubmit}
				className="col p-5"
			>
			{ error ?
				<Error mensaje="Todos los campos son obligatorios"/>
			:null}
				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control fs-4 text"
						id="ciudad"
						name="ciudad"
						value={ciudad}
						onChange={handleChange}
					/>
					<label
						className="fs-6 text"
						htmlFor="ciudad"
					>Ciudad:
					</label>
				</div>
				<div className="form-floating mb-3">
					<select
						className="form-select mb-3"
						id="pais"
						name="pais"
						value={pais}
						onChange={handleChange}
					>
						<option value="">Seleccione pais</option>
						<option value="US">Estados Unidos</option>
						<option value="MX">México</option>
						<option value="AR">Argentina</option>
						<option value="CO">Colombia</option>
						<option value="CR">Costa Rica</option>
						<option value="ES">España</option>
						<option value="PE">Perú</option>
						<option value="VE">Venezuela</option>
					</select>
					<label htmlFor="pais">Pais: </label>
				</div>
				<input
					type="submit"
					className="btn btn-warning w-100"
				/>
			</form>

			</React.Fragment>
			)
}

export default Formulario