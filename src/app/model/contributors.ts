import { ContributorTag } from './contributorsTag'
export class Contributors {
  uuid: string
  uuidClient: string
  fullName: string
  activationCode: string
  active: boolean
  address: string
  balance: number
  balanceLatestUpdated: Date
  birthdate: number
  city: string
  createdBy: string
  createdDate: number
  edu: string
  email: string
  gender: string
  hasPassword: boolean
  id: number
  idDevice: string
  idFacebook: string
  idGmail: string
  idTwitter: string
  idUplineMogawers: string
  isTermsAgreed: boolean
  level: number
  mogawersCode: string
  new: boolean
  newPassword: string
  password: string
  phone: string
  phoneActive: boolean
  points: number
  profilePicture: string
  refCode: string
  suspended: boolean
  sync: boolean
  token: string
  updatedBy: string
  updatedDate: number
  completedJob: number
  distance: number

  latitude: number
  longitude: number
  lastSeen: Date
  icon: string
  mogawersTags: ContributorTag[] = []
  selected: string
}
