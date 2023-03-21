import { Response } from "express";

export const setError = (
  status: number,
  res: Response,
  message: string
): Error => {
  throw new Error("Usuário não vinculado", {
    cause: [() => res, status],
  });
};
