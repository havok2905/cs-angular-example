(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name todoList.factory:TodoList
   *
   * @description
   *
   */
  angular
    .module('todoList')
    .factory('TodoListFactory', TodoList);

  function TodoList() {
    let todos = [],
        count = 0,
        publicMethods = {};

    publicMethods.all = ()=> {
      return todos;
    };

    publicMethods.add = (text)=> {
      count++;
      todos.push({id: count, text: text});
      return todos[count];
    };

    publicMethods.fetch = (id)=> {
      return todos.filter((todo) => {
        return todo.id === parseInt(id, 10);
      })[0];
    };

    publicMethods.remove = (id)=> {
      let todoLength = todos.length,
          x = 0;

      for (x; x < todoLength; x++) {
        if (todos[x].id === id) {
          todos.splice(x, 1);
          break;
        }
      }
    };

    publicMethods.reset = ()=> {
      todos = [];
      return todos;
    };

    return publicMethods;
  }
}());
