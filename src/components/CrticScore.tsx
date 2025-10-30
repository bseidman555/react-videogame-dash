import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CrticScore = ({ score }: Props) => {
  return <Badge>{score}</Badge>;
};

export default CrticScore;
