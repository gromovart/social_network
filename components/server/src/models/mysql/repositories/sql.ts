export const createUserSql = (data) => {
  return `INSERT users(${Object.keys(data).join(',')}) VALUES(${Object.keys(
    data
  )
    .map((elm: string) => JSON.stringify(data[elm]))
    .join(',')});`;
};
