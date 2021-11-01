import { Component, OnInit, ViewChild } from "@angular/core";
import { MatStepper } from "@angular/material";
import { Assignment } from "@app/model/assignment";
import moment from "moment";

@Component({
    selector: "app-assignment-demand",
    templateUrl: "./assignment-demand.component.html",
    styleUrls: ["./assignment-demand.component.scss"],
})
export class AssignmentDemandComponent implements OnInit {
    item: Assignment = new Assignment();

    @ViewChild("stepper") private matStepper: MatStepper;
    totalStepsCount: number;

    testQrCode = "Testing Mogawe";

    listTypeDuration: any[] = [
        {
            id: 1,
            value: "jam",
        },
        {
            id: 2,
            value: "menit",
        },
        {
            id: 3,
            value: "detik",
        },
    ];
    typeDuration = this.listTypeDuration[1].value;
    constructor() { }

    ngOnInit() { }

    nextStep(stepper: MatStepper) {
        stepper.next();
        this.item.endDate = moment(this.item.endDate).format(
            "dddd, DD MMMM YYYY HH:mm"
        );
    }
    backStep(stepper: MatStepper) {
        stepper.previous();
    }
    
    showAlert(id: number){
        if(id === 0){
            alert("Published")
        } else{
            alert("Assign")
        }
    }

    saveAsImage(parent) {
        // fetches base 64 date from image
        const parentElement = parent.el.nativeElement.querySelector("img").src;

        // converts base 64 encoded image to blobData
        let blobData = this.convertBase64ToBlob(parentElement);

        // saves as image
        const blob = new Blob([blobData], { type: "image/png" });
        const url = window.URL.createObjectURL(blob);
        // window.open(url);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Qrcode";
        link.click();
    }
    private convertBase64ToBlob(Base64Image: any) {
        // SPLIT INTO TWO PARTS
        const parts = Base64Image.split(";base64,");
        // HOLD THE CONTENT TYPE
        const imageType = parts[0].split(":")[1];
        // DECODE BASE64 STRING
        const decodedData = window.atob(parts[1]);
        // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
        const uInt8Array = new Uint8Array(decodedData.length);
        // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
        for (let i = 0; i < decodedData.length; ++i) {
            uInt8Array[i] = decodedData.charCodeAt(i);
        }
        // RETURN BLOB IMAGE AFTER CONVERSION
        return new Blob([uInt8Array], { type: imageType });
    }
}
