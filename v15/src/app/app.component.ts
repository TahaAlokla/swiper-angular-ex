import {
  Component
}

  from '@angular/core';
import { Observable } from 'rxjs';

import {
  DialogService
}

  from './dialog/dialog.service';

import {
  ExampleComponent
}

  from './example/example.component';
import { QuestionBase } from './example/question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}

) export class AppComponent {
  title = 'v15';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionControlService, public dialog: DialogService) {
    this.questions$ = service.getQuestions();
  }


  open() {
    const ref = this.dialog.open(ExampleComponent, {
      data: { message: 'test passing data to dynamic component !' },
    })
    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result)
    })
  }


}
