import { MapsAPILoader } from "@agm/core";
import {
    Component,
    OnInit,
    Inject,
    ViewChild,
    AfterViewInit,
    ElementRef,
    NgZone,
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
import { SaveFilterComponent } from "../save-filter/save-filter.component";


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

    /* proximity area */
    private geoCoder;
    latitudeProx: number;
    longitudeProx: number;
    addressProx: string;
    
    operatorAnd = false;
    /* custom area */
    pointCustom: any = {
        lat: 33.5362475,
        lng: -111.9267386
    }
    
    map: any;
  drawingManager: any;

    valueOpen: boolean = false;
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
    
    filterValue: any[] = [{
        type: '',
        property: '',
        operator: '',
        value: ''
    }]

    @ViewChild("searchLocation") public searchLocation: ElementRef;
    @ViewChild("mapCustomRef") public mapCustomRef: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private mapsApiLoader: MapsAPILoader,
        private ngZone: NgZone,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    onMapCustomAreaReady(map) {
        this.initDrawingManager(map);
    }

    initDrawingManager(map: any) {
        let options = {
            drawingControl: true,
            drawingControlOptions: {
                // drawingModes: ["polylines"]
            },
            polylineOptions: {
                draggable: true,
                editable: true
            },
            // drawingMode: google.maps.drawing.OverlayType.POLYLINE
        };

        const drawingManager = new google.maps.drawing.DrawingManager({
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER
            },
            polylineOptions: {
                draggable: true,
                editable: true
            },
            drawingMode: google.maps.drawing.OverlayType.POLYLINE
        });
        drawingManager.setMap(map);
    }
    
    addInput(identifier: number){
        if(identifier > 0){
            this.operatorAnd = true;
        }
        this.filterValue.push({
            type: '',
            property: '',
            operator: '',
            value: ''
        })
    }
    openSaveFilterDialog(){
        const modalConf = {
            width:'60%',
            minWidth: '300px',
            maxWidth: '600px'
        }
        this.dialog.open(SaveFilterComponent, modalConf);
    }
    
    addValue(){
        this.valueOpen = true;
    }

    searchLocationProx(query) {
        this.mapsApiLoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;

            let autocomplete = new google.maps.places.Autocomplete(this.searchLocation.nativeElement);
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    //set latitude, longitude and zoom
                    this.latitudeProx = place.geometry.location.lat();
                    this.longitudeProx = place.geometry.location.lng();
                    console.log({
                        'lattitude': this.latitudeProx,
                        'longitude': this.longitudeProx
                    })
                });
            });
        });
    }

    // Get Current Location Coordinates
    private setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitudeProx = position.coords.latitude;
                this.longitudeProx = position.coords.longitude;
                this.getAddressProximity(this.latitudeProx, this.longitudeProx);
            });
        }
    }
    ngAfterViewInit() {
        this.totalStepsCount = this.myStepper._steps.length;
        
    }

    nextStep(stepper: MatStepper, identifier: number) {
        this.identifier = identifier;
        stepper.next();
    }

    getAddressProximity(latitude, longitude) {
        this.geoCoder.geocode({
            'location': { lat: latitude, lng: longitude }
        }, (result, status) => {
            if (status === 'OK') {
                if (result[0]) {
                    this.addressProx = result[0].formatted_address;
                    console.log(this.addressProx);
                } else {
                    alert('No results found');
                }
            } else {
                alert('Geocoder failed due to: ' + status);
            }
        })
    }
}
