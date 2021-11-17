import React from 'react'
import { gql, GraphQLClient } from 'graphql-request';

export const getStaticProps = async () => {
    const url = process.env.ENDPOINT
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
        },
    });

    const wastelanderQuery = gql`
    query {
        wastelanders {
            id
            name
            costume
            creativity
            originality
            wisdom
            }
    }
    `;

    const data = await graphQLClient.request(wastelanderQuery)
    const wastelanders = data.wastelanders;
    console.log(wastelanders)

    return {
        props: {
            wastelanders,
        },
    };
};
function vote() {
    return (
        <div>
            <h1>Vote</h1>
        </div>
    )
}

export default vote
