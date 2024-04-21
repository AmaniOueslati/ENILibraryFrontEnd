import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  selectedMenu1: string = '';
  selectedMenu2: string = '';

  constructor() { }
}
