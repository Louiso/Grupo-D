import { Mongo } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// Meteor.publish('userData', function () {
//   if (this.userId) {
//     return Meteor.users.find({ _id: this.userId }, {
//       fields: { username: 1}
//     });
//   } else {
//     this.ready();
//   }
// });
