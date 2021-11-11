import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from '../service/color-service';

@Component({
  selector: 'app-display-color',
  templateUrl: './display-color.component.html',
  styleUrls: ['./display-color.component.css'],
})
export class DisplayColorComponent implements OnInit {
  @Input() color: any;
  @Input() retrieveAllColors: any;
  @Input() clearColor: any;

  editableColor: any;

  constructor(private service: ColorService) {}

  ngOnInit(): void {
    this.editableColor = Object.assign({}, this.color);
  }

  edit = () => {
    this.service.editColor(this.editableColor, () => {
      this.retrieveAllColors();
      this.clearColor();
    });
  };

  delete = () => {
    this.service.deleteColor(this.editableColor.id, () => {
      this.retrieveAllColors();
      this.clearColor();
    });
    this.retrieveAllColors();
  };
}
