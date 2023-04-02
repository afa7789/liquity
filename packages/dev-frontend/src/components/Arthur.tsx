import { useLiquity } from "../hooks/LiquityContext";
import { Box, Button } from "theme-ui";
import PriceFeedABI from "@liquity/lib-ethers/abi/PriceFeed.json";
import { useContract } from "../hooks/useContract";
import { PriceFeed } from "@liquity/lib-ethers/dist/types";

type InfoMessageProps = {
  title: string;
  icon?: React.ReactNode;
};

export const Arthur: React.FC<InfoMessageProps> = ({ title, children, icon }) => {
  const { liquity } = useLiquity();

  const [priceFeedDefault, priceFeedDefaultStatus] = useContract<PriceFeed>(
    liquity.connection.addresses.priceFeed,
    PriceFeedABI
  );

  const handleFetchPrice = async () => {
    try {
      const price = await priceFeedDefault?.fetchPrice();
      console.log("price", price);
      // Wait for the transaction to be confirmed
      const receipt = await price?.wait()
      if (receipt?.status === 0x1) {
        // Transaction succeeded, fetch the event
        console.log("", priceFeedDefault?.lastGoodPrice)
      } else {
        // Transaction failed
        console.log("Transaction failed");
      }
  } catch (err) {
    console.log("err", err);
  }
};

return (
  <Box sx={{ mx: 1, mb: 3 }}>
    {JSON.stringify(liquity.connection.addresses.lusdToken, null, 2)}
    <Button onClick={handleFetchPrice}>Fetch Price</Button>
  </Box>
);
};