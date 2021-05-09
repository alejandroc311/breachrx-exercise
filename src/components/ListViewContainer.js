import React from 'react';
import ReactDOM from 'react-dom';
import ListViewItem from "./ListViewItem.js"
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    continent(code:"EU"){
      countries {
        name
        code
        emoji
        languages{
          name
        }
        currency
        capital
        native
      }
    }
  }
`;
function ListViewContainer(props){
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  var listViewItems = data.continent.countries;
  listViewItems = listViewItems.slice();
  var i;
  for(i = listViewItems.length - 1; i>=0;i-=1){
    if (listViewItems[i].name.length > 14){
      listViewItems.splice(i,1);
    }
  }
  const listViewItem = listViewItems.map((item) =>
  <div className="container-fluid" key={item.name}>
    <div className="row d-flex align-items-center">
      <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-12">
        <ListViewItem countryName={item.name} countryEmoji={item.emoji} countryId={item.emoji}
        countryCapital={item.capital} countryNative={item.native} countryCurrency={item.currency} countryLanguage={item.languages[0].name}
         />
      </div>
    </div>
  </div>
  );

  return(
    <div>
      {listViewItem}
    </div>

  );
}
export default ListViewContainer;
