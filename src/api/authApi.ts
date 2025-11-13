const BASE_URL = 'https://wedev-api.sky.pro/api/fitness/auth';

export async function registerUser(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': '' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Ошибка регистрации');
  return data;
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': '' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Ошибка входа');
  return data;
}

export async function getUserInfo(token: string) {
  const response = await fetch(
    `https://wedev-api.sky.pro/api/fitness/users/me`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Ошибка загрузки пользователя');
  return data;
}
