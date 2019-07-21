import * as React from 'react'

import { Page } from '../../component/Page';
import { ViewPost } from './ViewPost';
import { User } from '../../record/User';

const permissionToView = (user: User | null) => Boolean(user)

export const Post: React.FC<{}> = () => (
  <Page
    title='Martian Forum - Viewing Post'
    allowAccess={permissionToView}
  >
    <ViewPost />
  </Page>
)
