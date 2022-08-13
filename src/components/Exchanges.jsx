import React from "react";
import millify from "millify";
import { Collapse, Row, Avatar } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
const { Panel } = Collapse;
function Exchanges() {
  const { data, isFetching } = useGetCryptosQuery(100);
  const coins = data?.data?.coins;
  if (isFetching) return <Loader />;
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "20%" }}>Exchanges</div>
        <div style={{ width: "20%" }}>24h Trade Volume</div>
        <div style={{ width: "20%" }}>Market</div>
        <div style={{ width: "20%" }}>Change</div>
      </div>
      <Collapse expandIcon={() => <></>}>
        {coins?.map((coin) => (
          <Panel
            key={coin.uuid}
            header={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "20%" }}>
                  <span style={{ fontWeight: "bold" }}>{coin.rank}.</span>
                  &nbsp;
                  <Avatar src={coin.iconUrl} /> &nbsp;
                  <span>{coin.name}</span>
                </div>
                <div style={{ width: "20%" }}>
                  {millify(coin?.["24hVolume"])}
                </div>
                <div style={{ width: "20%" }}>{millify(coin?.marketCap)}</div>
                <div style={{ width: "20%" }}>{coin?.change}%</div>
              </div>
            }
          >
            <p>nothing here right now</p>
          </Panel>
        ))}
      </Collapse>
    </>
  );
}

export default Exchanges;
