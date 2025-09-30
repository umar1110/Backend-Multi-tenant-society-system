import { ZodError } from "zod";

class ErrorHandler extends Error {
  statusCode: Number;
  constructor(message: string | ZodError, statusCode: Number) {
    let errorMessage = "";
    if (message instanceof String) {
      errorMessage = message as string;
    }
    else if (message instanceof ZodError) {
      errorMessage = message.issues
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(" ");
    }
    super(errorMessage);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default ErrorHandler;
