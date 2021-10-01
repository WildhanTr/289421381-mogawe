import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  breadcrumb = [{ label: 'BUSINESS' }, { label: 'POWER UP', active: true }];
  
  constructor(private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    
  }

}
