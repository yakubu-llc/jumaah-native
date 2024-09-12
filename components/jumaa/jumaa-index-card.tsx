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
export type Jumaat = {
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

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>Asr</CardTitle>
        <CardDescription>
          <Text>{jumaa.location} at {time}</Text>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text className="text-sm text-muted-foreground">{jumaa.queued} queued</Text>
      </CardContent>
      <CardFooter className="flex flex-row justify-center items-center gap-2">
        <Button className="w-1/2">
          <Text>Join</Text>
        </Button>
        <Dialog className="w-1/2">
          <DialogTrigger asChild className="w-full">
            <Button variant="outline">
              <Text>Request Delay</Text>
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
                <Button>
                  <Text>OK</Text>
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};