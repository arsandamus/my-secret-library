import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = []
  booksSubject = new Subject<Book[]>()

  constructor() { 
    this.getBooks()
  }

  emitBooks() {
    this.booksSubject.next(this.books)
  }

  saveBook() {
    firebase.database().ref().set(this.books)
  }

  getBooks() {
    firebase.database().ref('/books').on('value', (data: DataSnapshot) => {
      this.books = data.val() ? data.val() : []
      this.emitBooks()
    })
  }

  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val())
          }, (error) => {
            reject(error)
          }
        )
      }
    )
  }

  createNewBook(newBook: Book) {
    this.books.push(newBook)
    this.saveBook()
    this.emitBooks()
  }

  removeBook(book: Book) {
    const bookIndexToRemove = this.books.findIndex(
      (bookEl) => {
        if(bookEl === book) {
          return true
        }
      }
    )
    this.books.splice(bookIndexToRemove, 1)
    this.saveBook()
    this.emitBooks()
  }
}

