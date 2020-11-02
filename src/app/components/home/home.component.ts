import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service'; // Importing article service
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService],
})
export class HomeComponent implements OnInit {
  public secText = 'Home Text';
  public lastArticles: Article[];
  public last: boolean;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getLastArticles();
    this.last = true;
  }

  getLastArticles(): void {
    this.articleService.getArticles(true).subscribe(
      // Using subscribe method to get data from request
      (response) => {
        if (response.articles) {
          this.lastArticles = response.articles;
        }
      },
      (error) => {
        console.log('Error');
      }
    );
  }
}
