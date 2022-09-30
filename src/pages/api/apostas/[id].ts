// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { badRequest, ok } from "../../../utils";

import DATA from "../../../data/product.json";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  if (!id) {
    return badRequest(res);
  }
  try {
    return ok(res, DATA);
  } catch (error: any) {
    return badRequest(res, { mensagem: error?.message ?? "Ocorreu um erro." });
  }
}
