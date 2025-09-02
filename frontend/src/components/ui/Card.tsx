import { View, ViewProps } from "react-native";
import React from "react";
import { cn } from "../../lib/theme";


type Props = ViewProps & { className?: string };
export default function Card({ className, ...props }: Props) {
return (
<View className={cn("bg-card border border-border rounded-2xl p-4", className)} {...props} />
);
}