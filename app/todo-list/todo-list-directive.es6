(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name todoList.directive:todoList
   * @restrict EA
   * @element
   *
   * @description A service backed todo list directive
   *
   * @example
     <example module="todoList">
       <file name="index.html">
        <todo-list></todo-list>
       </file>
     </example>
   *
   */
  angular
    .module('todoList')
    .directive('todoList', todoList);

  function todoList(TodoListFactory) {
    return {
      restrict: 'EA',
      scope: {
        todos: '=',
        foundTodo: '='
      },
      templateUrl: 'todo-list/todo-list-directive.tpl.html',
      replace: true,
      controllerAs: 'todoList',
      bindToController: true,
      controller() {
        let vm = this;

        vm.todos = TodoListFactory.all();
        vm.foundTodo = null;

        vm.add = (text) => {
          TodoListFactory.add(text);
          vm.todos = TodoListFactory.all();
        };

        vm.fetch = (id) => {
          vm.foundTodo = TodoListFactory.fetch(id);
        };

        vm.reset = () => {
          TodoListFactory.reset();
          vm.todos = TodoListFactory.all();
        };

        vm.remove = (id) => {
          TodoListFactory.remove(id);
          vm.todos = TodoListFactory.all();
        };
      }
    };
  }
}());
