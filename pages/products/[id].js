import React from 'react';
import { getAllAuthor, getAuthorById } from '../../services/authors.service';

export const getStaticPaths = async () => {
  const res = await getAllAuthor();
  const data = res.data;
  const paths = data.map((a) => {
    return {
      params: { id: a.authorID.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await getAuthorById({ id: id });
  const data = res.data;
  return {
    props: { author: data },
  };
};
const Products = ({ author }) => {
  return <div>{author.authorName}</div>;
};

export default Products;
