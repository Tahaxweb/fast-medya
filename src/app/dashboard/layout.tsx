import { RedirectToSignIn, SignUp, SignedIn, SignedOut } from "@clerk/nextjs";
import type { Metadata } from "next";
import Sidebar from "../components/SideBar";
export const metadata: Metadata = {
  title: "Wirchual Dashboard",
  description: "Dashboard for wirchual web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignedIn>
        <Sidebar> {children}</Sidebar>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
