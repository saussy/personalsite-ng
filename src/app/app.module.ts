import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ProjectListComponent } from './project/projectlist.component';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './project/project.service';
import { ProjectThumbComponent } from './project/projectthumb.component';
import { PostComponent } from './blog/post.component';
import { PostListComponent } from './blog/postlist.component';
import { PostService } from './blog/post.service';
import { TitleComponent } from './title/title.component';
import { TitleService } from './title/title.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'bio', component: BioComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BioComponent,
    ResumeComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectThumbComponent,
    PostComponent,
    PostListComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownToHtmlModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FlexLayoutModule
  ],
  providers: [
    ProjectService,
    PostService,
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
