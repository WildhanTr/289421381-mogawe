import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { AdministrativeArea, ProximityArea } from "@app/model/contributorsFilter";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";


@Component({
  selector: "app-contributor-filters",
  templateUrl: "./contributor-filters.component.html",
  styleUrls: [
    "./contributor-filters.component.scss",
    "../contributors.component.scss",
  ],
})


export class ContributorFilterComponent implements OnInit, AfterViewInit {
  @ViewChild("stepper") private myStepper: MatStepper;
  totalStepsCount: number;
  identifier: number;

  administrativeArea: AdministrativeArea = new AdministrativeArea();
  proximityArea: ProximityArea = new ProximityArea();
  
  listDistrict: any[] = [
      {
        letter: 'S',
        names: ['Setiabudi', 'Sukamulya', 'Sukamaju']
      },
      {
        letter: 'T',
        names: ['Tebet', 'TegalRejo', 'Teluk Pucung']
      },
      {
        letter: 'J',
        names: ['Jatiasih', 'Jatimulya', 'Jatinegara']
      },
  ];
  listDistrictOptions: Observable<any[]>;
  listProvince: any[] = [
    {
      id: 1,
      name: "DKI Jakarta",
    },
    {
      id: 2,
      name: "Jawa Barat",
    },
    {
      id: 3,
      name: "Jawa Timur",
    },
    {
      id: 4,
      name: "Jawa Tengah",
    },
    {
      id: 5,
      name: "Nusa Tenggara Timur",
    },
  ];
  
  listCity: any[] = [
    {
      id: 1,
      name: "Bekasi",
    },
    {
      id: 2,
      name: "Jakarta Selatan",
    },
    {
      id: 3,
      name: "Jakarta Barat",
    },
    {
      id: 4,
      name: "Sleman",
    },
    {
      id: 5,
      name: "Jember",
    },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.totalStepsCount = this.myStepper._steps.length;
  }

  nextStep(stepper: MatStepper, identifier: number) {
    this.identifier = identifier;
    stepper.next();
  }
}
