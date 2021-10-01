import { Workplace } from './workplace';

export class JobSpec {
    uuid: string;
    uuidProject: string
    uuidQuestionnaire: string
    name: string
    batchActivation: string
    description: string
    reccurence: string
    fee: string
    duration: string
    jobDuration: string
    jobTarget: number
    jobDefaultLimit: number
    startDate: string
    endDate: string
    selected: string
    isPublished: boolean = true
    batchSpecTags?: any;
    tagForm?: any;
    tagWorkplace?: any;
    elipsedTime: string
    estimatedDuration: string
    tutorial: string

}
