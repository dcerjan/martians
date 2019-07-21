import { User } from '../../../record/User'

export const userSelector = (state: { user: User | null }) => state.user
