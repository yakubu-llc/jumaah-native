import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { ComponentPropsWithoutRef, FC, useState } from "react"
import { cn, errorDetails } from "@/lib/utils";
import { Button } from "../ui/button";
import { z } from "zod";
import { Text } from "../ui/text";
import { View } from "react-native";
import { FormInputController } from "../controllers/form-input-controller";
import { useAccountServiceCreateAccount } from "@/lib/sdk/queries";
import { toast } from "sonner-native";
import { router } from "expo-router";
import { LoaderCircle } from "@/lib/icons/LoaderCircle";
import { useAuth } from "@/components/providers/auth-provider";
import { ApiError } from "@/lib/sdk/requests";

export interface CreateAccountFormProps extends ComponentPropsWithoutRef<typeof View> {
  userId: string
};

const formSchema = z.object({
  userId: z.string().uuid(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
})

export const CreateAccountForm: FC<CreateAccountFormProps> = ({ userId, className, ...props }) => {
  const [isCreating, setIsCreating] = useState(false)
  const { refresh } = useAuth()
  const { mutateAsync: create } = useAccountServiceCreateAccount({
    onMutate: () => {
      setIsCreating(true)
    },
    onError: (error: ApiError) => {
      const err = errorDetails(error)
      console.log(err)
      toast.error("Uh oh!", {
        description: err.detail
      })
      setIsCreating(false)
    },
    onSuccess: async () => {
      toast.success("Account created")
      await refresh()
      router.replace("/")
      setIsCreating(false)
    }
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId,
      name: "",
    },
  })

  const onSubmit = async (requestBody: z.infer<typeof formSchema>) => {
    await create({ requestBody })
  }

  return (
    <View className={cn(className)} {...props}>
      <Text>Name</Text>
      <FormInputController control={control} name="name" errors={errors} />
      <Button onPress={handleSubmit(onSubmit)} disabled={isCreating}>
        {isCreating ? <LoaderCircle className="w-4 h-4 mr-2 animate-spin" /> : <Text>Create Account</Text>}
      </Button>
    </View>
  );
};