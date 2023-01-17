import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';
import { Site } from '../site';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  constructor(private siteService: SiteService) { }

  site$: Observable<Site[]> = new Observable<Site[]>();

  ngOnInit(): void {
    this.site$ = this.siteService.getSites();
  }

  public routeToSite(){
    window.location.replace("sites/details");
  }

}
