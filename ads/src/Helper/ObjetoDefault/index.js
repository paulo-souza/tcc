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
};

export const creditoDefault = {
    uid: '',
    operacao_credito: 'emprestimo',
    tipo_juros: 'simples',
    valor_emprestimo: '',
    taxa_juros: '',
    prazo: 'mensal',
    qtd_prazo: '',
    data_parcela1: ''
};

export const detalheCreditoDefault = {
    numero_parcela: '',
    tipo_credito: '',
    data_vencimento: '',
    valor_parcela: '',
    valor_pago: '',
    situacao: '',
    uidCredito: '',
    uid: ''
};

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

export const customLabels = {        
    first: '<<',
    last: '>>',
    previous: 'Anterior',
    next: 'Próximo'        
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
    situacao_empresa: 'ativo',
    pagamento: 'pendente'
};

export default clienteDefault;