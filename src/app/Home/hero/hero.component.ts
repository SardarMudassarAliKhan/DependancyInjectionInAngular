import { Component } from '@angular/core';
import { HereService } from '../../here.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name: string | undefined;
  constructor(private here: HereService) { }

  ngOnInit() {
    this.showDta();
  }

  showDta()
  {
    debugger;
    this.name = this.here.getData();
  }

}
