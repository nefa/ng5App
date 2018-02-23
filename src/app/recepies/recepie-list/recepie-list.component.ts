import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recepie.model';


@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recipes: Recipe[];

  constructor() {
    // tslint:disable-next-line:max-line-length
    this.recipes = [
      // tslint:disable-next-line:max-line-length
      new Recipe('Test recipe', 'a simple test recipe', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fresponsive_etr_gallery_desktop_portrait%2Fpublic%2Fimage%2F2015%2F10%2Fmain%2F2311702_qfsau_024_0.jpg%3Fitok%3D7DM8Db6E&w=800&q=85'),
      // tslint:disable-next-line:max-line-length
      new Recipe('Test recipe', 'a simple test recipe', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fresponsive_etr_gallery_desktop_portrait%2Fpublic%2Fimage%2F2015%2F10%2Fmain%2F2311702_qfsau_024_0.jpg%3Fitok%3D7DM8Db6E&w=800&q=85')
    ];

  }

  ngOnInit() {
  }

}
