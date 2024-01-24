import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
export default function Home() {
  return (
    <div className="  h-dvh  w-dvw grid place-items-center">
      <UserButton afterSignOutUrl="/" />
      <Link
        href="/dashboard"
        className="px-3 py-3 rounded-md bg-indigo-500 text-white "
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
