import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  getExpenses() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
