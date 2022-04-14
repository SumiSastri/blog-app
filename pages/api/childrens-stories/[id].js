import { childrensStories } from "../../../mocks/data";

export default function handler(req, res) {
  const { id } = req.query;
  const childrensStory = childrensStories.find((childrensStory) => childrensStory.id === Number(id));

  res.status(200).json(childrensStory);
}