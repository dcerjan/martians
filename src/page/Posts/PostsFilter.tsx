import * as React from 'react'
import { Input } from '../../component/Field/Input/Input';

import * as styles from './PostsFilter.module.css'

interface PostsFilterPublicProps {
  filterValue: string
  onFilterChange: (event: React.SyntheticEvent<HTMLInputElement>) => void
}

const noop = () => {}

export const PostsFilter: React.FC<PostsFilterPublicProps> = ({ filterValue, onFilterChange }) => (
  <div className={styles.PostsFilter}>
    <Input
      label='Search by author'
      placeholder='author'
      input={{
        name: 'postsFilter',
        value: filterValue,
        onChange: onFilterChange,
        onBlur: noop,
        onFocus: noop,
      }}
      meta={{
      }}
    />
  </div>
)
