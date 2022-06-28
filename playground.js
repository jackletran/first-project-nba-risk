const stephCurry = {
  team: null,
  boostUnits: 0,
  stateInfo: {
    statesArray: [],
    statesCount: 0,
    unitsInThatState: {
      TX: 0,
      WA: 0,
      OR: 0,
      ID: 0,
      MT: 0,
      // WY: 0,
      // CA: 0,
      // HI: 0,
      // AK: 0,
      // NV: 0,
      // UT: 0,
      // CO: 0,
      // NM: 0,
      // AZ: 0,
      // ND: 0,
      // SD: 0,
      // NE: 0,
      // KS: 0,
      // OK: 0,
      // MN: 0,
      // IA: 0,
      // MO: 0,
      // AR: 0,
      // LA: 0,
      // WI: 0,
      // IL: 0,
      // MI: 0,
      // IN: 0,
      // OH: 0,
      // AL: 0,
    },
  },
};

const kyrieIrving = {
  team: null,
  boostUnits: 0,
  stateInfo: {
    statesArray: [],
    statesCount: 0,
    unitsInThatState: {
      TX: 0,
      WA: 0,
      OR: 0,
      ID: 0,
      MT: 0,
      WY: 0,
      CA: 0,
      HI: 0,
      AK: 0,
      NV: 0,
      UT: 0,
      CO: 0,
      NM: 0,
      AZ: 0,
      ND: 0,
      SD: 0,
      NE: 0,
      KS: 0,
      OK: 0,
      MN: 0,
      IA: 0,
      MO: 0,
      AR: 0,
      LA: 0,
      WI: 0,
      IL: 0,
      MI: 0,
      IN: 0,
      OH: 0,
      AL: 0,
    },
  },
};

const statesLoopArray = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CZ",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

//
// Before
//

console.log(stephCurry.team);
console.log(stephCurry.boostUnits);
console.log(stephCurry.stateInfo);
console.log(stephCurry.stateInfo.statesArray);
console.log(stephCurry.stateInfo.statesCount);
console.log(stephCurry.stateInfo.unitsInThatState);
console.log(stephCurry.stateInfo.unitsInThatState.TX);
console.log(stephCurry.stateInfo.unitsInThatState.WA);
console.log(stephCurry.stateInfo.unitsInThatState.OR);
console.log(stephCurry.stateInfo.unitsInThatState.ID);
console.log(stephCurry.stateInfo.unitsInThatState.MT);

console.log(Object.keys(stephCurry.stateInfo.unitsInThatState));
console.log(Object.values(stephCurry.stateInfo.unitsInThatState));
//
//
//

let selectedState = "TX"; // a value from statesLoopArray

const stephCurryStates = Object.keys(stephCurry.stateInfo.unitsInThatState);

let stephCurryUnitsInThatState = Object.values(
  stephCurry.stateInfo.unitsInThatState
);

