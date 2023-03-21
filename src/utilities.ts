export const storage = {
  get: (key: string, defaultVault = null) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultVault;
  },
  set: (key: string, value: Record<string, any>) =>
    localStorage.setItem(key, JSON.stringify(value)),
  remove: (key: string) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};
