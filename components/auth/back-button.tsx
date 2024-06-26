"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
    label: string;
    href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
    return (
        <Button className="w-full font-medium" variant={"link"} size={"sm"} asChild>
            <Link href={href}>{label}</Link>  
        </Button>
    )
}