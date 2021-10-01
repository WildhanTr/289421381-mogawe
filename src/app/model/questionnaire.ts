import { Section } from "./section";

export class Questionnaire {

     name: string
     pageCount: number = 0
     status: boolean = false
     usedFor: string = ""
     uuidProject:string
     uuid:string
     sections: Section[] = []

}
