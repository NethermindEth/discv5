// This module has the side effect of setting the ENR crypto implementations to use bcrypto

import { setV4Crypto } from "@nethermindeth/enr";
import * as bcryptoV4Crypto from "./bcryptoV4Crypto.js";

setV4Crypto(bcryptoV4Crypto);
