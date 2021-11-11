import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from '../service/color-service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css'],
})
export class AddColorComponent implements OnInit {
  @Input() retrieveAllColors: any;
  @Input() toggleAddColor: any;
  newColor: any = {
    name: '',
    hex: '',
  };

  constructor(private service: ColorService) {}

  ngOnInit(): void {}

  add = () => {
    this.service.addColor(this.newColor, () => {
      this.retrieveAllColors();
      this.toggleAddColor();
    });
  };
}
