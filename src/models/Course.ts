export class Course {
  uuid: number;
  title: string;
  lastUpdated: number;

  constructor(uuid, title, lastUpdated) {
    this.uuid = uuid;
    this.title = title;
    this.lastUpdated = lastUpdated;
  }
}
