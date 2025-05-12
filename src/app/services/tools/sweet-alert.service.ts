import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  constructor() {}

  // Alert
  customAlert(title: string, message: string, type: any) {
    Swal.fire({
      title: title,
      text: message,
      icon: type,
      showConfirmButton: false,
      timer: 3000,
      width: 600,
      padding: '3em',
      backdrop: 'transparent',
    });
  }

  // Toast alert
  customToast(title: string, type: any) {
    const TOAST = Swal.mixin({
      icon: type,
      title: title,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      width: 'auto',
      padding: '0.5em',
    });
    TOAST.fire();
  }
}
