import { Box, Button, Text } from '@chakra-ui/react';
import { CrossCircleIcon, LightBulbIcon, LockIcon } from './svg';

const VeergeAssistant = () => {
  return (
    <Button
      variant={'unstyled'}
      sx={{
        borderRadius: '70px',
        backgroundColor: '#4545FE',
        position: 'fixed',
        bottom: '6%',
        right: '1.7%',
        padding: '12px 20px',
        height: '50px',
        display: 'flex',
        gap: '7px',
        alignItems: 'center',
      }}>
      <LightBulbIcon boxSize={5} />
      <Text sx={{ color: 'white', fontSize: '20px' }}>Veerge Assistant</Text>
      <CrossCircleIcon boxSize={5} />
    </Button>
  );
};

export default VeergeAssistant;
