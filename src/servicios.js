import axios from 'axios';
import config from './config';

const context = `${config.swapi}/people/`;

export function getPeople() {
  return axios.get(context).then(res => res.data.results);
}
