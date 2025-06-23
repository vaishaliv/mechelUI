export const toISOString = (timestamp) => {
  return timestamp ? new Date(timestamp).toISOString() : undefined;
};

export const generateId = () => {
  return crypto.randomUUID();
};
