"use client";

import { CircleX } from "lucide-react";

interface FormErrorProps {
    message: string | undefined
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) {
        return null
    }

    return (
        <div className="bg-destructive/15 rounded-md p-3 flex items-center gap-x-2 text-sm font-medium text-destructive">
            <CircleX className="h-4 w-4" />
            <p>{message}</p>            
        </div>
    )
}