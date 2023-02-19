var sequence = [
	[0,2,2,2,2,1,0,0,0,0,0],
	[135,2,2,3,3,1,0,0,0,0,0],
	[270,2,3,3,4,0,0,0,0,0,0],
	[405,2,3,4,4,0,0,0,0,0,0],
	[540,3,3,5,5,0,0,0,0,0,0],
	[675,4,4,6,6,0,0,0,0,0,0],
	[810,4,4,7,7,0,0,0,0,0,0],
	[945,5,4,8,8,1,1,0,0,0,0],
	[1080,5,5,9,9,1,1,0,0,1,1],
	[1195,6,6,9,9,1,1,0,0,1,1],
	[1205,7,7,10,10,2,2,0,0,2,2],
	[1215,8,8,10,10,2,2,0,0,2,2],
	[1340,7,7,10,10,2,2,0,0,2,2],
	[1350,6,6,10,10,1,1,0,0,1,1],
	[1475,5,5,9,9,1,1,0,0,1,1],
	[1485,4,4,8,8,0,0,0,0,0,0],
	[1550,4,4,7,8,0,1,0,0,1,1],
	[1560,4,4,6,8,1,1,1,0,1,1],
	[1570,4,4,5,8,1,2,1,0,2,2],
	[1580,5,5,4,8,2,2,2,0,2,2],
	[1590,5,5,3,8,2,3,2,0,3,3],
	[1600,5,5,2,8,2,3,2,0,3,3],
	[1610,5,5,1,8,3,4,3,0,4,4],
	[1620,5,5,0,8,3,4,3,0,4,4],
	[1725,5,5,0,8,2,5,4,0,5,3],
	[1735,5,6,0,8,2,5,5,0,5,2],
	[1745,5,6,0,8,1,6,5,0,6,1],
	[1755,5,6,0,8,0,6,6,0,6,0],
	[1850,5,6,0,8,0,6,5,0,6,0],
	[1860,5,6,0,8,0,7,4,0,7,0],
	[1870,5,6,0,9,0,7,3,0,7,0],
	[1880,5,6,0,9,0,8,2,0,8,0],
	[1890,5,6,0,9,0,8,1,0,8,0],
	[1965,5,6,0,9,0,8,1,0,8,1],
	[1975,5,6,0,10,0,9,1,0,9,2],
	[1985,5,6,0,10,0,9,1,0,9,3],
	[1995,5,7,0,10,0,10,1,0,10,4],
	[2005,5,7,0,10,0,10,1,0,10,5],
	[2015,5,7,0,11,0,11,1,0,11,6],
	[2025,5,7,0,11,0,11,1,0,11,7],
	[2090,5,7,0,11,0,11,2,0,11,7],
	[2100,5,7,0,11,0,11,3,0,10,7],
	[2110,5,7,0,11,0,10,4,0,10,7],
	[2120,6,7,0,11,0,10,5,0,10,7],
	[2130,6,7,0,10,0,10,6,0,9,7],
	[2140,6,7,0,10,0,10,7,0,9,7],
	[2150,6,7,0,10,0,9,8,0,8,7],
	[2160,6,7,0,10,0,9,9,0,8,7],
	[2275,6,7,0,10,0,10,9,0,9,7],
	[2285,7,8,0,10,0,10,9,0,10,8],
	[2295,7,8,0,10,0,11,9,0,11,8],
	[2420,8,9,0,11,0,12,10,0,12,8],
	[2430,9,9,0,11,0,12,11,0,12,8],
	[2565,9,9,0,10,0,11,10,0,11,7],
	[2700,9,9,0,10,0,12,10,0,12,7],
	[2825,10,9,0,10,0,12,10,0,13,7],
	[2835,11,9,0,9,0,12,9,0,14,7],
	[2950,10,9,0,9,0,11,9,0,13,7],
	[2960,10,9,0,9,0,11,9,0,12,7],
	[2970,9,9,0,9,0,10,9,0,11,7],
	[3095,9,9,0,9,0,10,9,0,10,8],
	[3105,9,9,0,9,0,9,9,0,9,9],
	[3220,9,9,0,9,0,10,9,0,10,8],
	[3230,10,9,0,9,0,10,9,0,11,8],
	[3240,10,9,0,9,0,11,9,0,12,7],
	[3365,10,9,0,9,0,11,9,0,13,7],
	[3375,10,9,0,9,0,11,9,0,14,7],
	[3480,11,9,0,9,0,11,9,0,14,7],
	[3490,12,9,0,9,0,11,9,0,15,7],
	[3500,13,9,0,9,0,11,9,0,15,7],
	[3510,14,9,0,9,0,11,9,0,15,7],
	[3645,15,9,0,9,0,11,9,0,16,7],
	[3750,14,9,0,9,0,11,9,0,16,7],
	[3760,13,9,0,9,0,11,9,0,16,7],
	[3770,12,9,0,9,0,11,9,0,16,7],
	[3780,11,9,0,9,0,11,9,0,16,7],
	[3885,12,9,0,9,0,11,9,0,16,7],
	[3895,13,9,0,9,0,11,9,0,16,7],
	[3905,14,9,0,9,0,11,9,0,16,7],
	[3915,15,9,0,9,0,11,9,0,16,7],
	[4000,15,10,1,9,0,12,10,0,16,7],
	[4010,16,10,1,9,0,12,11,0,16,7],
	[4020,16,11,2,10,0,13,12,0,17,7],
	[4030,16,11,3,10,0,13,13,0,17,7],
	[4040,17,12,3,10,0,14,14,0,17,7],
	[4050,17,12,4,10,0,14,15,0,17,7],
	[4155,18,13,5,10,0,15,16,0,18,7],
	[4165,19,14,6,10,0,15,16,0,19,7],
	[4175,19,14,7,10,0,16,17,0,19,7],
	[4185,20,15,8,10,0,16,17,0,20,7],
	[4280,20,16,8,10,0,17,18,0,20,7],
	[4290,20,17,9,10,0,17,18,0,20,7],
	[4300,20,18,9,10,0,18,19,0,20,7],
	[4310,20,19,10,10,0,18,19,0,20,7],
	[4320,20,20,10,10,0,19,20,0,20,7],
	[4345,20,19,9,10,0,18,19,0,20,7],
	[4355,19,18,9,10,0,18,18,0,20,7],
	[4365,19,17,8,10,0,17,18,0,20,7],
	[4375,18,16,8,10,0,17,17,0,20,7],
	[4385,18,15,7,10,0,16,16,0,20,7],
	[4395,18,14,7,10,0,16,15,0,20,8],
	[4405,17,13,6,10,0,15,14,0,19,8],
	[4415,17,12,5,10,0,14,13,0,19,8],
	[4425,16,11,5,10,0,14,13,0,19,8],
	[4435,16,10,4,10,0,13,12,0,19,8],
	[4445,15,9,4,10,0,13,11,0,19,8],
	[4455,15,8,3,10,0,12,10,0,19,8],
	[4570,15,8,2,10,0,12,10,0,18,8],
	[4580,14,8,2,10,0,12,10,0,17,8],
	[4590,14,8,1,10,0,12,10,0,16,8],
	[4705,13,9,1,10,0,12,10,0,15,9],
	[4715,12,9,0,10,0,12,10,0,15,9],
	[4725,11,10,0,10,0,12,10,0,14,10],
	[4840,11,10,0,10,0,12,10,0,13,10],
	[4850,10,10,0,10,0,11,10,0,12,10],
	[4860,10,10,0,10,0,11,10,0,11,10],
	[4995,9,10,0,10,0,10,10,0,10,10],
	[5130,9,10,0,10,0,9,10,0,9,10],
	[5245,9,10,0,10,0,8,10,0,8,10],
	[5255,8,10,0,10,0,7,10,0,8,10],
	[5265,8,10,0,10,0,6,10,0,7,10],
	[5390,8,10,0,10,0,6,10,0,6,10],
	[5400,8,10,0,10,0,5,10,0,5,10],
	[5535,9,10,0,10,0,4,10,0,5,10],
	[5660,9,10,0,10,0,5,10,0,6,10],
	[5670,9,10,0,10,0,6,10,0,6,10],
	[5805,10,10,0,10,0,7,10,0,7,10],
	[5940,10,10,0,10,0,8,10,0,8,10],
	[6075,10,10,0,10,0,9,10,0,9,10],
	[6210,10,10,0,10,0,10,10,0,10,10],
	[6325,10,10,0,10,0,11,10,0,11,10],
	[6335,11,10,0,10,0,11,10,0,12,10],
	[6345,11,10,0,10,0,12,10,0,13,10],
	[6480,11,10,0,10,0,12,10,0,14,10],
	[6595,12,10,0,10,0,12,10,0,14,10],
	[6605,13,10,0,10,0,12,10,0,15,10],
	[6615,14,10,0,10,0,12,10,0,15,10],
	[6750,15,10,0,10,0,12,10,0,16,10],
	[6865,14,10,0,10,0,12,10,0,16,10],
	[6875,13,10,0,10,0,12,10,0,15,10],
	[6885,12,10,0,10,0,12,10,0,15,10],
	[7000,13,10,0,10,0,12,10,0,15,10],
	[7010,14,10,0,10,0,12,10,0,16,10],
	[7020,15,10,0,10,0,12,10,0,16,10],
	[7115,15,11,1,10,0,12,11,0,16,10],
	[7125,16,11,2,10,0,13,12,0,16,10],
	[7135,16,12,2,10,0,13,13,0,17,10],
	[7145,17,12,3,10,0,14,14,0,17,10],
	[7155,17,13,4,10,0,14,15,0,17,10],
	[7260,18,14,5,10,0,15,16,0,18,10],
	[7270,18,14,6,10,0,15,16,0,18,10],
	[7280,19,15,7,10,0,16,17,0,19,10],
	[7290,19,15,8,10,0,16,17,0,19,10],
	[7385,19,16,8,10,0,17,18,0,19,10],
	[7395,19,17,9,10,0,17,18,0,19,10],
	[7405,20,18,9,10,0,18,19,0,20,10],
	[7415,20,19,10,10,0,18,19,0,20,10],
	[7425,20,20,10,10,0,19,20,0,20,10],
	[7500,20,20,10,10,0,18,20,0,20,10],
	[7510,20,20,9,10,0,17,20,0,20,10],
	[7520,20,20,9,10,0,16,20,0,20,10],
	[7530,20,20,9,10,0,15,19,0,20,10],
	[7540,20,20,9,10,0,14,19,0,20,10],
	[7550,20,20,8,10,0,13,19,0,20,10],
	[7560,20,20,8,10,0,12,19,0,20,10],
	[7695,20,20,7,10,0,12,19,0,20,10],
	[7830,20,20,6,10,0,12,19,0,20,10],
	[7905,20,19,6,10,0,12,18,0,20,10],
	[7915,20,18,6,10,0,12,17,0,20,10],
	[7925,20,17,6,10,0,12,16,0,20,10],
	[7935,20,16,5,10,0,12,16,0,20,10],
	[7945,20,15,5,10,0,12,15,0,20,10],
	[7955,20,14,5,10,0,12,14,0,20,10],
	[7965,20,13,5,10,0,12,13,0,20,10],
	[8070,19,12,5,10,0,12,12,0,20,10],
	[8080,18,12,4,10,0,12,12,0,20,10],
	[8090,17,11,4,10,0,12,11,0,19,10],
	[8100,16,10,3,10,0,12,10,0,19,10],
	[8215,15,10,2,10,0,12,10,0,18,10],
	[8225,15,10,2,10,0,12,10,0,17,10],
	[8235,14,10,1,10,0,12,10,0,16,10],
	[8350,13,10,1,10,0,12,10,0,15,10],
	[8360,12,10,0,10,0,12,10,0,15,10],
	[8370,11,10,0,10,0,12,10,0,14,10],
	[8485,11,10,0,10,0,12,10,0,13,10],
	[8495,10,10,0,10,0,11,10,0,12,10],
	[8505,10,10,0,10,0,11,10,0,11,10],
	[8640,9,10,0,10,0,10,10,0,10,10],
	[8775,9,10,0,10,0,9,10,0,9,10],
	[8900,9,10,0,10,0,8,10,0,8,10],
	[8910,9,10,0,10,0,7,10,0,7,10],
	[9045,8,10,0,10,0,6,10,0,7,10],
	[9180,8,10,0,10,0,6,10,0,6,10],
	[9315,8,10,0,10,0,5,10,0,5,10],
	[9450,9,10,0,10,0,4,10,0,5,10],
	[9575,9,10,0,10,0,5,10,0,6,10],
	[9585,9,10,0,10,0,6,10,0,6,10],
	[9720,9,10,0,10,0,7,10,0,7,10],
	[9855,10,10,0,10,0,7,10,0,7,10],
	[9990,10,10,0,10,0,8,10,0,8,10],
	[10125,10,10,0,10,0,9,10,0,9,10],
	[10260,10,10,0,10,0,10,10,0,10,10],
	[10375,10,10,0,10,0,11,10,0,11,10],
	[10385,11,10,0,10,0,11,10,0,12,10],
	[10395,11,10,0,10,0,12,10,0,13,10],
	[10530,11,10,0,10,0,12,10,0,14,10],
	[10645,12,10,0,10,0,12,10,0,14,10],
	[10655,13,10,0,10,0,12,10,0,15,10],
	[10665,14,10,0,10,0,12,10,0,15,10],
	[10800,15,10,0,10,0,12,10,0,16,10],
	[10915,14,10,0,10,0,12,10,0,16,10],
	[10925,13,10,0,10,0,12,10,0,15,10],
	[10935,12,10,0,10,0,12,10,0,15,10],
	[11050,13,10,0,10,0,12,10,0,15,10],
	[11060,14,10,0,10,0,12,10,0,16,10],
	[11070,15,10,0,10,0,12,10,0,16,10],
	[11165,15,11,1,10,0,12,11,0,16,10],
	[11175,16,11,2,10,0,13,12,0,16,10],
	[11185,16,12,2,10,0,13,13,0,17,10],
	[11195,17,12,3,10,0,14,14,0,17,10],
	[11205,17,13,4,10,0,14,15,0,17,10],
	[11310,18,14,5,10,0,15,16,0,18,10],
	[11320,18,14,6,10,0,15,16,0,18,10],
	[11330,19,15,7,10,0,16,17,0,19,10],
	[11340,19,15,8,10,0,16,17,0,19,10],
	[11435,19,16,8,10,0,17,18,0,19,10],
	[11445,19,17,9,10,0,17,18,0,19,10],
	[11455,20,18,9,10,0,18,19,0,20,10],
	[11465,20,19,10,10,0,18,19,0,20,10],
	[11475,20,20,10,10,0,19,20,0,20,10],
	[11550,20,20,10,10,0,18,20,0,20,10],
	[11560,20,20,9,10,0,17,20,0,20,10],
	[11570,20,20,9,10,0,16,20,0,20,10],
	[11580,20,20,9,10,0,15,19,0,20,10],
	[11590,20,20,9,10,0,14,19,0,20,10],
	[11600,20,20,8,10,0,13,19,0,20,10],
	[11610,20,20,8,10,0,12,19,0,20,10],
	[11745,20,20,7,10,0,12,19,0,20,10],
	[11880,20,20,6,10,0,12,19,0,20,10],
	[11955,20,19,6,10,0,12,18,0,20,10],
	[11965,20,18,6,10,0,12,17,0,20,10],
	[11975,20,17,6,10,0,12,16,0,20,10],
	[11985,20,16,5,10,0,12,16,0,20,10],
	[11995,20,15,5,10,0,12,15,0,20,10],
	[12005,20,14,5,10,0,12,14,0,20,10],
	[12015,20,13,5,10,0,12,13,0,20,10],
	[12120,19,12,5,10,0,12,12,0,20,10],
	[12130,18,12,4,10,0,12,12,0,20,10],
	[12140,17,11,4,10,0,12,11,0,19,10],
	[12150,16,10,3,10,0,12,10,0,19,10],
	[12265,15,10,2,10,0,12,10,0,18,10],
	[12275,15,10,2,10,0,12,10,0,17,10],
	[12285,14,10,1,10,0,12,10,0,16,10],
	[12400,13,10,1,10,0,12,10,0,15,10],
	[12410,12,10,0,10,0,12,10,0,15,10],
	[12420,11,10,0,10,0,12,10,0,14,10],
	[12535,11,10,0,10,0,12,10,0,13,10],
	[12545,10,10,0,10,0,11,10,0,12,10],
	[12555,10,10,0,10,0,11,10,0,11,10],
	[12690,9,10,0,10,0,10,10,0,10,10],
	[12825,9,10,0,10,0,9,10,0,9,10],
	[12950,9,10,0,10,0,8,10,0,8,10],
	[12960,9,10,0,10,0,7,10,0,7,10],
	[13095,8,10,0,10,0,6,10,0,7,10],
	[13230,8,10,0,10,0,6,10,0,6,10],
	[13355,9,10,0,10,0,5,10,0,6,10],
	[13365,9,10,0,10,0,4,10,0,5,10],
	[13490,9,10,0,10,0,5,10,0,6,10],
	[13500,9,10,0,10,0,6,10,0,6,10],
	[13635,9,10,0,10,0,7,10,0,7,10],
	[13770,10,10,0,10,0,7,10,0,7,10],
	[13905,10,10,0,10,0,8,10,0,8,10],
	[14040,10,10,0,10,0,9,10,0,9,10],
	[14175,10,10,0,10,0,10,10,0,10,10],
	[14290,10,10,0,10,0,11,10,0,11,10],
	[14300,11,10,0,10,0,11,10,0,12,10],
	[14310,11,10,0,10,0,12,10,0,13,10],
	[14445,11,10,0,10,0,12,10,0,14,10],
	[14560,12,10,0,10,0,12,10,0,14,10],
	[14570,13,10,0,10,0,12,10,0,15,10],
	[14580,14,10,0,10,0,12,10,0,15,10],
	[14715,15,10,0,10,0,12,10,0,16,10],
	[14830,14,10,0,10,0,12,10,0,15,10],
	[14840,13,10,0,10,0,12,10,0,15,10],
	[14850,12,10,0,10,0,12,10,0,14,10],
	[14975,13,10,0,10,0,12,10,0,15,10],
	[14985,14,10,0,10,0,12,10,0,16,10],
	[15080,15,11,1,10,0,12,11,0,16,10],
	[15090,15,11,2,10,0,13,12,0,16,10],
	[15100,16,12,2,10,0,13,13,0,17,10],
	[15110,16,12,3,10,0,14,14,0,17,10],
	[15120,17,13,4,10,0,14,15,0,17,10],
	[15225,18,14,5,10,0,15,16,0,18,10],
	[15235,18,14,6,10,0,15,16,0,18,10],
	[15245,19,15,7,10,0,16,17,0,19,10],
	[15255,19,15,8,10,0,16,17,0,19,10],
	[15350,19,16,8,10,0,17,18,0,19,10],
	[15360,19,17,9,10,0,17,18,0,19,10],
	[15370,20,18,9,10,0,18,19,0,20,10],
	[15380,20,19,10,10,0,18,19,0,20,10],
	[15390,20,20,10,10,0,19,20,0,20,10],
	[15465,20,20,10,10,0,18,20,0,20,10],
	[15475,20,20,9,10,0,17,20,0,20,10],
	[15485,20,20,9,10,0,16,20,0,20,10],
	[15495,20,20,9,10,0,15,19,0,20,10],
	[15505,20,20,9,10,0,14,19,0,20,10],
	[15515,20,20,8,10,0,13,19,0,20,10],
	[15525,20,20,8,10,0,12,19,0,20,10],
	[15660,20,20,7,10,0,12,19,0,20,10],
	[15795,20,20,6,10,0,12,19,0,20,10],
	[15840,20,19,6,10,0,12,18,0,20,10],
	[15850,19,18,5,10,0,12,17,0,20,10],
	[15860,19,17,5,10,0,12,16,0,20,10],
	[15870,18,16,5,10,0,12,15,0,20,10],
	[15880,18,15,5,10,0,12,15,0,20,10],
	[15890,18,14,4,10,0,12,14,0,19,10],
	[15900,17,13,4,10,0,12,13,0,19,10],
	[15910,17,12,4,10,0,12,12,0,19,10],
	[15920,16,11,3,10,0,12,11,0,19,10],
	[15930,16,10,3,10,0,12,10,0,19,10],
	[16045,15,10,2,10,0,12,10,0,18,10],
	[16055,15,10,2,10,0,12,10,0,17,10],
	[16065,14,10,1,10,0,12,10,0,16,10],
	[16180,13,10,1,10,0,12,10,0,15,10],
	[16190,12,10,0,10,0,12,10,0,15,10],
	[16200,11,10,0,10,0,12,10,0,14,10],
	[16315,11,10,0,10,0,12,10,0,13,10],
	[16325,10,10,0,10,0,11,10,0,12,10],
	[16335,10,10,0,10,0,11,10,0,11,10],
	[16470,9,10,0,10,0,10,10,0,10,10],
	[16605,9,10,0,10,0,9,10,0,9,10],
	[16730,9,10,0,10,0,8,10,0,8,10],
	[16740,9,10,0,10,0,7,10,0,7,10],
	[16875,8,10,0,10,0,6,10,0,7,10],
	[17000,8,10,0,10,0,6,10,0,6,10],
	[17010,8,10,0,10,0,5,10,0,5,10],
	[17145,9,10,0,10,0,4,10,0,4,10],
	[17280,9,10,0,10,0,5,10,0,5,10],
	[17415,9,10,0,10,0,6,10,0,6,10],
	[17550,9,10,0,10,0,7,10,0,7,10],
	[17685,10,10,0,10,0,7,10,0,7,10],
	[17775,10,10,0,10,0,8,10,0,8,10],
	[17865,10,10,0,10,0,9,10,0,9,10],
	[17955,10,10,0,10,0,10,10,0,10,10],
	[18045,10,10,1,10,0,11,10,0,11,10],
	[18135,10,10,2,10,0,12,10,0,12,10],
	[18215,11,10,1,10,0,12,10,0,13,10],
	[18225,11,10,0,10,0,12,10,0,13,10],
	[18295,12,10,1,10,0,12,10,0,13,10],
	[18305,12,10,2,10,0,12,10,0,14,10],
	[18315,13,10,3,10,0,12,10,0,14,10],
	[18405,14,10,3,10,0,12,10,0,15,10],
	[18485,15,10,4,10,0,12,10,0,16,10],
	[18495,15,10,4,10,0,12,10,0,17,10],
	[18585,16,10,4,10,0,12,10,0,18,10],
	[18890,17,10,5,10,0,12,10,0,19,10],
	[18900,18,10,5,10,0,12,10,0,20,10],
	[19840,19,11,6,10,0,12,11,0,20,10],
	[19850,20,11,6,10,0,12,11,0,20,10],
	[19860,20,12,6,10,0,12,12,0,20,10],
	[19870,20,13,6,10,0,12,13,0,20,10],
	[19880,20,14,7,10,0,12,14,0,20,10],
	[19890,20,15,7,10,0,12,15,0,20,10],
	[19895,20,16,8,10,0,12,15,0,20,10],
	[19900,20,17,9,10,1,12,16,1,20,10],
	[19905,20,17,9,10,2,12,16,2,20,10],
	[19910,20,17,10,10,3,12,17,3,20,10],
	[19915,20,18,10,11,4,12,17,4,20,10],
	[19920,20,18,11,12,5,12,18,5,20,10],
	[19925,20,18,11,13,7,13,18,6,20,11],
	[19930,20,19,11,14,9,14,18,7,20,11],
	[19935,20,19,12,15,11,15,18,8,20,12],
	[19940,20,19,12,16,13,16,19,8,20,13],
	[19945,20,20,12,17,15,17,19,9,20,14],
	[19950,20,20,13,18,17,18,19,9,20,15],
	[19955,20,20,13,19,19,19,20,10,20,16],
	[19960,20,20,13,20,20,19,20,10,20,17],
	[20935,20,20,14,20,20,20,20,11,20,18],
	[20945,20,20,15,20,20,20,20,12,20,19],
	[20955,20,20,16,20,20,20,20,13,20,20],
	[20965,20,20,17,20,20,20,20,14,20,20],
	[20975,20,20,18,20,20,20,20,15,20,20],
	[20980,20,20,19,20,20,20,20,16,20,20],
	[20985,20,20,20,20,20,20,20,17,20,20],
	[20990,20,20,20,20,20,20,20,18,20,20],
	[20995,20,20,20,20,20,20,20,19,20,20],
	[21000,20,20,20,20,20,20,20,20,20,20],
	[35000,20,20,20,20,20,20,20,20,20,20]
];