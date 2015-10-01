/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TodoListFactory', () => {
  let factory;

  beforeEach(module('todoList'));

  beforeEach(inject((TodoListFactory) => {
    factory = TodoListFactory;
  }));

  describe('all', () => {
    it('will return the todolist items array', () => {
      expect(factory.all()).toEqual([]);
    });
  });

  describe('add', () => {
    it('will add a new todolist item', () => {
      factory.add('foo');
      expect(factory.all().length).toEqual(1);
      expect(factory.all()[0].text).toEqual('foo');
    });
  });

  describe('fetch', () => {
    it('will find an added todolist item', () => {
      factory.add('foo');
      factory.add('bar');
      factory.add('baz');

      expect(factory.fetch(2).text).toEqual('bar');
    });
  });

  describe('remove', () => {
    it('will remove an item from todolist', () => {
      factory.add('foo');
      factory.add('bar');
      factory.add('baz');
      factory.remove(2);

      expect(factory.fetch(2)).not.toBeDefined();
    });
  });

  describe('reset', () => {
    it('will remove all items from the todolist', () => {
      factory.add('foo');
      factory.add('bar');
      factory.add('baz');
      factory.reset();

      expect(factory.all()).toEqual([]);
    });
  });
});
