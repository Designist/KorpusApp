import React from 'react';
import id from 'shortid';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
var Orientation = require('react-native-orientation');

var data2 = {
  "metadata": {
    "tier IDs": {
      "T1": "A'ingae",
      "T2": "English",
      "T3": "Morphemes",
      "T4": "Glossed Morpheme"
    },
    "speaker IDs": {
      "S1": {
        "name": "Martin Criollo",
        "language": "con",
        "tier": "T1"
      }
    },
    "title": "Intro-Ingi Cansecho Ande"
  },
  "sentences": [
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 43536,
      "end_time_ms": 45004,
      "num_slots": 1,
      "text": "<- Singing",
      "dependents": []
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 45265,
      "end_time_ms": 47146,
      "num_slots": 2,
      "text": "Ingitangi a'indeccu'fa",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 2,
              "value": "We are A'i."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Ingi=ta=ngi"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "a'i-ndeccu-'fa"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "we=TOP=1"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "person-HUM.PL-PL.SUBJ"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 47746,
      "end_time_ms": 50668,
      "num_slots": 4,
      "text": "Ecuadorningi canse'fa mil a'indeccu",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 4,
              "value": "A thousand of us A'i live in Ecuador."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Ecuador=ni=ngi"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "canse-'fa"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "mil"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "a'i-ndeccu"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Ecuador=LOC=1"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "live-PL.SUBJ"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "thousand"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "person-HUM.PL"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 50805,
      "end_time_ms": 54189,
      "num_slots": 6,
      "text": "Toya'caen Colombiani quentsu canse'fa ba've mil ",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 6,
              "value": "Approximately 1,000 more live in Colombia."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Toya'caen"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "Colombia=ni"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "qquen=tsu"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "canse-'fa"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "ba've"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "mil"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "also"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "Colombia=LOC"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "thus=3"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "live-PL.SUBJ"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "approximately"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "thousand"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 54589,
      "end_time_ms": 56536,
      "num_slots": 4,
      "text": "Pa'cco=ja dos mil a'i",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 4,
              "value": "Together, we number 2,000."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Pa'cco=ja"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "dos"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "mil"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "a'i"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "all=CONTR"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "two"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "thousand"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "person"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 57826,
      "end_time_ms": 61673,
      "num_slots": 6,
      "text": "Poiyi canqque'su a'indeccungi afapa canse'fa a'ingae",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 6,
              "value": "In all of our communities, we speak A'ingae."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Poiyi"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "canqque='su"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "a'i-ndeccu=ngi"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "afa-pa"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "canse-'fa"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "a'ingae"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "all"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "town=NMLZ"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "person-HUM.PL=1"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "speak=SS"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "live-PL.SUBJ"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "A'ingae"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 62930,
      "end_time_ms": 67800,
      "num_slots": 6,
      "text": "Ingitangi na'ensuma panzaye injanda simba'fai'ccu simba'fa",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 6,
              "value": "If we want food from our rivers, we use hooks, lines, and nets."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Ingi=ta=ngi"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "na'en=su=ma"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "panza-ye"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "injan=nda"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "we=TOP=1"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "river=AGT=ACC"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "hunt-INF"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "want=COND"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 68594,
      "end_time_ms": 74599,
      "num_slots": 6,
      "text": "Tsampisu aña'cho'ma panzayetangi a'mbian'fa ufa'ccocco satama",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 6,
              "value": "If we want food from our forests, we use blowguns and spears."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Tsampi=su"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "aña'cho'=ma"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "panza=ye=ta=ngi"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "a'mbian='fa"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "forest=AGT"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "food=ACC"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "hunt=INF=COND=1"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "have=PL.SUBJ"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 75725,
      "end_time_ms": 79088,
      "num_slots": 5,
      "text": "tsa'ma ja'ñoningaetangi panzapa canse'fa potae'ngoi'ccu",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 5,
              "value": "Now, we also use rifles and shotguns."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "tsa='ma"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "ja'ño=ni=ngae=ta=ngi"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "panza=pa"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "canse-'fa"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "potae'ngo-i'ccu"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "ANA=FRUST"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "now=LOC=MANN=TOP=1"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "hunt=SS"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "live-PL.SUBJ"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "gun=INST"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 80431,
      "end_time_ms": 82810,
      "num_slots": 4,
      "text": "Coragandeccu tsu yajema cu'ipa",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 4,
              "value": "Our shamans drink yaje"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Coraga=ndeccu"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "tsu"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "yaje=ma"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "cu'i=pa"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "curandero=HUM.PL"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "3"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "ayahuasca=ACC"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "drink=SS"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 83337,
      "end_time_ms": 84969,
      "num_slots": 3,
      "text": "a'indeccuma se'jepa canse'fa",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 3,
              "value": "and cure us."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "a'i=ndeccu=ma"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "se'je=pa"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "canse-'fa"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "person=HUM.PL"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "cure=SS"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "live-PL.SUBJ"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 85652,
      "end_time_ms": 89531,
      "num_slots": 6,
      "text": "poi a'i can'qqueni tsu coragandeccu canse'fa",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 6,
              "value": "There are shamans in all our communities."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "poi"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "a'i"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "can'qque=ni"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "tsu"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "coraga=ndeccu"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "canse-'fa"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "all"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "person"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "town=LOC"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "3"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "curandero=HUM.PL"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "live-PL.SUBJ"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 91014,
      "end_time_ms": 95051,
      "num_slots": 6,
      "text": "Cayambe 'cco=ta=cco=ya ansunde=pa=qui atte=ya pa'cco a'i andema.",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 6,
              "value": "If you climb Cayambe mountain, you can see all of Cofán land."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Cayambe ccotta'cco=ya"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "ansunde=pa=qui"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "atte=ya"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "pa'cco"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "a'i"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "ande=ma"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Cayambe mountain=IRR"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "climb=SS=2"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "see=IRR"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "all"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "Cofán"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "land=ACC"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 97697,
      "end_time_ms": 99365,
      "num_slots": 4,
      "text": "Ingi a'indeccuta tsu canse'fa",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 4,
              "value": "We Cofán live"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Ingi"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "a'i=ndeccu=ta"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "tsu"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "canse-'fa"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "We"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "Cofán=HUM.PL=TOP"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "3"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "live-PL.SUBJ"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 99973,
      "end_time_ms": 100757,
      "num_slots": 1,
      "text": "Aguarico",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Aguarico"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Aguarico"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Aguarico"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 101123,
      "end_time_ms": 102081,
      "num_slots": 2,
      "text": "San Miguel",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 2,
              "value": "San Miguel"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "San"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "Miguel"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "San"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "Miguel"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 102349,
      "end_time_ms": 103028,
      "num_slots": 1,
      "text": "tsutoni",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "headwaters"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "tsuto=ni"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "headwater=LOC"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 103388,
      "end_time_ms": 104846,
      "num_slots": 3,
      "text": "toya'caen coca na'eni",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 3,
              "value": "also on the Coca River"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "na'e=ni"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "river=LOC"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 104964,
      "end_time_ms": 105980,
      "num_slots": 2,
      "text": "Putumayo na'eni",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 2,
              "value": "the Putumayo River"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Putumayo"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "na'e=ni"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Putumayo"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "river=LOC"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 106667,
      "end_time_ms": 107777,
      "num_slots": 1,
      "text": "Cuyabenoquini",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "the Cuyabeno River"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Cuyabeno=qui=ni"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Cuyabeno=SHAPE=LOC"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 107996,
      "end_time_ms": 109390,
      "num_slots": 2,
      "text": "Aguarico setsani",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 2,
              "value": "Aguarico río"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 110810,
      "end_time_ms": 112547,
      "num_slots": 2,
      "text": "Tayopisu a'indeccuja",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 2,
              "value": "Our ancestors"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Tayopi=su"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "a'i=ndeccu=ja"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "ancient=AGT"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "person=HUM.PL=CONTR"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 113620,
      "end_time_ms": 116725,
      "num_slots": 5,
      "text": "ombaccuni tsu jaccamba canse'fa marayon",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 5,
              "value": "traveled all the way from the Andean foothills"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "omba=ccu=ni"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "tsu"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "ja=cca=mba"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "canse-'fa"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "marayon"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Head=SHAPE=LOC"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "3"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "go=DIM=SS"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "live-PL.SUBJ"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "Marañón"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 119514,
      "end_time_ms": 123604,
      "num_slots": 6,
      "text": "Ingi a'indeccu gi canse'fa trece canqque'ni",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 6,
              "value": "We Cofán live in 13 villages:"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Ingi"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "a'i=ndeccu"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "gi"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "we"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "Cofán=HUM.PL"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "1"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 125286,
      "end_time_ms": 126396,
      "num_slots": 2,
      "text": "Tayo'su canqque",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 2,
              "value": "tayo'su canqque"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Tayo='su"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "canqque"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "old=AGT"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "town"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 126788,
      "end_time_ms": 127541,
      "num_slots": 1,
      "text": "Soquié",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Soquié"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Soquié"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Soquié"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 127943,
      "end_time_ms": 128869,
      "num_slots": 2,
      "text": "Chandie na'e",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 2,
              "value": "Chandie na'e"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 128948,
      "end_time_ms": 129969,
      "num_slots": 2,
      "text": "Alto bermejo",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 2,
              "value": "Alto Bermejo"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Alto"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "bermejo"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "SP:tall"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "Bermejo"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 130042,
      "end_time_ms": 130848,
      "num_slots": 1,
      "text": "Sinangoé",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Sinangoé"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Sinangoé"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Sinangoé"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 131424,
      "end_time_ms": 132235,
      "num_slots": 1,
      "text": "Dovuno",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Dovuno"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Dovuno"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Dovuno"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 132555,
      "end_time_ms": 133319,
      "num_slots": 1,
      "text": "Doreno",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Doreno"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Doreno"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Doreno"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 133721,
      "end_time_ms": 134605,
      "num_slots": 1,
      "text": "Opirito",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Opirito"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Opirito"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Opirito"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 134995,
      "end_time_ms": 136037,
      "num_slots": 2,
      "text": "Totoa Nai'qui",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 2,
              "value": "Totoa Nai'qui"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 136360,
      "end_time_ms": 137133,
      "num_slots": 1,
      "text": "Bavaroé",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Bavaroé"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Bavaroé"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Bavaroé"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 138209,
      "end_time_ms": 139514,
      "num_slots": 2,
      "text": "Pisorié canqque",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 2,
              "value": "Pisorié canqque"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 139961,
      "end_time_ms": 140672,
      "num_slots": 1,
      "text": "Zábalo",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Zábalo"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Zábalo"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Zábalo"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 141469,
      "end_time_ms": 142037,
      "num_slots": 1,
      "text": "Pakuya",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Pakuya"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Pakuya"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Pakuya"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 143459,
      "end_time_ms": 149226,
      "num_slots": 9,
      "text": "Toya'caensi canse'fa a'indeccuja fuesu andeniqque San Pablo Puerto Bolivar",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 9,
              "value": "We also live in the villages of other peoples: San Pablo and Puerto Bolívar."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Toya'caen=si"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "canse-'fa"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "a'i=ndeccu=ja"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "fuesu"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "ande=ni=qque"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "San"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "also=DS"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "live-PL.SUBJ"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "Cofán=HUM.PL=CONTR"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "other"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "land=LOC=ADD"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "San"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 151170,
      "end_time_ms": 152880,
      "num_slots": 4,
      "text": "Ingi coiraje'cho andeta tsu",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 4,
              "value": "The natural protected areas that we care for are:"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Ingi"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "coira=je='cho"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "ande=ta"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "tsu"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "we"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "care=IMPF=NMLZ"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "land=TOP"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "3"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 154012,
      "end_time_ms": 156244,
      "num_slots": 4,
      "text": "Reserva Ecológica Cayambe Coca",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 4,
              "value": "Cayambe-Coca Ecological Reserve"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Reserva"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "Ecológica"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "Cayambe"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "Coca"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "reserve"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "ecological"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "Cayambe"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "Coca"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 157162,
      "end_time_ms": 159399,
      "num_slots": 4,
      "text": "Reserva Ecológica Cofán Bermejo",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 4,
              "value": "Cofán-Bermejo Ecological Reserve"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Reserva"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "Ecológica"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "Cofán"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "Bermejo"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "reserve"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "ecological"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "Cofán"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "Bermejo"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 159977,
      "end_time_ms": 162166,
      "num_slots": 3,
      "text": "Reserva Faunística Cuyabeno",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 3,
              "value": "Cuyabeno Wildlife Reserve"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Reserva"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "reserve"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 162999,
      "end_time_ms": 166847,
      "num_slots": 7,
      "text": "Va andema tsu ingi a'i guardaparquendeccu cuiraje'fa",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 7,
              "value": "Our Cofán park guards protect this land."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Va"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "ande=ma"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "tsu"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "ingi"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "a'i"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "guarda-parque=ndeccu"
            },
            {
              "start_slot": 6,
              "end_slot": 7,
              "value": "cuira-je-'fa"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "PROX"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "land=ACC"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "3"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "we"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "Cofán"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "park=HUM.PL"
            },
            {
              "start_slot": 6,
              "end_slot": 7,
              "value": "care-IMPF-PL.SUBJ"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 168320,
      "end_time_ms": 174037,
      "num_slots": 7,
      "text": "Ecuadorfaningi ambian'fa andema cuatrocientos mil hectáreama ti'tsse ",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 7,
              "value": "In Ecuador, we have legal control over more than 1,000,000 acres of land."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Ecuador=fa=ni=ngi"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "ambian-'fa"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "ande=ma"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "cuatrocientos"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "mil"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "hectárea=ma"
            },
            {
              "start_slot": 6,
              "end_slot": 7,
              "value": "ti'tsse"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Ecuador=LOC=LOC=1"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "have-PL.SUBJ"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "land=ACC"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "four.hundred"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "thousand"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "hectare=ACC"
            },
            {
              "start_slot": 6,
              "end_slot": 7,
              "value": "more.than"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 175962,
      "end_time_ms": 180261,
      "num_slots": 8,
      "text": "Va proyecto tsu ingima fuiteya atesuye tayopisu andema",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 8,
              "value": "This project will help us to learn about our ancestral territory."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Va"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "proyecto"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "tsu"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "ingi=ma"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "fuite-ya"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "atesu-ye"
            },
            {
              "start_slot": 6,
              "end_slot": 7,
              "value": "tayopisu"
            },
            {
              "start_slot": 7,
              "end_slot": 8,
              "value": "ande=ma"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "PROX"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "project"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "3"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "we=ACC"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "help-FUT"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "learn-INF"
            },
            {
              "start_slot": 6,
              "end_slot": 7,
              "value": "ancient"
            },
            {
              "start_slot": 7,
              "end_slot": 8,
              "value": "land=ACC"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 180615,
      "end_time_ms": 184083,
      "num_slots": 6,
      "text": "caen tsu ingi dushundeccumbe du'shu'qque atesu'faye",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 6,
              "value": "It will help make sure that our children's children will know about it too."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "caen"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "tsu"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "ingi"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "dushu-ndeccu=mbe"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "du'shu='qque"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "atesu-'fa=ye"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "like.that"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "3"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "we"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "child-HUM.PL=BEN"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "child=ADD"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "learn-PL.SUBJ-INF"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 185294,
      "end_time_ms": 189336,
      "num_slots": 6,
      "text": "tsaiccungi osha'fa'ya ingi andema toengatsse isui",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 6,
              "value": "With this, we will be able to regain control of our traditional territory."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "ingi"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "ande=ma"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "toenga=tsse"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "isui"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "we"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "land=ACC"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "traditional?=ADV"
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "hold"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 190826,
      "end_time_ms": 195404,
      "num_slots": 10,
      "text": "Va pa'cco ingi canse'cho ande tsu ingi ande",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 10,
              "value": "All of this land is our land."
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "Va"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "pa'cco"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "ingi"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "canse='cho"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": ""
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "ande"
            },
            {
              "start_slot": 6,
              "end_slot": 7,
              "value": "tsu"
            },
            {
              "start_slot": 7,
              "end_slot": 8,
              "value": ""
            },
            {
              "start_slot": 8,
              "end_slot": 9,
              "value": "ingi"
            },
            {
              "start_slot": 9,
              "end_slot": 10,
              "value": "ande"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 1,
              "value": "PROX"
            },
            {
              "start_slot": 1,
              "end_slot": 2,
              "value": "all"
            },
            {
              "start_slot": 2,
              "end_slot": 3,
              "value": "we"
            },
            {
              "start_slot": 3,
              "end_slot": 4,
              "value": "live-SUB"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": ""
            },
            {
              "start_slot": 5,
              "end_slot": 6,
              "value": "land"
            },
            {
              "start_slot": 6,
              "end_slot": 7,
              "value": "3"
            },
            {
              "start_slot": 8,
              "end_slot": 9,
              "value": "we"
            },
            {
              "start_slot": 9,
              "end_slot": 10,
              "value": "land"
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "tier": "T1",
      "start_time_ms": 195810,
      "end_time_ms": 199973,
      "num_slots": 1,
      "text": "[singing]",
      "dependents": []
    }
  ]
};

