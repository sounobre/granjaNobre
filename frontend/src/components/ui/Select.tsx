import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { cn } from "../../lib/theme";

type Props<T extends string> = {
  items: readonly T[];
  value?: T | undefined;
  onValueChange: (v: T | undefined) => void;
  placeholder?: string;
  className?: string;
};

export default function Select<T extends string>({
  items,
  value,
  onValueChange,
  placeholder = "Selecione...",
  className,
}: Props<T>) {
  return (
    <View className={cn("border border-border rounded-2xl overflow-hidden bg-card", className)}>
      <Picker
        selectedValue={value ?? ""}
        onValueChange={(v) => onValueChange((v as T) || undefined)}
        prompt={placeholder}
      >
        <Picker.Item label={placeholder} value="" />
        {items.map((t) => (
          <Picker.Item key={t} label={t} value={t} />
        ))}
      </Picker>
    </View>
  );
}
