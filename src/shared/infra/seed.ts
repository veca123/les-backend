/* eslint-disable no-restricted-syntax */
import { Request, Response } from 'express';

import { prisma } from './prisma';

const sportsData = ['Futebol', 'Basquete', 'Vôlei', 'eSports'];

const usersData = [
	{
		"name": "Isadora Trevino",
		"email": "diam@google.org",
		"password": "TCY11RYU2EF"
	},
	{
		"name": "Guy Zamora",
		"email": "fermentum.convallis@icloud.ca",
		"password": "OXY55PDF9TH"
	},
	{
		"name": "Deacon Larsen",
		"email": "luctus@outlook.ca",
		"password": "IIE95IKQ8GK"
	},
	{
		"name": "Erin Nielsen",
		"email": "pede.malesuada@icloud.ca",
		"password": "YKI56QEO3OK"
	},
	{
		"name": "Murphy Hines",
		"email": "et.malesuada@icloud.org",
		"password": "MZR77XJO6PJ"
	},
	{
		"name": "Myra Ewing",
		"email": "leo.in@aol.ca",
		"password": "WEI65ULJ2RN"
	},
	{
		"name": "Tobias Camacho",
		"email": "metus.eu@icloud.org",
		"password": "WUJ56NMT6WT"
	},
	{
		"name": "Gray Yates",
		"email": "per.conubia@protonmail.edu",
		"password": "QIT73JQF8MP"
	},
	{
		"name": "Wendy Morris",
		"email": "sed@yahoo.couk",
		"password": "UFM12GXH1OK"
	},
	{
		"name": "Shad Cortez",
		"email": "nisi.a@yahoo.net",
		"password": "YMC15UEO5NW"
	},
	{
		"name": "Lewis Clements",
		"email": "commodo.tincidunt.nibh@icloud.edu",
		"password": "DVG46NVR3MG"
	},
	{
		"name": "Colin Horn",
		"email": "dapibus.gravida.aliquam@icloud.com",
		"password": "WQQ40EUG1YW"
	},
	{
		"name": "Flynn Byrd",
		"email": "nunc.sed@protonmail.net",
		"password": "QHJ51IBS5BY"
	},
	{
		"name": "Wade Kerr",
		"email": "ante.dictum.mi@protonmail.net",
		"password": "XOA72UBF6NN"
	},
	{
		"name": "Ina Russell",
		"email": "vulputate.lacus.cras@hotmail.net",
		"password": "RFV23EYK5QP"
	},
	{
		"name": "Tara Paul",
		"email": "cursus@google.com",
		"password": "TEY54JPW6VP"
	},
	{
		"name": "Plato Beck",
		"email": "tempor.erat.neque@icloud.edu",
		"password": "TPO02PPC5FY"
	},
	{
		"name": "Lars Walters",
		"email": "amet@icloud.com",
		"password": "KUY13SEX6DJ"
	},
	{
		"name": "Ashely Hughes",
		"email": "tempor.erat@icloud.org",
		"password": "RHT80WYV2TP"
	},
	{
		"name": "Kylynn Knapp",
		"email": "erat.sed@yahoo.couk",
		"password": "EGP49LKL5CC"
	},
	{
		"name": "Blossom Baker",
		"email": "tellus.imperdiet.non@protonmail.com",
		"password": "TSS23MFL1GT"
	},
	{
		"name": "Phyllis Daugherty",
		"email": "turpis.vitae@yahoo.edu",
		"password": "GTU26FUK4SP"
	},
	{
		"name": "Zena Livingston",
		"email": "nec.ligula.consectetuer@protonmail.net",
		"password": "QEB58KQJ1OT"
	},
	{
		"name": "Colin Bauer",
		"email": "lobortis@protonmail.com",
		"password": "FDR37WNE9KP"
	},
	{
		"name": "Lareina Galloway",
		"email": "sem.vitae@hotmail.org",
		"password": "KMR96UPE3AE"
	},
	{
		"name": "Jermaine Barton",
		"email": "fringilla.euismod@google.edu",
		"password": "PSG70NJY2FS"
	},
	{
		"name": "Sharon Cherry",
		"email": "sagittis.lobortis@outlook.couk",
		"password": "FFB79VQR6WW"
	},
	{
		"name": "Serena Oliver",
		"email": "pede.ac@outlook.com",
		"password": "BBE75PGF7QM"
	},
	{
		"name": "Ainsley Sparks",
		"email": "varius@protonmail.edu",
		"password": "POF73HQJ5GB"
	},
	{
		"name": "Zia Terry",
		"email": "magna.phasellus.dolor@hotmail.com",
		"password": "OVZ40CHE4LX"
	},
	{
		"name": "Willow Roberts",
		"email": "pellentesque.ut@yahoo.org",
		"password": "GDM72MMZ9UX"
	},
	{
		"name": "Chantale Morris",
		"email": "vel.faucibus@yahoo.couk",
		"password": "RBH66PWU4LH"
	},
	{
		"name": "Darrel Beck",
		"email": "augue.malesuada@outlook.org",
		"password": "RHO20HQH3YS"
	},
	{
		"name": "Holmes Mccarthy",
		"email": "libero@icloud.edu",
		"password": "WTE12ODT8FE"
	},
	{
		"name": "Harriet Curtis",
		"email": "ornare@outlook.net",
		"password": "ADQ18FLN2BI"
	},
	{
		"name": "Rogan Frost",
		"email": "in.condimentum@google.net",
		"password": "EJT84LWQ6JH"
	},
	{
		"name": "Kai Shields",
		"email": "condimentum.eget@yahoo.ca",
		"password": "NPJ50RZO2RM"
	},
	{
		"name": "Liberty Mason",
		"email": "cras.pellentesque@aol.net",
		"password": "ZHF07VHM6PJ"
	},
	{
		"name": "Moana Kaufman",
		"email": "egestas@icloud.net",
		"password": "YOP95XUT3AF"
	},
	{
		"name": "Nola Chaney",
		"email": "cras.convallis.convallis@icloud.ca",
		"password": "IGV95HYG6JH"
	},
	{
		"name": "Brandon Page",
		"email": "nulla.dignissim.maecenas@hotmail.couk",
		"password": "WYR64FHI7TV"
	},
	{
		"name": "Chase Hoover",
		"email": "nunc@google.com",
		"password": "XLO52DKY5PV"
	},
	{
		"name": "Eagan Sullivan",
		"email": "nisi.nibh@yahoo.com",
		"password": "EJA34BCL5NH"
	},
	{
		"name": "Erasmus Booker",
		"email": "nullam.vitae.diam@google.edu",
		"password": "KTY03BQL0NJ"
	},
	{
		"name": "Xanthus Joseph",
		"email": "fermentum.risus.at@hotmail.org",
		"password": "NYM39HFI6EX"
	},
	{
		"name": "Knox Hood",
		"email": "phasellus@outlook.com",
		"password": "LQF64LUA6XX"
	},
	{
		"name": "Karyn Williamson",
		"email": "turpis.egestas.fusce@aol.ca",
		"password": "ZSL72QRC8VP"
	},
	{
		"name": "Sybil Henson",
		"email": "nec.mauris@yahoo.edu",
		"password": "VXM98FCG5HJ"
	},
	{
		"name": "Macey Austin",
		"email": "arcu.et@outlook.couk",
		"password": "LCU72DHB6AS"
	},
	{
		"name": "Laurel Hancock",
		"email": "penatibus.et.magnis@outlook.net",
		"password": "TCC50HTB5RD"
	},
	{
		"name": "MacKensie Watts",
		"email": "maecenas.iaculis@aol.com",
		"password": "PCL31WAF5LG"
	},
	{
		"name": "Echo Huffman",
		"email": "massa@protonmail.com",
		"password": "LBV73RSD8WK"
	},
	{
		"name": "Beck Chandler",
		"email": "semper.pretium@outlook.org",
		"password": "JXS97JEI7DG"
	},
	{
		"name": "Baxter Lawrence",
		"email": "pellentesque.sed@protonmail.net",
		"password": "FCB05EUP6KB"
	},
	{
		"name": "Cooper Dickson",
		"email": "cras@yahoo.edu",
		"password": "XOJ27KZD7JP"
	},
	{
		"name": "Tad Carey",
		"email": "euismod@icloud.edu",
		"password": "TYP55MPH2KD"
	},
	{
		"name": "Venus Bradshaw",
		"email": "eget.ipsum.suspendisse@yahoo.edu",
		"password": "GHH12STR5NU"
	},
	{
		"name": "Joseph Gilmore",
		"email": "mauris@protonmail.ca",
		"password": "PHS71KXT5VL"
	},
	{
		"name": "Kevin Mccarthy",
		"email": "elit.curabitur.sed@icloud.com",
		"password": "EXK53MOI6HZ"
	},
	{
		"name": "Lucy Mercado",
		"email": "nec.euismod@protonmail.ca",
		"password": "QKM31TLU4IR"
	},
	{
		"name": "Zahir Mcfarland",
		"email": "erat.eget.ipsum@protonmail.net",
		"password": "KAQ53UFG6GJ"
	},
	{
		"name": "Whoopi Gonzales",
		"email": "amet.luctus@yahoo.couk",
		"password": "VAU78GDN3SY"
	},
	{
		"name": "Joseph Byrd",
		"email": "orci.donec@google.couk",
		"password": "LAS71UWG5UE"
	},
	{
		"name": "Yvonne Morton",
		"email": "sed.molestie.sed@protonmail.ca",
		"password": "FOG53KUE1RP"
	},
	{
		"name": "Flavia Anthony",
		"email": "quisque@aol.net",
		"password": "BPV66GRH2MU"
	},
	{
		"name": "Graiden Sharp",
		"email": "adipiscing.enim@icloud.org",
		"password": "ACG23ZUC5YP"
	},
	{
		"name": "Rama Mathews",
		"email": "aliquet.magna@aol.ca",
		"password": "VGG62TPJ4KU"
	},
	{
		"name": "Merrill Hunter",
		"email": "sit@protonmail.com",
		"password": "LXY03ELB4DF"
	},
	{
		"name": "Victoria Porter",
		"email": "lacus.mauris.non@icloud.com",
		"password": "YCS17KYW9XC"
	},
	{
		"name": "Oren Zamora",
		"email": "gravida.praesent@yahoo.couk",
		"password": "JHP88NIR5YU"
	},
	{
		"name": "Delilah Castillo",
		"email": "facilisis.suspendisse@yahoo.com",
		"password": "IHN07JCC5KG"
	},
	{
		"name": "Violet James",
		"email": "donec.egestas@hotmail.com",
		"password": "EQJ81QBG9NC"
	},
	{
		"name": "Lareina Shaw",
		"email": "vivamus.euismod.urna@google.net",
		"password": "DIE46ECR6FV"
	},
	{
		"name": "Kiayada Cohen",
		"email": "proin.vel.nisl@icloud.net",
		"password": "DTA63UUP8FR"
	},
	{
		"name": "Blossom Padilla",
		"email": "faucibus.lectus@protonmail.org",
		"password": "JMY04QNM2WT"
	},
	{
		"name": "Winter Dickerson",
		"email": "ipsum.dolor@outlook.edu",
		"password": "EQM12MYG3WB"
	},
	{
		"name": "Carla Newman",
		"email": "proin.velit@protonmail.net",
		"password": "NGV78DQQ4ZC"
	},
	{
		"name": "India Delgado",
		"email": "purus@icloud.edu",
		"password": "ZDK13OBD6DR"
	},
	{
		"name": "Anne Coffey",
		"email": "vel.quam@aol.ca",
		"password": "MHS55WJJ8SF"
	},
	{
		"name": "Deacon Gaines",
		"email": "at.egestas@outlook.ca",
		"password": "HIJ08VCO2GQ"
	},
	{
		"name": "Lillith Love",
		"email": "lacus.pede@hotmail.edu",
		"password": "MYM50PEM7WD"
	},
	{
		"name": "Branden Chambers",
		"email": "convallis.ante.lectus@yahoo.net",
		"password": "QAM24UNY5MR"
	},
	{
		"name": "Solomon Griffin",
		"email": "integer.aliquam@icloud.couk",
		"password": "UUD23PYD4SW"
	},
	{
		"name": "Carter Middleton",
		"email": "at.velit.pellentesque@google.couk",
		"password": "PUR59OSB6OH"
	},
	{
		"name": "Declan Thornton",
		"email": "mauris.nulla@google.edu",
		"password": "DLW17GGS0TX"
	},
	{
		"name": "Athena Sears",
		"email": "habitant.morbi@google.net",
		"password": "IPC62TBB2OU"
	},
	{
		"name": "Chloe Beck",
		"email": "tortor.nibh@icloud.ca",
		"password": "OXL31ENS9LJ"
	},
	{
		"name": "Nayda Hopper",
		"email": "suspendisse@hotmail.couk",
		"password": "OCO47PCF0KD"
	},
	{
		"name": "Teegan Fowler",
		"email": "faucibus.leo@outlook.couk",
		"password": "OBB01CSC7XI"
	},
	{
		"name": "Diana Houston",
		"email": "eu.turpis@hotmail.edu",
		"password": "LQH56UJS3FD"
	},
	{
		"name": "Doris Carney",
		"email": "a.enim@protonmail.net",
		"password": "PVG78XEF5QC"
	},
	{
		"name": "Yetta Dunn",
		"email": "aliquet.phasellus.fermentum@icloud.ca",
		"password": "ZJQ78HOY3NK"
	},
	{
		"name": "Halee Silva",
		"email": "ut.quam.vel@google.org",
		"password": "NLS75SBY2DC"
	},
	{
		"name": "Carissa Turner",
		"email": "ipsum.porta@yahoo.com",
		"password": "FFD11PGX6AK"
	},
	{
		"name": "Danielle Patrick",
		"email": "nunc.risus@google.org",
		"password": "YBT17TGH4XI"
	},
	{
		"name": "Cooper Osborne",
		"email": "nisi.dictum@google.edu",
		"password": "WOV77YXA8WL"
	},
	{
		"name": "Simone O'brien",
		"email": "augue.ut@google.ca",
		"password": "HGK81EVU5SK"
	},
	{
		"name": "Ora Boyd",
		"email": "morbi.quis@protonmail.net",
		"password": "YMX47PCZ6WG"
	},
	{
		"name": "Damon Davidson",
		"email": "tellus.eu@aol.edu",
		"password": "PWI16MKH3FZ"
	},
	{
		"name": "Sade Morin",
		"email": "aliquam@icloud.net",
		"password": "RVL55DXO8JR"
	},
	{
		"name": "Barrett Dudley",
		"email": "duis.gravida@aol.net",
		"password": "CWK62DWJ0KE"
	},
	{
		"name": "Zeus Pratt",
		"email": "aliquam.iaculis@hotmail.edu",
		"password": "PPO42MGX5SY"
	},
	{
		"name": "Warren Mcgee",
		"email": "magna.lorem.ipsum@outlook.edu",
		"password": "XHE29QZA2NK"
	},
	{
		"name": "Carla Cleveland",
		"email": "interdum.enim.non@yahoo.com",
		"password": "MYO35NYG4QV"
	},
	{
		"name": "Abraham Bonner",
		"email": "turpis.in@aol.couk",
		"password": "NHK41NTJ3MT"
	},
	{
		"name": "Norman Jordan",
		"email": "convallis.est.vitae@yahoo.edu",
		"password": "KED62DYJ4XY"
	},
	{
		"name": "Ignacia Beard",
		"email": "ut.quam@aol.couk",
		"password": "YNG67WBY6TR"
	},
	{
		"name": "Grady Zamora",
		"email": "odio@google.org",
		"password": "FWN50ZDS1CU"
	},
	{
		"name": "Lavinia Wolfe",
		"email": "sed.dolor@google.net",
		"password": "DIC68QIW6DN"
	},
	{
		"name": "Harriet Joyce",
		"email": "nonummy.ut@aol.ca",
		"password": "NKL41DOQ7LA"
	},
	{
		"name": "Tarik Huffman",
		"email": "vestibulum.accumsan@aol.ca",
		"password": "BKM45HHZ3OC"
	},
	{
		"name": "Zelenia Moody",
		"email": "quam.pellentesque.habitant@aol.net",
		"password": "GOR80CPB9NY"
	},
	{
		"name": "Marvin Sweet",
		"email": "sociosqu.ad@google.org",
		"password": "JOW88GYS6WE"
	},
	{
		"name": "Kermit Small",
		"email": "risus@yahoo.org",
		"password": "OJP43NQN2NG"
	},
	{
		"name": "Kimberley Kelly",
		"email": "faucibus.id@outlook.edu",
		"password": "ZKK28MLR2YP"
	},
	{
		"name": "Neville Ray",
		"email": "quis@icloud.edu",
		"password": "FRK94LUU8CR"
	},
	{
		"name": "Russell Hess",
		"email": "metus@outlook.net",
		"password": "ZJU69PWU9CQ"
	},
	{
		"name": "Florence Bush",
		"email": "leo.in@yahoo.com",
		"password": "SXF48VDE0JZ"
	},
	{
		"name": "Norman Hyde",
		"email": "feugiat@yahoo.org",
		"password": "DPO15AEY6LB"
	},
	{
		"name": "Urielle Rodriguez",
		"email": "non.luctus.sit@aol.couk",
		"password": "SCM37LQN1ON"
	},
	{
		"name": "Alan Campbell",
		"email": "luctus.lobortis.class@aol.couk",
		"password": "FET80NHS8TZ"
	},
	{
		"name": "Madaline Cardenas",
		"email": "semper.rutrum@icloud.com",
		"password": "LNF15UWR8IA"
	},
	{
		"name": "Brynn Buck",
		"email": "diam.lorem@aol.com",
		"password": "VQD37TIW1IX"
	},
	{
		"name": "Wade Mckay",
		"email": "auctor.velit.aliquam@hotmail.net",
		"password": "CYF12CGD3QO"
	},
	{
		"name": "Shea Brown",
		"email": "tincidunt.neque.vitae@google.edu",
		"password": "ROC84HMN8TL"
	},
	{
		"name": "Zia Hahn",
		"email": "quam.elementum@aol.org",
		"password": "MUK12KYM5VE"
	},
	{
		"name": "Montana Bird",
		"email": "tristique.pellentesque@aol.couk",
		"password": "DSH01REM7CY"
	},
	{
		"name": "Porter Rollins",
		"email": "a.ultricies.adipiscing@yahoo.net",
		"password": "LBW19QBY6PQ"
	},
	{
		"name": "Caldwell Duffy",
		"email": "volutpat.nulla@protonmail.edu",
		"password": "NEF33CEE6UE"
	},
	{
		"name": "Kai Bauer",
		"email": "cursus.a@protonmail.net",
		"password": "GIK42BDC6WA"
	},
	{
		"name": "Kyla Harris",
		"email": "orci@hotmail.net",
		"password": "CUQ95AMM7LC"
	},
	{
		"name": "Zane Hansen",
		"email": "at.auctor@protonmail.couk",
		"password": "OGQ06CKG6GS"
	},
	{
		"name": "Kadeem Compton",
		"email": "ridiculus.mus@google.org",
		"password": "MBT52BBG0LL"
	},
	{
		"name": "Idola Watson",
		"email": "aenean.gravida.nunc@google.net",
		"password": "BUQ49YLS5RO"
	},
	{
		"name": "Bertha Adkins",
		"email": "felis@outlook.couk",
		"password": "QIJ78MTE0IP"
	},
	{
		"name": "Oren Howard",
		"email": "aliquet.lobortis@aol.couk",
		"password": "TQJ33SMC1PW"
	},
	{
		"name": "Kelsie Mccarty",
		"email": "venenatis@outlook.couk",
		"password": "VEY58GFW2DK"
	},
	{
		"name": "Griffin Allison",
		"email": "pellentesque.ultricies.dignissim@yahoo.com",
		"password": "DHH82SPX1KG"
	},
	{
		"name": "Indigo Cruz",
		"email": "nisl@aol.edu",
		"password": "ITF23TXI4XH"
	},
	{
		"name": "Lewis Ray",
		"email": "purus.in@hotmail.ca",
		"password": "RSS11FBV8SS"
	},
	{
		"name": "Evelyn Mejia",
		"email": "risus.duis@icloud.couk",
		"password": "XCX38IOB2VK"
	},
	{
		"name": "Jared Roy",
		"email": "dolor.elit.pellentesque@google.couk",
		"password": "YSS58TBY0EN"
	},
	{
		"name": "Stephanie Pace",
		"email": "curabitur.egestas@hotmail.edu",
		"password": "IGJ59BLF6BH"
	},
	{
		"name": "Galvin Knox",
		"email": "vel.nisl@google.edu",
		"password": "UYH27TRV0MD"
	},
	{
		"name": "Xaviera Bond",
		"email": "adipiscing.elit.aliquam@icloud.ca",
		"password": "BYR88TPP8LI"
	},
	{
		"name": "Ignatius Fuller",
		"email": "nunc.sollicitudin@yahoo.ca",
		"password": "SUW17FIC4HI"
	},
	{
		"name": "Hanae Haynes",
		"email": "donec@protonmail.net",
		"password": "VOJ31ORT0DC"
	},
	{
		"name": "Malcolm Anthony",
		"email": "praesent.eu@hotmail.com",
		"password": "DCX36JSE1ZD"
	},
	{
		"name": "Alea Alexander",
		"email": "dolor.donec@google.com",
		"password": "JTB13LTP3SE"
	},
	{
		"name": "Maris Palmer",
		"email": "et.malesuada@aol.couk",
		"password": "PKS11QCM6FW"
	},
	{
		"name": "Fredericka Stephens",
		"email": "tellus.suspendisse.sed@hotmail.com",
		"password": "JCN21UPY1SP"
	},
	{
		"name": "Vivian Gonzalez",
		"email": "suspendisse@google.couk",
		"password": "TQC86MUB4IY"
	},
	{
		"name": "Wyatt Rutledge",
		"email": "sed.dictum@icloud.org",
		"password": "OWW81DQN3YK"
	},
	{
		"name": "Ayanna Garrett",
		"email": "ut.molestie@aol.ca",
		"password": "WLV46PYM1FK"
	},
	{
		"name": "Zelenia Martinez",
		"email": "pede@yahoo.edu",
		"password": "RQC17UDD5NM"
	},
	{
		"name": "Alec Diaz",
		"email": "et.magnis@hotmail.couk",
		"password": "GRD04XGP4JO"
	},
	{
		"name": "Keelie Dawson",
		"email": "tristique.pellentesque@protonmail.org",
		"password": "RME42AOE8LS"
	},
	{
		"name": "Bryar Herman",
		"email": "integer.mollis.integer@google.edu",
		"password": "DBY74MUX1NJ"
	},
	{
		"name": "Vincent Randolph",
		"email": "tristique.senectus.et@hotmail.edu",
		"password": "LLK46IEJ4PL"
	},
	{
		"name": "Helen Walter",
		"email": "curabitur@icloud.org",
		"password": "HGD14VUU1JV"
	},
	{
		"name": "Oleg Hutchinson",
		"email": "sit@aol.com",
		"password": "HTP67WNN8PQ"
	},
	{
		"name": "Chase Deleon",
		"email": "donec.non@yahoo.edu",
		"password": "DEJ85QOP1WN"
	},
	{
		"name": "Shelby Witt",
		"email": "rhoncus@hotmail.ca",
		"password": "RXW22ECS8HU"
	},
	{
		"name": "Ahmed Good",
		"email": "elementum@hotmail.com",
		"password": "RDI87PSN5XK"
	},
	{
		"name": "Darius Schmidt",
		"email": "facilisis@google.couk",
		"password": "NYT72COI6MG"
	},
	{
		"name": "Neville Cruz",
		"email": "curae.phasellus.ornare@hotmail.org",
		"password": "HON05WDF8JR"
	},
	{
		"name": "Caldwell Waters",
		"email": "magna.duis.dignissim@google.ca",
		"password": "CVE61IDG2BR"
	},
	{
		"name": "Tatyana Hopper",
		"email": "nunc@icloud.couk",
		"password": "ROO08DCS7NV"
	},
	{
		"name": "Kelly Roman",
		"email": "euismod.enim@icloud.ca",
		"password": "MDV51JYK6SL"
	},
	{
		"name": "Kenneth Barrera",
		"email": "augue.malesuada@aol.com",
		"password": "FTM62VLV1MV"
	},
	{
		"name": "Nell Crane",
		"email": "duis@yahoo.org",
		"password": "EFR67UIZ1TH"
	},
	{
		"name": "Rachel Ross",
		"email": "tempus@aol.net",
		"password": "UUB62QKG1UF"
	},
	{
		"name": "Althea Neal",
		"email": "placerat.cras@yahoo.com",
		"password": "EIQ54RCL5JN"
	},
	{
		"name": "Adele Wong",
		"email": "commodo.auctor.velit@outlook.edu",
		"password": "OMT43GXH9RV"
	},
	{
		"name": "Rhiannon Grant",
		"email": "donec.felis.orci@aol.ca",
		"password": "PRV98UKJ6WH"
	},
	{
		"name": "Delilah Wong",
		"email": "ut.sagittis@yahoo.edu",
		"password": "UTW42LUC7GF"
	},
	{
		"name": "Mariam Gentry",
		"email": "luctus@icloud.net",
		"password": "LVO23LUQ2ZK"
	},
	{
		"name": "Fiona Lloyd",
		"email": "purus@protonmail.com",
		"password": "CFU04TQQ0FT"
	},
	{
		"name": "Quinn Morrow",
		"email": "egestas.ligula@yahoo.ca",
		"password": "YDM47LDN8PR"
	},
	{
		"name": "Rigel Ramirez",
		"email": "magnis.dis@protonmail.org",
		"password": "SXM88UQC7QJ"
	},
	{
		"name": "Daniel Gates",
		"email": "felis.eget.varius@outlook.edu",
		"password": "SRD78TDO2YC"
	},
	{
		"name": "Lois Wyatt",
		"email": "nibh.donec@aol.net",
		"password": "XVJ77PUO1BZ"
	},
	{
		"name": "Bruno Monroe",
		"email": "at.velit@outlook.com",
		"password": "BPO30LPU6GV"
	},
	{
		"name": "Fulton Greer",
		"email": "vestibulum.ante.ipsum@aol.ca",
		"password": "QDZ73WPM6CC"
	},
	{
		"name": "Leah Bean",
		"email": "fusce@icloud.net",
		"password": "WPM17KDG1QE"
	},
	{
		"name": "Tanek Snyder",
		"email": "leo.in@google.couk",
		"password": "DKS65JKE3MT"
	},
	{
		"name": "Clarke Hernandez",
		"email": "vulputate.dui@aol.org",
		"password": "XII89CAJ6DN"
	},
	{
		"name": "Amery Ewing",
		"email": "rutrum.lorem@aol.com",
		"password": "DJL33IBS8OY"
	},
	{
		"name": "Brennan Brock",
		"email": "aenean.eget@yahoo.com",
		"password": "GDG04CNB7LW"
	},
	{
		"name": "Sarah Avila",
		"email": "rutrum.non.hendrerit@aol.ca",
		"password": "CHR01OIY6XK"
	},
	{
		"name": "Damian Burris",
		"email": "maecenas@hotmail.couk",
		"password": "QDC89LLW1QH"
	},
	{
		"name": "Timon Donaldson",
		"email": "mauris.ut@yahoo.ca",
		"password": "ULS49FMN9QQ"
	},
	{
		"name": "Jorden Sawyer",
		"email": "tristique.senectus@icloud.net",
		"password": "QFU12IMY3SM"
	},
	{
		"name": "Leonard Kane",
		"email": "eu.placerat@hotmail.edu",
		"password": "MJC51DBM4BV"
	},
	{
		"name": "Brynne Small",
		"email": "nisl@aol.edu",
		"password": "LWE90SGJ2NR"
	},
	{
		"name": "Hall Black",
		"email": "est.nunc@yahoo.com",
		"password": "QDG38TYN7OV"
	},
	{
		"name": "Ursula Sheppard",
		"email": "mauris.ut@yahoo.edu",
		"password": "TSS36QGX0QV"
	},
	{
		"name": "Jamalia Rodriquez",
		"email": "aenean.euismod@icloud.edu",
		"password": "OFG28XSV7TB"
	},
	{
		"name": "Jayme Green",
		"email": "nec.cursus.a@protonmail.com",
		"password": "HZB33BKB4UV"
	},
	{
		"name": "John Owen",
		"email": "faucibus@aol.com",
		"password": "LGX23SAV8RM"
	},
	{
		"name": "Sade Robinson",
		"email": "leo.morbi@aol.ca",
		"password": "QBG92VNY0HI"
	},
	{
		"name": "Bryar Barker",
		"email": "sed.et.libero@hotmail.com",
		"password": "SNJ54MGF7VX"
	},
	{
		"name": "Nerea Rivers",
		"email": "euismod.et@google.edu",
		"password": "OUC82MTA6XP"
	},
	{
		"name": "Amy Burke",
		"email": "imperdiet.ullamcorper@icloud.ca",
		"password": "BIB71BKY2DB"
	},
	{
		"name": "Justina Navarro",
		"email": "a.enim.suspendisse@protonmail.ca",
		"password": "BPT23LVN6YX"
	},
	{
		"name": "Marcia Huff",
		"email": "tincidunt@protonmail.org",
		"password": "SUQ32TDN0UC"
	},
	{
		"name": "Judith Ruiz",
		"email": "magna@yahoo.com",
		"password": "IXW71HMR8LE"
	},
	{
		"name": "Lillian Harrington",
		"email": "eget.metus@yahoo.com",
		"password": "SDS11BQC8FB"
	},
	{
		"name": "Jana Haynes",
		"email": "vel.mauris@protonmail.com",
		"password": "TNF46SYQ1UP"
	},
	{
		"name": "Hamish Marshall",
		"email": "id@hotmail.com",
		"password": "NHW92TEG6UJ"
	},
	{
		"name": "Adria Thompson",
		"email": "morbi@yahoo.net",
		"password": "MTR58XUI6RU"
	},
	{
		"name": "Jonah Sosa",
		"email": "fermentum.convallis@aol.com",
		"password": "QSW17OSF0WU"
	},
	{
		"name": "Armand Cole",
		"email": "ipsum@protonmail.edu",
		"password": "GWB74UPR3ES"
	},
	{
		"name": "Perry Mcdowell",
		"email": "semper.et@yahoo.org",
		"password": "EGC07JVP8LC"
	},
	{
		"name": "Mariko Rocha",
		"email": "auctor@aol.ca",
		"password": "NMS65VSE3XI"
	},
	{
		"name": "Oren Hester",
		"email": "ligula.donec@yahoo.ca",
		"password": "DFD23BXA3IB"
	},
	{
		"name": "Cain Puckett",
		"email": "et.ipsum.cursus@yahoo.org",
		"password": "THJ74FWI5DG"
	},
	{
		"name": "Aaron Little",
		"email": "vitae.sodales@yahoo.net",
		"password": "EGG75HOS9TU"
	},
	{
		"name": "Winifred Miranda",
		"email": "ac.fermentum.vel@google.com",
		"password": "QFK83XRM3KO"
	},
	{
		"name": "Chanda Bell",
		"email": "morbi.non.sapien@icloud.org",
		"password": "GUV20XLM3HH"
	},
	{
		"name": "Hollee Burris",
		"email": "amet.risus.donec@hotmail.couk",
		"password": "PBI65RKD5EI"
	},
	{
		"name": "Eagan Cooper",
		"email": "mus.aenean@hotmail.couk",
		"password": "DLO27NHF3ZP"
	},
	{
		"name": "India Meadows",
		"email": "mi.eleifend.egestas@outlook.net",
		"password": "GLE13KXP5QY"
	},
	{
		"name": "Kadeem Sanford",
		"email": "orci@icloud.org",
		"password": "AWB24QVQ4EG"
	},
	{
		"name": "Kai Goodman",
		"email": "non.magna@aol.net",
		"password": "VXS75UFE2WT"
	},
	{
		"name": "Dolan Bennett",
		"email": "odio.semper.cursus@protonmail.ca",
		"password": "BMO01NTJ4MM"
	},
	{
		"name": "Chester Weiss",
		"email": "facilisis.lorem@protonmail.edu",
		"password": "RRG42CIT6SG"
	},
	{
		"name": "Hadassah Stokes",
		"email": "risus.donec@yahoo.com",
		"password": "ICD92HCY1KN"
	},
	{
		"name": "Rafael Shannon",
		"email": "aenean.gravida@icloud.couk",
		"password": "WGM27RER7DK"
	},
	{
		"name": "Chester Chandler",
		"email": "nunc.mauris.sapien@aol.edu",
		"password": "VRR18QDX6WX"
	},
	{
		"name": "Ulric Knox",
		"email": "amet.ante@protonmail.com",
		"password": "BWO41IYX1AI"
	},
	{
		"name": "Tucker Spencer",
		"email": "malesuada.malesuada@outlook.net",
		"password": "EPG96PVL4EB"
	},
	{
		"name": "Octavia Shelton",
		"email": "integer.id@protonmail.ca",
		"password": "QGC18VAX7NK"
	},
	{
		"name": "Leandra Cleveland",
		"email": "elit.aliquam.auctor@google.net",
		"password": "MHS31NYU4JW"
	},
	{
		"name": "Aaron Donovan",
		"email": "mollis@aol.net",
		"password": "XBQ92QCR4PQ"
	},
	{
		"name": "Constance Coffey",
		"email": "ipsum.leo.elementum@google.com",
		"password": "SUU81HCF1ES"
	},
	{
		"name": "Jada Vaughan",
		"email": "eu.tempor@icloud.ca",
		"password": "IUC66QQJ7YO"
	},
	{
		"name": "Yasir Lane",
		"email": "commodo.at@outlook.org",
		"password": "RKF36EML7RE"
	},
	{
		"name": "Daria Rocha",
		"email": "ornare@aol.edu",
		"password": "KUL64DIL2LE"
	},
	{
		"name": "Graham Richardson",
		"email": "enim.nec@protonmail.ca",
		"password": "MNU54OEN4ZI"
	},
	{
		"name": "Velma Yang",
		"email": "erat@hotmail.ca",
		"password": "CQR57VTR0BC"
	},
	{
		"name": "Unity Gaines",
		"email": "tortor.nunc.commodo@google.com",
		"password": "GNR92KHY5PW"
	},
	{
		"name": "Tamekah Rush",
		"email": "nam.tempor@protonmail.net",
		"password": "BST61KMN8EG"
	},
	{
		"name": "Penelope Hancock",
		"email": "mauris.integer.sem@hotmail.net",
		"password": "SKE34XDF2DS"
	},
	{
		"name": "Julian O'donnell",
		"email": "nunc.pulvinar@yahoo.com",
		"password": "INO09EUN0GR"
	},
	{
		"name": "Darius Morton",
		"email": "taciti.sociosqu@hotmail.edu",
		"password": "KUX50ETV6MW"
	},
	{
		"name": "Lucy Levy",
		"email": "nunc@icloud.couk",
		"password": "FKM38DQS3PM"
	},
	{
		"name": "Asher Joyner",
		"email": "at.sem.molestie@aol.ca",
		"password": "JMB78IKG6FG"
	},
	{
		"name": "Ivan Scott",
		"email": "lobortis.class.aptent@icloud.ca",
		"password": "YCQ14TAO6PS"
	},
	{
		"name": "Stacy Wade",
		"email": "sollicitudin.a@outlook.edu",
		"password": "PRR13VIO6VJ"
	},
	{
		"name": "Quentin Greer",
		"email": "hendrerit.id@icloud.couk",
		"password": "DQV74UOR2HX"
	},
	{
		"name": "Brian Contreras",
		"email": "dis.parturient@icloud.couk",
		"password": "MVG68MVK5KA"
	},
	{
		"name": "Rachel Herring",
		"email": "eros.nec@google.org",
		"password": "KHY32MTP6PG"
	},
	{
		"name": "Stephanie Lara",
		"email": "neque.sed.sem@yahoo.net",
		"password": "CKH74BXZ5YB"
	},
	{
		"name": "Hedda Nash",
		"email": "non.enim.mauris@hotmail.edu",
		"password": "EGW72FSL1VO"
	},
	{
		"name": "Tatyana Becker",
		"email": "sed@hotmail.org",
		"password": "LDO77VHO4ND"
	},
	{
		"name": "Dai Morrow",
		"email": "elit@outlook.org",
		"password": "GYO36DUH8RR"
	},
	{
		"name": "Iliana Bolton",
		"email": "dolor.dapibus@protonmail.net",
		"password": "VUT15IIE9VG"
	},
	{
		"name": "Allen Camacho",
		"email": "sed.pede@icloud.edu",
		"password": "MZB82HYC7UV"
	},
	{
		"name": "Kane Mcknight",
		"email": "dapibus@aol.couk",
		"password": "PER36JLK8XQ"
	},
	{
		"name": "Chava Estrada",
		"email": "odio.nam@hotmail.ca",
		"password": "SHJ11CNN2BV"
	},
	{
		"name": "Nell Roach",
		"email": "semper.dui@aol.edu",
		"password": "WJV88PXA6IP"
	},
	{
		"name": "Mara Wilkins",
		"email": "eget.lacus@icloud.edu",
		"password": "YGR18REX3IK"
	},
	{
		"name": "Elton Espinoza",
		"email": "amet.faucibus.ut@icloud.edu",
		"password": "SZK81RQP7AD"
	},
	{
		"name": "Castor Rose",
		"email": "morbi.accumsan.laoreet@aol.org",
		"password": "NNG66FDS0LO"
	},
	{
		"name": "Xanthus Murray",
		"email": "erat.vel@hotmail.com",
		"password": "OLG89WLS0TG"
	},
	{
		"name": "Kasimir West",
		"email": "integer.sem@aol.edu",
		"password": "LOP84SJW5HK"
	},
	{
		"name": "Amos Terry",
		"email": "tincidunt.orci@icloud.couk",
		"password": "DDA78MKO7OC"
	},
	{
		"name": "Kelly Herman",
		"email": "justo.nec.ante@hotmail.net",
		"password": "HHN74XWH0LB"
	},
	{
		"name": "Kelly Fox",
		"email": "libero.proin@protonmail.ca",
		"password": "HEO55XBQ2BH"
	},
	{
		"name": "Ray Fields",
		"email": "aliquet.sem@aol.net",
		"password": "IBI33ECH4IW"
	},
	{
		"name": "Merritt Robertson",
		"email": "iaculis.lacus@yahoo.ca",
		"password": "VGO87HQM1RR"
	},
	{
		"name": "Jared Weber",
		"email": "amet.lorem.semper@icloud.couk",
		"password": "WVU47QVP6EF"
	},
	{
		"name": "Odette Holden",
		"email": "metus.eu@yahoo.ca",
		"password": "NAH92LVN2WC"
	},
	{
		"name": "Herrod Foreman",
		"email": "ornare@google.net",
		"password": "HBD58QUS1XV"
	},
	{
		"name": "Orli Mann",
		"email": "sem.pellentesque.ut@outlook.couk",
		"password": "NIU54GQJ6MK"
	},
	{
		"name": "Kylie Moon",
		"email": "id.nunc.interdum@protonmail.net",
		"password": "DVY12JTG1TJ"
	},
	{
		"name": "Mason Lawson",
		"email": "lobortis.quis@aol.org",
		"password": "AON33EPG1NC"
	},
	{
		"name": "Cheryl Lancaster",
		"email": "suspendisse.commodo@aol.com",
		"password": "RCL39WSD5ZO"
	},
	{
		"name": "Daria Zamora",
		"email": "tincidunt.pede@icloud.net",
		"password": "ROM82ADE8TS"
	},
	{
		"name": "Samson Justice",
		"email": "non.leo@aol.couk",
		"password": "JAP61XYV6BD"
	},
	{
		"name": "Kevin Hammond",
		"email": "vel.quam.dignissim@hotmail.ca",
		"password": "IFG63GVO4TC"
	},
	{
		"name": "Channing Carroll",
		"email": "ante.lectus@outlook.ca",
		"password": "MXO29NKU0QV"
	},
	{
		"name": "Jocelyn Dunlap",
		"email": "cum@icloud.edu",
		"password": "MEK31WAM0QK"
	},
	{
		"name": "Eaton Hammond",
		"email": "vitae@yahoo.net",
		"password": "YBT32GLH2HX"
	},
	{
		"name": "Sacha Bryant",
		"email": "eu.metus.in@outlook.edu",
		"password": "BIR80QVJ5RI"
	},
	{
		"name": "Anthony Gray",
		"email": "sed.dui.fusce@protonmail.edu",
		"password": "AWG23GZT1LH"
	},
	{
		"name": "Jin Mayo",
		"email": "egestas@outlook.net",
		"password": "GRI63QEM2UY"
	},
	{
		"name": "Damian Horton",
		"email": "eu.dui@outlook.org",
		"password": "MJG65RWF1DQ"
	},
	{
		"name": "Randall Diaz",
		"email": "augue.malesuada@aol.ca",
		"password": "GVQ63YQD1RS"
	},
	{
		"name": "Clarke Alston",
		"email": "lectus.cum@aol.ca",
		"password": "IMM81JFG4CC"
	},
	{
		"name": "Sharon Perez",
		"email": "malesuada@google.ca",
		"password": "TTE11PUW3XI"
	},
	{
		"name": "Baxter Hutchinson",
		"email": "a.arcu.sed@google.edu",
		"password": "NGR06FQP5SX"
	},
	{
		"name": "Trevor Chaney",
		"email": "tincidunt.tempus.risus@icloud.net",
		"password": "MOR46QWZ1ME"
	},
	{
		"name": "Upton Rowland",
		"email": "maecenas.malesuada@aol.couk",
		"password": "XYU21JXV7LZ"
	},
	{
		"name": "Angelica Golden",
		"email": "tristique.ac.eleifend@protonmail.net",
		"password": "UNH31HKI7QX"
	},
	{
		"name": "Kaye Gutierrez",
		"email": "non.arcu@google.net",
		"password": "OOT70BYB3DL"
	},
	{
		"name": "Flavia Dudley",
		"email": "ornare.lectus@hotmail.net",
		"password": "IBK56JJD6RR"
	},
	{
		"name": "Ariana Dorsey",
		"email": "ipsum@outlook.org",
		"password": "YKV54GIC4SV"
	},
	{
		"name": "Benjamin Ramirez",
		"email": "lobortis.ultrices.vivamus@icloud.com",
		"password": "OXU71LFR5TB"
	}
];

