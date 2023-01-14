import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface BaseInput {
  id: string
  label: string
  className?: string
}

type InputProps = BaseInput & InputHTMLAttributes<HTMLInputElement>

export function Input({ id, className, ...rest }: InputProps) {
  return (
    <InputContainer className={className}>
      <label htmlFor={id}></label>
      <input id={id} {...rest} />
    </InputContainer>
  )
}

export default Input
