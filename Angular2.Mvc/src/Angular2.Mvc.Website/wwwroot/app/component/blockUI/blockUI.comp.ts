import {Component} from '@angular/core';

@Component({
    selector: 'block-ui',
    styleUrls: ['/app/component/blockUI/blockUI.comp.css'],
    template:
    `<div class="in modal-backdrop blockui-overlay"></div>
     <div class="blockui-message-container" aria-live="assertive" aria-atomic="true">
        <div class="blockui-message" [ngClass]="blockuiMessageClass">{{ state.message }}</div>
    </div>`
})
export class BlockUIComponent {
    state = {
        message: 'Please wait...'
    };
}