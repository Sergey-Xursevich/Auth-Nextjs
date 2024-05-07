"use client";

import { CircleCheck } from "lucide-react";

interface FormSuccessProps {
    message: string
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) {
        return null
    }

    return (
        <div className="bg-emerald-500/15 rounded-md p-3 flex items-center gap-x-2 text-sm font-medium text-emerald-500">
            <CircleCheck className="h-4 w-4" />
            <p>{message}</p>            
        </div>
    )
}