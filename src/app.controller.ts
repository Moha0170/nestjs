import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import exp from 'constants';
import { get } from 'http';
import { quotes } from './quotes'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  @Get('quotes')
  @Render('quotes')
  quotes() {
    return quotes;
  }

  @Get('randomquote')
  @Render('randomquote')
  randomquote() {
    return quotes;
  }

  @Get('topauthors')
  @Render('topauthors')
  topauthor() {
    return quotes;
  }

  @Get('authorRandomFrom')
  @Render('authorrandomfrom')
  authorRandomFrom() {
    
  }
}