function Row({ numSlots, values, tier }) {
  // I/P: numSlots, taken from parent sentence
  //      values, list of segments (e.g., morphemes) with start/end times
  //      tier, the tier name
  // O/P: single row of glossed sentence, with colspan spacing
  // Status: tested, working
  const finalSlot = numSlots;
  let currentSlot = 0;
  let output = [];

  for (const v of values) {
    const startSlot = v['start_slot'];
    const endSlot = v['end_slot'];
    const text = v['value'];

    // Add blank space before current value:
    if (startSlot > currentSlot) {
      const diff = String(startSlot - currentSlot);
      output.push(<td key={id.generate()} colSpan={diff} />);
    }
    // Create element with correct 'colSpan' width:
    const size = String(endSlot - startSlot);
    output.push(<td key={id.generate()} colSpan={size}>{text}</td>);
    currentSlot = endSlot;
  }
  // Fill blank space at end of table row:
  if (currentSlot < finalSlot) {
    const diff = String(finalSlot - currentSlot);
    output.push(<td key={id.generate()} colSpan={diff} />);
  }
  return <tr data-tier={tier}>{output}</tr>;
}

function Sentence({ sentence }) {
  // I/P: sentence, a sentence
  // O/P: table of glossed Row components
  // Status: tested, working
  let rowList = []; // to be output
  const numSlots = sentence['num_slots'];
  // Add the indepentent tier, i.e., the top row, to the list of rows. Note that
  // 'colSpan={numSlots}' ensures that this row spans the entire table.
  rowList.push(
    <tr data-tier={sentence['tier']}>
      <td colSpan={numSlots} className="topRow">{sentence['text']}</td>
    </tr>
  );
  const dependents = sentence['dependents']; // list of dependent tiers, flat structure
  // Add each dependent tier to the row list:
  for (const {values, tier} of dependents) {
    // Tier attribute will be used for hiding/showing tiers:
    rowList.push(<Row key={id.generate()} numSlots={numSlots} values={values} tier={tier} />);
  }
  return <table className="gloss"><tbody>{rowList}</tbody></table>;
}

class TextDisplay extends React.Component {
  // I/P: data, a single story in JSON format
  // O/P: a div containing the plaintext of this story
  // Status: tested, not working
  componentDidMount() {
    Orientation.lockToLandscape();
  }
  render() {
    var output = [];
    var data = this.props.data;
    var title = data["metadata"]["title"];
    var sentences = data["sentences"];

    output.push(<Text key={id.generate()} style={styles.bigred}>{title}</Text>);

    for (var i=0; i<sentences.length; i++) {
      output.push(<Text key={id.generate()} style={styles.blue}>{sentences[i]["text"]}</Text>);
    }
    return <ScrollView>{output}</ScrollView>;
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View>
        <TextDisplay data={data2}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    color: 'blue',
  },
  red: {
    color: 'red',
  },
  bigred: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24
  }
});
