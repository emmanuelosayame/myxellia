import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { ChevronRightIcon, PlaceHolderSvg } from './svg';

const OtherOverviews = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
      }}>
      <ListingOverView />
      <Component
        mainValue={0}
        value={0}
        subHeading='Total Outstanding Balance'
        subHeading2='Outstanding Balance'
        viewAll
      />
      <Component
        mainValue={0}
        value={0}
        subHeading='Total Sold'
        subHeading2='Whole units sold'
        heading='Top Selling'
      />
    </Box>
  );
};

const ListingOverView = () => {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: '20px',
        boxShadow: 'md',
        padding: '20px',
      }}>
      <Heading sx={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px' }}>
        Listing Overview
      </Heading>
      <Box sx={{ display: 'flex', gap: '30px', marginBottom: '10px' }}>
        <Card1 borderColor='#12D8A0' text='None' />
        <Card1 borderColor='#4545FE' text='None' />
      </Box>
      <Card1 borderColor='#FF9103' text='None' />
    </Box>
  );
};

const Card1 = ({
  borderColor,
  text,
}: {
  borderColor: string;
  text: string;
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Text
        sx={{
          fontSize: '12px',
          borderBottom: '1px solid #E4E4E4',
          marginBottom: '10px',
        }}>
        Most viewed
      </Text>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Box
          sx={{
            border: '1px',
            borderColor,
            borderRadius: '12px',
            padding: '10px',
            backgroundColor: '#F5F5F5',
          }}>
          <PlaceHolderSvg boxSize={50} />
        </Box>
        <Text sx={{ fontWeight: 600 }}>{text}</Text>
      </Box>
    </Box>
  );
};

type ComponentProps = {
  viewAll?: boolean;
  heading?: string;
  value: number;
  mainValue: number;
  subHeading: string;
  subHeading2: string;
};

const Component = ({
  viewAll = false,
  heading,
  mainValue,
  value,
  subHeading,
  subHeading2,
}: ComponentProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: '20px',
        boxShadow: 'md',
        padding: '20px 25px',
      }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Heading
          sx={{ fontSize: '16px', color: '#12D8A0', marginBottom: '5px' }}>
          {heading}
        </Heading>
        {viewAll && (
          <Button
            variant={'unstyled'}
            sx={{ color: '#CBCBCB', fontSize: '14px' }}>
            <span>View all</span>
            <ChevronRightIcon />
          </Button>
        )}
      </Box>
      <Heading>
        ₦{mainValue}
        <span style={{ color: '#CBCBCB' }}>.00</span>
      </Heading>
      <Text sx={{ fontSize: '14px' }}>{subHeading}</Text>

      <Box sx={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
        <Box
          sx={{
            borderRadius: '12px',
            padding: '30px',
            backgroundColor: '#F5F5F5',
          }}>
          <PlaceHolderSvg boxSize={20} />
        </Box>
        <Box
          sx={{
            display: 'flex ',
            flexDirection: 'column',
          }}>
          <Text sx={{ fontWeight: 600, fontSize: '20px' }}>None</Text>
          <Box sx={{ marginTop: '20px' }}>
            <Text sx={{ color: heading ? '#CBCBCB' : '#FF6A6A' }}>
              {heading ? '0' : '₦ 0.00'}
            </Text>
            <Text sx={{ fontSize: '12px' }}>{subHeading2}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OtherOverviews;
