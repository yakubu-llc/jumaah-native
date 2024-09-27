import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native'
import CreateCardButton from '../../components/create-card';
import { Text } from '@/components/ui/text';
import { JumaaIndexCard } from '@/components/jumaa/jumaa-index-card';
import { useMusalahServiceGetMusalahById } from '@/lib/sdk/queries';
import { useAuth } from '@/components/providers/auth-provider';
import { LogoutButton } from '@/components/auth/logout-button';

export default function Home() {
  const { user } = useAuth()

  const jumaat = [
    {
      "salah": "Zuhr", 
      "id": 1,
      "location": "Shoushan",
      "queued": 21,
      "delay": 2400,
      "time": "1702849871000"
    },
    {
      "salah": "Asr", 
      "id": 2,
      "location": "Sabangan",
      "queued": 6,
      "delay": 1560,
      "time": "1715864810000"
    },
    {
      "salah": "Fajr", 
      "id": 3,
      "location": "Malibong East",
      "queued": 24,
      "delay": 4200,
      "time": "1720185370000"
    },
    {
      "salah": "Isha", 
      "id": 4,
      "location": "Vidoši",
      "queued": 5,
      "delay": 1440,
      "time": "1718790532000"
    },
    {
      "salah": "Maghrib", 
      "id": 5,
      "location": "Ambohitseheno",
      "queued": 2,
      "delay": 4500,
      "time": "1700844123000"
    },
    {
      "salah": "Zuhr", 
      "id": 6,
      "location": "Yunlong",
      "queued": 20,
      "delay": 6180,
      "time": "1716162905000"
    },
    {
      "salah": "Zuhr", 
      "id": 7,
      "location": "Xingtai",
      "queued": 4,
      "delay": 6480,
      "time": "1698645170000"
    },
    {
      "salah": "Zuhr", 
      "id": 8,
      "location": "Beiling",
      "queued": 10,
      "delay": 6180,
      "time": "1695505387000"
    },
    {
      "salah": "Zuhr", 
      "id": 9,
      "location": "Vicuña",
      "queued": 8,
      "delay": 3480,
      "time": "1722393417000"
    },
    {
      "salah": "Zuhr", 
      "id": 10,
      "location": "Tatabánya",
      "queued": 12,
      "delay": 4860,
      "time": "1698232747000"
    },
    {
      "salah": "Zuhr", 
      "id": 11,
      "location": "Huadian",
      "queued": 9,
      "delay": 5340,
      "time": "1695019965000"
    },
    {
      "salah": "Zuhr", 
      "id": 12,
      "location": "Liperi",
      "queued": 15,
      "delay": 5400,
      "time": "1711339983000"
    },
    {
      "salah": "Zuhr", 
      "id": 13,
      "location": "Mautapaga Bawah",
      "queued": 18,
      "delay": 2700,
      "time": "1696848674000"
    },
    {
      "salah": "Zuhr", 
      "id": 14,
      "location": "Lela",
      "queued": 5,
      "delay": 6420,
      "time": "1720807530000"
    },
    {
      "salah": "Zuhr", 
      "id": 15,
      "location": "Claveria",
      "queued": 20,
      "delay": 1680,
      "time": "1705801011000"
    },
    {
      "salah": "Zuhr", 
      "id": 16,
      "location": "Zhlobin",
      "queued": 2,
      "delay": 2340,
      "time": "1700512814000"
    },
    {
      "salah": "Zuhr", 
      "id": 17,
      "location": "Bai’e",
      "queued": 17,
      "delay": 4140,
      "time": "1718996246000"
    },
    {
      "salah": "Zuhr", 
      "id": 18,
      "location": "Ronda",
      "queued": 20,
      "delay": 6240,
      "time": "1715453108000"
    },
    {
      "salah": "Zuhr", 
      "id": 19,
      "location": "Panggungsari",
      "queued": 5,
      "delay": 240,
      "time": "1709139807000"
    }
  ]

  return (
    <>
      <Stack.Screen options={{ title: 'JumaatUp' }} />
      <View className="flex-1 bg-slate-950">
        {user && <Text>Logged in, {user.id}</Text>}
        <View className='flex-row justify-center items-center mt-10 gap-10'>
          <LogoutButton/>
          <CreateCardButton/>
        </View>
        <View className='p-10'>
          <Text className='text-white text-xl font-bold text-center'>Assalam Alaikoum 👋</Text>
          <Text className='text-white text-xl mx-auto'>Which Salah Would You Like to Attend?</Text>
        </View>
        <ScrollView className='p-4 flex flex-col space-y-4'>
          {
            jumaat.map((jumaa) => (
              <JumaaIndexCard key={jumaa.id} jumaa={jumaa} />
            ))
          }
        </ScrollView>
      </View>
    </>
  );
}
