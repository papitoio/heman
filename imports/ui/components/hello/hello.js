import './hello.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.newCounter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  newCounter() {
    return Template.instance().newCounter.get();
  }
});

Template.hello.events({
  'click #counterId'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'click #newCounterId'(event, instance) {
    let count = instance.newCounter.get();

    instance.newCounter.set(count + 1);
  }
});
