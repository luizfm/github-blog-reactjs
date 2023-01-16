import { forwardRef, InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface BaseInput {
  id: string
  label: string
  className?: string
}

type InputProps = BaseInput & InputHTMLAttributes<HTMLInputElement>

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, className, ...rest }, ref) => {
    return (
      <InputContainer className={className}>
        <label htmlFor={id}></label>
        <input id={id} {...rest} />
      </InputContainer>
    )
  },
)

export default Input
