export class Response {
  data: any[];
  next: string | null;

  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
