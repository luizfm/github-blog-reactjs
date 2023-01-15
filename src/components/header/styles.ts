import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 4rem 1.5rem 8.375rem;
  display: flex;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.profile},
    ${(props) => props.theme.colors.blueOpacity}
  );
`

export const HeaderContent = styled.div`
  max-width: 54rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

type LinesImageEffectProps = {
  variant: 'left' | 'right'
}

export const LinesImageEffect = styled.img<LinesImageEffectProps>`
  height: ${(props) => (props.variant === 'left' ? '11.75rem' : '14.75rem')};
  width: ${(props) => (props.variant === 'left' ? '25.56rem' : '23.18rem')};
  min-width: ${(props) => (props.variant === 'left' ? '25.56rem' : '23.18rem')};
  position: absolute;

  top: ${(props) => (props.variant === 'left' ? '4rem' : '2rem')};
  left: ${(props) => props.variant === 'left' && '0'};
  right: ${(props) => props.variant === 'right' && '0'};
`
