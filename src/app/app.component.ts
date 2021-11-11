import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColorService } from './service/color-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ColorCollectionAngular';

  constructor(private router: Router, private service: ColorService) {}

  colors: any;
  selectedColor: any;

  isAddColorOpen: boolean = false;

  ngOnInit() {
    this.service.retrieveAllColors((colors: any) => {
      this.colors = colors;
    });
  }

  retrieveAllColors = () => {
    this.service.retrieveAllColors((colors: any) => {
      this.colors = colors;
    });
  };

  selectColor = (color: any) => {
    if (this.selectedColor === color) {
      this.clearColor();
    } else {
      this.selectedColor = color;
    }
  };

  clearColor = () => {
    this.selectedColor = undefined;
  };

  toggleAddColor = () => {
    this.isAddColorOpen = !this.isAddColorOpen;
  };
}
