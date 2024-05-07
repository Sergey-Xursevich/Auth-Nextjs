"use client"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export const Social = () => {
    return (
        <div className="flex w-full gap-x-2 items-center">
            <Button size={"lg"} variant={"outline"} className="w-full" onClick={() => {}}>
                <FcGoogle className="w-6 h-6" />
            </Button>
            <Button size={"lg"} variant={"outline"} className="w-full" onClick={() => {}}>
                <FaGithub className="w-6 h-6" />
            </Button>
        </div>
    )
}