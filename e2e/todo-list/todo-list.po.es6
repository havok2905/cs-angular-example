/* global element, by, expect */
'use strict';

class TodoListComponent {
  constructor() {
    this.clearButton = element(by.css('[name="clear-todos"]'));
    this.findTodoField = element(by.css('[name="find-todo"]'));
    this.findTodoButton = element(by.css('[name="find-todo-button"]'));
    this.addTodoField = element(by.css('[name="add-todo"]'));
    this.addTodoButton = element(by.css('[name="add-todo-button"]'));
    this.todos = element.all(by.repeater('todo in todoList.todos'));
    this.foundTodo = element.all(by.binding('todoList.foundTodo.text'));
  }

  add() {
    this.addTodoField.sendKeys('this is a todo item');
    this.addTodoButton.click();
  }

  fetch() {
    this.findTodoField.sendKeys('1');
    this.findTodoButton.click();
  }

  clear() {
    this.clearButton.click();
  }

  remove() {
    let firstTodo = this.todos.get(0),
        removeButton = firstTodo.element(by.tagName('button'));

    removeButton.click();
  }

  testAdd() {
    this.add();

    let firstTodo = this.todos.get(0),
        firstTodoText = firstTodo.element(by.tagName('p')).getText();

    expect(this.todos.count()).toEqual(1);
    expect(firstTodoText).toEqual('1 this is a todo item');
  }

  testFetch() {
    this.add();
    this.fetch();

    let foundTodoText = this.foundTodo.get(0).getText();

    expect(foundTodoText).toEqual('this is a todo item');
  }

  testClear() {
    this.add();
    this.clear();

    expect(this.todos.count()).toEqual(0);
  }

  testRemove() {
    this.add();
    this.remove();

    expect(this.todos.count()).toEqual(0);
  }

}

module.exports = TodoListComponent;
