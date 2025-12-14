export function getToken() {
  return localStorage.getItem("token");
}

export function getUserRole() {
  const token = getToken();
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role;
  } catch {
    return null;
  }
}

export function isAdmin() {
  return getUserRole() === "admin";
}
