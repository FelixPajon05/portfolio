import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(

    private _router: Router

  ) { }

  ngOnInit() {

    this._router.events.subscribe(event => {

      this.show = event instanceof NavigationStart
      if (event instanceof NavigationStart) {
        this.show = true
      } else if (event instanceof NavigationEnd) {
        this.show = false
      }

    })

  }

  show = false

}
