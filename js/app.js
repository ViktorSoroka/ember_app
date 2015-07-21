/*globals DS, App*/

App = Ember.Application.create();

App.Router.map(function () {
	this.resource('book', {path: '/books/:book_id'});
});

App.IndexRoute = Ember.Route.extend({
	model: function () {
		return this.store.findAll('book');
	}
});

//App.BookRoute = Ember.Route.extend({
//	model: function (params) {
//		return this.store.find('book', params.book_id);
//	}
//});

App.BooksController = Ember.ArrayController.extend({
	sortProperties: [ 'title' ]
});

App.BookDetailsComponent = Ember.Component.extend({
	classNameBindings: ['bookRating'],
	bookRating: function() {
		return 'rating-' + this.get('book.rating');
	}.property('book.rating')
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({});

App.Book = DS.Model.extend({
	title: DS.attr(),
	author: DS.attr(),
	review: DS.attr(),
	rating: DS.attr('number'),
	amazonId: DS.attr(),
	url: function () {
		return "http://www.amazon.com/gp/product/" + this.get('amazonId') + "/viktor_soroka";
	}.property('amazonId'),
	image: function () {
		return "http://images.amazon.com/images/P/" + this.get('amazonId') + ".01.ZTZZZZZZ.jpg";
	}.property('amazonId')
});

App.Book.FIXTURES = [
	{
		id: 1,
		title: 'Mindstorms',
		author: 'Seymour A. Papert',
		review: 'Mindstorms has two central themes: that children can learn to use computers in a masterful way and that learning to use computers can change the way they learn everything else. Even outside the classroom, Papert had a vision that the computer could be used just as casually and as personally for a diversity of purposes throughout a person’s entire life. Seymour Papert makes the point that in classrooms saturated with technology there is actually more socialization and that the technology often contributes to greater interaction among students and among students and instructors.',
		rating: 5,
		amazonId: '0465046746'
	},
	{
		id: 2,
		title: 'Hyperion',
		author: 'Dan Simons',
		review: 'On the world called Hyperion, beyond the law of the Hegemony of Man, there waits the creature called the Shrike.  There are those who worship it.  There are those who fear it.  And there are those who have vowed to destroy it.  In the Valley of the Time Tombs, where huge, brooding structures move backward through time, the Shrike waits for them all.  On the eve of Armageddon, with the entire galaxy at war, seven pilgrims set forth on a final voyage to Hyperion seeking the answers to the unsolved riddles of their lives.  Each carries a desperate hope--and a terrible secret.  And one may hold the fate of humanity in his hands.',
		rating: 5,
		amazonId: '0553283685'
	},
	{
		id: 3,
		title: 'Jony Ive',
		author: 'Leander Kahney',
		review: 'In 1997, Steve Jobs returned to Apple as CEO with the unenviable task of turning around the company he had founded. One night, Jobs discovered a scruffy British designer toiling away at Apple’s corporate headquarters, surrounded by hundreds of sketches and prototypes. It was then that Jobs realized he had found a talent who could reverse the company’s long decline.',
		rating: 2,
		amazonId: '159184617X'
	}
];
