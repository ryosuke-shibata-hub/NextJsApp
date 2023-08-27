import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

const getSingleItems = async (req, res) => {
    try {
        await connectDB
        // console.log(req.query.id);
        const singleItem = await ItemModel.findById(req.query.id)
        return res.status(200).json({message: "アイテム読み取り成功(シングル)", singleItem: singleItem})
    } catch (error) {
        return res.status(400).json({message: "アイテム読み取り失敗(シングル)"})
    }
}

export default getSingleItems
