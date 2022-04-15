import { comments } from "../../../mocks/mockComments";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(comments)
  } else if (req.method === 'POST') {
    const {comment, name} = req.body
    const newComment = {
      id: Date.now(),
      comment,
      name,
    }
    comments.push(newComment)
    res.status(201).json(newComment)
  }
}