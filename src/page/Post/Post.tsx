import * as React from 'react'

import { Page } from '../../component/Page';
import { ViewPost } from './ViewPost';
import { User } from '../../record/User';
import { LogSelfInjectedProps, logSelf } from '../../debug/logSelf';

const permissionToView = (user: User | null) => Boolean(user)

export const PostImpl: React.FC<{}> = () => (
  <Page
    title='Martian Forum - Viewing Post'
    allowAccess={permissionToView}
  >
    <ViewPost />
  </Page>
)

PostImpl.displayName = 'Post'


export const Post: React.FC<LogSelfInjectedProps> = logSelf(PostImpl)
