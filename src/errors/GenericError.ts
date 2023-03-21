import Catch from "catch-decorator";

export const GenericError = Catch(Error, (err: any) => {
  err.cause[0]()
    .status(err.cause[1])
    .json({ error: true, message: err.message });
});
