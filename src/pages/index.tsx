import { GetStaticProps } from "next";
import { FC } from "react";
import { PrismicRichText } from "@prismicio/react";

import { client } from "../prismicClient";
import { HomepageDocument } from "../generated/prismic.types";

type Props = {
  document: HomepageDocument;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const document = await client.getSingle("homepage");

  return {
    props: { document },
  };
};

const Home: FC<Props> = ({ document }) => {
  const data = document.data;

  return (
    <div>
      <h1>{data.title}</h1>
      <PrismicRichText field={data.content} />
    </div>
  );
};

export default Home;
