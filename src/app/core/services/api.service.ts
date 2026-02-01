import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly messageService = inject(MessageService);
  public readonly httpClient = inject(HttpClient);

  public showLoadSuccess(
    message?: string
  ) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message ??
        'Successfully loaded!',
      life: 3000
    });
  }

  public showLoadError(
    message?: string
  ) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message ??
        'Exception while loading!',
      life: 3000
    });
  }

  public showUpdateSuccess(
    message?: string
  ) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message ??
        'Successfully updated!',
      life: 3000
    });
  }

  public showUpdateError(
    message?: string
  ) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message ??
        'Exception while updating!',
      life: 3000
    });
  }

  public showDeleteSuccess(
    message?: string
  ) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message ??
        'Successfully deleted!',
      life: 3000
    });
  }

  public showDeleteError(
    message?: string
  ) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message ??
        'Exception while deleting!',
      life: 3000
    });
  }
}
