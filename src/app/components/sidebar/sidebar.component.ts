import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public searchString: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchArticle(): void {
    this.router.navigate(['/search', this.searchString]);
  }
}
