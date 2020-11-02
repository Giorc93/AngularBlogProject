import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router'; // To collect URL Data
import { Article } from '../../models/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService],
})
export class SearchComponent implements OnInit {
  public url: string = Global.url;
  public searchResults: Article[];
  public noResults: boolean;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      const searchString = params.searchString;

      this.articleService.searchArticle(searchString).subscribe(
        (response) => {
          this.searchResults = response.articles;
          this.noResults = false;
        },
        (error) => {
          this.noResults = true;
        }
      );
    });
  }

  ngOnInit(): void {}
}
