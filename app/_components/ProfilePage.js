import { auth } from "../_lib/auth";
import AccountInfo from "../_components/AccountInfo";

export default async function AccountPage() {
  const session = await auth(); // Fetch session in Server Component
  
  return (
    <div>
      <AccountInfo session={session} />
    </div>
  );
}