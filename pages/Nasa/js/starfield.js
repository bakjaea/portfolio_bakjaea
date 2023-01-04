// put together from my starfield pen https://codepen.io/zvakanaka/pen/YbOoRE
let lastCreationEpoch = 0;

window.starfieldOptions = {};
starfieldOptions.lineSize = 0.1;
starfieldOptions.fps = 30;
starfieldOptions.focalBlankSize = 1;
starfieldOptions.newLineIntervalMS = 1000;
starfieldOptions.lineGrowAmount = 0.001;
starfieldOptions.lineVelocityIncrease = 0.02;
starfieldOptions.lineDY = 0.3;
starfieldOptions.lineColor = "#4206f1"; // #FE18D3
starfieldOptions.horizonColor = "";
starfieldOptions.trackColor = `#270245`;
starfieldOptions.backgroundColor = `#000000`;

starfieldOptions.starSize = 0.25;
starfieldOptions.minMax = 8;
starfieldOptions.blurAmount = 0;
starfieldOptions.focalBlankSize = 8;
starfieldOptions.newStarsPerFrame = 1;
starfieldOptions.growAmount = 0.01;
starfieldOptions.velocityIncrease = 0.00025;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const stars = [
  {
    "x": 399,
    "y": 212.5180266265219,
    "dX": 0,
    "dY": -1.6143381759874278,
    "size": 1.2199098668673902,
    "color": "rgb(220, 220, 231)",
    "type": "star"
  },
  {
    "x": 352.82482749094834,
    "y": 313.36620664252916,
    "dX": -0.5297272264131873,
    "dY": -1.412605937101834,
    "size": 0.9465448293326134,
    "color": "rgb(205, 230, 211)",
    "type": "star"
  },
  {
    "x": 399,
    "y": 820.9194449097439,
    "dX": 127.91085736721337,
    "dY": 2.702342057053806,
    "size": 3.060886585318811,
    "color": "#4206f1",
    "type": "line"
  },
  {
    "x": 703.8693212169325,
    "y": 175.18343895691558,
    "dX": 3.6167627921240086,
    "dY": -3.100082393249149,
    "size": 2.9309294113000823,
    "color": "rgb(221, 233, 217)",
    "type": "star"
  },
  {
    "x": 545.6282896031267,
    "y": 809.7356462625052,
    "dX": 1.8294939781249944,
    "dY": 4.6568937624999815,
    "size": 2.6993196793281604,
    "color": "rgb(209, 230, 236)",
    "type": "star"
  },
  {
    "x": 442.0631518713791,
    "y": 113.52636096465916,
    "dX": 0.6142445366735222,
    "dY": -4.606834025051409,
    "size": 1.9301839545335995,
    "color": "rgb(210, 249, 248)",
    "type": "star"
  },
  {
    "x": 399,
    "y": 757.694219088275,
    "dX": -70.69386776339776,
    "dY": 1.4626317468289194,
    "size": 1.5625907375107793,
    "color": "#4206f1",
    "type": "line"
  },
  {
    "x": 126.08319413198373,
    "y": 700.0058815277398,
    "dX": -4.257795054069705,
    "dY": 4.11097453496385,
    "size": 2.7821134369787783,
    "color": "rgb(228, 241, 242)",
    "type": "star"
  },
  {
    "x": 8.217302141186053,
    "y": 635.878927478987,
    "dX": -6.8441925266607235,
    "dY": 3.4919349625820035,
    "size": 3.0508081266890024,
    "color": "rgb(239, 237, 225)",
    "type": "star"
  },
  {
    "x": 654.2050271731031,
    "y": 659.8043987764653,
    "dX": 4.469676752104964,
    "dY": 3.910967158091842,
    "size": 2.4925471297478405,
    "color": "rgb(206, 252, 249)",
    "type": "star"
  },
  {
    "x": 734.4791847935546,
    "y": 722.2785648241388,
    "dX": 7.069050670614668,
    "dY": 6.021783904597679,
    "size": 3.206288748088468,
    "color": "rgb(227, 238, 254)",
    "type": "star"
  },
  {
    "x": 447.6533532033983,
    "y": 71.59985097451148,
    "dX": 1.0420564835989925,
    "dY": -7.815423626992439,
    "size": 2.167767511144435,
    "color": "rgb(226, 248, 236)",
    "type": "star"
  },
  {
    "x": 399,
    "y": 724.2812968448262,
    "dX": 22.071021838403567,
    "dY": 0.8074764087220825,
    "size": 0.46665170530170386,
    "color": "#4206f1",
    "type": "line"
  },
  {
    "x": 476.90322818190344,
    "y": 442.0645162987074,
    "dX": 1.7875782496612023,
    "dY": 0.12768416069008595,
    "size": 0.517338722403054,
    "color": "rgb(212, 201, 211)",
    "type": "star"
  },
  {
    "x": 572.9786284165536,
    "y": 77.66907889085832,
    "dX": 4.065565315505225,
    "dY": -8.385228463229518,
    "size": 2.7640477476284766,
    "color": "rgb(232, 225, 245)",
    "type": "star"
  },
  {
    "x": 85.43013315682154,
    "y": 122.93013315682146,
    "dX": -7.760049088772003,
    "dY": -7.760049088772003,
    "size": 3.2356986684317857,
    "color": "rgb(249, 236, 247)",
    "type": "star"
  },
  {
    "x": 607.5843152090786,
    "y": 729.4056341233869,
    "dX": 5.73773291148793,
    "dY": 8.057241960812835,
    "size": 2.6074497466623265,
    "color": "rgb(207, 251, 202)",
    "type": "star"
  },
  {
    "x": 576.5185661353858,
    "y": 427.6240716932307,
    "dX": 4.8831769459471746,
    "dY": -0.2441588472973588,
    "size": 1.0319724722107764,
    "color": "rgb(212, 208, 205)",
    "type": "star"
  },
  {
    "x": 735.0286766608111,
    "y": 53.031980751780125,
    "dX": 10.171784460999021,
    "dY": -11.607801090787124,
    "size": 3.697483479545154,
    "color": "rgb(252, 229, 251)",
    "type": "star"
  },
  {
    "x": 448.836936454089,
    "y": 563.0091463834567,
    "dX": 1.5479449574830237,
    "dY": 3.9293987382261375,
    "size": 0.9817304141877271,
    "color": "rgb(217, 228, 215)",
    "type": "star"
  },
  {
    "x": 618.124501243204,
    "y": 339.1113327807982,
    "dX": 7.390171647976115,
    "dY": -3.284520732433829,
    "size": 1.6825658423120289,
    "color": "rgb(238, 222, 225)",
    "type": "star"
  },
  {
    "x": 671.2298523367214,
    "y": 322.2306792660675,
    "dX": 9.454377374809534,
    "dY": -3.968504083253384,
    "size": 2.032495865353271,
    "color": "rgb(245, 238, 218)",
    "type": "star"
  },
  {
    "x": 791.5411416097697,
    "y": 95.8651250493733,
    "dX": 14.052941003033641,
    "dY": -12.194700870401093,
    "size": 3.7658800828019827,
    "color": "rgb(222, 222, 222)",
    "type": "star"
  },
  {
    "x": 178.39836669864184,
    "y": 222.3866500310347,
    "dX": -7.897520563688327,
    "dY": -7.665240547109256,
    "size": 2.2735749163516186,
    "color": "rgb(206, 240, 232)",
    "type": "star"
  },
  {
    "x": 226.95990881511995,
    "y": 208.1558789727955,
    "dX": -6.355920851666051,
    "dY": -8.436040403120394,
    "size": 2.1019210610604224,
    "color": "rgb(241, 245, 220)",
    "type": "star"
  },
  {
    "x": 65.7929970453257,
    "y": 627.7318451739869,
    "dX": -13.157746283356554,
    "dY": 7.551402214795933,
    "size": 2.722194240643306,
    "color": "rgb(205, 210, 205)",
    "type": "star"
  },
  {
    "x": 57.34354441766234,
    "y": 698.0807238052271,
    "dX": -14.499783361106127,
    "dY": 11.101396635846871,
    "size": 3.116185896937824,
    "color": "rgb(201, 204, 210)",
    "type": "star"
  },
  {
    "x": 481.74492283634737,
    "y": 225.633906320276,
    "dX": 3.5116662827678904,
    "dY": -8.949085043182682,
    "size": 1.5680550825803568,
    "color": "rgb(236, 208, 201)",
    "type": "star"
  },
  {
    "x": 616.2524776469114,
    "y": 58.22509774420112,
    "dX": 9.5808580977458,
    "dY": -16.681964687839756,
    "size": 3.0776368995135517,
    "color": "rgb(209, 237, 233)",
    "type": "star"
  },
  {
    "x": 623.9202121520966,
    "y": 500.39778754320923,
    "dX": 9.919006030607424,
    "dY": 2.8178994405134725,
    "size": 1.5440899984765295,
    "color": "rgb(248, 220, 227)",
    "type": "star"
  },
  {
    "x": 623.7739882179205,
    "y": 74.90706243204087,
    "dX": 10.318278548347841,
    "dY": -16.598969838646525,
    "size": 3.0318346289293983,
    "color": "rgb(207, 254, 219)",
    "type": "star"
  },
  {
    "x": 777.6953062367138,
    "y": 492.69349705448013,
    "dX": 17.38405624993386,
    "dY": 2.5795696370869603,
    "size": 2.2744440164559703,
    "color": "rgb(252, 202, 202)",
    "type": "star"
  },
  {
    "x": 788.2837338567242,
    "y": 250.01677420037151,
    "dX": 18.63673499431201,
    "dY": -8.9277772427842,
    "size": 2.9788347982817633,
    "color": "rgb(233, 219, 243)",
    "type": "star"
  },
  {
    "x": 177.0556893039447,
    "y": 840.4386454668206,
    "dX": -11.10420055072662,
    "dY": 20.20964500232244,
    "size": 3.2294147808143787,
    "color": "rgb(225, 203, 234)",
    "type": "star"
  },
  {
    "x": 771.866441969373,
    "y": 813.8053281832938,
    "dX": 18.65505692522072,
    "dY": 18.877140936235243,
    "size": 3.8508588507633337,
    "color": "rgb(233, 217, 235)",
    "type": "star"
  },
  {
    "x": 477.0108407537716,
    "y": 71.7466094485813,
    "dX": 4.0881136355908945,
    "dY": -19.114693485330406,
    "size": 2.3138211565259517,
    "color": "rgb(205, 234, 246)",
    "type": "star"
  },
  {
    "x": 493.8780495653978,
    "y": 364.81436255058827,
    "dX": 4.972030097340279,
    "dY": -3.7566449624348768,
    "size": 0.932818435074048,
    "color": "rgb(242, 223, 240)",
    "type": "star"
  },
  {
    "x": 127.28403005209252,
    "y": 166.78194159582722,
    "dX": -14.951820746009462,
    "dY": -14.841880887582917,
    "size": 2.807170141760401,
    "color": "rgb(224, 235, 229)",
    "type": "star"
  },
  {
    "x": 351.0501229503693,
    "y": 720.203439210315,
    "dX": -2.6385566022369638,
    "dY": 15.611459896568704,
    "size": 1.7582665812997293,
    "color": "rgb(229, 211, 221)",
    "type": "star"
  },
  {
    "x": 399,
    "y": 705.3892109396753,
    "dX": 17.044690718575247,
    "dY": 0.43704335175833964,
    "size": 0.2397842187935063,
    "color": "#4206f1",
    "type": "line"
  },
  {
    "x": 753.9386768379178,
    "y": 632.8490552720397,
    "dX": 20.565864063870197,
    "dY": 11.376860971502662,
    "size": 2.8564386605497876,
    "color": "rgb(246, 200, 220)",
    "type": "star"
  },
  {
    "x": 159.22759596587468,
    "y": 145.75236046255668,
    "dX": -13.892897532508059,
    "dY": -16.846505669340488,
    "size": 2.752600217857843,
    "color": "rgb(216, 209, 208)",
    "type": "star"
  },
  {
    "x": 423.90010307891845,
    "y": 685.5010307891844,
    "dX": 1.5238811098453626,
    "dY": 15.238811098453622,
    "size": 1.4695056693405137,
    "color": "rgb(209, 210, 205)",
    "type": "star"
  },
  {
    "x": 363.4284241729737,
    "y": 226.6277026205445,
    "dX": -2.176973014064804,
    "dY": -12.844140782982347,
    "size": 1.327219366032409,
    "color": "rgb(248, 227, 247)",
    "type": "star"
  },
  {
    "x": 70.06316229232887,
    "y": 560.0600304079576,
    "dX": -21.33650168013763,
    "dY": 8.014726519442561,
    "size": 2.3624843405781437,
    "color": "rgb(250, 216, 245)",
    "type": "star"
  },
  {
    "x": 434.06433295360966,
    "y": 665.2530292687866,
    "dX": 2.2744494176796466,
    "dY": 14.8380747724815,
    "size": 1.4190868111119808,
    "color": "rgb(227, 207, 204)",
    "type": "star"
  },
  {
    "x": 555.1423025520475,
    "y": 405.2715394895905,
    "dX": 10.776827375880817,
    "dY": -2.155365475176163,
    "size": 1.0368538153122848,
    "color": "rgb(212, 240, 241)",
    "type": "star"
  },
  {
    "x": 141.3652007891218,
    "y": 500.51834404633945,
    "dX": -17.781765170203343,
    "dY": 4.418499224111135,
    "size": 1.708265716286089,
    "color": "rgb(243, 254, 203)",
    "type": "star"
  },
  {
    "x": 321.9562981566317,
    "y": 237.3492990086517,
    "dX": -5.6833019992207285,
    "dY": -14.690799507419621,
    "size": 1.4809720141735832,
    "color": "rgb(236, 233, 253)",
    "type": "star"
  },
  {
    "x": 675.1944028347168,
    "y": 410.33421446829,
    "dX": 20.374101506640354,
    "dY": -1.9301780374711912,
    "size": 1.6118009418321335,
    "color": "rgb(221, 208, 220)",
    "type": "star"
  },
  {
    "x": 502.6745431697994,
    "y": 653.2740448095803,
    "dX": 8.21579374711342,
    "dY": 17.17847783487351,
    "size": 1.702242939896899,
    "color": "rgb(225, 236, 242)",
    "type": "star"
  },
  {
    "x": 284.5540757216502,
    "y": 451.31064902425715,
    "dX": -9.069382707852473,
    "dY": 1.1736848210162028,
    "size": 0.7462828665130348,
    "color": "rgb(247, 238, 225)",
    "type": "star"
  },
  {
    "x": 480.8217852194451,
    "y": 370.79462702074864,
    "dX": 7.007073558305688,
    "dY": -5.62689240288184,
    "size": 0.8376357909934821,
    "color": "rgb(234, 249, 218)",
    "type": "star"
  },
  {
    "x": 515.5340577367855,
    "y": 291.4522898382565,
    "dX": 9.979771431526283,
    "dY": -12.421630398814628,
    "size": 1.4079088394926444,
    "color": "rgb(209, 221, 208)",
    "type": "star"
  },
  {
    "x": 336.6544069490505,
    "y": 484.1093619661796,
    "dX": -5.810177079855464,
    "dY": 4.4368624973441735,
    "size": 0.6497747750856455,
    "color": "rgb(225, 203, 247)",
    "type": "star"
  },
  {
    "x": 614.3756850850983,
    "y": 640.5401227121985,
    "dX": 20.071520821318877,
    "dY": 19.015124988617877,
    "size": 2.1970790389864825,
    "color": "rgb(217, 225, 203)",
    "type": "star"
  },
  {
    "x": 576.8295811454412,
    "y": 303.8987516314339,
    "dX": 18.184724284305663,
    "dY": -13.559707703326186,
    "size": 1.6521541475700359,
    "color": "rgb(229, 254, 226)",
    "type": "star"
  },
  {
    "x": 523.3779151364068,
    "y": 415.94166691960214,
    "dX": 12.718795597693552,
    "dY": -2.1022802640815788,
    "size": 0.8246812410840233,
    "color": "rgb(238, 235, 220)",
    "type": "star"
  },
  {
    "x": 574.3325017550044,
    "y": 556.4643433060555,
    "dX": 19.872301003756224,
    "dY": 13.596837528885834,
    "size": 1.5764842253052997,
    "color": "rgb(243, 239, 239)",
    "type": "star"
  },
  {
    "x": 426.6840792244744,
    "y": 422.6579603877628,
    "dX": 3.137731737435193,
    "dY": -1.5688658687175965,
    "size": 0.3076305941835577,
    "color": "rgb(215, 247, 210)",
    "type": "star"
  },
  {
    "x": 284.45037839381723,
    "y": 479.0470023108679,
    "dX": -14.569898614956118,
    "dY": 5.411676628412274,
    "size": 0.8854831195852535,
    "color": "rgb(228, 211, 254)",
    "type": "star"
  },
  {
    "x": 441.5470023108679,
    "y": 407.8625945984543,
    "dX": 5.411676628412274,
    "dY": -3.6424746537390296,
    "size": 0.4559220385620681,
    "color": "rgb(250, 213, 236)",
    "type": "star"
  },
  {
    "x": 468.9858060938586,
    "y": 511.4847922434201,
    "dX": 10.148188090019191,
    "dY": 10.873058667877702,
    "size": 0.8248529916863937,
    "color": "rgb(253, 209, 224)",
    "type": "star"
  },
  {
    "x": 308.30410842938716,
    "y": 562.9029354960508,
    "dX": -13.151223341147318,
    "dY": 18.328870325850986,
    "size": 1.1854941353333184,
    "color": "rgb(234, 254, 249)",
    "type": "star"
  },
  {
    "x": 493.03054257746203,
    "y": 395.5906080994159,
    "dX": 15.86781364466398,
    "dY": -6.9035293129382245,
    "size": 0.7746996723902312,
    "color": "rgb(214, 244, 221)",
    "type": "star"
  },
  {
    "x": 474.10231647420665,
    "y": 456.6494019808847,
    "dX": 12.67364336554331,
    "dY": 3.400245780999424,
    "size": 0.5762585922754573,
    "color": "rgb(221, 208, 209)",
    "type": "star"
  },
  {
    "x": 417.7793569513866,
    "y": 363.41277294595506,
    "dX": 3.7934296365740603,
    "dY": -14.763618045044993,
    "size": 0.5593329200271577,
    "color": "rgb(253, 247, 234)",
    "type": "star"
  },
  {
    "x": 349.26008158821946,
    "y": 481.16441653302746,
    "dX": -10.04746228065562,
    "dY": 9.022211027527495,
    "size": 0.5720216747240405,
    "color": "rgb(201, 213, 211)",
    "type": "star"
  },
  {
    "x": 349.18191730481254,
    "y": 449.460802002,
    "dX": -12.547851157687495,
    "dY": 3.2644816019999987,
    "size": 0.41389442348593747,
    "color": "rgb(243, 220, 246)",
    "type": "star"
  },
  {
    "x": 330.14573936437506,
    "y": 364.405538863875,
    "dX": -17.34255851062499,
    "dY": -18.158678911124994,
    "size": 0.8047436088587498,
    "color": "rgb(232, 252, 226)",
    "type": "star"
  },
  {
    "x": 400.21204005000004,
    "y": 441.954180225,
    "dX": 0.40603004999999986,
    "dY": 1.8271352249999995,
    "size": 0.133331101375,
    "color": "rgb(230, 214, 214)",
    "type": "star"
  },
  {
    "x": 380.213379225,
    "y": 417.713379225,
    "dX": -6.293465774999999,
    "dY": -6.293465774999999,
    "size": 0.28786620775,
    "color": "rgb(228, 219, 249)",
    "type": "star"
  },
  {
    "x": 413.911185,
    "y": 416.95425750000004,
    "dX": 7.4741849999999985,
    "dY": -9.797242499999998,
    "size": 0.2722846375,
    "color": "rgb(222, 200, 201)",
    "type": "star"
  },
  {
    "x": 390.3353925,
    "y": 410.50617750000004,
    "dX": -4.343107499999999,
    "dY": -13.029322499999997,
    "size": 0.27329214999999996,
    "color": "rgb(251, 237, 246)",
    "type": "star"
  },
  {
    "x": 397.2915,
    "y": 422.43,
    "dX": -1.7084999999999997,
    "dY": -14.069999999999999,
    "size": 0.1788925,
    "color": "rgb(233, 225, 214)",
    "type": "star"
  },
  {
    "x": 390.558,
    "y": 428.259,
    "dX": -8.442,
    "dY": -8.240999999999998,
    "size": 0.183415,
    "color": "rgb(215, 246, 225)",
    "type": "star"
  }
]

