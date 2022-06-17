import React from "react";
import Filter from "../../molecules/filter/Filter";
import { useQuery } from "@apollo/client";
import { getFeedbacks } from "../../../util/api/queries";

type Props = {};

export default function Control({}: Props) {
  const { loading, error, data } = useQuery(getFeedbacks);

  const filterFunction = () => null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <aside className="w-72 h-72">
      <Filter
        {...{
          filterFunction: filterFunction,
          filters: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
        }}
      />
    </aside>
  );
}
