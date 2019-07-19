import { lens } from 'lens.ts'

import { LatLng } from './LatLng';

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: LatLng
}

export const AddressL = lens<Address>()
