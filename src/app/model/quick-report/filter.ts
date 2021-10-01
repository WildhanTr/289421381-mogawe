export class QuickReportFilter {
    id: number
    type: string
    group: number
    data: [{
        id: number,
        lastBehaviour: string,
        status: string,
        type: string,
        uuidProperty: string,
        propertyType: string,
        operator: string,
        value: []
    }]
}