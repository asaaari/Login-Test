export async function signup(name: string, email: string, password: string) {
  console.log("Signup stub:", { name, email, password });
  return { success: true };
}

export async function login(email: string, password: string) {
  console.log("Login stub:", { email, password });
  return { success: true };
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('isAuthenticated') === 'true';
}

export function setAuthenticated(value: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('isAuthenticated', value.toString());
}

export function logout(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('isAuthenticated');
}
