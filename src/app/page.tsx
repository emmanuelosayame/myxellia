import Image from 'next/image';
import Header from '@/components/layout/Header';
import { Box, Text } from '@chakra-ui/react';
import handImage from '../../public/hand.png';
import SalesOverview from '@/components/SalesOverview';
import PCOverviews from '@/components/PCOverviews';
import OtherOverviews from '@/components/OtherOverviews';
import { LockIcon } from '@/components/svg';
import VeergeAssistant from '@/components/VeergeAssistant';

export default function Home() {
  return (
    <main>
      <Header />

      <Box
        sx={{
          padding: '175px 90px 0px 90px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
        <div>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Image alt='hand' src={handImage} width={29} height={29} />
            <Text sx={{ fontSize: '20px', fontWeight: 600 }}>Hi Ahmed</Text>
          </Box>
          <Text sx={{ fontSize: '13px' }}>Welcome to your Dashboard</Text>
        </div>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <SalesOverview />
          <PCOverviews />
        </Box>

        <OtherOverviews />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          marginX: 'auto',
          marginY: '15px',
          width: '100%',
          justifyContent: 'center',
        }}>
        <LockIcon boxSize={5} />
        <Text sx={{ color: '#919191', fontSize: '17px' }}>
          End-to-end encryption
        </Text>
      </Box>

      <VeergeAssistant />
    </main>
  );
}
