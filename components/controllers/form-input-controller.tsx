import { ComponentPropsWithoutRef, FC } from "react"
import { Controller, Control, FieldErrors, FieldValues } from "react-hook-form"
import { Input } from "../ui/input"
import { Text } from "../ui/text"

export interface FormInputControllerProps extends ComponentPropsWithoutRef<typeof Input> {
  control: Control<any>
  name: string
  errors?: FieldErrors<FieldValues>
};

export const FormInputController: FC<FormInputControllerProps> = ({ control, name, errors, ...props }) => {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            {...props}
          />
        )}
        name={name}
      />
      {errors && errors[name] && (
        <Text className="text-destructive text-sm">
          {/* @ts-ignore */}
          {errors[name].message}
        </Text>
      )}
    </>
  );
};