import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article'; // Importing article model
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  providers: [ArticleService],
})
export class NewArticleComponent implements OnInit {
  public article: Article;
  public status: string;
  public url: string = Global.url;

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

  constructor(private articleService: ArticleService, private router: Router) {
    this.article = new Article('', '', '', null, null); // Instancing object
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.articleService.createArticle(this.article).subscribe(
      (response) => {
        if (response.articleStored) {
          this.status = 'Success';
          this.article = response.article;

          // Creating Alert
          Swal.fire({
            title: 'Article Created!',
            text: 'Your article has been successfully created',
            icon: 'success',
            confirmButtonText: 'OK',
          });

          this.router.navigate(['/home']);
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
}
