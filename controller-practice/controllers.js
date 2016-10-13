(function() {

  'use strict';

  const app = angular.module('FamilyApp');

  app.controller('FamilyController', FamilyController);
  app.controller('RoleController', RoleController);

  function FamilyController($rootScope) {
    this.person = {
      name: '',
      role: ''
    };
    this.people = [{
      name: 'Jake',
      role: 'Jerk'
    },{
      name: 'Bart',
      role: 'Not Jerk'
    }];

    this.createPerson = () => {
      this.people.push(this.person)
      $rootScope.allRoles += `, ${this.person.role}`
      this.person = { name: '', role: '' }
    };
  }

  function RoleController($rootScope) {
    $rootScope.allRoles = 'Mother, Son';
  };

})();
