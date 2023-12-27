import { Box, Button, Grid, Heading, Text } from '@chakra-ui/react';
import { ChevronRightIcon, Profile2Icon, PropertyIcon } from './svg';

const PCOverviews = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '40%',
      }}>
      <PropertyOverview />
      <CustomersOverview />
    </Box>
  );
};

const PropertyOverview = () => {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: '20px',
        boxShadow: 'md',
        padding: '20px',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px',
        }}>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <PropertyIcon boxSize={19} />
          <Text sx={{ fontSize: '14px', fontWeight: 600 }}>
            Property Overview
          </Text>
        </Box>
        <Button
          variant={'unstyled'}
          sx={{ color: '#CBCBCB', fontSize: '14px' }}>
          <span>View all</span>
          <ChevronRightIcon />
        </Button>
      </Box>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <Card name='Total' value={0} />
        <Card name='Available' value={0} />
        <Card name='Sold Out' value={0} />
      </Grid>
    </Box>
  );
};

const CustomersOverview = () => {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: '20px',
        boxShadow: 'md',
        padding: '20px',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px',
        }}>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Profile2Icon boxSize={19} />
          <Text sx={{ fontSize: '14px', fontWeight: 600 }}>
            Customers Overview
          </Text>
        </Box>
        <Button
          variant={'unstyled'}
          sx={{ color: '#CBCBCB', fontSize: '14px' }}>
          <span>View all</span>
          <ChevronRightIcon />
        </Button>
      </Box>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        <Card name='Total' value={0} />
        <Card name='Available' value={0} />
        <Card name='Total' value={0} />
        <Card name='Available' value={0} />
      </Grid>
    </Box>
  );
};

type CardProps = {
  name: string;
  value: number;
};

const Card = ({ name, value }: CardProps) => {
  return (
    <Box
      sx={{
        border: '1px solid #E4E4E4',
        borderRadius: '12px',
        padding: '20px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Heading>{value}</Heading>
      <Text sx={{ color: '#606060' }}>{name}</Text>
    </Box>
  );
};

export default PCOverviews;
