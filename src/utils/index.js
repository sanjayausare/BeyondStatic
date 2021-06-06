export const getToken = () => {
  return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUyNTgxNTV9.6Rl_GHJKabjc-O56eRnTxIqBxJRU3j0CNnnLlUTRJRI";
  return localStorage.getItem("token");
};

export const getUsername = () => {
  return "fahad.shah";
  return localStorage.getItem("username");
};

export const getURL = () => {
  return "http://192.168.0.100:8000";
};
