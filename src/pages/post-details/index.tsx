import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

import PostHeaderCard from '../../components/post-details/post-header-card'
import { getIssueByNumber } from '../../services/github'
import { MarkdownContainer, PostDetailsContainer } from './styles'

type UserIssuer = {
  login: string
}

type GetIssueByNumberResponse = {
  body: string
  html_url: string
  comments: number
  created_at: string
  title: string
  user: UserIssuer
}

export function PostDetails() {
  const { issueNumber } = useParams()
  const [issue, setIssue] = useState<GetIssueByNumberResponse | null>(null)

  const getIssueInfo = useCallback(async () => {
    setIssue(
      await getIssueByNumber({
        issueNumber: Number(issueNumber),
        username: import.meta.env.VITE_GITHUB_USERNAME,
        repo: import.meta.env.VITE_GITHUB_REPO,
      }),
    )
  }, [issueNumber])

  useEffect(() => {
    if (!issue) {
      getIssueInfo()
    }
  })

  return (
    <PostDetailsContainer>
      {issue && (
        <>
          <PostHeaderCard
            title={issue.title}
            comments={issue.comments}
            url={issue.html_url}
            user={issue.user}
            createdAt={issue.created_at}
          />
          <MarkdownContainer remarkPlugins={[remarkGfm]}>
            {issue.body}
          </MarkdownContainer>
        </>
      )}
    </PostDetailsContainer>
  )
}

export default PostDetails
