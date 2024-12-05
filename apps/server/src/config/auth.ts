import jwt from "jsonwebtoken";

export async function generateToken(payload: {
  userId: number;
}): Promise<string> {
  if (typeof process.env.JWT_KEY !== "undefined") {
    return jwt.sign(payload, process.env.JWT_KEY);
  } else {
    throw new Error("Internal Server Error");
  }
}