const teamsData = [
  {
    name: 'Vila do Chaves',
    description: 'Eventos dos Brother',
  },
  {
    name: 'Turma do Bairro',
    description: 'Evento com os amigos',
  },
  {
    name: 'Os Fanaticos',
    description: 'Eventos dos Crias',
  },
  {
    name: 'A quebrada do morro',
    description: 'Eventos dos Crias',
  },
  {
    name: 'Os Lunaticos',
    description: 'Eventos dos Brothers',
  },
  {
    name: 'Decepticons',
    description: 'Evento com os amigos',
  },
  {
    name: 'Autobots',
    description: 'Evento com os amigos',
  },
  {
    name: 'Os Mercenarios',
    description: 'Eventos dos Brother',
  },
  {
    name: 'Turma do Barulho',
    description: 'Eventos dos Crias',
  },
  {
    name: 'Os Vingadores',
    description: 'Eventos dos Crias',
  },
  {
    name: 'The Royal Monkeys',
    description: 'Evento com os amigos',
  },
  {
    name: 'The Courageous Roaches',
    description: 'Evento com os amigos',
  },
  {
    name: 'The Earnest Dinosaurs',
    description: 'Eventos dos Crias',
  },
  {
    name: 'The Skeleton Crickets',
    description: 'Evento com os amigos',
  },
  {
    name: 'The Proud Scorpions',
    description: 'Chamar os amigos para um evento',
  },
  {
    name: 'The Komodos',
    description: 'Chamar os amigos para um evento',
  },
  {
    name: 'The Regal Krakens',
    description: 'Chamar os amigos para um evento',
  },
  {
    name: 'The Exalted Aces',
    description: 'Eventos dos Brother',
  },
  {
    name: 'The Skeleton Dingos',
    description: 'Chamar os amigos para um evento',
  },
  {
    name: 'The Thunder Nightingales',
    description: 'Eventos dos Crias',
  },
  {
    name: 'The Swift Toucans',
    description: 'Eventos dos Brother',
  },
  {
    name: 'The Fiery Jaguars',
    description: 'Chamar os amigos para um evento',
  },
  {23
    name: 'The Flawless Goblins',
    description: 'Evento com os amigos',
  },
  {
    name: 'The Storm Tigers',
    description: 'Chamar os amigos para um evento',
  },
  {
    name: 'The Toads',
    description: 'Evento com os amigos',
  },
  {
    name: 'The Earnest Pit Bulls',
    description: 'Evento com os amigos',
  },
  {
    name: 'The Mystery Dogs',
    description: 'Eventos dos Crias',
  },
  {
    name: 'The New Monarchs',
    description: 'Eventos dos Brother',
  },
  {
    name: 'The Dreams',
    description: 'Eventos dos Crias',
  },
  {
    name: 'The Turkeys',
    description: 'Eventos dos Brother',
  },
];

