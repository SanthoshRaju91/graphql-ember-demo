import Controller from '@ember/controller';
import { RouteQueryManager } from 'ember-apollo-client';
import mutation from 'client/gql/mutations/ticket.graphql';

export default Controller.extend(RouteQueryManager, {   
    actions: {
        create(data) {
            this.get('apollo').mutate({
                mutation,
                variables: {
                    input: {
                        problem: data.problem,
                        problemDescription: data.desc,
                        emailAddress: data.email,
                        contactNumber: data.contact
                    }
                }
            })
        }
    }
});
