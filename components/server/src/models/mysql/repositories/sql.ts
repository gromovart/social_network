export const createUserSql = (data) => {
  return `INSERT users(${Object.keys(data)
    // .sort()
    .filter((key) => !!data[key])
    .join(',')}) VALUES(${Object.keys(data)
    .map((elm: string) => JSON.stringify(data[elm]))
    .join(',')
    .slice(0, -1)});`;
};
