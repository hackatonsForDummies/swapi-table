import React, {useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import { getPeople } from './servicios';
import './App.css';

export default function App() {
  const [people, setPeople] = useState([]);

  // detecta cambios de la variable de dentro de los corchetes
  // corchetes vacios ejecuta una vez
  useEffect(() => {
    getCharacters();
  }, [])

  function getCharacters() {
    getPeople().then(res => setPeople(res));
  }

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Género</th>
          <th>Altura</th>
        </tr>
        </thead>
        <tbody>
          {
            people && people.map(char => {
              const { name, gender, height, url } = char;
              const id = url.split('/')[5];

              return (
                <tr key={url}>{/*key para identificar el fragmento*/}
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{gender}</td>
                  <td>{height}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
}
