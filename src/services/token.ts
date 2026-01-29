const AUTH_TOKEN_KEY_NAME = 'is4_gals__token'; // rgrIZYfOTs_dCLhuJUiYLI1GSZsj5NNQ

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ? token : '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
