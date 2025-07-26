import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  img: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  enterImg = false;
  selectedPic = '';
  
  items: PortfolioItem[] = [
    { img: "/assets/poert1.png" },
    { img: "/assets/port2.png" },
    { img: "/assets/port3.png" },
    { img: "/assets/poert1.png" },
    { img: "/assets/port2.png" },
    { img: "/assets/port3.png" }
  ];

  imgClicked(item: PortfolioItem) {
    this.enterImg = true;
    this.selectedPic = item.img;
  }

  imgOut() {
    this.enterImg = false;
  }
}
