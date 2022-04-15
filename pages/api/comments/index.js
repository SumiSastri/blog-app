import { comments } from "../../../mocks/comments";

export default function handler(req, res) {
  res.status(200).json(comments);
}