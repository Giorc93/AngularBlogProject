import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { AngularFileUploaderModule } from 'angular-file-uploader';

// Components
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { SecondTestComponent } from './components/second-test/second-test.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleDetComponent } from './components/article-det/article-det.component';
import { SearchComponent } from './components/search/search.component';
import { NewArticleComponent } from './components/new-article/new-article.component';

// Route Components
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './components/page/page.component';
import { ErrorComponent } from './components/error/error.component';
import { DirectivesTestComponent } from './components/directives-test/directives-test.component';
import { CarComponent } from './components/car/car.component';

// Pipes
import { CheckYearPipe } from './pipes/checkYear.pipe';
import { UpdateArticleComponent } from './components/update-article/update-article.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SecondTestComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormComponent,
    PageComponent,
    ErrorComponent,
    DirectivesTestComponent,
    CarComponent,
    CheckYearPipe,
    ArticleComponent,
    ArticleDetComponent,
    SearchComponent,
    NewArticleComponent,
    UpdateArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