for (let i = 0; i < stephCurryStates.length; i++) {
  if (stephCurryStates[i] === selectedState) {
    stephCurryUnitsInThatState[i]++;
    console.log(Object.keys(stephCurry.stateInfo.unitsInThatState));
    console.log(Object.values(stephCurry.stateInfo.unitsInThatState));
    stephCurry.stateInfo.unitsInThatState = stephCurryUnitsInThatState;
    console.log(Object.keys(stephCurry.stateInfo.unitsInThatState));
    console.log(Object.values(stephCurry.stateInfo.unitsInThatState));

    //////////////////////////////////////////^^^^^^^^^^^^^how can I make this dynamic?
    //     // OR
    //     // stephCurry.stateInfo.unitsInThatState.TX++;
  }
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// After
//

console.log(stephCurry.team);
console.log(stephCurry.boostUnits);
console.log(stephCurry.stateInfo);
console.log(stephCurry.stateInfo.statesArray);
console.log(stephCurry.stateInfo.statesCount);
console.log(stephCurry.stateInfo.unitsInThatState);
console.log(stephCurry.stateInfo.unitsInThatState.TX);
console.log(stephCurry.stateInfo.unitsInThatState.WA);
console.log(stephCurry.stateInfo.unitsInThatState.OR);
console.log(stephCurry.stateInfo.unitsInThatState.ID);
console.log(stephCurry.stateInfo.unitsInThatState.MT);

console.log(Object.keys(stephCurry.stateInfo.unitsInThatState));
console.log(Object.values(stephCurry.stateInfo.unitsInThatState));

console.log(stephCurryStates[3]);

//
//
//

// switch (true) {
//   case selectedState === "AL":
//     stephCurry.stateInfo.unitsInThatState.AL++;
//     break;
//   case selectedState === "AK":
//     stephCurry.stateInfo.unitsInThatState.AK++;
//     break;
//   case selectedState === "AZ":
//     stephCurry.stateInfo.unitsInThatState.AZ++;
//     break;
//   case selectedState === "AR":
//     stephCurry.stateInfo.unitsInThatState.AR++;
//     break;
//   case selectedState === "CA":
//     stephCurry.stateInfo.unitsInThatState.CA++;
//     break;
//   case selectedState === "CZ":
//     stephCurry.stateInfo.unitsInThatState.CZ++;
//     break;
//   case selectedState === "CO":
//     stephCurry.stateInfo.unitsInThatState.CO++;
//     break;
//   case selectedState === "CT":
//     stephCurry.stateInfo.unitsInThatState.CT++;
//     break;
//   case selectedState === "DE":
//     stephCurry.stateInfo.unitsInThatState.DE++;
//     break;
//   case selectedState === "DC":
//     stephCurry.stateInfo.unitsInThatState.DC++;
//     break;
//   case selectedState === "FL":
//     stephCurry.stateInfo.unitsInThatState.FL++;
//     break;
//   case selectedState === "GA":
//     stephCurry.stateInfo.unitsInThatState.GA++;
//     break;
//   case selectedState === "GU":
//     stephCurry.stateInfo.unitsInThatState.GU++;
//     break;
//   case selectedState === "HI":
//     stephCurry.stateInfo.unitsInThatState.HI++;
//     break;
//   case selectedState === "ID":
//     stephCurry.stateInfo.unitsInThatState.ID++;
//     break;
//   case selectedState === "IL":
//     stephCurry.stateInfo.unitsInThatState.IL++;
//     break;
//   case selectedState === "IN":
//     stephCurry.stateInfo.unitsInThatState.IN++;
//     break;
//   case selectedState === "IA":
//     stephCurry.stateInfo.unitsInThatState.IA++;
//     break;
//   case selectedState === "KS":
//     stephCurry.stateInfo.unitsInThatState.KS++;
//     break;
//   case selectedState === "KY":
//     stephCurry.stateInfo.unitsInThatState.KY++;
//     break;
//   case selectedState === "LA":
//     stephCurry.stateInfo.unitsInThatState.LA++;
//     break;
//   case selectedState === "ME":
//     stephCurry.stateInfo.unitsInThatState.ME++;
//     break;
//   case selectedState === "MD":
//     stephCurry.stateInfo.unitsInThatState.MD++;
//     break;
//   case selectedState === "MA":
//     stephCurry.stateInfo.unitsInThatState.MA++;
//     break;
//   case selectedState === "MI":
//     stephCurry.stateInfo.unitsInThatState.MI++;
//     break;
//   case selectedState === "MN":
//     stephCurry.stateInfo.unitsInThatState.MN++;
//     break;
//   case selectedState === "MS":
//     stephCurry.stateInfo.unitsInThatState.MS++;
//     break;
//   case selectedState === "MO":
//     stephCurry.stateInfo.unitsInThatState.MO++;
//     break;
//   case selectedState === "MT":
//     stephCurry.stateInfo.unitsInThatState.MT++;
//     break;
//   case selectedState === "NE":
//     stephCurry.stateInfo.unitsInThatState.NE++;
//     break;
//   case selectedState === "NV":
//     stephCurry.stateInfo.unitsInThatState.NV++;
//     break;
//   case selectedState === "NH":
//     stephCurry.stateInfo.unitsInThatState.NH++;
//     break;
//   case selectedState === "NJ":
//     stephCurry.stateInfo.unitsInThatState.NJ++;
//     break;
//   case selectedState === "NM":
//     stephCurry.stateInfo.unitsInThatState.NM++;
//     break;
//   case selectedState === "NY":
//     stephCurry.stateInfo.unitsInThatState.NY++;
//     break;
//   case selectedState === "NC":
//     stephCurry.stateInfo.unitsInThatState.NC++;
//     break;
//   case selectedState === "ND":
//     stephCurry.stateInfo.unitsInThatState.ND++;
//     break;
//   case selectedState === "OH":
//     stephCurry.stateInfo.unitsInThatState.OH++;
//     break;
//   case selectedState === "OK":
//     stephCurry.stateInfo.unitsInThatState.OK++;
//     break;
//   case selectedState === "OR":
//     stephCurry.stateInfo.unitsInThatState.OR++;
//     break;
//   case selectedState === "PA":
//     stephCurry.stateInfo.unitsInThatState.PA++;
//     break;
//   case selectedState === "PR":
//     stephCurry.stateInfo.unitsInThatState.PR++;
//     break;
//   case selectedState === "RI":
//     stephCurry.stateInfo.unitsInThatState.RI++;
//     break;
//   case selectedState === "SC":
//     stephCurry.stateInfo.unitsInThatState.SC++;
//     break;
//   case selectedState === "SD":
//     stephCurry.stateInfo.unitsInThatState.SD++;
//     break;
//   case selectedState === "TN":
//     stephCurry.stateInfo.unitsInThatState.TN++;
//     break;
//   case selectedState === "TX":
//     stephCurry.stateInfo.unitsInThatState.TX++;
//     break;
//   case selectedState === "UT":
//     stephCurry.stateInfo.unitsInThatState.UT++;
//     break;
//   case selectedState === "VT":
//     stephCurry.stateInfo.unitsInThatState.VT++;
//     break;
//   case selectedState === "VI":
//     stephCurry.stateInfo.unitsInThatState.VI++;
//     break;
//   case selectedState === "VA":
//     stephCurry.stateInfo.unitsInThatState.VA++;
//     break;
//   case selectedState === "WA":
//     stephCurry.stateInfo.unitsInThatState.WA++;
//     break;
//   case selectedState === "WV":
//     stephCurry.stateInfo.unitsInThatState.WV++;
//     break;
//   case selectedState === "WI":
//     stephCurry.stateInfo.unitsInThatState.WI++;
//     break;
//   case selectedState === "WY":
//     stephCurry.stateInfo.unitsInThatState.WY++;
//     break;
//   // Wenn Spieler 2 dran ist
//   // case selectedState === "AL":
//   //   kyrieIrving.stateInfo.unitsInThatState.AL++;
//   //   break;
//   // case selectedState === "AK":
//   //   kyrieIrving.stateInfo.unitsInThatState.AK++;
//   //   break;
//   // case selectedState === "AZ":
//   //   kyrieIrving.stateInfo.unitsInThatState.AZ++;
//   //   break;
//   // case selectedState === "AR":
//   //   kyrieIrving.stateInfo.unitsInThatState.AR++;
//   //   break;
//   // case selectedState === "CA":
//   //   kyrieIrving.stateInfo.unitsInThatState.CA++;
//   //   break;
//   // case selectedState === "CZ":
//   //   kyrieIrving.stateInfo.unitsInThatState.CZ++;
//   //   break;
//   // case selectedState === "CO":
//   //   kyrieIrving.stateInfo.unitsInThatState.CO++;
//   //   break;
//   // case selectedState === "CT":
//   //   kyrieIrving.stateInfo.unitsInThatState.CT++;
//   //   break;
//   // case selectedState === "DE":
//   //   kyrieIrving.stateInfo.unitsInThatState.DE++;
//   //   break;
//   // case selectedState === "DC":
//   //   kyrieIrving.stateInfo.unitsInThatState.DC++;
//   //   break;
//   // case selectedState === "FL":
//   //   kyrieIrving.stateInfo.unitsInThatState.FL++;
//   //   break;
//   // case selectedState === "GA":
//   //   kyrieIrving.stateInfo.unitsInThatState.GA++;
//   //   break;
//   // case selectedState === "GU":
//   //   kyrieIrving.stateInfo.unitsInThatState.GU++;
//   //   break;
//   // case selectedState === "HI":
//   //   kyrieIrving.stateInfo.unitsInThatState.HI++;
//   //   break;
//   // case selectedState === "ID":
//   //   kyrieIrving.stateInfo.unitsInThatState.ID++;
//   //   break;
//   // case selectedState === "IL":
//   //   kyrieIrving.stateInfo.unitsInThatState.IL++;
//   //   break;
//   // case selectedState === "IN":
//   //   kyrieIrving.stateInfo.unitsInThatState.IN++;
//   //   break;
//   // case selectedState === "IA":
//   //   kyrieIrving.stateInfo.unitsInThatState.IA++;
//   //   break;
//   // case selectedState === "KS":
//   //   kyrieIrving.stateInfo.unitsInThatState.KS++;
//   //   break;
//   // case selectedState === "KY":
//   //   kyrieIrving.stateInfo.unitsInThatState.KY++;
//   //   break;
//   // case selectedState === "LA":
//   //   kyrieIrving.stateInfo.unitsInThatState.LA++;
//   //   break;
//   // case selectedState === "ME":
//   //   kyrieIrving.stateInfo.unitsInThatState.ME++;
//   //   break;
//   // case selectedState === "MD":
//   //   kyrieIrving.stateInfo.unitsInThatState.MD++;
//   //   break;
//   // case selectedState === "MA":
//   //   kyrieIrving.stateInfo.unitsInThatState.MA++;
//   //   break;
//   // case selectedState === "MI":
//   //   kyrieIrving.stateInfo.unitsInThatState.MI++;
//   //   break;
//   // case selectedState === "MN":
//   //   kyrieIrving.stateInfo.unitsInThatState.MN++;
//   //   break;
//   // case selectedState === "MS":
//   //   kyrieIrving.stateInfo.unitsInThatState.MS++;
//   //   break;
//   // case selectedState === "MO":
//   //   kyrieIrving.stateInfo.unitsInThatState.MO++;
//   //   break;
//   // case selectedState === "MT":
//   //   kyrieIrving.stateInfo.unitsInThatState.MT++;
//   //   break;
//   // case selectedState === "NE":
//   //   kyrieIrving.stateInfo.unitsInThatState.NE++;
//   //   break;
//   // case selectedState === "NV":
//   //   kyrieIrving.stateInfo.unitsInThatState.NV++;
//   //   break;
//   // case selectedState === "NH":
//   //   kyrieIrving.stateInfo.unitsInThatState.NH++;
//   //   break;
//   // case selectedState === "NJ":
//   //   kyrieIrving.stateInfo.unitsInThatState.NJ++;
//   //   break;
//   // case selectedState === "NM":
//   //   kyrieIrving.stateInfo.unitsInThatState.NM++;
//   //   break;
//   // case selectedState === "NY":
//   //   kyrieIrving.stateInfo.unitsInThatState.NY++;
//   //   break;
//   // case selectedState === "NC":
//   //   kyrieIrving.stateInfo.unitsInThatState.NC++;
//   //   break;
//   // case selectedState === "ND":
//   //   kyrieIrving.stateInfo.unitsInThatState.ND++;
//   //   break;
//   // case selectedState === "OH":
//   //   kyrieIrving.stateInfo.unitsInThatState.OH++;
//   //   break;
//   // case selectedState === "OK":
//   //   kyrieIrving.stateInfo.unitsInThatState.OK++;
//   //   break;
//   // case selectedState === "OR":
//   //   kyrieIrving.stateInfo.unitsInThatState.OR++;
//   //   break;
//   // case selectedState === "PA":
//   //   kyrieIrving.stateInfo.unitsInThatState.PA++;
//   //   break;
//   // case selectedState === "PR":
//   //   kyrieIrving.stateInfo.unitsInThatState.PR++;
//   //   break;
//   // case selectedState === "RI":
//   //   kyrieIrving.stateInfo.unitsInThatState.RI++;
//   //   break;
//   // case selectedState === "SC":
//   //   kyrieIrving.stateInfo.unitsInThatState.SC++;
//   //   break;
//   // case selectedState === "SD":
//   //   kyrieIrving.stateInfo.unitsInThatState.SD++;
//   //   break;
//   // case selectedState === "TN":
//   //   kyrieIrving.stateInfo.unitsInThatState.TN++;
//   //   break;
//   // case selectedState === "TX":
//   //   kyrieIrving.stateInfo.unitsInThatState.TX++;
//   //   break;
//   // case selectedState === "UT":
//   //   kyrieIrving.stateInfo.unitsInThatState.UT++;
//   //   break;
//   // case selectedState === "VT":
//   //   kyrieIrving.stateInfo.unitsInThatState.VT++;
//   //   break;
//   // case selectedState === "VI":
//   //   kyrieIrving.stateInfo.unitsInThatState.VI++;
//   //   break;
//   // case selectedState === "VA":
//   //   kyrieIrving.stateInfo.unitsInThatState.VA++;
//   //   break;
//   // case selectedState === "WA":
//   //   kyrieIrving.stateInfo.unitsInThatState.WA++;
//   //   break;
//   // case selectedState === "WV":
//   //   kyrieIrving.stateInfo.unitsInThatState.WV++;
//   //   break;
//   // case selectedState === "WI":
//   //   kyrieIrving.stateInfo.unitsInThatState.WI++;
//   //   break;
//   // case selectedState === "WY":
//   //   kyrieIrving.stateInfo.unitsInThatState.WY++;
//   //   break;
//   default:
//     console.log("Something is wrong!");
// }
