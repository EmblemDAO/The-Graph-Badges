import { Curator, BadgeDefinition } from "../../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts/index";
import {
  BADGE_DESCRIPTION_SUBGRAPH_SHARK,
  BADGE_NAME_SUBGRAPH_SHARK,
  BADGE_VOTE_POWER_SUBGRAPH_SHARK,
} from "../helpers/constants";
import {
  createBadgeAward,
  createOrLoadBadgeDefinition,
} from "../helpers/models";

export function processCurationBurnForSubgraphShark(
  curator: Curator,
  oldACB: BigDecimal,
  currentACB: BigDecimal,
  blockNumber: BigInt
): void {
  if (currentACB.lt(oldACB)) {
    createBadgeAward(_badgeDefinition(), curator.id, blockNumber);
  }
}

function _badgeDefinition(): BadgeDefinition {
  return createOrLoadBadgeDefinition(
    BADGE_NAME_SUBGRAPH_SHARK,
    BADGE_DESCRIPTION_SUBGRAPH_SHARK,
    BigInt.fromI32(BADGE_VOTE_POWER_SUBGRAPH_SHARK),
    "TBD",
    "TBD"
  );
}
