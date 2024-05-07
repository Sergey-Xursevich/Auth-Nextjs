import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center text-white text-lg">
        <h1 className={cn("text-6xl font-semibold drop-shadow-md", font.className)}>Auth</h1>
        <p>A simple authentification service</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>Sing in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
