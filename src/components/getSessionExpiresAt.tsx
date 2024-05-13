export default function getSessionExpiresAt(minutes = 5) {
  const now = new Date();
  const expiresTime = now.setMinutes(now.getMinutes() + minutes);
  localStorage.setItem("login-expires", expiresTime.toString());
  return now;
}
