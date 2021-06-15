export const pessoaFisicaDefault = {
    uid: '',
    nome: '',
    data_nascimento: '',
    uf_nascimento: '',
    naturalidade: '',
    sexo: 'M',
    estado_civil: 'solteiro',
    conjuge: '',
    cpf: '',
    rg: { numero: '', orgao_expedidor: '', uf: ''},
    mae: '',
    pai: ''
};

export const contatoDefault = {
    uid: '',
    email1: '',
    email2: '',
    telefone1: '',
    telefone2: '',
    celular1: '',
    celular2: ''
}

export const creditoDefault = {
    uid: '',
    operacao_credito: 'emprestimo',
    tipo_juros: 'simples',
    valor_emprestimo: '',
    taxa_juros: '',
    prazo: 'mensal',
    qtd_prazo: '',
    data_parcela1: ''
}

export const enderecoDefault = {
    uid: '',
    imovel_proprio: false,
    cep: '',
    uf: '',
    cidade: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    numero: '',
};

const clienteDefault = {
    uid: '',
    data_registro: '',
    razao_social: '',
    nome_fantasia: '',
    cnae: '',
    cnpj: '',
    inscricao_municipal: '',
    inscricao_estadual: '',
    natureza_juridica: 'Ltda',
    porte_empresa: 'ME',
    situacao_empresa: 'ativo'
};

export default clienteDefault;