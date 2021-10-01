import { QuickReportFilter } from "./filter"
export class QuickReportAssignment {
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
    statusJob: string
    quickReportFilters: QuickReportFilter[] = []
}