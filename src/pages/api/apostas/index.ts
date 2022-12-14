import type { NextApiRequest, NextApiResponse } from "next";
import { Aposta } from "../../../repositories";
import { ok } from "../../../utils";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await Aposta.obtemApostas();
  return ok(res, data);
}
