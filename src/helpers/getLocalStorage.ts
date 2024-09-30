
export const getStorageValue = (key: string, defaultValue: string | []) => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial || [];
  }
};
