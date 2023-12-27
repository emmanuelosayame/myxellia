/* theme.ts */
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  component: {
    Button: {
      baseStyle: {
        fontSize: '14px',
        fontWeight: '500',
        // Normally, it is "semibold"
      },
    },
  },
});
