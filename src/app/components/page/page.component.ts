import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; // Importing ActivatedRoute and Params to get data from URL

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  public name: string;
  public surname: string;
  public secText = 'Page Text';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {} // Instancing router and activatedRoute

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      // Getting data from URL
      this.name = params.name;
      this.surname = params.surname;
    });
  }

  redirect(): void {
    this.router.navigate(['/form']); // Using router to redirect
  }

  setParams(): void {
    this.router.navigate(['/page', 'Gio', 'Ramirez']);
  }
}
