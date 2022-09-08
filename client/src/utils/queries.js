 // query GET_ME which will execute the me query set up using Apollo Server.

 import gql from 'graphql-tag';

    export const QUERY_ME = gql`
        query me {
            me {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    authors
                    description
                    title
                    image
                    link
                }
            }
        }
    `;

