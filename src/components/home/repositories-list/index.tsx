import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

import Card, { CardProps } from '../../card'
import Input from '../../input'
import {
  RepositoriesListContainer,
  RepositoriesListContent,
  SearchRepositoryContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import usePrevious from '../../hooks/usePrevious'
import { fetchUserRepoIssues } from '../../../services/github'

type CardPropsResponse = Omit<CardProps, 'updatedAt'> & {
  updated_at: string
  body: string
  id: number
}

interface RepositoriesListProps {
  initialList: CardPropsResponse[]
}

export function RepositoriesList({ initialList }: RepositoriesListProps) {
  const [search, setSearch] = useState()
  const previousSearchValue = usePrevious(search)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ mode: 'onSubmit' })
  const [repoIssuesList, setRepoIssuesList] =
    useState<CardPropsResponse[]>(initialList)

  const onSubmit = handleSubmit((formData) => {
    console.log(formData)
  })

  const { onChange, ...restSearchProps } = register('search')

  const debounceSearch = debounce((value) => setSearch(value), 300)

  const handleOnLiveSearch = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target

      debounceSearch(value)
      onChange(event)
    },
    [debounceSearch, onChange],
  )

  const updateRepoIssuesList = useCallback(async () => {
    const results = await fetchUserRepoIssues({ query: search })
    setRepoIssuesList(results)
  }, [search])

  useEffect(() => {
    if (!isSubmitting && previousSearchValue !== search) {
      updateRepoIssuesList()
    }
  }, [isSubmitting, previousSearchValue, search, updateRepoIssuesList])

  useEffect(() => {
    setRepoIssuesList(initialList)
  }, [initialList])

  console.log(repoIssuesList, initialList)

  return (
    <RepositoriesListContainer>
      <SearchRepositoryContainer onSubmit={onSubmit}>
        <div>
          <h2>Posts</h2>
          <p>
            {repoIssuesList.length} Post{repoIssuesList.length > 1 ? 's' : ''}
          </p>
        </div>
        <Input
          id="search-post-input"
          label="Search post"
          placeholder="Search post"
          onChange={handleOnLiveSearch}
          {...restSearchProps}
        />
      </SearchRepositoryContainer>
      {repoIssuesList?.length > 0 && (
        <RepositoriesListContent>
          {repoIssuesList.map((repo) => (
            <li key={repo.id}>
              <Card
                number={repo.number}
                title={repo.title}
                resume={repo.body}
                updatedAt={repo.updated_at}
              />
            </li>
          ))}
        </RepositoriesListContent>
      )}
    </RepositoriesListContainer>
  )
}

export default RepositoriesList
