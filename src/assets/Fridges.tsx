import { v4 as uuidv4 } from "uuid";

export const Fridges = [
  {
    name: "Lodówka + Zamrażarka",
    width: 110,
    height: 170,
    color: "white",
    id: uuidv4()
  },
  { name: "Lodówka", width: 80, height: 170, color: "white", id: uuidv4() },
  { name: "Zamrażarka", width: 80, height: 170, color: "white", id: uuidv4() },
  { name: "Lodówka Slim", width: 50, height: 170, color: "white", id: uuidv4() },
];
