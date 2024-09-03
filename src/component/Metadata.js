import { Helmet } from "react-helmet";

export default function Metadata({ title, description }) {
  return (
    <Helmet>
      <title> {title} </title>
      <meta property="og:title" content="Ranjeet Kumar|Portfolio" />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://ranjeet2311.github.io/upgraded/images/social_card.png"
      />
    </Helmet>
  );
}
