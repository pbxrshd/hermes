var DATA = {
  "RAPTORS" : {
    "RTH" : {
      "name" : "Red-Tailed Hawk",
      "pic" : "res/img/raptors/RTH.jpg"
    },
    "GHO" : {
      "name" : "Great Horned Owl",
      "pic" : "res/img/raptors/GHO.jpg"
    },
    "AK" : {
      "name" : "American Kestrel",
      "pic" : "res/img/raptors/AK.jpg"
    },
    "BO" : {
      "name" : "Barred Owl",
      "pic" : "res/img/raptors/BO.jpg"
    },
    "WSO" : {
      "name" : "Western Screech Owl",
      "pic" : "res/img/raptors/WSO.jpg"
    }
  },
  "PEOPLE" : [
    {"name" : "David", "pic" : "res/img/people/david.jpg"},
    {"name" : "Larson", "pic" : "res/img/people/larson.jpg"},
    {"name" : "Ioannis", "pic" : "res/img/people/ioannis.jpg"},
    {"name" : "Megan", "pic" : "res/img/people/megan.jpg"},
    {"name" : "Nydia", "pic" : "res/img/people/nydia.jpg"},
    {"name" : "Sara", "pic" : "res/img/people/sara.jpg"},
    {"name" : "Shakira", "pic" : "res/img/people/shakira.jpg"}
  ],
  "LOG_ATTRS" : ["weight","rodent","quail","remains","casts","feces","urates","attitude","cleaning","water","exercise","weather"],
  "LOG_CONTROLS" : {
    "weight" : {"min":50,"max":100,"hint":""},
    "rodent" : {"min":0,"max":8,"hint":""},
    "quail" : {"min":0,"max":4,"hint":""},
    "remains" : {"min":0,"max":8,"hint":""},
    "casts" : {"min":0,"max":8,"hint":""},
    //"feces" : {"values":[["normal","abnormal"]]},
    //"urates" : {"values":[["normal","abnormal"]]},
    //"attitude" : {"values":[["aware","unaware"],["responsive","unresponsive"],["quiet","vocal"],"agressive","puffed up","weak","stressed"]},
    //"cleaning" : {"values":[["did not clean","spot cleaned","deep cleaned"]]},
    //"water" : {"values":[["did not change","fresh water"]]},
    //"exercise" : {"values":[["indoor","weathered","walked","at program"]]},
    //"weather" : {"values":["sunny","windy","humid","rain","snow","ice"]}
    "feces" : {"values":["normal","abnormal"],"hint":""},
    "urates" : {"values":["normal","abnormal"],"hint":""},
    "attitude" : {"values":["aware","unaware","responsive","unresponsive","quiet","vocal","agressive","puffed up","weak","stressed"],"hint":""},
    "cleaning" : {"values":["spot cleaned","deep cleaned"],"hint":""},
    "water" : {"values":["did not change","fresh water"],"hint":""},
    "exercise" : {"values":["indoor","weathered","walked","at program"],"hint":""},
    "weather" : {"values":["sunny","windy","humid","rain","snow","ice"],"hint":""}
  },

  "LOG" : {
    "RTH" : {
      "date" : "Yesterday",
      "weight" : "",
      "rodent" : "",
      "quail" : "",
      "remains" : "",
      "casts" : "",
      "feces" : "",
      "urates" : "",
      "attitude" : "",
      "cleaning" : "",
      "water" : "",
      "exercise" : "",
      "weather" : ""
    },
    "GHO" : {
      "date" : "Today",
      "weight" : "95",
      "rodent" : "2",
      "quail" : "1",
      "remains" : "8",
      "casts" : "2",
      "feces" : "",
      "urates" : "normal",
      "attitude" : "responsive",
      "cleaning" : "spot cleaned",
      "water" : "fresh water",
      "exercise" : "walked",
      "weather" : "sunny"
    },
    "AK" : {
      "date" : "Yesterday",
      "weight" : "",
      "rodent" : "",
      "quail" : "",
      "remains" : "",
      "casts" : "",
      "feces" : "",
      "urates" : "",
      "attitude" : "",
      "cleaning" : "",
      "water" : "",
      "exercise" : "",
      "weather" : ""
    },
    "BO" : {
      "date" : "Today",
      "weight" : "52",
      "rodent" : "2",
      "quail" : "0",
      "remains" : "5",
      "casts" : "2",
      "feces" : "normal",
      "urates" : "",
      "attitude" : "agressive",
      "cleaning" : "deep cleaned",
      "water" : "fresh water",
      "exercise" : "indoor",
      "weather" : "sunny"
    },
    "WSO" : {
      "date" : "Today",
      "weight" : "35",
      "rodent" : "1",
      "quail" : "0",
      "remains" : "2",
      "casts" : "1",
      "feces" : "abnormal",
      "urates" : "normal",
      "attitude" : "quiet",
      "cleaning" : "did not clean",
      "water" : "did not change",
      "exercise" : "weathered",
      "weather" : "sunny"
    }
  },
  "SCHEDULE" : {
    "maxDate" : "2016-12-20"
  }

}