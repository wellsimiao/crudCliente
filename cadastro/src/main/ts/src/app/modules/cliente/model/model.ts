export interface Cliente {
  id: Number;
  nome: String;
  cpf: String;
  endereco: Endereco;
}

export interface Endereco {
  id: Number;
  cidade: String;
  pais: String;
  estado: String;
  bairro: String;
  numero: String;
  cep: String;
  logradouro: String;
}
