import jwt, { decode } from "jsonwebtoken";

const secret_key = "nextmarket"

const auth = (handler) => {
    return async (req, res) => {
        if (req.method === "GET") {
            return handler(req, res)
        }
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RfdGVzdEBlbWFpbC5jb20iLCJpYXQiOjE2OTMzMTk4MTgsImV4cCI6MTY5MzQwMjYxOH0.YJInC5FF8z3lJBSrhV6pg5XhEMECR6qN_4lLDUuHFYA"

        if (!token) {
            return res.status(401).json({message: "トークンがありません"})
        }

        try {
            const decoded = jwt.verify(token, secret_key)
            req.body.email = decoded.email
            return handler(req, res)
        } catch (error) {
            return res.status(401).json({message: "トークンが正しくありません。ログインしてください"})
        }
    }
}

export default auth
