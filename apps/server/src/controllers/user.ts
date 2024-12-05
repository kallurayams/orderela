import { Request, Response } from "express";
import { UserService } from "../services";
import { errorResponse, successResponse, ApiError } from "../config/util";
import { HTTP_CODES } from "../config/default";

export async function signup(req: Request, res: Response) {
  try {
    if (typeof req.query.email !== "string") {
      throw new ApiError(
        "Email params is missing in the query.",
        HTTP_CODES.BAD_REQUEST
      );
    }
    const response = await UserService.signup(req.query.email);
    successResponse(res, response);
  } catch (error) {
    errorResponse(res, error);
  }
}
