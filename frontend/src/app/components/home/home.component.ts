import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const targetGreeting = document.querySelector('.tg')
    const targetTitles = document.querySelector('.tt')

    /* ** start of effect write greeting ** */

    const writerGreeting = new Typewriter(targetGreeting, {
      loop: false,
      typeColor: '#16f4d0'
    })

    writerGreeting
      .type("Hi, <br> I'm Félix Pajón")
      .rest(500)
      .start()

    /* ** end of effect write greeting ** */
    /* ** start of effect write titles ** */

    const writerTitle = new Typewriter(targetTitles, {
        loop: true, 
        typeColor: '#16f4d0'
    })

    writerTitle
      .strings(
        400,
          "T.S.U. Virtual Environments and Digital Business",
          "Ing. Virtual Environments and Digital Business"
        )
      .start()

    /* ** end of effect write titles ** */

  }

}
