import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native'
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { JumaaIndexCard } from '@/components/jumaa/jumaa-index-card';
import { useMusalahServiceGetMusalahById } from '@/lib/sdk/queries';
import { useAuth } from '@/components/providers/auth-provider';
import { LogoutButton } from '@/components/auth/logout-button';
import { router } from 'expo-router';
import { ComponentPropsWithoutRef, FC, useState } from 'react';
import { cn } from '@/lib/utils';
import { supabase } from '../lib/supabase';

export default function CreateCardButton(){
    return(
        <Button
        onPress={() => console.log("testing")}
        className={cn("bg-white w-[40vw]")}>
            <Text className="text-black">Add Jumaat Slot</Text>
        </Button>
    )
}