export const seed = async (_request: Request, response: Response) => {
  // Create sports
  await prisma.sport.deleteMany();
  await prisma.sport.createMany({
    data: sportsData.map(sport => ({
      name: sport,
    })),
  });

  // Create users
  await prisma.user.deleteMany();
  await prisma.user.createMany({
    data: usersData.map(user => ({
      name: user.name,
      email: user.email,
      password: user.password,
    })),
  });

  const users = await prisma.user.findMany();

  // Create teams
  await prisma.team.deleteMany();
  // Team 0
  await prisma.team.create({
    data: {
      name: teamsData[0].name,
      description: teamsData[0].description,
      createdBy: users[0].id,
      users: {
        connect: [
          {
            email: users[0].email,
          },
          {
            email: users[1].email,
          },
          {
            email: users[2].email,
          },
          {
            email: users[3].email,
          },
        ],
      },
    },
  });

  // Team 1
  await prisma.team.create({
    data: {
      name: teamsData[1].name,
      description: teamsData[1].description,
      createdBy: users[1].id,
      users: {
        connect: [
          {
            email: users[4].email,
          },
          {
            email: users[5].email,
          },
          {
            email: users[6].email,
          },
          {
            email: users[7].email,
          },
        ],
      },
    },
  });
  // Team 2
  await prisma.team.create({
    data: {
      name: teamsData[2].name,
      description: teamsData[2].description,
      createdBy: users[2].id,
      users: {
        connect: [
          {
            email: users[8].email,
          },
          {
            email: users[9].email,
          },
          {
            email: users[10].email,
          },
          {
            email: users[11].email,
          },
        ],
      },
    },
  });
  // Team 3
  await prisma.team.create({
    data: {
      name: teamsData[3].name,
      description: teamsData[3].description,
      createdBy: users[3].id,
      users: {
        connect: [
          {
            email: users[12].email,
          },
          {
            email: users[13].email,
          },
          {
            email: users[14].email,
          },
          {
            email: users[15].email,
          },
        ],
      },
    },
  });
  // Team 4
  await prisma.team.create({
    data: {
      name: teamsData[4].name,
      description: teamsData[4].description,
      createdBy: users[4].id,
      users: {
        connect: [
          {
            email: users[16].email,
          },
          {
            email: users[17].email,
          },
          {
            email: users[18].email,
          },
          {
            email: users[19].email,
          },
        ],
      },
    },
  });
  // Team 5
  await prisma.team.create({
    data: {
      name: teamsData[5].name,
      description: teamsData[5].description,
      createdBy: users[5].id,
      users: {
        connect: [
          {
            email: users[20].email,
          },
          {
            email: users[21].email,
          },
          {
            email: users[22].email,
          },
          {
            email: users[23].email,
          },
        ],
      },
    },
  });
  // Team 6
  await prisma.team.create({
    data: {
      name: teamsData[6].name,
      description: teamsData[6].description,
      createdBy: users[6].id,
      users: {
        connect: [
          {
            email: users[24].email,
          },
          {
            email: users[25].email,
          },
          {
            email: users[26].email,
          },
          {
            email: users[27].email,
          },
        ],
      },
    },
  });
  // Team 7
  await prisma.team.create({
    data: {
      name: teamsData[7].name,
      description: teamsData[7].description,
      createdBy: users[7].id,
      users: {
        connect: [
          {
            email: users[28].email,
          },
          {
            email: users[29].email,
          },
          {
            email: users[30].email,
          },
          {
            email: users[31].email,
          },
        ],
      },
    },
  });
  // Team 8
  await prisma.team.create({
    data: {
      name: teamsData[8].name,
      description: teamsData[8].description,
      createdBy: users[8].id,
      users: {
        connect: [
          {
            email: users[32].email,
          },
          {
            email: users[33].email,
          },
          {
            email: users[34].email,
          },
          {
            email: users[35].email,
          },
        ],
      },
    },
  });
  // Team 9
  await prisma.team.create({
    data: {
      name: teamsData[9].name,
      description: teamsData[9].description,
      createdBy: users[9].id,
      users: {
        connect: [
          {
            email: users[36].email,
          },
          {
            email: users[37].email,
          },
          {
            email: users[38].email,
          },
          {
            email: users[39].email,
          },
        ],
      },
    },
  });
  // Team 10
  await prisma.team.create({
    data: {
      name: teamsData[10].name,
      description: teamsData[10].description,
      createdBy: users[10].id,
      users: {
        connect: [
          {
            email: users[40].email,
          },
          {
            email: users[41].email,
          },
          {
            email: users[42].email,
          },
          {
            email: users[43].email,
          },
        ],
      },
    },
  });
  // Team 11
  await prisma.team.create({
    data: {
      name: teamsData[11].name,
      description: teamsData[11].description,
      createdBy: users[11].id,
      users: {
        connect: [
          {
            email: users[44].email,
          },
          {
            email: users[45].email,
          },
          {
            email: users[46].email,
          },
          {
            email: users[47].email,
          },
        ],
      },
    },
  });
  // Team 12
  await prisma.team.create({
    data: {
      name: teamsData[12].name,
      description: teamsData[12].description,
      createdBy: users[12].id,
      users: {
        connect: [
          {
            email: users[48].email,
          },
          {
            email: users[49].email,
          },
          {
            email: users[50].email,
          },
          {
            email: users[51].email,
          },
        ],
      },
    },
  });
  // Team 13
  await prisma.team.create({
    data: {
      name: teamsData[13].name,
      description: teamsData[13].description,
      createdBy: users[13].id,
      users: {
        connect: [
          {
            email: users[52].email,
          },
          {
            email: users[53].email,
          },
          {
            email: users[54].email,
          },
          {
            email: users[55].email,
          },
        ],
      },
    },
  });
   // Team 14
  await prisma.team.create({
    data: {
      name: teamsData[14].name,
      description: teamsData[14].description,
      createdBy: users[14].id,
      users: {
        connect: [
          {
            email: users[56].email,
          },
          {
            email: users[57].email,
          },
          {
            email: users[58].email,
          },
          {
            email: users[59].email,
          },
        ],
      },
    },
  });
  // Team 15
  await prisma.team.create({
    data: {
      name: teamsData[15].name,
      description: teamsData[15].description,
      createdBy: users[15].id,
      users: {
        connect: [
          {
            email: users[60].email,
          },
          {
            email: users[61].email,
          },
          {
            email: users[62].email,
          },
          {
            email: users[63].email,
          },
        ],
      },
    },
  });
  // Team 16
  await prisma.team.create({
    data: {
      name: teamsData[16].name,
      description: teamsData[16].description,
      createdBy: users[16].id,
      users: {
        connect: [
          {
            email: users[64].email,
          },
          {
            email: users[65].email,
          },
          {
            email: users[66].email,
          },
          {
            email: users[67].email,
          },
        ],
      },
    },
  });
  // Team 17
  await prisma.team.create({
    data: {
      name: teamsData[17].name,
      description: teamsData[17].description,
      createdBy: users[17].id,
      users: {
        connect: [
          {
            email: users[68].email,
          },
          {
            email: users[69].email,
          },
          {
            email: users[70].email,
          },
          {
            email: users[71].email,
          },
        ],
      },
    },
  });
  // Team 18
  await prisma.team.create({
    data: {
      name: teamsData[18].name,
      description: teamsData[18].description,
      createdBy: users[18].id,
      users: {
        connect: [
          {
            email: users[68].email,
          },
          {
            email: users[69].email,
          },
          {
            email: users[70].email,
          },
          {
            email: users[71].email,
          },
        ],
      },
    },
  });
  // Team 19
  await prisma.team.create({
    data: {
      name: teamsData[19].name,
      description: teamsData[19].description,
      createdBy: users[19].id,
      users: {
        connect: [
          {
            email: users[72].email,
          },
          {
            email: users[73].email,
          },
          {
            email: users[74].email,
          },
          {
            email: users[75].email,
          },
        ],
      },
    },
  });
  // Team 20
  await prisma.team.create({
    data: {
      name: teamsData[20].name,
      description: teamsData[20].description,
      createdBy: users[20].id,
      users: {
        connect: [
          {
            email: users[76].email,
          },
          {
            email: users[77].email,
          },
          {
            email: users[78].email,
          },
          {
            email: users[79].email,
          },
        ],
      },
    },
  });
  // Team 21
  await prisma.team.create({
    data: {
      name: teamsData[21].name,
      description: teamsData[21].description,
      createdBy: users[21].id,
      users: {
        connect: [
          {
            email: users[80].email,
          },
          {
            email: users[81].email,
          },
          {
            email: users[82].email,
          },
          {
            email: users[83].email,
          },
        ],
      },
    },
  });
  // Team 22
  await prisma.team.create({
    data: {
      name: teamsData[22].name,
      description: teamsData[22].description,
      createdBy: users[22].id,
      users: {
        connect: [
          {
            email: users[84].email,
          },
          {
            email: users[85].email,
          },
          {
            email: users[86].email,
          },
          {
            email: users[87].email,
          },
        ],
      },
    },
  });
// Team 23
  await prisma.team.create({
    data: {
      name: teamsData[23].name,
      description: teamsData[23].description,
      createdBy: users[23].id,
      users: {
        connect: [
          {
            email: users[88].email,
          },
          {
            email: users[89].email,
          },
          {
            email: users[90].email,
          },
          {
            email: users[91].email,
          },
        ],
      },
    },
  });
  // Team 24
  await prisma.team.create({
    data: {
      name: teamsData[24].name,
      description: teamsData[24].description,
      createdBy: users[24].id,
      users: {
        connect: [
          {
            email: users[92].email,
          },
          {
            email: users[93].email,
          },
          {
            email: users[94].email,
          },
          {
            email: users[95].email,
          },
        ],
      },
    },
  });
  // Team 25
  await prisma.team.create({
    data: {
      name: teamsData[25].name,
      description: teamsData[25].description,
      createdBy: users[25].id,
      users: {
        connect: [
          {
            email: users[96].email,
          },
          {
            email: users[97].email,
          },
          {
            email: users[98].email,
          },
          {
            email: users[99].email,
          },
        ],
      },
    },
  });
  // Team 26
  await prisma.team.create({
    data: {
      name: teamsData[26].name,
      description: teamsData[26].description,
      createdBy: users[26].id,
      users: {
        connect: [
          {
            email: users[100].email,
          },
          {
            email: users[101].email,
          },
          {
            email: users[102].email,
          },
          {
            email: users[103].email,
          },
        ],
      },
    },
  });
  // Team 27
  await prisma.team.create({
    data: {
      name: teamsData[27].name,
      description: teamsData[27].description,
      createdBy: users[27].id,
      users: {
        connect: [
          {
            email: users[104].email,
          },
          {
            email: users[105].email,
          },
          {
            email: users[106].email,
          },
          {
            email: users[107].email,
          },
        ],
      },
    },
  });
  // Team 28
  await prisma.team.create({
    data: {
      name: teamsData[28].name,
      description: teamsData[28].description,
      createdBy: users[28].id,
      users: {
        connect: [
          {
            email: users[108].email,
          },
          {
            email: users[109].email,
          },
          {
            email: users[110].email,
          },
          {
            email: users[112].email,
          },
        ],
      },
    },
  });
  // Team 29
  await prisma.team.create({
    data: {
      name: teamsData[29].name,
      description: teamsData[29].description,
      createdBy: users[29].id,
      users: {
        connect: [
          {
            email: users[113].email,
          },
          {
            email: users[114].email,
          },
          {
            email: users[115].email,
          },
          {
            email: users[116].email,
          },
        ],
      },
    },
  });
  // Team 30
  await prisma.team.create({
    data: {
      name: teamsData[30].name,
      description: teamsData[30].description,
      createdBy: users[30].id,
      users: {
        connect: [
          {
            email: users[117].email,
          },
          {
            email: users[118].email,
          },
          {
            email: users[119].email,
          },
          {
            email: users[120].email,
          },
        ],
      },
    },
  });
  const teams = await prisma.team.findMany();

  // Create event
  await prisma.event.deleteMany();
  await prisma.event.create({
    //evento 0 - futebol esse evento
    data: {
      name: 'Futebol Society',
      description: 'Evento de Futebol',
      day: '2022-11-14',
      time: '10:00',
      teamsLimit: 22,
      Sport: {
        connect: {
          name: sportsData[0],
        },
      },
      createdBy: users[0].id,
      teams: {
        connect: [
          {
            name: teams[0].name, pera vou tentar explicar
          },
          {
            name: teams[1].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 1 - basquete
    data: {
      name: 'Basquete Fest',
      description: 'Evento de Basquete',
      day: '2022-11-15',
      time: '14:00',
      teamsLimit: 10,
      Sport: {
        connect: {
          name: sportsData[1],
        },
      },
      createdBy: users[1].id,
      teams: {
        connect: [
          {
            name: teams[3].name,
          },
          {
            name: teams[5].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 2
    data: {
      name: 'The Ultimate Major ',
      description: 'Evento de CS GO',
      day: '2022-11-16',
      time: '15:00',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[4],
        },
      },
      createdBy: users[2].id,
      teams: {
        connect: [
          {
            name: teams[2].name,
          },
          {
            name: teams[4].name,
          },
        ],
      },
    },
  });
   await prisma.event.create({
    //evento 3
    data: {
      name: 'Volei de Praia',
      description: 'Evento de Volei na Praia',
      day: '2022-11-20',
      time: '10:00',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[2],
        },
      },
      createdBy: users[3].id,
      teams: {
        connect: [
          {
            name: teams[7].name,
          },
          {
            name: teams[9].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 4
    data: {
      name: 'Futebol de Areia',
      description: 'Evento de Futebol na Praia',
      day: '2022-11-19',
      time: '13:30',
      teamsLimit: 10,
      Sport: {
        connect: {
          name: sportsData[0],
        },
      },
      createdBy: users[4].id,
      teams: {
        connect: [
          {
            name: teams[6].name,
          },
          {
            name: teams[8].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 5
    data: {
      name: 'Call of Duty MWII',
      description: 'MD5 entre times no COD MWII',
      day: '2022-11-20',
      time: '20:00',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[10].id,
      teams: {
        connect: [
          {
            name: teams[12].name,
          },
          {
            name: teams[13].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 6
    data: {
      name: 'Disputa de Speed Run',
      description: 'Megaman X2 R$500 para o ganhador',
      day: '2022-11-25',
      time: '14:30',
      teamsLimit: 8,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[8].id,
      teams: {
        connect: [
          {
            name: teams[15].name,
          },
          {
            name: teams[3].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 7
    data: {
      name: 'Basquete na Praia da Costa',
      description: 'Basquete na quadra do colegio',
      day: '2022-12-01',
      time: '19:00',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[1],
        },
      },
      createdBy: users[25].id,
      teams: {
        connect: [
          {
            name: teams[10].name,
          },
          {
            name: teams[20].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 8
    data: {
      name: 'Volei dos Idosos',
      description: 'Disputa amigavel de times de idosos no volei',
      day: '2022-12-02',
      time: '17:30',
      teamsLimit: 8,
      Sport: {
        connect: {
          name: sportsData[2],
        },
      },
      createdBy: users[20].id,
      teams: {
        connect: [
          {
            name: teams[8].name,
          },
          {
            name: teams[12].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 9
    data: {
      name: 'MD3 de League of Legends',
      description: 'Disputa de MD3 entre equipes valendo R$100',
      day: '2022-11-22',
      time: '20:30',
      teamsLimit: 10,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[39].id,
      teams: {
        connect: [
          {
            name: teams[12].name,
          },
          {
            name: teams[22].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 10
    data: {
      name: 'Disputa de equipes no TFT',
      description: 'Bora jogar um TFT em equipe?',
      day: '2022-12-12',
      time: '16:30',
      teamsLimit: 8,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[19].id,
      teams: {
        connect: [
          {
            name: teams[23].name,
          },
          {
            name: teams[11].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 11
    data: {
      name: 'Basquete da Criancada',
      description: 'Traga seu filho para uma disputa de basquete',
      day: '2022-12-06',
      time: '18:30',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[1],
        },
      },
      createdBy: users[32].id,
      teams: {
        connect: [
          {
            name: teams[10].name,
          },
          {
            name: teams[20].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 12
    data: {
      name: 'COD MWII Antigo',
      description: 'Com o lancamento do novo cod, bora jogar o antigo para relembrar',
      day: '2022-12-08',
      time: '18:00',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[27].id,
      teams: {
        connect: [
          {
            name: teams[14].name,
          },
          {
            name: teams[15].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 13
    data: {
      name: 'Futebol de quadra',
      description: 'Jogo de futebol de quadra na pracinha',
      day: '2022-12-15',
      time: '20:00',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[0],
        },
      },
      createdBy: users[32].id,
      teams: {
        connect: [
          {
            name: teams[22].name,
          },
          {
            name: teams[27].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 14
    data: {
      name: 'Futebol de campo',
      description: 'Jogo de estreia do novo campo da comunidade',
      day: '2022-11-29',
      time: '19:00',
      teamsLimit: 22,
      Sport: {
        connect: {
          name: sportsData[0],
        },
      },
      createdBy: users[45].id,
      teams: {
        connect: [
          {
            name: teams[25].name,
          },
          {
            name: teams[17].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 15
    data: {
      name: 'Futebol FlaFlu',
      description: 'Jogar uma partida de futebol depois do jogo do FlaFlu',
      day: '2022-12-14',
      time: '20:00',
      teamsLimit: 22,
      Sport: {
        connect: {
          name: sportsData[0],
        },
      },
      createdBy: users[57].id,
      teams: {
        connect: [
          {
            name: teams[12].name,
          },
          {
            name: teams[19].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 16
    data: {
      name: 'Futebol FlaFlu',
      description: 'Jogar uma partida de futebol depois do jogo do FlaFlu',
      day: '2022-12-14',
      time: '20:00',
      teamsLimit: 22,
      Sport: {
        connect: {
          name: sportsData[0],
        },
      },
      createdBy: users[57].id,
      teams: {
        connect: [
          {
            name: teams[12].name,
          },
          {
            name: teams[19].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 17
    data: {
      name: 'Partida Casual de LOL',
      description: 'Bora jogar um lolzinho essa noite?',
      day: '2022-11-19',
      time: '20:00',
      teamsLimit: 10,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[20].id,
      teams: {
        connect: [
          {
            name: teams[11].name,
          },
          {
            name: teams[21].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 18
    data: {
      name: 'Futebol Voluntario',
      description: 'Vamos jogar umas partidas de futebol, e fazer uma doacao',
      day: '2022-11-20',
      time: '21:00',
      teamsLimit: 22,
      Sport: {
        connect: {
          name: sportsData[0],
        },
      },
      createdBy: users[23].id,
      teams: {
        connect: [
          {
            name: teams[12].name,
          },
          {
            name: teams[23].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 19
    data: {
      name: 'Basquete da comunidade',
      description: 'basquete da comunidade todos os sabados',
      day: '2022-12-23',
      time: '19:00',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[1],
        },
      },
      createdBy: users[39].id,
      teams: {
        connect: [
          {
            name: teams[22].name,
          },
          {
            name: teams[4].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 20
    data: {
      name: 'Treino de Volei',
      description: 'Treino na quadra de volei do colegio sesi',
      day: '2022-11-27',
      time: '19:30',
      teamsLimit: 8,
      Sport: {
        connect: {
          name: sportsData[2],
        },
      },
      createdBy: users[50].id,
      teams: {
        connect: [
          {
            name: teams[6].name,
          },
          {
            name: teams[8].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 21
    data: {
      name: 'Disputa de COD MWII so Sniper',
      description: 'Se nao sabe jogar nao vem',
      day: '2022-12-01',
      time: '21:30',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[27].id,
      teams: {
        connect: [
          {
            name: teams[12].name,
          },
          {
            name: teams[13].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 22
    data: {
      name: 'Basquete da UVV',
      description: 'Disputa de basquete entre os calouros da UVV',
      day: '2022-12-12',
      time: '12:30',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[2],
        },
      },
      createdBy: users[31].id,
      teams: {
        connect: [
          {
            name: teams[26].name,
          },
          {
            name: teams[19].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 23
    data: {
      name: 'Volei da UVV',
      description: 'Disputa de volei entre os calouros da UVV',
      day: '2022-12-12',
      time: '13:30',
      teamsLimit: 8,
      Sport: {
        connect: {
          name: sportsData[1],
        },
      },
      createdBy: users[31].id,
      teams: {
        connect: [
          {
            name: teams[27].name,
          },
          {
            name: teams[20].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 24
    data: {
      name: 'Futebol da UVV',
      description: 'Disputa de futebol entre os calouros da UVV',
      day: '2022-12-12',
      time: '15:30',
      teamsLimit: 22,
      Sport: {
        connect: {
          name: sportsData[0],
        },
      },
      createdBy: users[31].id,
      teams: {
        connect: [
          {
            name: teams[28].name,
          },
          {
            name: teams[21].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 25
    data: {
      name: 'League of Legends da UVV',
      description: 'Disputa de League of Legends entre os calouros da UVV',
      day: '2022-12-12',
      time: '20:30',
      teamsLimit: 10,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[31].id,
      teams: {
        connect: [
          {
            name: teams[29].name,
          },
          {
            name: teams[22].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 26
    data: {
      name: 'Jogo de estreia da copa',
      description: 'jogo de futebol antes da copa para dar sorte',
      day: '2022-11-29',
      time: '18:00',
      teamsLimit: 22,
      Sport: {
        connect: {
          name: sportsData[0],
        },
      },
      createdBy: users[32].id,
      teams: {
        connect: [
          {
            name: teams[10].name,
          },
          {
            name: teams[20].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 27
    data: {
      name: 'partida entre equipes no fortnite',
      description: 'dois grupos jogam para sobreviver o maior tempo possivel',
      day: '2022-11-21',
      time: '18:00',
      teamsLimit: 22,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[37].id,
      teams: {
        connect: [
          {
            name: teams[12].name,
          },
          {
            name: teams[13].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 28
    data: {
      name: 'treinamento de basquete',
      description: 'venha treinar e melhorar suas habilidades de basquete',
      day: '2022-12-24',
      time: '19:30',
      teamsLimit: 12,
      Sport: {
        connect: {
          name: sportsData[1],
        },
      },
      createdBy: users[50].id,
      teams: {
        connect: [
          {
            name: teams[28].name,
          },
          {
            name: teams[1].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 29
    data: {
      name: 'League of Legends bronze',
      description: 'venha participar das partidas. obs: somente bronzes',
      day: '2022-11-27',
      time: '19:30',
      teamsLimit: 10,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[29].id,
      teams: {
        connect: [
          {
            name: teams[17].name,
          },
          {
            name: teams[13].name,
          },
        ],
      },
    },
  });
  await prisma.event.create({
    //evento 30
    data: {
      name: 'Treinamento no LOL',
      description: 'venha treinar e deixar de ser um bronze no lol',
      day: '2022-11-29',
      time: '16:30',
      teamsLimit: 10,
      Sport: {
        connect: {
          name: sportsData[3],
        },
      },
      createdBy: users[19].id,
      teams: {
        connect: [
          {
            name: teams[27].name,
          },
          {
            name: teams[23].name,
          },
        ],
      },
    },
  });
  return response.json({ message: 'ok' });
};
