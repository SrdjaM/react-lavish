import HeroSection from "../../HeroSection";
import { homeObjFour } from "./Data";
import Pricing from "../../Pricing";

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjFour} />
      <Pricing />
    </>
  );
}

export default SignUp;
