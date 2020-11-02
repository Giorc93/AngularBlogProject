import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Global } from '../../services/global';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router'; // To collect URL Data
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-det',
  templateUrl: './article-det.component.html',
  styleUrls: ['./article-det.component.css'],
  providers: [ArticleService],
})
export class ArticleDetComponent implements OnInit {
  public article: Article;
  public url: string = Global.url;
  public id: string;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;

      this.articleService.getArticle(this.id).subscribe(
        (response) => {
          this.article = response.article;
        },
        (error) => {
          this.router.navigate(['/home']);
        }
      );
    });
  }

  deleteArticle(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'The article will be deleted',
      icon: 'warning',
      showDenyButton: true,
      denyButtonText: 'Cancel',
      confirmButtonText: 'Delete',
    }).then((confirm) => {
      if (confirm.isConfirmed) {
        this.articleService.deleteArticle(this.id).subscribe(
          (response) => {
            Swal.fire({
              title: 'Article deleted',
              text: 'The article has been deleted',
              icon: 'success',
              confirmButtonText: 'Ok',
            });
            this.router.navigate(['/home']);
          },
          (error) => {
            Swal.fire({
              title: 'Error!',
              text: 'The article could not be deleted',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        );
      } else if (confirm.isDenied) {
        Swal.fire({
          title: 'Operation canceled',
          text: 'The article has not been deleted!',
          icon: 'warning',
          confirmButtonText: 'Ok',
        });
      }
    });
  }
}
