import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  padding: 2rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.colors.post};
  width: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  text-decoration: none;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.label};
  }

  header {
    display: inline-flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h2 {
      flex: 1;
      color: ${(props) => props.theme.colors.title};
      font-size: ${(props) => props.theme.typography.size.xLarge};
    }

    time {
      margin-top: 2px;
      color: ${(props) => props.theme.colors.span};
    }
  }

  p {
    word-break: break-all;
    color: ${(props) => props.theme.colors.text};

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
