import { Response } from "express";

export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function successResponse(res: Response, data: object) {
  res.status(200).json({
    code: 200,
    status: "success",
    message: "Success",
    data: Object.keys(data).length ? data : { message: "Success" },
    timestamp: new Date(),
  });
}

export function errorResponse(res: Response, error: any) {
  let statusCode = error instanceof ApiError ? error.statusCode : 500;
  res.status(statusCode).json({
    code: statusCode,
    status: "error",
    message: error.message,
    timestamp: new Date(),
  });
}
