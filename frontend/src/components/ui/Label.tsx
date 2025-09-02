import { Text } from "react-native";
import React from "react";
import { cn } from "../../lib/theme";


type Props = { children: React.ReactNode; className?: string };
export default function Label({ children, className }: Props) {
return (
<Text className={cn("text-sm font-semibold text-foreground/90", className)}>
{children}
</Text>
);
}