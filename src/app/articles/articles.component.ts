import {Component, OnInit} from '@angular/core';
import {ArticleObject} from '../interfaces/index';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles?: Array<ArticleObject>;

  constructor(public articleService: ArticleService) {
    this.articleService
      .getAllArticle()
      .subscribe((data) => (this.articles = data));
  }

  ngOnInit(): void {
  }

  pushArticle($event: any) {
    this.articles?.unshift($event);
  }
}
