import {Component, Input} from '@angular/core';

@Component({
    selector: 'block-ui',
    template: 
    `<div class="in modal-backdrop blockui-overlay"></div>
    <div class="blockui-message-container">
    <div class="blockui-message" [ngClass]="blockuiMessageClass">{{state.message}}</div>
    </div>`,
    styleUrls: ['/app/component/blockUI/blockUI.comp.css']
})


export class BlockUIComponent {
    @Input() private blockuiMessageClass; 
    private state: any;

    constructor() {
        this.state = {message: 'Loading...'};
    }

    
}