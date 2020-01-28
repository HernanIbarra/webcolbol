import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
  providers: [ BsModalService, BsModalRef]

})
export class NosotrosComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    public dialog: MatDialog) { }

  openDialog(){
    // this.dialog.open();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  openModals(templates: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templates, { class: 'modal-lg' });
  }

  closeModal() {
    if (!this.modalRef) {
      return;
    }
    this.modalRef.hide();
    this.modalRef = null;
  }

  ngOnInit() {
  }

}
