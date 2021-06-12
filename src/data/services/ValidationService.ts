export const ValidationService = {
  cep(cep = ""): boolean {
    return cep.replace(/\D/g, "").length === 8; //tudo que 'nao for numero' ele ira substituir por vazio
  },
};
