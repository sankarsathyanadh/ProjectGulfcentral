import { Component , TemplateRef  } from '@angular/core';

  import { NgbModule , ModalDismissReasons ,NgbModal  } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface User {
  name: string;
  email: string;
  phone: string;
  role: string;
}
@Component({
  selector: 'app-usercreation',
  imports: [CommonModule, FormsModule ,NgbModule],
  templateUrl: './usercreation.html',
  styleUrl: './usercreation.css'
})
export class Usercreation {

   closeResult = '';
  users: User[] = [];
  currentUser: User = { name: '', email: '', phone :'',role: '' };
  isEditMode = false;
  showModal = false;
 constructor(private modalService: NgbModal) {}
 openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  editUser(user: User) {
    this.isEditMode = true;
    this.currentUser = { ...user };
    this.showModal = true;
  }



  deleteUser(index: number) {
    this.users.splice(index, 1);
  }



}
