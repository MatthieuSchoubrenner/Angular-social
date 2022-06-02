import { Component, Input, OnInit } from '@angular/core';
import { ArticleObject, TokenObject } from '../interfaces/index';
import { JwtTokenService } from '../jwt-token.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: ArticleObject;
  tokenData: TokenObject;
  editing: boolean;
  constructor(private token: JwtTokenService) {
    this.editing = false;
  }

  ngOnInit(): void {
    this.tokenData = <TokenObject>this.token.decodeToken();
  }
  pushArticle($event: any) {
    this.article = $event;
    this.editing = false;
  }
}
