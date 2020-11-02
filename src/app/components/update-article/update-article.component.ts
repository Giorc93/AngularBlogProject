import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article'; // Importing article model
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css'],
  providers: [ArticleService],
})
export class UpdateArticleComponent implements OnInit {
  public article: Article;
  public status: string;
  public url: string = Global.url;
  public params: any;

  public afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    maxSize: '50',
    uploadAPI: {
      url: this.url + 'uploadImage',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Upload Article Image',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit',
    },
  };

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.article = new Article('', '', '', null, null); // Instancing object
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params.id;

      this.articleService.getArticle(id).subscribe(
        (response) => {
          this.article = response.article;
        },
        (error) => {
          this.router.navigate(['/home']);
        }
      );
    });
  }

  onSubmit(): void {
    this.articleService.updateArticle(this.article._id, this.article).subscribe(
      (response) => {
        console.log(response);
        if (response.articleUpdated) {
          this.status = 'Success';
          this.article = response.articleUpdated;
          Swal.fire({
            title: 'Article Edited!',
            text: 'Your article has been successfully edited',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.router.navigate(['/blog/article', this.article._id]);
        }
      },
      (error) => {
        console.log(error);
        this.status = 'Error';
      }
    );
  }

  imageUpload(data): void {
    this.article.image = data.body.image;
  }

  getArticle(id): void {
    this.articleService.getArticle(id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
