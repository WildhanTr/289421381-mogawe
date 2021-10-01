export class ResultFactImage {
    uuid: string
    uuidResultFact: string
    value: string
    createdDate: string

    idJob:number;
    jobName:string;
    statusQc: string;
    url:string;

    isSaveDisabled:boolean;

    isUpdateEnabled:boolean = true;
    isUpdateHide:boolean = true;
    isUploading:boolean = false;
}
