import { ComponentPropsWithoutRef, FC } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Button } from "../ui/button";
import { Image, View, Linking } from "react-native";
import { CircleEllipsis, MapPinned } from "lucide-react-native";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Link } from "expo-router";
import { err } from "react-native-svg";
export type Jumaat = {
  salah: string;
  id: number;
  location: string;
  queued: number;
  delay: number;
  time: string;
}

export interface JumaaIndexCardProps extends ComponentPropsWithoutRef<typeof Card> {
  jumaa: Jumaat;
};

export const JumaaIndexCard: FC<JumaaIndexCardProps> = ({ jumaa, className, ...props }) => {
  const time = new Date(parseInt(jumaa.time)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  const googMaps = (loc: string) => {
    const locURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc)}`;
    Linking.openURL(locURL);
  } 

  return (
    <Card className={cn(className="bg-slate-900 shadow-lg opacity-6 border-transparent mb-10 justify-center mx-auto w-[90vw]")} {...props}>
      <CardHeader>
        <View className="flex flex-row items-center">
          <CardTitle className="text-white">{jumaa.salah}</CardTitle>
          <Button className="bg-transparent ml-auto" onPress={() => googMaps(jumaa.location)}>
            <MapPinned size={25} color="white"/>
          </Button>
        </View>
        <CardDescription>
          <Text className="text-white">{jumaa.location} at {time}</Text>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text className="text-sm text-muted-foreground text-white">Attendees ({jumaa.queued})</Text>
        <View className="flex flex-row gap-2 items-center">
          <Image className="rounded-full aspect-auto" style={{marginTop: 5, width: 30, height: 30}} source={require(`@/assets/zeerak_pfp'24.jpg`)}/>
          <Image className="rounded-full aspect-auto" style={{marginTop: 5, width: 30, height: 30}} source={require(`@/assets/kareem_pfp.png`)}/>
          <Image className="rounded-full aspect-auto" style={{marginTop: 5, width: 30, height: 30}} source={require(`@/assets/zeerak_pfp'24.jpg`)}/>
          <Image className="rounded-full aspect-auto" style={{marginTop: 5, width: 30, height: 30}} source={require(`@/assets/kareem_pfp.png`)}/>
          <Image className="rounded-full aspect-auto" style={{marginTop: 5, width: 30, height: 30}} source={require(`@/assets/zeerak_pfp'24.jpg`)}/>
          <CircleEllipsis size={30} color="white" className="justify-center items-center my-auto"/>
        </View>
      </CardContent>
      <CardFooter className="flex flex-row justify-center items-center gap-4">
        <Button style={{height: 50}} className="items-center justify-center w-1/2 bg-green-500">
          <Text className="text-white font-bold">Join</Text>
        </Button>
        <Dialog className="w-1/2">
          <DialogTrigger asChild className="w-full">
            <Button style={{height: 48}} className="bg-red-600 items-center justify-center">
              <Text className="text-white font-bold">Request Delay</Text>
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button className="bg-black">
                  <Text className="text-white">OK</Text>
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};