import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ToastManagerService} from "../../../shared/service/toast-manager.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-confirm-actions',
  templateUrl: './confirm-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./confirm-actions.component.scss']
})
export class ConfirmActionsComponent {

  constructor(
  ) {}

  @Input() isConfirmShow = true;

  @Output() newEvent = new EventEmitter();

  btnNew(): void{
    this.newEvent.emit();
  }

  confirmBox() {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'ml-3 btn button-color',
        cancelButton: 'mr-3 btn unactif-button'
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
      allowOutsideClick: false, // Disable clicking outside popup
      allowEscapeKey: false // Disable pressing escape key
    }).then((result) => {
      if (result.isConfirmed) {
        this.btnNew();
        swalWithBootstrapButtons.fire(
          {
            title: 'Deleted!',
            text: "Your file has been deleted.",
            icon: 'success',
            allowOutsideClick: false, // Disable clicking outside popup
            allowEscapeKey: false // Disable pressing escape key
          }
        ).then(() => {
          ToastManagerService.toastError("Success full connected !!!");
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          {
            title: 'Cancelled!',
            text: "Your imaginary file is safe :)",
            icon: 'error',
            allowOutsideClick: false, // Disable clicking outside popup
            allowEscapeKey: false // Disable pressing escape key
          }
        ).then(() => {

        })
      }
    })
  }
}
