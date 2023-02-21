import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { MartialArtsServiceService } from '../service/martial-arts.service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
      martialArtsArray: IContent[];
  constructor(private MartialArtsServiceService: MartialArtsServiceService) {

    this.martialArtsArray = [];
  }
  ngOnInit(): void {
    this.MartialArtsServiceService.getContent().subscribe((martialArtsArray: IContent[])=> {
      this.martialArtsArray = martialArtsArray;
    });
  }
}
