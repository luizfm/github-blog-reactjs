import { formatDistanceToNow } from 'date-fns'
import ptBRLocale from 'date-fns/locale/pt-BR'

import Link from '../../link'
import { ReactComponent as GithubIcon } from '../../../assets/github.svg'
import { ReactComponent as CalendarIcon } from '../../../assets/calendar.svg'
import { ReactComponent as CommentIcon } from '../../../assets/comment.svg'
import { ReactComponent as ExternalLinkIcon } from '../../../assets/external-link.svg'
import { ReactComponent as ChevronLeftIcon } from '../../../assets/chevron-left.svg'

import { IssueDetailsContainer, PostHeaderCardContainer } from './styles'

type UserIssuer = {
  login: string
}

type PostHeaderCardProps = {
  url: string
  comments: number
  createdAt: string
  title: string
  user: UserIssuer
}

export function PostHeaderCard({
  url,
  comments,
  createdAt,
  title,
  user,
}: PostHeaderCardProps) {
  console.log('aqui dentro', user)
  return (
    <PostHeaderCardContainer>
      <header>
        <Link to="/" startAdornment={<ChevronLeftIcon />}>
          Back
        </Link>
        <Link to={url} endAdornment={<ExternalLinkIcon />} isExternal>
          See on github
        </Link>
      </header>
      <h1>{title}</h1>
      <IssueDetailsContainer>
        <div>
          <GithubIcon />
          <p>{user?.login}</p>
        </div>
        <div>
          <CalendarIcon />
          <time>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBRLocale,
            })}
          </time>
        </div>
        <div>
          <CommentIcon />
          <p>
            {comments} comentário{comments > 1 ? 's' : ''}
          </p>
        </div>
      </IssueDetailsContainer>
    </PostHeaderCardContainer>
  )
}

export default PostHeaderCard
