import styled from 'styled-components'

export const InputContainer = styled.div`
  label {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  input {
    padding: 0.75rem 1rem;
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid ${(props) => props.theme.colors.border};
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.input};

    &::placeholder {
      color: ${(props) => props.theme.colors.label};
    }
  }
`
