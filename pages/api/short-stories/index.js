/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../utils/dbConnect';
import ShortStory from "../../../models/ShortStory"

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const shortStories = await ShortStory.find({});

                res.status(200).json({ success: true, data: shortStories })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const shortStory = await ShortStory.create(req.body);

                res.status(201).json({ success: true, data: shortStory })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}