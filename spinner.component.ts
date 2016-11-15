import {Component, Input} from 'angular2/core';

@Component({
    template: `<i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x"></i>`,
    selector : 'spinner'
})

export class SpinnerComponent{
  @Input() visible=true;
}