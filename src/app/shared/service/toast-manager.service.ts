import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

/**
 * An utility class to manage Toast events
 */
@Injectable({
  providedIn: 'root'
})
export class ToastManagerService {

  static Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });


  /*
  * Show toast success
  * @param: message to pass the message
  */
  public static toastSuccess(message?: string) {
    this.Toast.fire({
      icon: 'success',
      title: message
    }).then(() => {})
  }

  /*
  * Show toast warning
  * @param: message to pass the message
  */
  public static toastWarning(message?: string) {
    this.Toast.fire({
      icon: 'warning',
      title: message
    }).then(() => {})
  }

  /*
  * Show toast error
  * @param: message to pass the message
  */
  public static toastError(message?: string) {
    this.Toast.fire({
      icon: 'error',
      title: message,
      color: 'white',
    }).then(() => {})
  }

  /*
  * Show toast info
  * @param: message to pass the message
  */
  public static toastInfo(message?: string) {
    this.Toast.fire({
      icon: 'info',
      title: message,
      color: 'white',
    }).then(() => {})
  }
}
