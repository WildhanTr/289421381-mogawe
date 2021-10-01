import { ResultFact } from "./result-fact";

export class Result {
    resultId:string
    uuid: string
    createdDate: string
    jobName: string
    jobId: string
    location: string
    batch: string
    mogawersCode: string
    fullName: string
    email: string
    phone: string
    statusQc: string
    statusAutoQc: string
    statusClose: string
    status:string
    latitude:number
    longitude:number
    notes:string
    timeDuration:number
    resultFacts: ResultFact[] = []
    resultTags:any[] = []
    actionMessage = ""
    isLoading = false
    uuidJob: string
    uuidMogawers: string
    uuidTaskOrder: string
}
