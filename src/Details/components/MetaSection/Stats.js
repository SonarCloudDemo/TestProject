/* eslint-disable react/prop-types */
import styled from "styled-components";
import { titleCase } from "../../utils";

const StatWrapper = styled.div`
  margin-bottom: 12px;
`;

const StatTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  margin-bottom: 4px;
`;

const StatBarWrapper = styled.div`
  width: 100%;
  border: 1px solid lightgray;
`;

const StatBar = styled.div`
  height: 10px;
  background-color: black;
  width: ${({ value }) => `${(value / 200) * 100}%`};
`;

const Stat = ({ name, value }) => (
  <StatWrapper>
    <StatTitle>
      {titleCase(name)}
      <span>{value} / 200</span>
    </StatTitle>
    <StatBarWrapper>
      <StatBar value={value} />
    </StatBarWrapper>
  </StatWrapper>
);

const Stats = ({ data }) =>
  data.map((stat) => (
    <Stat key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} />
  ));

export { Stats };
