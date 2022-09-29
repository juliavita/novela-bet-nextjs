// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Aposta } from "../../../repositories";
import { badRequest, ok } from "../../../utils";

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
    const data = await Aposta.obtemApostaPorId(1, Number(id));
    return ok(res, data);
  } catch (error: any) {
    return badRequest(res, { mensagem: error?.message ?? "Ocorreu um erro." });
  }
}
