import Route from '@ember/routing/route';
import { RouteQueryManager } from 'ember-apollo-client';
import query from 'client/gql/queries/ticket.graphql';

export default Route.extend(RouteQueryManager, {
    async model() {        
        const data = await this.get('apollo').query({
            query: query
        });                
        return data.tickets;
    }
});
