import React, { ReactNode } from 'react'

import { ExternalLinkContainer, LinkContainer } from './styles'
interface LinkProps {
  to: string
  children: ReactNode
  isExternal?: boolean
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
}

export function Link({
  to,
  children,
  startAdornment,
  endAdornment,
  isExternal,
}: LinkProps) {
  if (isExternal) {
    return (
      <ExternalLinkContainer href={to} target="_blank">
        {startAdornment && <span>{startAdornment}</span>}
        {children}
        {endAdornment && <span>{endAdornment}</span>}
      </ExternalLinkContainer>
    )
  }

  return (
    <LinkContainer to={to}>
      {startAdornment && <span>{startAdornment}</span>}
      {children}
      {endAdornment && <span>{endAdornment}</span>}
    </LinkContainer>
  )
}

export default Link
