import { Link, Text } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  href: string;
  name: string;
  children: ReactNode;
};

const NavLink = ({ href, name, children }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      sx={{
        borderRadius: '8px',
        backgroundColor: active ? '#F5F5F5' : '',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '170px',
        height: '45px',
        gap: '5px',
      }}>
      {children}
      <Text sx={{ fontSize: '16px' }}>{name}</Text>
    </Link>
  );
};

export default NavLink;
