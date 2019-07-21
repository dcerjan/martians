import * as React from 'react'

import { Page } from '../../component/Page';
import { PostsList } from './PostsList';
import { User } from '../../record/User';
import { LogSelfInjectedProps, logSelf } from '../../debug/logSelf';

const permissionToView = (user: User | null) => Boolean(user)

export const PostsImpl: React.FC<{}> = () => (
  <Page
    title='Martian Forum - Posts'
    allowAccess={permissionToView}
  >
    <PostsList />
  </Page>
)

PostsImpl.displayName = 'Posts'

export const Posts: React.FC<LogSelfInjectedProps> = logSelf(PostsImpl)
