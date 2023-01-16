import styled from 'styled-components'

export const RepositoriesListContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  max-width: 54rem;
  margin: 0 auto;
  padding-bottom: 5rem;
`

export const SearchRepositoryContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${(props) => props.theme.colors.subtitle};
      font-size: ${(props) => props.theme.typography.size.large};
    }

    p {
      display: inline;
      color: ${(props) => props.theme.colors.span};
      font-size: ${(props) => props.theme.typography.size.small};
    }
  }
`

export const RepositoriesListContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  li {
    list-style: none;
  }
`
