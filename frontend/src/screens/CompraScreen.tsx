// --- FILE: src/screens/CompraScreen.tsx ---
import * as React from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const tipos = ["Galinha", "Galo", "Pato", "Pata", "Ração"] as const;

const schema = z.object({
  // permite placeholder undefined e obriga escolher
  tipo: z.enum(tipos).optional().refine((v): v is typeof tipos[number] => !!v, {
    message: "Selecione um tipo",
  }),
  valor: z
    .string()
    .min(1, "Informe o valor")
    .transform((v) => v.replace(",", "."))
    .refine((v) => !isNaN(Number(v)), "Valor inválido")
    .refine((v) => Number(v) > 0, "O valor deve ser maior que 0"),
});

type FormData = z.infer<typeof schema>;
type TipoCompra = (typeof tipos)[number];

export default function CompraScreen(): React.JSX.Element {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { tipo: undefined, valor: "" },
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    const valorNum = Number(data.valor);
    Alert.alert(
      "Salvo",
      `Tipo: ${data.tipo}\nValor: R$ ${valorNum.toFixed(2).replace(".", ",")}`
    );
    reset({ tipo: undefined, valor: "" });
  };

  return (
    <View className="flex-1 p-4 gap-3">
      <Text className="text-2xl font-bold text-foreground">Registrar compra</Text>

      <Text className="text-sm font-semibold text-foreground/90 mt-2">Tipo de compra</Text>
      <Controller
        control={control}
        name="tipo"
        render={({ field: { onChange, value } }) => (
          <View className="border border-border rounded-2xl overflow-hidden bg-card">
            <Picker
              selectedValue={value as TipoCompra | undefined}
              onValueChange={(val: TipoCompra | undefined) => onChange(val)}
              prompt="Tipo de compra"
            >
              <Picker.Item label="Selecione..." value={undefined} />
              {tipos.map((t) => (
                <Picker.Item key={t} label={t} value={t} />
              ))}
            </Picker>
          </View>
        )}
      />
      {errors.tipo && <Text className="text-danger">{errors.tipo.message}</Text>}

      <Text className="text-sm font-semibold text-foreground/90 mt-2">Valor da compra</Text>
      <Controller
        control={control}
        name="valor"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="border border-border rounded-2xl px-4 py-3 text-base text-foreground bg-card"
            placeholder="Ex.: 35,90"
            placeholderTextColor="#94A3B8"
            keyboardType="decimal-pad"
            value={value}
            onChangeText={(txt: string) => onChange(txt)}
          />
        )}
      />
      {errors.valor && <Text className="text-danger">{errors.valor.message}</Text>}

      <Pressable
        onPress={handleSubmit(onSubmit)}
        className="mt-3 rounded-2xl px-4 py-3 items-center justify-center bg-primary"
        disabled={isSubmitting}
      >
        <Text className="text-white font-semibold">
          {isSubmitting ? "Salvando..." : "Salvar"}
        </Text>
      </Pressable>
    </View>
  );
}
