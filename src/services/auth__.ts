const USERNAME_KEY_NAME = 'is4_gals__username';

export type Username = string;

export const getUsername = (): Username => {
  const username = localStorage.getItem(USERNAME_KEY_NAME);
  return username || '';
};

export const saveUsername = (username: Username): void => {
  localStorage.setItem(USERNAME_KEY_NAME, username);
};

export const dropUsername = (): void => {
  localStorage.removeItem(USERNAME_KEY_NAME);
};
