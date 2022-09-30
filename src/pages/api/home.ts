import type { NextApiRequest, NextApiResponse } from "next";
import { ok } from "../../utils";

import DATA from "../../data/home.json";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return ok(res, DATA);
}
