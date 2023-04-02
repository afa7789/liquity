import { Container } from "theme-ui";

import { Trove } from "../components/Trove/Trove";
import { Stability } from "../components/Stability/Stability";
import { SystemStats } from "../components/SystemStats";
import { PriceManager } from "../components/PriceManager";
import { Staking } from "../components/Staking/Staking";
import { BondsTable } from "../components/Bonds/BondsTable";
import { Arthur } from "../components/Arthur";

export const Dashboard: React.FC = () => (
  <>
    <Arthur title="test"></Arthur>
    <Container variant="columns">
    <Container variant="left">
      {/* Comentando o que não está sendo testado nesse deploy */}
      {/* <BondsTable /> */}
      <Trove />
      {/* <Stability /> */}
      {/* <Staking /> */}
    </Container>

    <Container variant="right">
      <SystemStats />
      <PriceManager />
    </Container>
  </Container>
  </>

);
