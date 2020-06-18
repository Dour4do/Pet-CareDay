import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

const ClienteApi = axios.create({ baseURL: 'http://192.168.1.5:3333/api' })

export default ClienteApi;

// Working
export const criaCliente = async (ClienteApi, values) => {
  ClienteApi.post('/cria_fila', {
    nome: values.nomeCliente,
    senha: values.senhaFila
  }).then((res) => {
    // handle success
    console.log(res);
  }).catch((err) => {
    // handle error
    console.log(err);
  })
}

// Working
export const lista = async (ClienteApi) => {
  ClienteApi.get('/lista').then((res) => {
    // handle success
    console.log(res);
  }).catch((err) => {
    // handle error
    console.log(err);
  })
}

// Working
export const apaga = async (ClienteApi, id) => {
  ClienteApi.delete(`/apaga/${id}`).then((res) => {
    // handle success
    console.log(`Cliente ${id} apagado`);
  }).catch((err) => {
    // handle error
    console.log(err);
  })
}

// Working
export const fila = async (ClienteApi, values) => {
  const navigation = useNavigation()
  ClienteApi.get(`/lista/${values.id}`).then((res) => {
    // handle success
    console.log(res);
  }).catch((err) => {
    // handle error
    console.log(err);
  }).then(navigation.navigate('ClienteApi'))
}

// Not Tested
export const atualizaCliente = async (ClienteApi, values) => {
  ClienteApi.put(`/atualiza/${values.id}`).then((res) => {
    // handle success
    console.log(res);
  }).catch((err) => {
    // handle error
    console.log(err);
  })
}