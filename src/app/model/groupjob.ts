export class Groupjob {
    id:number;
    uuid: string;
    uuidSection: string;
    uuidParent: string;
    uuidProject: string
    uuidQuestionnaire: string
    uuidQuestionnaireScreening: string
    name: string
    status: string
    target = 0
    idPeriod = "0"
    description: string
    startDate: Date
    endDate: Date
    additionalInfo = []
    times = [
        {
            "day": 1,
            "hour_from": "00:00",
            "hour_to": "23:59",
        },
        {
            "day": 2,
            "hour_from": "00:00",
            "hour_to": "23:59",
        },
        {
            "day": 3,
            "hour_from": "00:00",
            "hour_to": "23:59",
        },
        {
            "day": 4,
            "hour_from": "00:00",
            "hour_to": "23:59",
        },
        {
            "day": 5,
            "hour_from": "00:00",
            "hour_to": "23:59",
        },
        {
            "day": 6,
            "hour_from": "00:00",
            "hour_to": "23:59",
        },
        {
            "day": 7,
            "hour_from": "00:00",
            "hour_to": "23:59",
        }]
    isChecked:boolean = false
    child:Groupjob[]

}