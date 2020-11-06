export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Por favor, preencha o email.';
  if (!re.test(email)) return 'Ooops! Este é um email inválido';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Por favor, preencha sua senha.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Por favor, preencha seu nome.';

  return '';
};
