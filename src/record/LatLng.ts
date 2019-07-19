import { lens } from 'lens.ts'

export interface LatLng {
  lat: string
  lng: string
}

export const LatLngL = lens<LatLng>()

