angular.module('finalProject')
  .controller('UsersIndexController', UsersIndexController)
  .controller('UsersShowController', UsersShowController)
  .controller('UsersEditController', UsersEditController);

UsersIndexController.$inject = ['User'];
function UsersIndexController(User) {
  const usersIndex = this;

  usersIndex.all = User.query();
}

UsersShowController.$inject = ['User','$state', '$auth'];
function UsersShowController(User, $state, $auth) {
  const usersShow = this;

  usersShow.user = User.get($state.params);

  function deleteUser() {
    usersShow.user.$remove(() => {
      $state.go('usersIndex');
    });
  }

  usersShow.delete = deleteUser;
  usersShow.isLoggedIn = $auth.isAuthenticated;
}

UsersEditController.$inject = ['User','$state', '$auth'];
function UsersEditController(User, $state, $auth) {
  const usersEdit = this;

  usersEdit.user = User.get($state.params);

  function update() {
    usersEdit.user.$update(() => {
      $state.go('usersShow',$state.params);
    });
  }

  usersEdit.update = update;
  usersEdit.isLoggedIn = $auth.isAuthenticated;
}

// offer controller
// function joinOffer() {
//   offersShow.offer.attendees.push(currentUserId);
//   offersShow.offer.$update(() => {
//     $state.go('offersShow',$state.params);
//   });
// }

// the following as to go to OffersShowController 
// const currentUserId = $auth.getPayload().id;
