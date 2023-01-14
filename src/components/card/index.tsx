import { formatDistanceToNow } from 'date-fns'
import ptBRLocale from 'date-fns/locale/pt-BR'
import { CardContainer } from './styles'

interface CardProps {
  id: string
  title: string
  updatedAt: string
  resume: string
}

export function Card({ title, updatedAt, id, resume }: CardProps) {
  return (
    <CardContainer to={`/post/${id}`}>
      <header>
        <h2>{title}</h2>
        <time dateTime={updatedAt}>
          {formatDistanceToNow(new Date(updatedAt), {
            addSuffix: true,
            locale: ptBRLocale,
          })}
        </time>
      </header>
      <p>{resume}</p>
    </CardContainer>
  )
}

export default Card
