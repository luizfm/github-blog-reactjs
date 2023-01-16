import { api } from './api'

type FetchUserRepoIssuesProps = {
  query: string
  username?: string
  repo?: string
}

type ListUserRepoIssuesProps = Omit<FetchUserRepoIssuesProps, 'query'>

type GetIssueByNumberProps = Omit<FetchUserRepoIssuesProps, 'query'> & {
  issueNumber: number
}

export const fetchUserRepoIssues = async ({
  query,
  username = 'luizfm',
  repo = 'github-blog-reactjs',
}: FetchUserRepoIssuesProps) => {
  const formattedQuery = query.replaceAll(' ', '%20')
  const results = await api.get(
    `/search/issues?q=${formattedQuery}%20repo:${username}/${repo}`,
  )

  return results.data
}

export const loadUserInfo = async (username: string) => {
  const results = await api.get(`/users/${username}`)

  return results.data
}

export const listUserRepoIssues = async ({
  username,
  repo,
}: ListUserRepoIssuesProps) => {
  const results = await api.get(`/repos/${username}/${repo}/issues`)

  return results.data
}

export const getIssueByNumber = async ({
  issueNumber,
  username,
  repo,
}: GetIssueByNumberProps) => {
  const results = await api.get(
    `repos/${username}/${repo}/issues/${issueNumber}`,
  )

  return results.data
}
