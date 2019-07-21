import * as React from 'react'

import { Page } from '../../component/Page';
import { PostsList } from './PostsList';

export const Posts: React.FC<{}> = () => (
  <Page title='Martian Forum - Posts'>
    <PostsList />
  </Page>
)
