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


export class GalleryFormQuestionnaire {
  public uuid: string = '';
  public uuidQuestionnaire: string = '';
  public questionnaireName: string = '';
  public iconUrl: string = '';
}


export class TemplateFormEntry {
  public picName: string = '';
  public age:number
  public receiverName: string = '';
  public prodName: string = '';
  public prodMerk: string = '';
  public originAddressShipping: string = '';
  public destAddressShipping: string = '';
  public totalWeight: string = '';
}