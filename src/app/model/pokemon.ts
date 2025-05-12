export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  type: string;
  createdAt: Date;

  constructor(
    id: number = 0,
    hp: number = 0,
    cp: number = 0,
    name: string = "",
    picture: string = "",
    type: string = "",
    createdAt: Date = new Date()
  ) {
    this.id = id;
    this.hp = hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.type = type;
    this.createdAt = createdAt;
  }
}
