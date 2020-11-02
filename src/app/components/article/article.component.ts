import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Global } from '../../services/global';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() i: any;

  public url: string;
  public image: string;
  public imagePath: string;

  constructor(private articleService: ArticleService) {
    this.url = Global.url;
  }

  ngOnInit(): void {}
}
