export default class QueryTool {
  public static getSqlInsert(tableName: string, entity: any) {
    return `INSERT ${tableName}(${Object.keys(entity)
      // .sort()
      .filter((key) => !!entity[key])
      .join(',')}) VALUES(${Object.keys(entity)
      .filter((key) => !!entity[key])
      .map((elm: string) => JSON.stringify(entity[elm]))
      .join(',')});`;
  }
}
