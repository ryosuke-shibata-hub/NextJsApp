import jwt, { decode } from "jsonwebtoken";

const secret_key = "nextmarket"

const auth = (handler) => {
    return async (req, res) => {
        if (req.method === "GET") {
            return handler(req, res)
        }
        // const token = await req.handlers.authorization.split(" ")[1]
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RfdGVzdEBlbWFpbC5jb20iLCJpYXQiOjE2OTMyMzAzNDksImV4cCI6MTY5MzMxMzE0OX0.vF6um41gjgvEHOkHOU6V_ojxPf50BLSV8sF1y6Bzr64"

        if (!token) {
            return res.status(401).json({message: "トークンがありません"})
        }

        try {
            const decoded = jwt.verify(token, secret_key)
            // console.log(decoded);
            req.body.email = decoded.email
            return handler(req, res)
        } catch (error) {
            return res.status(401).json({message: "トークンが正しくありません。ログインしてください"})
        }
    }
}

export default auth
