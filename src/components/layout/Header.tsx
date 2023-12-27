'use client';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import {
  Calender1Icon,
  HomeIcon,
  LocationIcon,
  NotificationIcon,
  PlusSvg,
  ProfileIcon,
  SearchIcon,
  SettingsIcon,
  TriangleUpIcon,
  UserSvg,
  WalletIcon,
} from '../svg';
import Calender from '../Calender';
import NavLink from './NavLink';

const links = [
  { name: 'Dashboard', href: '/', icon: <HomeIcon boxSize={30} /> },
  { name: 'Listings', href: '/listings', icon: <LocationIcon boxSize={30} /> },
  { name: 'Users', href: '/users', icon: <ProfileIcon boxSize={30} /> },
  { name: 'Account', href: '/account', icon: <WalletIcon boxSize={30} /> },
  { name: 'Request', href: '/request', icon: <Calender1Icon boxSize={30} /> },
  { name: 'Settings', href: '/settings', icon: <SettingsIcon boxSize={30} /> },
];

const Header = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        insetX: '0',
        top: '0',
        width: '100%',
        zIndex: 70,
        boxShadow: 'md',
      }}>
      <Box
        sx={{
          backgroundColor: 'black',
          padding: '10px 90px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <Box>
          <Image alt='logo' src={logo} width={119} height={35} />
          <Text sx={{ fontSize: '14px', color: 'white' }}>For Mainstone</Text>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyItems: 'space-between',
            gap: '25px',
            alignItems: 'center',
          }}>
          <PlusSvg boxSize={6} />
          <Calender />
          <NotificationIcon boxSize={6} />

          <Avatar />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: 'white',
          padding: '10px 90px',
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
        }}>
        {links.map((link) => (
          <NavLink key={link.name} href={link.href} name={link.name}>
            {link.icon}
          </NavLink>
        ))}

        <InputGroup sx={{ flex: '1' }}>
          <Input
            type='text'
            placeholder='Search... properties, customers here'
            sx={{
              backgroundColor: '#F5F5F5',
              borderRadius: '12px',
              padding: '22px 16px',
              _placeholder: { fontSize: '12px' },
            }}
          />
          <InputRightElement sx={{ height: '100%', marginRight: '5px' }}>
            <SearchIcon boxSize={30} />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Header;

const Avatar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '13px',
        alignItems: 'center',
        marginLeft: '15px',
      }}>
      <UserSvg boxSize={42} />
      <Text sx={{ color: 'white', fontSize: '' }}>Ahmed Ali</Text>
      <TriangleUpIcon boxSize={7} />
    </Box>
  );
};
