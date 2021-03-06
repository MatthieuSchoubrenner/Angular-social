import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../article.service';
import {ArticleObject, CommentObject} from '../interfaces';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  comments?: Array<CommentObject>;
  article: ArticleObject;
  id: string | null;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.articleService
        .getOneArticle(this.id)
        .subscribe((data) => (this.article = data));
      this.articleService
        .getAllcomments(this.id)
        .subscribe((data) => (this.comments = data));
    }
  }

  pushComment($event: any) {
    this.comments?.unshift($event);
  }
}
