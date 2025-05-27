export interface Project {
  id: number;
  name: string;
  category: Category[];
  price: number;
  image: string;
}

export enum Category {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOURTH = "fourth",
  FIFTH = "fifth",
  SIXTH = "sixth",
  SEVENTH = "seventh",
}
