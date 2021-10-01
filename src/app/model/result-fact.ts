import { ResultFactImage } from "./result-fact-image";
export class ResultFact {
    uuid: string
    uuidLogicCheck: string
    uuidSection: string
    uuidResult: string
    uuidMediaReference: string
    uuidFact: string
    uuidItem: string    
    uuidFactType: string
    sectionName: string
    itemName: string
    value: string
    notes: string
    createdDate: string
    sequence: string
    label: string
    inputDate: string

    minValue:number
    maxValue:number
    stepValue:number
    selectionValues:string[] = []

    images: ResultFactImage[]
    toggleUpdate:boolean = false
    isButtonUpdateDisabled:boolean = false

    isAdditionalImageLoading:boolean = false
}
