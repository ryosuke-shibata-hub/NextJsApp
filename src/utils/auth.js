import jwt, { decode } from "jsonwebtoken";

const secret_key = "nextmarket"

const auth = (handler) => {
    return async (req, res) => {
        if (req.method === "GET") {
            return handler(req, res)
        }
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RfdGVzdEBlbWFpbC5jb20iLCJpYXQiOjE2OTM0MDYxNTEsImV4cCI6MTY5MzQ4ODk1MX0.tNgW-07oLskiTdfxc4PBDqmvsf7dBFjinJ5jCnDzaNI"

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
