import * as React from "react";
import {NextPage} from "next"

const Agent: NextPage<{ userAgent: string }> = ({userAgent}) => (
    <h1>Hello world! - user agent: {userAgent}</h1>
);

Agent.getInitialProps = async ({req}) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return {userAgent};
};

export default Agent;
