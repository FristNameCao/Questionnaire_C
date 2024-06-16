import { NextApiRequest, NextApiResponse } from "next"


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log('req',req.method);
  res.status(200).json({ name: 'John Doe' })
}

// HTTP 协议,request response

