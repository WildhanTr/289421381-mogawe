export class instantJobSpec {
    name: string
    startDate: string
    endDate: string
    timeFrom: number
    timeTo: number
    isPublished: boolean = true
    uuidProject: string
    description: string
    fee: number
    jobDuration: number
    targetParticipants:number
    jobTarget: number
    jobDefaultLimit: number
    tutorial: string
    iconUrl:string
    isInstantGawean: boolean = true
    certificates: [
        {
            uuid: string
        }
    ]
    locationTags: []
    questionnaires: any
    jobTagGenerate: boolean
}