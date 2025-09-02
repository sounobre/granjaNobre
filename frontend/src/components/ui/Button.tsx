import { Pressable, Text } from "react-native";
import React from "react";
import { cn } from "../../lib/theme";


type Props = {
title: string;
onPress?: () => void;
disabled?: boolean;
variant?: "primary" | "outline" | "ghost";
className?: string;
};
export default function Button({ title, onPress, disabled, variant = "primary", className }: Props) {
const base = "rounded-2xl px-4 py-3 items-center justify-center";
const variants: Record<string, string> = {
primary: "bg-primary border border-primary text-white",
outline: "bg-transparent border border-border text-foreground",
ghost: "bg-transparent text-foreground",
};
const textColor = variant === "primary" ? "text-white" : "text-foreground";
return (
<Pressable
accessibilityRole="button"
onPress={onPress}
disabled={disabled}
className={cn(base, variants[variant], disabled && "opacity-50", className)}
>
<Text className={cn("font-semibold", textColor)}>{title}</Text>
</Pressable>
);
}