import { createGlobalStyle } from 'styled-components';
import * as theme from './Theme.styled';
export const GlobalStyles = createGlobalStyle`
// theme buttons color


.light {
  background-color: ${({ theme }) => theme.colors.header};
}
.dark {
  background-color:${({ theme }) => theme.colors.header};
}
.blue {
  background-color: ${({ theme }) => theme.colors.header};
}
.green {
  background-color: ${({ theme }) => theme.colors.header};
}
.brown {
  background-color: ${({ theme }) => theme.colors.header};
}
.pink {
  background-color: ${({ theme }) => theme.colors.header};
}

// active theme
.active{
    border: 3px solid ${theme.green.colors.header};
    }

`;
