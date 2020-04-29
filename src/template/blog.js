import React from 'react';
import { graphql } from 'gatsby';

//eslint-disable-next-line
export default ({ data }) => {
  console.log('data', data);
 
  return (
    <>
      <h1>{data.cbetContent.Title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.cbetContent.Description }} />
    </>
  );
};
export const query = graphql`
  query CbetBlog($id: Int) {
    cbetContent(Id: {eq: $id}) {
      Id
      Title
      Author
      CategoryName
      Category
      CreatedBy
      CreatedDate
      ModifyBy
      ModifyDate
      PartnerName
      StartDate
      EndDate
      Status
      Tags
      Thumbnail
      Description
      Location
      Featured
      Link
    }
  }
`;