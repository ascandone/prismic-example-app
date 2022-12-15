import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { client } from "../../../prismicClient";
import { assertNotNull } from "../../../utils";

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await client.getAllByType("post");

  return {
    paths: documents.map((doc) => {
      assertNotNull(doc.url, "post.url");
      return doc.url;
    }),

    fallback: false,
  };
};

type Props = {
  document: Content.PostDocument;
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  const document = await client.getByUID("post", params!.slug);

  return {
    props: { document },
  };
};

const Post: FC<Props> = ({ document }) => {
  const { data } = document;

  return (
    <div>
      <h2>Article / {data.title}</h2>
      <PrismicRichText field={data.content} />
    </div>
  );
};

export default Post;
