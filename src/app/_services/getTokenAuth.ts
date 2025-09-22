import { getServerSession } from "next-auth/next";
import { authOptions } from "@/Auth";

export async function getTuokenAuth(): Promise<string> {
  const session = await getServerSession(authOptions);

  if (!session?.accessToken) {
    throw new Error("Not logged in or no access token found");
  }

  return session.accessToken;
}
