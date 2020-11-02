import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service'; // Importing article service
import { Article } from '../../models/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService], // Loading service to providers
})
export class BlogComponent implements OnInit {
  public secText = 'Blog Text';
  public articles: Article[];

  constructor(private articleService: ArticleService) {} // Instancing articleService

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(
      // Using subscribe method to get data from request
      (response) => {
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      (error) => {
        console.log('Error');
      }
    );
  }
}
