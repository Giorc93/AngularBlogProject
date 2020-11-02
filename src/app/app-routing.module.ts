import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './components/page/page.component';
import { ErrorComponent } from './components/error/error.component';
import { DirectivesTestComponent } from './components/directives-test/directives-test.component';
import { ArticleDetComponent } from './components/article-det/article-det.component';
import { SearchComponent } from './components/search/search.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { UpdateArticleComponent } from './components/update-article/update-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'form', component: FormComponent },
  { path: 'page', component: PageComponent },
  { path: 'directive', component: DirectivesTestComponent },
  { path: 'blog/article/:id', component: ArticleDetComponent },
  { path: 'search/:searchString', component: SearchComponent },
  { path: 'newArt', component: NewArticleComponent },
  { path: 'blog/editArt/:id', component: UpdateArticleComponent },
  { path: 'page/:name', component: PageComponent },
  { path: 'page/:name/:surname', component: PageComponent },
  { path: '**', component: ErrorComponent }, // Error path must be the last one!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
