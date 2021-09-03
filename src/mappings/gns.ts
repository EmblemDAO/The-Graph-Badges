/**
 * This mapping handles the events from the Curation contract
 * https://github.com/graphprotocol/contracts/blob/master/contracts/curation/Curation.sol
 */

import {
  SubgraphPublished,
  NSignalMinted,
  NSignalBurned,
} from "../../generated/GNS/GNS";
import { processSubgraphPublished } from "../helpers/subgraphManager";
import { log } from "@graphprotocol/graph-ts";
import {
  processCurationBurn,
  processCurationSignal,
} from "../helpers/CurationManager";

export function handleSubgraphPublished(event: SubgraphPublished): void {
  log.debug("SubgraphPublished event found", []);
  processSubgraphPublished(event);
}

export function handleNSignalMinted(event: NSignalMinted): void {
  log.debug("NSignalMinted event found", []);
  processCurationSignal(event);
}

export function handleNSignalBurned(event: NSignalBurned): void {
  log.debug("NSignalBurned event found", []);
  processCurationBurn(event);
}