setTimeout(() => {
  console.log(stars)
}, 5000)
window.addEventListener("resize", resizeCanvas, false);

function addLine(timeout = 1000) {
  if (Date.now() - lastCreationEpoch > timeout) {
    stars.push(getLine());
    lastCreationEpoch = Date.now();
  }
}
function addStars(num) {
  for (let i = 0; i < num; i++) {
    stars.push(getStar());
  }
}
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  starfieldOptions.xStart = canvas.width / 2;
  starfieldOptions.lineYStart = canvas.height / 1.25;
  // stars.length = 0; // empty stars array
  drawStuff();
}
function getLine() {
  return {
    x: starfieldOptions.xStart || canvas.width / 2,
    y: starfieldOptions.lineYStart || canvas.height / 1.25,
    // not used for line
    dX:
      getRandomInt(-starfieldOptions.minMax, starfieldOptions.minMax) +
      getRandomInt(0, 9) / 10,
    dY: starfieldOptions.lineDY, //getRandomInt(-starfieldOptions.minMax, starfieldOptions.minMax) + getRandomInt(0, 9) / 10,
    size: starfieldOptions.lineSize,
    color: starfieldOptions.lineColor, //`rgb(${getRandomInt(200, 255)}, ${getRandomInt(200, 255)}, ${getRandomInt(200, 255)})`,
    type: "line"
  };
}
function getStar() {
  return {
    x: starfieldOptions.xStart || canvas.width / 2,
    y: starfieldOptions.yStart || canvas.height / 2,
    dX:
      getRandomInt(-starfieldOptions.minMax, starfieldOptions.minMax) +
      getRandomInt(0, 9) / 10,
    dY:
      getRandomInt(-starfieldOptions.minMax, starfieldOptions.minMax) +
      getRandomInt(0, 9) / 10,
    size: starfieldOptions.starSize,
    color: `rgb(${getRandomInt(200, 255)}, ${getRandomInt(
      200,
      255
    )}, ${getRandomInt(200, 255)})`,
    type: "star"
  };
}

