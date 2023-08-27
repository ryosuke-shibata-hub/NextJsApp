// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const hello = (req, res) => {
    return res.status(200).json({message: "こんにちは!", date: "今日は金曜日だお"})
}

export default hello
