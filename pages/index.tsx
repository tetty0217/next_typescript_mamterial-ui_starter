import * as React from "react";
import {NextPage} from "next"

const Home: NextPage = () => (
    <h1>Hello world!</h1>
);

Home.getInitialProps = async ({req}) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return {userAgent};
};

export default Home;
