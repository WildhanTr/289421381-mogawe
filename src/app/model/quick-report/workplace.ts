import { QuickReportFilter } from "./filter"
export class QuickReportWorkplace {
    uuid: string
    uuidUser: string
    name: string
    count: number
    dataSource: string
    defaultView: boolean
    sequence: number
    latitude: number
    longitude: number
    addressText: string
    radius: number
    quickReportFilters: QuickReportFilter[] = []
}