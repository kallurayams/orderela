import prisma from "../config/prisma";
import { generateToken } from "../config/auth";
import { ApiError } from "../config/util";
import { HTTP_CODES } from "../config/default";

export async function signup(
  email: string
): Promise<{ message: string; token: string }> {
  try {
    const newUserData = await prisma.user.create({ data: { email } });
    const token = await generateToken({ userId: newUserData.id });
    return { message: "Success", token: token };
  } catch (error) {
    throw new ApiError("Email already registered.", HTTP_CODES.BAD_REQUEST);
  }
}
