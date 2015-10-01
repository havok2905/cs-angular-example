/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('todoList', () => {
  let scope,
      element,
      controller;

  beforeEach(module('todoList', 'todo-list/todo-list-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<todo-list></todo-list>'))(scope);
    scope.$apply();

    controller = element.controller('todoList');
  }));

  describe('add', ()=> {
    it('should add an item', ()=> {
      controller.add('foo');
      expect(controller.todos[0].text).toEqual('foo');
    });
  });

  describe('reset', ()=> {
    it('should reset items', ()=> {
      controller.add('foo');
      controller.reset();
      expect(controller.todos.length).toEqual(0);
    });
  });

  describe('fetch', ()=> {
    it('should find an item', ()=> {
      controller.add('foo');
      controller.add('bar');
      controller.fetch(1);
      expect(controller.foundTodo.text).toEqual('foo');
    });
  });

  describe('remove', ()=> {
    it('should remove an item', ()=> {
      controller.add('foo');
      controller.add('bar');
      controller.remove(1);
      expect(controller.todos.length).toEqual(1);
      expect(controller.todos[0].text).toEqual('bar');
    });
  });
});
