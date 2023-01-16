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
  font-size: ${(props) => props.theme.typography.size.xSmall};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding: 0.25rem;

  > span {
    margin-top: 0.25rem;
  }

  svg {
    margin-top: -2px;
    height: 0.75rem;
    width: 0.75rem;
    min-width: 0.75rem;
    fill: ${(props) => props.theme.colors.blue};
    line-height: 0;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.blue};
  }
`

export const ExternalLinkContainer = styled.a`
  display: inline-flex;
  line-height: 0;
  gap: 0.5rem;
  line-height: 1.6;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blue};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  font-size: ${(props) => props.theme.typography.size.xSmall};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding: 0.25rem;

  > span {
    margin-top: 0.25rem;
  }

  svg {
    margin-top: -2px;
    height: 0.75rem;
    width: 0.75rem;
    min-width: 0.75rem;
    fill: ${(props) => props.theme.colors.blue};
    line-height: 0;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.blue};
  }
`
