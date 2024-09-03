import { Helmet } from "react-helmet";

export default function Metadata({ title, description }) {
  return (
    <Helmet>
      <title> {title} </title>
      <meta name="description" content={description} />
      <meta property="og:title" content="Ranjeet Kumar|Portfolio" />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
