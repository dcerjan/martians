import * as React from 'react'

import { Page } from '../../component/Page';
import { PostsList } from './PostsList';
import { User } from '../../record/User';

const permissionToView = (user: User | null) => Boolean(user)

export const Posts: React.FC<{}> = () => (
  <Page
    title='Martian Forum - Posts'
    allowAccess={permissionToView}
  >
    <PostsList />
  </Page>
)
