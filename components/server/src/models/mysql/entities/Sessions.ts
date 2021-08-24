export default class News {
  public title: string;

  public body: string;

  public briefDescription: string;

  public pictureUrl: string;

  constructor(
    title: string,
    body: string,
    briefDescription: string,
    pictureUrl: string
  ) {
    this.title = title;
    this.body = body;
    this.briefDescription = briefDescription;
    this.pictureUrl = pictureUrl;
  }
}
