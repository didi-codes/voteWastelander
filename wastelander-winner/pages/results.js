import { gql, GraphQLClient } from 'graphql-request';
import Nav from '../components/Nav';
import Section from '../components/Section';

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
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

  const data = await graphQLClient.request(wastelanderQuery);
  const wastelanders = data.wastelanders;
  console.log(wastelanders);

  return {
    props: {
      wastelanders,
    },
  };
};

const Results = ({ wastelanders }) => {
  return (
    <div>
     <Nav />
      <div>
        <h1>Results</h1>
        <Section wastelanders={wastelanders} />
      </div>
      <div></div>
    </div>
  );
};

export default Results;
