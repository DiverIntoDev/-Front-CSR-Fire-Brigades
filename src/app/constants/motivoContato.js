export const MotivoContatoChave = {
  VOLUNTARIO: "VOLUNTARIO",
  DOACAO: "DOACAO",
  FALAR_BRIGADA: "FALAR_BRIGADA",
  CADASTRO: "CADASTRO",
  ADMINISTRADOR: "ADMINISTRADOR"
};

const MotivoContato = [
  {key: MotivoContatoChave.VOLUNTARIO, value: "Quero me voluntariar"},
  {key: MotivoContatoChave.DOACAO, value: "Quero fazer uma doação"},
  {key: MotivoContatoChave.FALAR_BRIGADA, value: "Quero falar com uma brigada"},
  {key: MotivoContatoChave.CADASTRO, value: "Quero cadastrar uma brigada"},
  {key: MotivoContatoChave.ADMINISTRADOR, value: "Quero falar com um administrador"}
];

export default MotivoContato;