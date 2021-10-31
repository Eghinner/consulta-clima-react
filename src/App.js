import React, {useState, useEffect} from 'react'
import Header from './components/Header.js'
import Formulario from './components/Formulario.js'
import Clima from './components/Clima.js'
import Error from './components/Error.js'

function App() {

  const [busqueda, guardarBosqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false)

  const {ciudad, pais} = busqueda;

  const [response, setResponse] = useState({});

  const [error, setError] = useState(false)

  useEffect(() => {
    const consultarApi = async () => {
      if (consultar) {
        const apiId = 'a19156804ff520b4bd653d05023c015c';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResponse(resultado)
        guardarConsultar(false);

        if (resultado.cod==='404') {
          setError(true);
        }else setError(false);

      }

    }
    consultarApi()
  }, [consultar, ciudad, pais])

  let component;

  if (error) {
    component=<Error mensaje="No hay resultado"/>
  }else{
    component = <Clima response={response}/>
  }

  return (
    <React.Fragment>
      <Header
        titulo={'Tenki'}
      />
      <div
        className="container d-flex bg-primary"
        >
        <Formulario
          busqueda={busqueda}
          guardarBosqueda={guardarBosqueda}
          guardarConsultar={guardarConsultar}
        />
        <div className="col p-5">
          {component}
        </div>
      </div>
    </React.Fragment>
      );
}

export default App;