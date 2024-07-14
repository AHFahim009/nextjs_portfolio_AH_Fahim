import { NextApiRequest, NextApiResponse } from "next";

export default function handleContact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // data validation checking : ok
  // node mailer integration
  return res.status(404).json({ message: "provide all field value" });

}
