import { Box, Button, Grid, Heading, Text } from '@chakra-ui/react';
import { InSVg, OutSVg } from './svg';

const SalesOverview = () => {
  return (
    <Box
      sx={{
        width: '60%',
        borderRadius: '20px',
        boxShadow: 'md',
        padding: '20px',
      }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ marginTop: '10px' }}>
          <Heading sx={{ fontSize: '20px', fontWeight: 600 }}>
            Sales Overview
          </Heading>
          <Text sx={{ fontSize: '12px', fontWeight: 400, marginTop: '8px' }}>
            Showing overview Jan 2022 - Sep 2022
          </Text>
        </Box>

        <Button
          variant={'unstyled'}
          sx={{
            border: '1px solid #CBCBCB',
            borderRadius: '10px',
            padding: '0 20px',
            fontWeight: '500',
            fontSize: '14px',
            color: '#CBCBCB',
          }}>
          View Transactions
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '30px',
          borderBottom: '1px solid #E4E4E4',
          paddingBottom: '15px',
          marginTop: '20px',
        }}>
        <Button
          variant={'unstyled'}
          sx={{ fontsize: '14px', fontWeight: '500' }}>
          1 Week
        </Button>
        <Button
          variant={'unstyled'}
          sx={{ fontsize: '14px', fontWeight: '500' }}>
          1 Month
        </Button>
        <Button
          sx={{
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
            fontsize: '14px',
            fontWeight: '500',
          }}>
          1 Year
        </Button>
      </Box>

      <Box sx={{ display: 'flex', padding: '10px', marginTop: '10px' }}>
        <Box sx={{ width: '50%' }}></Box>
        <Grid templateColumns='repeat(2, 1fr)' gap={6} width={'50%'}>
          <Card color='#4545FE' name='Balance' type='in' value={0} />
          <Card color='#12D8A0' name='Deposit' type='in' value={0} />
          <Card color='#191919' name='Purchase' type='in' value={0} />
          <Card color='#FF6A6A' name='Withdrawal' type='out' value={0} />
        </Grid>
      </Box>
    </Box>
  );
};

type CardProps = {
  value: number;
  name: string;
  type: 'in' | 'out';
  color: string;
};

const Card = ({ name, value, type, color }: CardProps) => {
  return (
    <Box
      sx={{
        border: '1px solid #E4E4E4',
        borderRadius: '12px',
        padding: '17px 20px',
      }}>
      <Heading sx={{ color, fontSize: '20px' }}>
        ₦{value}
        <span style={{ color: color === '#191919' ? '#CBCBCB' : '' }}>.00</span>
      </Heading>
      <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <Text sx={{ fontSize: '13px', fontWeight: '500', marginRight: '10px' }}>
          {name}
        </Text>
        {type === 'in' ? <InSVg boxSize={30} /> : <OutSVg boxSize={30} />}
        <Text sx={{ color: type === 'in' ? '#12D8A0' : '#FF6A6A' }}>0%</Text>
      </Box>
    </Box>
  );
};

export default SalesOverview;
