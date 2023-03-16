import { FC } from "react";

import { useApplicationStateStore } from "../../../store";

import {
  GETTING_STARTED_MODAL,
  docsLinks,
  tokenContractDocs,
} from "../../../config/constants";
import { Link } from "../../common/GetLink";

type GettingStartedProps = {};

export const GettingStarted: FC<GettingStartedProps> = ({}) => {
  const { modalId } = useApplicationStateStore((state) => state);

  if (modalId !== GETTING_STARTED_MODAL) return null;

  return (
    <div>
      <h1 className="mb-10 text-3xl">Getting Started</h1>
      {Link({
        url: "https://www.youtube.com/watch?v=D7ooheNAvB0",
        linkTitle: "Instructional Video",
        linkDescription: `One of our devs records himself walking through a transaction from start to finish.`,
      })}
      {Link({
        url: "https://socialaxl.medium.com/f6480c7ff20c",
        linkTitle: "Medium Instructional Guide",
        linkDescription: `A step-by-step Medium post with screenshots at each step of the way through a transaction.`,
      })}
      {Link({
        url: tokenContractDocs[process.env.NEXT_PUBLIC_ENVIRONMENT as string],
        linkTitle: `Token Contracts & Channel IDs (${
          process.env.NEXT_PUBLIC_ENVIRONMENT as string
        })`,
        linkDescription: `An IMPORTANT document with token contract addresses for all
        supported assets.`,
      })}
      {Link({
        url:
          docsLinks[process.env.NEXT_PUBLIC_ENVIRONMENT as string] +
          "#cross-chain-relayer-gas-fee",
        linkTitle: "Minimum Transfer Amounts",
        linkDescription: `Minimum amounts depend on the selected parameters. This document lists all of them in a table.`,
      })}
      <div className="modal-action">
        <label htmlFor={modalId} className="btn">
          Close
        </label>
      </div>
    </div>
  );
};