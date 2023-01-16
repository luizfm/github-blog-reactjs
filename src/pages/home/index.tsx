import { useCallback, useEffect, useState } from 'react'
import RepositoriesList from '../../components/home/repositories-list'
import UserCard, { UserCardProps } from '../../components/home/user-card'
import { loadUserInfo } from '../../services/github'
import { HomeContainer } from './styles'

export function Home() {
  const [userInfo, setUserInfo] = useState<UserCardProps | null>()

  const updateUserInfo = useCallback(async () => {
    const userData = await loadUserInfo('luizfm')
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

  console.log(userInfo)

  return (
    <HomeContainer>
      {userInfo && (
        <UserCard
          user={userInfo?.user}
          githubUserDetails={userInfo?.githubUserDetails}
        />
      )}
      <RepositoriesList />
    </HomeContainer>
  )
}

export default Home
