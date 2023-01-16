import styled from 'styled-components'

export const PostHeaderCardContainer = styled.section`
  padding: 2rem;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  max-width: 54rem;
  margin: -6rem auto 0;
  background-color: ${(props) => props.theme.colors.profile};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.colors.title};
    font-size: ${(props) => props.theme.typography.size.xxLarge};
    font-weight: ${(props) => props.theme.typography.weight.bold};
  }
`

export const IssueDetailsContainer = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: center;

  div {
    display: flex;
    column-gap: 0.5rem;
    align-items: center;
    justify-content: center;

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
  }
`
