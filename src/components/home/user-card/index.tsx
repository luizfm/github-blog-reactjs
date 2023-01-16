import Link from '../../link'

import { ReactComponent as GithubIcon } from '../../../assets/github.svg'
import { ReactComponent as BuildingIcon } from '../../../assets/building.svg'
import { ReactComponent as UserGroupIcon } from '../../../assets/user-group.svg'
import { ReactComponent as ExternalLinkIcon } from '../../../assets/external-link.svg'

import {
  UserCardContainer,
  UserInfoContainer,
  GithubUserInfoContainer,
} from './styles'

type UserProps = {
  name: string
  resume: string
  avatarUrl: string
}

type GithubUserDetailsProps = {
  username: string
  company: string
  followers: number
  profileUrl: string
}

export interface UserCardProps {
  user: UserProps
  githubUserDetails: GithubUserDetailsProps
}

export function UserCard({ user, githubUserDetails }: UserCardProps) {
  return (
    <UserCardContainer>
      <img src={user.avatarUrl} alt={`${user.name} github avatar`} />
      <UserInfoContainer>
        <header>
          <strong>{user.name}</strong>
          <Link
            to={githubUserDetails.profileUrl}
            isExternal
            endAdornment={<ExternalLinkIcon />}
          >
            Github
          </Link>
        </header>
        <p>{user.resume}</p>
        <footer>
          <GithubUserInfoContainer>
            <GithubIcon />
            <p>{githubUserDetails.username}</p>
          </GithubUserInfoContainer>
          <GithubUserInfoContainer>
            <BuildingIcon />
            <p>{githubUserDetails.company}</p>
          </GithubUserInfoContainer>
          <GithubUserInfoContainer>
            <UserGroupIcon />
            <p>
              {githubUserDetails.followers} follower
              {githubUserDetails.followers > 1 ? 's' : ''}
            </p>
          </GithubUserInfoContainer>
        </footer>
      </UserInfoContainer>
    </UserCardContainer>
  )
}

export default UserCard
