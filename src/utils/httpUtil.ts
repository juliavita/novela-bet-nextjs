import type { NextApiResponse } from "next";

export const ok = (response: NextApiResponse, data?: any) => {
  return response.status(200).json(data);
};

export const badRequest = (response: NextApiResponse, data?: any) => {
  return response.status(400).json(data);
};

export const serverError = (response: NextApiResponse, data?: any) => {
  return response.status(500).json(data);
};
