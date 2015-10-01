/* global describe, beforeEach, it, browser, expect */
'use strict';

import HomePage from './home.po';
import TodoListComponent from '../todo-list/todo-list.po';

describe('Home page', () => {
  let homePage,
      todoList;

  beforeEach(() => {
    homePage = new HomePage();
    browser.get('/#/home');
  });

  it('should say HomeCtrl', () => {
    expect(homePage.heading.getText()).toEqual('home');
    expect(homePage.text.getText()).toEqual('This is an example App');
  });

  describe('homepage todo list', () => {
    beforeEach(() => {
      todoList = new TodoListComponent();
    });

    it('should add items to a todo list', () => {
      todoList.testAdd();
    });

    it('should remove items from a todo list', () => {
      todoList.testRemove();
    });

    it('should clear items from a todo list', () => {
      todoList.testClear();
    });

    it('should find items in a todo list', () => {
      todoList.testFetch();
    });
  });
});
