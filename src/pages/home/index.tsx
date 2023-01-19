import { useCallback, useEffect, useState } from 'react'
import { CardProps } from '../../components/card'
import RepositoriesList from '../../components/home/repositories-list'
import UserCard, { UserCardProps } from '../../components/home/user-card'
import { fetchUserRepoIssues, loadUserInfo } from '../../services/github'
import { HomeContainer } from './styles'

type CardPropsResponse = Omit<CardProps, 'updatedAt'> & {
  updated_at: string
  body: string
  id: number
}

export function Home() {
  const [userInfo, setUserInfo] = useState<UserCardProps | null>()
  const [issuesList, setIssuesList] = useState<CardPropsResponse[]>([])

  const updateUserInfo = useCallback(async () => {
    const userData = await loadUserInfo(import.meta.env.VITE_GITHUB_USERNAME)
    setUserInfo({
      user: {
        avatarUrl: userData.avatar_url,
        name: userData.name,
        resume: userData.bio,
      },
      githubUserDetails: {
        company: userData.company,
        followers: userData.followers,
        username: userData.login,
        profileUrl: userData.html_url,
      },
    })
  }, [])

  useEffect(() => {
    updateUserInfo()
  }, [updateUserInfo])

  const fetchIssues = useCallback(async () => {
    setIssuesList(
      await fetchUserRepoIssues({
        query: '',
        username: import.meta.env.VITE_GITHUB_USERNAME,
        repo: import.meta.env.VITE_GITHUB_REPO,
      }),
    )
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <HomeContainer>
      {userInfo && (
        <UserCard
          user={userInfo?.user}
          githubUserDetails={userInfo?.githubUserDetails}
        />
      )}
      <RepositoriesList initialList={issuesList} />
    </HomeContainer>
  )
}

export default Home
