import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const LinkContainer = styled(RouterLink)`
  display: inline-flex;
  line-height: 0;
  gap: 0.5rem;
  line-height: 1.6;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blue};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  svg {
    color: ${(props) => props.theme.colors.blue};
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.blue};
  }
`