resizeCanvas();
let lastFps = starfieldOptions.fps;
let handle = setInterval(mainLoop, 1000 / starfieldOptions.fps);

function mainLoop() {
  if (starfieldOptions.fps !== lastFps) {
    clearInterval(handle);
    handle = setInterval(mainLoop, 1000 / starfieldOptions.fps);
  }
  // delete stars that have moved off screen
  const garbageStars = stars.reduce((acc, star, i) => {
    if (
      star.x > canvas.width ||
      star.y > canvas.height ||
      star.x + star.size < 0 ||
      star.y + star.size < 0
    )
      acc.push(i);

    return acc;
  }, []);
  if (garbageStars.length > 0) {
    garbageStars.reverse();
    garbageStars.forEach((index) => stars.splice(index, 1));
  }
  // add new star
    addStars(starfieldOptions.newStarsPerFrame);
  addLine(starfieldOptions.newLineIntervalMS);
  drawStuff();
}

function drawStuff() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // bg
  ctx.fillStyle = starfieldOptions.backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    if (star.type === "star") {
      star.dX *= 1 + starfieldOptions.velocityIncrease;
      star.dY *= 1 + starfieldOptions.velocityIncrease;
      star.x += star.dX; // calculate star's new position
      star.y += star.dY;
      star.size +=
        ((Math.abs(star.dX) + Math.abs(star.dY)) / 2) *
        starfieldOptions.growAmount;
      for (let i = starfieldOptions.blurAmount + 1; i > 1; i--) {
        const colorStrength = 255 / i;
        ctx.fillStyle = `rgb(${colorStrength}, ${colorStrength}, ${colorStrength})`;
        ctx.fillRect(
          star.x - (star.dX / 2) * i,
          star.y - (star.dY / 2) * i,
          star.size,
          star.size
        );
      }
      ctx.fillStyle = star.color;
      ctx.fillRect(star.x, star.y, star.size, star.size);
    }
  })
  
  ctx.fillStyle = starfieldOptions.trackColor;
  ctx.fillRect(0, starfieldOptions.lineYStart, canvas.width, canvas.height);

  ctx.strokeStyle = starfieldOptions.lineColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(starfieldOptions.xStart, starfieldOptions.lineYStart);
  ctx.lineTo(starfieldOptions.xStart, canvas.height);
  const startXOffset = canvas.width > 500 ? 100 : 25;
  const endXOffset = canvas.width > 500 ? 200 : 200 / 4;
  for (let i = 0; i <= 12; i++) {
    // right side
    ctx.moveTo(
      starfieldOptions.xStart + i * startXOffset,
      starfieldOptions.lineYStart
    );
    ctx.lineTo(starfieldOptions.xStart + i * endXOffset, canvas.height);
    // left side
    ctx.moveTo(
      starfieldOptions.xStart + i * -startXOffset,
      starfieldOptions.lineYStart
    );
    ctx.lineTo(starfieldOptions.xStart + i * -endXOffset, canvas.height);
  }

  ctx.stroke();

 
   stars.forEach((star) => {
    if (star.type === "line") {
      star.dX *= 1 + starfieldOptions.lineVelocityIncrease;
      star.dY *= 1 + starfieldOptions.lineVelocityIncrease;
      // star.x += star.dX; // calculate star's new position
      star.y += star.dY;
      star.size +=
        ((Math.abs(star.dX) + Math.abs(star.dY)) / 2) *
        starfieldOptions.lineGrowAmount;

      ctx.fillStyle = star.color;
      ctx.fillRect(0, star.y, canvas.width, star.size);
    }
  });
  
  // ctx.fillStyle = starfieldOptions.horizonColor;
  // ctx.fillRect(
  //   0,
  //   starfieldOptions.lineYStart - starfieldOptions.focalBlankSize / 2,
  //   canvas.width,
  //   starfieldOptions.focalBlankSize
  // );
}

