
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../example/question-base';
import { QuestionControlService } from '../question-control.service';

// import { QuestionBase } from '';
// import { QuestionControlService } from './question-control.service';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  @Input() questions: QuestionBase<string>[] | null = [];
  @Output() newItemEvent = new EventEmitter<any>();
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());

    this.newItemEvent.emit(this.payLoad);

  }
}
