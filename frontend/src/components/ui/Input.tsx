import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { cn } from "../../lib/theme";


type Props = TextInputProps & { className?: string };
export default function Input({ className, ...props }: Props) {
return (
<TextInput
placeholderTextColor="#94A3B8"
className={cn(
"border border-border rounded-2xl px-4 py-3 text-base text-foreground bg-card",
className,
)}
{...props}
/>
);
}