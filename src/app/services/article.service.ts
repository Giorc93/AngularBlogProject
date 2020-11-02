import { Injectable, Input } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global'; // Var with http url;

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public url: string;
  public articles: string;

  constructor(private http: HttpClient) {
    // Instancing HttpClient object to send HTTP requests;
    this.url = Global.url;
    this.articles = 'articles';
  }

  test(): any {
    return 'Article service';
  }

  getArticles(last: any = null): Observable<any> {
    // HTTP request returns observable object of type any;

    if (last != null) {
      this.articles = 'articles/last';
    }
    return this.http.get(this.url + this.articles); // Using http object to send get request using url;
  }

  getArticle(id): Observable<any> {
    return this.http.get(this.url + 'article/' + id);
  }

  searchArticle(searchString): Observable<any> {
    return this.http.get(this.url + 'search/' + searchString);
  }

  createArticle(article): Observable<any> {
    const params = JSON.stringify(article); // Transform data to JSON string
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Setting headers

    return this.http.post(this.url + 'save', params, { headers }); // Sending Http post request to back
  }

  updateArticle(id, article): Observable<any> {
    const params = JSON.stringify(article); // Transform data to JSON string
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Setting headers

    return this.http.put(this.url + 'article/' + id, params, { headers });
  }

  deleteArticle(id): Observable<any> {
    return this.http.delete(this.url + 'article/' + id);
  }
}
