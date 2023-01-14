import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'
import { LinkContainer } from './styles'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface LinkProps {
  to: string
  children: ReactNode
}

export function Link({ to, children }: LinkProps) {
  return (
    <LinkContainer to={to}>
      {children}
      <span>
        <FontAwesomeIcon icon={solid('arrow-up-right-from-square')} />
      </span>
    </LinkContainer>
  )
}

export default Link
