import dbConnect from '../../../util/dbConnect'
import Post from '../../../models/Post'
import { connectToDatabase } from '../../../util/mongodb'


dbConnect();

export default async (req, res) => {

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const posts = await Post.find({ private: false });
                res.status(200).json({ success: true, data: posts });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const post = await Post.create(req.body);
                res.status(201).json({ success: true, data: post });
            } catch (error) {
                console.log(error)
                //res.status(400).json({ success: false });

            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}

export async function getServerSideProps() {
    //await connectToDatabase();
    await dbConnect();

}