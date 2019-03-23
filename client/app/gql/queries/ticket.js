import gql from 'graphql-tag';

const query = gql`
    query tickets {
        tickets {
            id
            problem
            problemDescription
            emailAddress
            contactNumber
        }
    }
`;

export default query;
