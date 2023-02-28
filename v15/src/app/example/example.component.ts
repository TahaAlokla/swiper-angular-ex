import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';
import { QuestionControlService } from '../question-control.service';
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  questions$!: Observable<QuestionBase<any>[]>;
  // get isValid() { return this.form.controls[this.question.key].valid; }
  constructor(public config: DialogConfig, public dialog: DialogRef, service: QuestionControlService) {
    this.questions$ = service.getQuestions();
  }

  onClose() {
    this.dialog.close(event)
  }
  result(event: any) {
    console.log("result event for " + event);

  }
}
