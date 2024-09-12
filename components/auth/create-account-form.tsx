import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ComponentPropsWithoutRef, FC, useState } from "react"
import { errorDetails } from "@/lib/utils";
import { Button } from "../ui/button";
import { z } from "zod";
import { Text } from "../ui/text";
import { View } from "react-native";
import { useAccountServiceCreateAccount } from "@/lib/sdk/queries";
import { toast } from "sonner-native";
import { router } from "expo-router";
import { LoaderCircle } from "@/lib/icons/LoaderCircle";
import { useAuth } from "@/components/providers/auth-provider";
import { ApiError } from "@/lib/sdk/requests";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input";

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId,
      name: "",
    },
  })

  const onSubmit = async (requestBody: z.infer<typeof formSchema>) => {
    console.log(requestBody)
    await create({ requestBody })
  }

  return (
    <Form {...form}>
      <View className="space-y-8">
        {/* <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"> */}
        <FormField
          control={form.control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="shadcn"
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button onPress={form.handleSubmit(onSubmit)} disabled={isCreating}>
          <Text>
            {isCreating && <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />}
            Create Account
          </Text>
        </Button>
        {/* </form> */}
      </View>
    </Form>
  );
};