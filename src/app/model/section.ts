import { Fact } from "./fact";
import { sequence } from "@angular/animations";

export class Section {
    idSectionDisplay: ""
    uuid: string = ""
    uuidQuestionnaire: string = ""
    name: string
    sort: number
    actionRules: string
    facts: Fact[] = []
}
