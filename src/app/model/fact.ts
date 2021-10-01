import { Item } from './item';
import { FactPoll } from './fact-poll';

export class Fact {
    uuid: string;

    idFactDisplay: string;
    idSectionDisplay: string;
    idQuestionnaire:string;
    uuidQuestionnaire:string;
    uuidFactType: string;
    uuidSection: string;

    idDisplay:string;
    label: string;
    factName: string;
    reference: string;
    hintName: string;
    actionRules:string;
    allowResponse:string;
    value:string = '';
    minValue:string;
    maxValue:string;
    minDate:Date;
    maxDate:Date;
    minDateISO8601:any;
    maxDateISO8601:any;
    selectionValidate:string;
    stepValue:string;
    sequence:number;
    videoUrl:string;
    videoToggle:boolean = false;
    pictureUrl:string;
    pictureToggle:boolean = false;
    isMandatory:boolean = true;
    isVisible:boolean = true
    
    factType: string;
    factTypeDescription: string;

    sectionName:string;
    
    isShareable = true;

    items: Item[] = [];
    valueArray:any[] = [];
    pollings: FactPoll[] = [];

    indexValue = -1;
    indexItem = -1;
}