function getRandomInt(min, max) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const camelCase = (str) =>
  str.replace(/-[a-z]/g, (val) => val[1].toUpperCase());
const kabobCase = (str) =>
  str.replace(/[A-Z]/g, (val) => "-" + val.toLowerCase());

const configDiv = document.querySelector(".starfield-options");
const boundObj = window[configDiv.dataset.windowObject];
Object.entries(boundObj).forEach(([key, value]) => {
  const label = document.createElement("label");
  const kabobKey = kabobCase(key);
  label.textContent = key;
  const control = document.createElement("input");
  if (typeof value === "boolean") {
    control.setAttribute("type", "checkbox");
    control.checked = value;
  } else if (typeof value === "number") {
    control.setAttribute("type", "number");
  }
  control.value = value;
  if (value <= 0.001) control.step = 0.001;
  else if (value <= 0.01) control.step = 0.01;
  else if (value <= 0.1) control.step = 0.1;
  ["input", "change"].forEach((event) => {
    control.addEventListener(event, (e) => {
      boundObj[key] =
        typeof value === "boolean" ? e.target.checked : Number(e.target.value);
    });
  });
  label.htmlFor = control.id = `${kabobCase(
    configDiv.dataset.windowObject
  )}-${kabobKey}`;
  label.appendChild(control);
  configDiv.appendChild(label);
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyH") configDiv.hidden = !configDiv.hidden;
});
