// app/_components/Header.js (Server Component)
import { auth } from "../_lib/auth";
import ClientHeader from "./ClientHeader";

export default async function Header() {
  const session = await auth(); // SSR fetch
  return <ClientHeader session={session} />;
}
