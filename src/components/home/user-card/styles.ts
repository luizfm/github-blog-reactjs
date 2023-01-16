import styled from 'styled-components'

export const UserCardContainer = styled.section`
  padding: 2rem 2.5rem;
  border-radius: 0.625rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 54rem;
  background-color: ${(props) => props.theme.colors.profile};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;

  img {
    height: 9.25rem;
    width: 9.25rem;
    min-width: 9.25rem;
    border-radius: 0.5rem;
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 0.5rem;
  justify-content: flex-end;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: ${(props) => props.theme.colors.title};
      font-size: ${(props) => props.theme.typography.size.xxLarge};
    }
  }

  & > p {
    min-height: 3.25rem;
  }

  footer {
    margin-top: 1rem;
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
  }
`

export const GithubUserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;

  > svg {
    height: 1.125rem;
    width: 1.125rem;
    min-width: 1.125rem;
    fill: ${(props) => props.theme.colors.label};
  }

  > p {
    color: ${(props) => props.theme.colors.subtitle};
    align-self: flex-end;
    vertical-align: bottom;
  }
`
