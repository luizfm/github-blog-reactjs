import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const PostDetailsContainer = styled.div`
  min-height: 100vh;
`

export const MarkdownContainer = styled(ReactMarkdown)`
  padding: 2.5rem 2rem;
  max-width: 54rem;
  width: 100%;
  margin: 0 auto;
  line-height: 1.6rem;

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1rem;
  }

  a {
    color: ${(props) => props.theme.colors.blue};
  }

  img,
  image {
    margin: 1rem 0;
    border-radius: 0.375rem;
    width: 100%;
    max-width: 54rem;
    object-fit: cover;
  }
`
