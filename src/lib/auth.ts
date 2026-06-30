import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "super-secret-key";

export function createToken(userId: string) {
  return jwt.sign(
    { userId },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
}

export function verifyToken(
  token: string
): string | null {
  try {
    const decoded = jwt.verify(
      token,
      JWT_SECRET
    ) as {
      userId: string;
    };

    return decoded.userId;
  } catch {
    return null;
  }
}