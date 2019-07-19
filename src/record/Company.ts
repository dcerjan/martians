import { lens } from 'lens.ts'

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export const CompanyL = lens<Company>()
