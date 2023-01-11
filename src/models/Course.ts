export class Course {
  id: number;
  title: string;
  lastUpdated: number;

  constructor(id, title, lastUpdated) {
    this.id = id;
    this.title = title;
    this.lastUpdated = lastUpdated;
  }
}
