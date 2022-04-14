import { childrensStories } from "../../../mocks/data";

export default function handler(req, res) {
  res.status(200).json(childrensStories);
}