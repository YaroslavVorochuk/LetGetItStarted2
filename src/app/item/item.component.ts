import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service'
// import { pipe } from '../../../node_modules/@angular/core/src/render3/pipe';
import { Item } from '../shared/item.model';
import { ModalService } from '../services/modal.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService, private modalService: ModalService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(
      res => {
      for(let item of res["photos"]){
        this.items.push(new Item(item.camera.name, item.camera.full_name, item.img_src, this.randomPrice()));
      }
      }
    )
  }

  sorting(parametr) {
    this.items = this.items.sort((a:any, b: any) => {
      if (a[parametr] < b[parametr]){
          return -1;
      } else if (a[parametr] > b[parametr]) {
          return 1;
      } else {
          return 0;
      }
  });

  }
  randomPrice() {
    return Math.floor(Math.random() * 1500) + 20;
    
  }

  deleteItemFromList(i: number){
    if(i > -1){
        this.items.splice(i, 1);
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
}

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
