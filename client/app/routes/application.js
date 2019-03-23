import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        this.replaceWith('list')
    },
    actions: {
        navigate() {
            this.transitionTo('create');
        },
        home() {
            this.transitionTo('list');
        }
    }
});
