import { Component } from "@angular/core";

@Component({
    selector: 'app-save-filter-modal',
    templateUrl: './save-filter.component.html',
    styleUrls: ['./save-filter.component.scss']
})
export class SaveFilterComponent{
    saveFilter(){
        alert("Filter Saved")
    }
}