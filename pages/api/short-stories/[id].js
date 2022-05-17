/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../utils/dbConnect';
import ShortStory from "../../../models/ShortStory";

dbConnect();
export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const shortStory = await ShortStory.findById(id);

                if (!shortStory) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: shortStory });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const shortStory = await ShortStory.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!shortStory) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: shortStory });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedStory = await ShortStory.deleteOne({ _id: id });

                if (!deletedStory) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}