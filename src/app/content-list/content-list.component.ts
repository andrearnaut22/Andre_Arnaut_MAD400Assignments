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
      console.log("Getting the discipline list")
      this.martialArtsArray = martialArtsArray;
    });

    let testAddDiscipline: IContent = {
      id: 4,
      discipline: "Kickboxing",
      description: "The art of 6 limbs, and toughness. Dominated by the Dutch and strengthened by the love for Thai Boxing",
      author: "Andre Arnaut",
      imgSrc: "https://miro.medium.com/max/800/1*O2DfQTmHN0WKFnal0c_tew.jpeg",
      type: "Striking"
    };

    let testDisciplineUpdate: IContent = {
      id: 2,
      discipline: "Boxing",
      description: "The sweet science. The best way to resolve a confrontation.",
      author: "Andre Arnaut",
      imgSrc: "https://phantom-marca.unidadeditorial.es/3099f42335a3c7c82a330459f172cb94/crop/0x0/2047x1365/resize/1200/f/webp/assets/multimedia/imagenes/2023/01/11/16734577790247.jpg",
      type: "Striking"
    };

    };

    this.MartialArtsServiceService.addContentItem(testDisciplineUpdate).subscribe((martialArtsArray: IContent[]) => {
      console.log("Testing adding a discipline to the array: ", martialArtsArray);
    });
  }
}
