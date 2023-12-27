import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { CalenderIcon } from './svg';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const Calender = () => {
  const [isOpen, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const [value, onChange] = useState(new Date());

  return (
    <>
      <button onClick={onOpen}>
        <CalenderIcon boxSize={6} />
      </button>
      <Drawer onClose={onClose} isOpen={isOpen} size='sm'>
        <DrawerOverlay />
        <DrawerContent sx={{ backgroundColor: 'black', color: 'white' }}>
          <DrawerHeader sx={{ backgroundColor: '#171717' }}>
            Calendar
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody sx={{ padding: '10px' }}>
            <DayPicker
              className='w-full'
              mode='single'
              showOutsideDays
              selected={value}
              onSelect={(value) => (value ? onChange(value) : {})}
              //   fromDate={new Date()}
              footer={<></>}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Calender;
