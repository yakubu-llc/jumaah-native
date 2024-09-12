import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native'

import { Text } from '@/components/ui/text';
import { JumaaIndexCard } from '@/components/jumaa/jumaa-index-card';
import { useMusalahServiceGetMusalahById } from '@/lib/sdk/queries';
import { useAuth } from '@/components/providers/auth-provider';
import { LogoutButton } from '@/components/auth/logout-button';

export default function Home() {
  const { user } = useAuth()

  const jumaat = [
    {
      "id": 1,
      "location": "Shoushan",
      "queued": 21,
      "delay": 2400,
      "time": "1702849871000"
    },
    {
      "id": 2,
      "location": "Sabangan",
      "queued": 6,
      "delay": 1560,
      "time": "1715864810000"
    },
    {
      "id": 3,
      "location": "Malibong East",
      "queued": 24,
      "delay": 4200,
      "time": "1720185370000"
    },
    {
      "id": 4,
      "location": "Vidoši",
      "queued": 5,
      "delay": 1440,
      "time": "1718790532000"
    },
    {
      "id": 5,
      "location": "Ambohitseheno",
      "queued": 2,
      "delay": 4500,
      "time": "1700844123000"
    },
    {
      "id": 6,
      "location": "Yunlong",
      "queued": 20,
      "delay": 6180,
      "time": "1716162905000"
    },
    {
      "id": 7,
      "location": "Xingtai",
      "queued": 4,
      "delay": 6480,
      "time": "1698645170000"
    },
    {
      "id": 8,
      "location": "Beiling",
      "queued": 10,
      "delay": 6180,
      "time": "1695505387000"
    },
    {
      "id": 9,
      "location": "Vicuña",
      "queued": 8,
      "delay": 3480,
      "time": "1722393417000"
    },
    {
      "id": 10,
      "location": "Tatabánya",
      "queued": 12,
      "delay": 4860,
      "time": "1698232747000"
    },
    {
      "id": 11,
      "location": "Huadian",
      "queued": 9,
      "delay": 5340,
      "time": "1695019965000"
    },
    {
      "id": 12,
      "location": "Liperi",
      "queued": 15,
      "delay": 5400,
      "time": "1711339983000"
    },
    {
      "id": 13,
      "location": "Mautapaga Bawah",
      "queued": 18,
      "delay": 2700,
      "time": "1696848674000"
    },
    {
      "id": 14,
      "location": "Lela",
      "queued": 5,
      "delay": 6420,
      "time": "1720807530000"
    },
    {
      "id": 15,
      "location": "Claveria",
      "queued": 20,
      "delay": 1680,
      "time": "1705801011000"
    },
    {
      "id": 16,
      "location": "Zhlobin",
      "queued": 2,
      "delay": 2340,
      "time": "1700512814000"
    },
    {
      "id": 17,
      "location": "Bai’e",
      "queued": 17,
      "delay": 4140,
      "time": "1718996246000"
    },
    {
      "id": 18,
      "location": "Ronda",
      "queued": 20,
      "delay": 6240,
      "time": "1715453108000"
    },
    {
      "id": 19,
      "location": "Panggungsari",
      "queued": 5,
      "delay": 240,
      "time": "1709139807000"
    }
  ]

  return (
    <>
      <Stack.Screen options={{ title: 'Jumaat' }} />
      <View className="flex-1">
        {user && <Text>Logged in, {user.id}</Text>}
        <LogoutButton />
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
