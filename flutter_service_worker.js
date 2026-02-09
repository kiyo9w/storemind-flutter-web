'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "63567a2c92ac43f32c3894c2b20815df",
"version.json": "a1b0f6e2a240f147c6c776263c25de05",
"index.html": "0ebed616d518055b583698df8dc34029",
"/": "0ebed616d518055b583698df8dc34029",
"firebase-messaging-sw.js": "057e03da66822855c7ef1654b66f0c8c",
"main.dart.js": "c97257e2dac6ec418558bdb504fc374a",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "c6f77a69c29dfd29358fe87c78de45d1",
"icons/Icon-192.png": "c6f77a69c29dfd29358fe87c78de45d1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "c6f77a69c29dfd29358fe87c78de45d1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "81d37cd81456587b8f45b625a6e758c7",
".git/FETCH_HEAD": "a14363d95cecf37b9cc29d0db9ba05f3",
".git/config": "d2d26d91075c6f1ae2a1692cdbbca034",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/95/dcec9a7b1c8af9e75c0a2947e25c99ad488c32": "079e815a3d402c0ce49c065dcc50d8d7",
".git/objects/59/ce5d9aca36b339f8186389c452e894cc1a5727": "9684c93c3037c5090994a064c0f83202",
".git/objects/92/090e5a855db68f9a447c0881e530c99b673309": "c79831b4c104870a269208a294245b06",
".git/objects/66/361ccfa7345f9bdf7eb4623c6e481bbd61e99f": "64148b1b327ea4ae41f3be8449aec204",
".git/objects/66/658854409f2dc9cc826264afb9aea153ff243c": "b85a35b5a37bad51ce3dcb15c25c9647",
".git/objects/3e/c90e0fc67a28d0253b30fb0e18149e4d670daa": "adcd64335d2af5100821c7f093391da9",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/e8cd8ec249ac8003f2f8ca74f19968757e4cc6": "d1f73010b83686da4c2fc626fd0fb358",
".git/objects/57/817d0131808730ed40065b3f00bd1cfcfd40ef": "1894e88dab865a285ced38f4c0e3f10a",
".git/objects/57/3333a2dcdc52ad5cbb5f8de1e36828f691c522": "d5e4f74eb3edee00a516e56350554930",
".git/objects/3b/a42076084e8f7c4b6d8a824174eb9f270790b2": "66661ee49265a7f6bd49e6f980b08e1c",
".git/objects/6f/fbf72121840bdb098e42020400f3b2e6bf7da9": "23a6fa588005ed6459f9832e1f42f003",
".git/objects/6f/de209672a7c6c54d16cefd8e3a4e6c981365f3": "d79b7899d96771ada1f333339f330a6a",
".git/objects/03/da71881f441fc1ceb2d22baae40f055cfe18cc": "a403d4740a3c17fcefa0f38ec23d7c68",
".git/objects/03/ab7517729b272032ad64ef72f6b88c939f1225": "3b5ed51288e0bae6e9099ff79865b0a9",
".git/objects/9b/b81ff35f3d7e0d70ca074fafaec905be3b741e": "a7fd8ff2620120a37302474aeb048b7d",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/9917073dae34618c62768819f2e0b7a260da62": "36298d76f2c32cdc1b55a8d76c6dfd72",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/32/fe4102044e457d97b975919036728afdf9117e": "26e359453b28715c2ad6c05ff1062499",
".git/objects/69/4ff803eb68badff6d564ed48ff3fb3b8e3860e": "c1e4adbb0d3b110f19b3b1ce8f2cd3b6",
".git/objects/69/daabf77998507a1300dd53f79882ee73d89d22": "5ae403f7e7e35222d821d9a824a44055",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/3c/13bae16381cee434b46b0de191005609be45c0": "07c37c28217068b6442dfed5d1151d2e",
".git/objects/3d/12f93ef8485a395d0530eb7a59e0928de9b88f": "31050c4ded31d72767cc491e7d5d5c69",
".git/objects/3d/964830f3f1c3573483127f70a961fffa6a1b61": "0bc0268503b5dbf37d5a39d0a5a0d5c4",
".git/objects/0b/4f3481c109b9720f60040351e3ed533a4eb6e5": "5081d95540e06737d61f298b420c023c",
".git/objects/93/4def58ebc7818b81440fc9c4421c7ff29bd4d5": "32f6405bcbe027f8df7eca25a6a723fc",
".git/objects/93/08194d5ae5bd3c294dfcfe009a5b7d2dee722c": "ee9651bb7b0cf07bc0ef9251dc3a26ab",
".git/objects/0e/3e78f7764ecea2a2401ef320e591912c578788": "72b41cf030b4d397632984ed4379a34d",
".git/objects/0e/bb8f825659807b5ef12bdd51051d89073e9ee1": "55c305ff86b72f39c13cbc2c431db648",
".git/objects/0e/f593d08738fcaa18fb205a52fa8395099daf2a": "9c13fbd7a75bb6fde5dc0adeb893c55c",
".git/objects/34/b07759c1cf2ac0830bcca3a8897b472909beca": "59eedd557c5d712994e9d6692dd3b514",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/9d/73f8c4bef542c2a264f593bf0f654788c88c36": "c68ff36ef2751651ff950efc100a1688",
".git/objects/9c/270667824de9c8b3d1629db3ed2f41c6c3f98e": "8156b21a217fcf5b4f9c5c89d91ea59c",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/02/1629d3aa8deedbc574cc1db3827eac08aada71": "b4269d9124fb328a6d045cb6fba8bb40",
".git/objects/a4/f2d5a36d5d7a0e1678d3b261a06865cdb787d3": "b08a5b3859305215ffe8d6916d0c44dc",
".git/objects/a3/ad8c81a9665592bfb47901bb6806af4f1bd285": "05176ff28a80035dd03c342291361d88",
".git/objects/b2/7ccabaa4342d6e68af963f21e4c9396110ced8": "05387cc7c09dac9188bafcd1c7532456",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d0/e893c6538158231a242d1e269644b41d5a2497": "5fc37a74f8e552df4335e318d5bad566",
".git/objects/be/02abe2d73421200974671d6b9a3ed9bb3afd95": "f4aa27d232845e6c53595c22c2c8c969",
".git/objects/df/f66cc50702c75abd025dcf49f62a4dcc2d72de": "8e5c10eeabaf439bd0a6db2e130bba07",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/b4/7da6f36a42df1179dc1a3089b8df8492055cb9": "1fb094df2f24539aedb2ae933b8a1baf",
".git/objects/a5/d319e4897d465cffa8aadde28fe3b2818a5f15": "9f0f6ed1bd8f43f1c710eaee239384d1",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d6/6aa593c57c1ef52b2083510c0c21bdc1782fc7": "725e030597dc35d8053fd4e2208f3d29",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bc/a323aa2e9578953caffab175027e042d4b14b8": "33eea9e0a61f9180ba726af5accd16c0",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/f4/563da6dfa193021e51619fddaf8a2d2bc4e1e5": "ac1936b6cbbbc3a620a8aba4f974ce90",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/45c844c85da3cf5e1004e3a17bd0605dde5e22": "c0c149e2620c996a61734326fd570390",
".git/objects/c7/7b646aed4a51dfdee819219b3e44ba102d7734": "a9473bf7d871592989f21ab5219b74fd",
".git/objects/c0/9b24a8c78311ac22acf1848913c09a0ad5af27": "5b002b78ac27ac6bedea9f5b221f26a0",
".git/objects/c0/d9a924c4267e763413e1177c40f31aff6cb7d4": "3380cfa809e9c70643f0c3b11398e71c",
".git/objects/fd/486dd20cc7c52c0915b5692c3544411d414e57": "566216db1c44ac70d413c9e6f32a088d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/daaf4339252dc8a3f0b0334781019c08bee476": "38db443ba7ebf577ff5c60f3d966d67f",
".git/objects/f2/4340aa818088eda6b495491f11b90b62ecdc53": "bc090df7c2611d9fa8d296d1a74bae0a",
".git/objects/f5/6b9fab27bc4571c2b105f6ae5a512616ec568b": "d5ebae1023e2cc9ad6c0bacc699a3c7d",
".git/objects/e3/4cdc921859c542bcbcee5a091a796cc79352cd": "0406e6e1cd5c872a2c0ddf3cfee7f2cd",
".git/objects/cf/c6d7a3345c61de60899c05989c68221f248ada": "60d8e0ce54d20ab3e7133cbb104f5f5f",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/31ed1a4d580b5cfbea62f545e497b56c96ec16": "864a38e89cad0fdb80d6b36a74c2b81c",
".git/objects/ca/3d425b8acc595f98d9eec8fdac4d74f7b27258": "1f0a33b40c5b9ac292f7408fc6497c94",
".git/objects/e4/1848ec3a4f3b97ffd692039b67d5a9131002aa": "f90cef132ea435873722e883de4e7755",
".git/objects/e4/c5a2a47533eb5cc5654ec0e496f8c48655d6b1": "2ca1691735073c39d984044f149922b3",
".git/objects/fe/a66d3da407239b498289ef6408b8541b14bc6c": "1a8c74ccfd977c45fab91ce62e99e8ff",
".git/objects/fe/feb35d0f21deb6ad9c9d056281d52d983c4856": "c51a17b39094d3808b0dcbd1c2dde456",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/2c4dfab369608ab8ce37daa59b7e8607252741": "7074faf79ed46e31f1ea1bcf76196d9b",
".git/objects/c8/07688d610965fe49f7fd86daef14b5219a1d7c": "4d439f2b89d2df1d348584f125623a49",
".git/objects/c8/e5776de31a73ec60df9786e835e35f7391dd4f": "6f1aa583d18045cfe8dace409c2dabe7",
".git/objects/fb/e3590a16544ddcfc3265567d5e16af84b2e4bd": "8b05621c0e71afadb79b8bc879d34676",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c1/85c26e02e5b27db6853b3ffb46c01a96aae63d": "4ac14535bb101cc2d2c0394644b052a9",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/bac8c5d6a728d2b9357524727dec7ac97c6715": "c8dbf434307da72532434dde8460afda",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/238554b757a6e3d31cc04a539f0071ed478a31": "43e22da8958547b51c67ab7fe9747fbd",
".git/objects/c6/8dc8befc70255de172ad1db5ff1974d5f59067": "276f7abeed689edbe3d868a3d62b0092",
".git/objects/c6/7f7f917152efc0ecc34f58013e2f5855ae2efc": "f4150439f3436264dfed515afb461518",
".git/objects/ec/cb14b633339bd609a61cf7d4c1f73148b891cd": "4a79602baaacb59b8e210de84339ec99",
".git/objects/ec/71d76078502ff36df23b6bad30941fff09b012": "135bc5d1d26fd4f7626502e48c5291d4",
".git/objects/ec/3591b9beb3a9ac80c64f25e9b6394d603b77fd": "2b9c3156a71b3ba53f855132dedd83d4",
".git/objects/4e/3b1e055f1f37faf204836a634a772cea7ee39b": "18dee28726b5ff25f471b78917ee359b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/18/cf4ae06848e59ecbf4bf7b959296f7f300519b": "86cefd4f0b615248991280ee40de6668",
".git/objects/27/e2c913a759fd15aec33704a085deeeb2eb694a": "9b938748a767fb726790fc600fba91aa",
".git/objects/27/8af6ebd3576a37e994836e6e267f54d59831d4": "fb31e9f0d35935b17379a1ca495de949",
".git/objects/11/1b223d4f2c04503f614203406e3edfcc5a5d09": "3f85f69f2eaab4f06cb1a7c33a9ea3db",
".git/objects/7d/73faf5a18d4cee9a94be5c8c93b1c2f1f8085b": "8ec30801063746bb271be4baba033e51",
".git/objects/7d/6554cd019f75137caa720e48bfe1b458b678a5": "66b2ea82484d3e27342e15369f112cf7",
".git/objects/29/2163e1f5e74d12da46a00a4091d2e0a8c3b0e8": "6eceb6a340edcfb794ceef68483fb319",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/7c/775da789b74bb06a71054504cb8f2079b88496": "dace9b4e9c3f392439f4d32f03e7db13",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/42/c2cdeb272ecc815c3a86dda9a8bafecc4f71c2": "a4423adfb6129edff360e51d73755b57",
".git/objects/89/4eb26da2d9483b52ca50568541b10c825b4d75": "b72b68feba8dd335ae5089c347ce347d",
".git/objects/1f/acd30f6b8cd71eb0268a1660889b735508fb02": "67b61281f0315cbd2c102e1d2a9c80d9",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/28/051a73072c97c127334789e8f64a784fff163f": "e2bde99ee11ca282ea25e910ee531569",
".git/objects/17/7d926b03789ec2e887b62c9428b36ccc9960ea": "d434fa6e27a30b845f8daf0b0bffc4a3",
".git/objects/7b/27754497d2d972d2b32a54037be86bba16161d": "dc6bef86fa0811a06855af5229e95e40",
".git/objects/7b/385ec58acc94821a8981b819539eedf8371ea4": "87debdd495cc5cbd3f6c70860a0cc381",
".git/objects/7b/ec5a486b464d2fa0a48b32f375fff59226aacb": "6b60deaf4fa0e1b75f5345d0458169d8",
".git/objects/7b/33011cf696069087e30926f486b1b4a7d6b54e": "d92793903cc7164e250db08a926a0c53",
".git/objects/7b/4008675e0caf5143222497746bb113c761dac7": "92c35136f6fbf0c4f802ae70bff12f15",
".git/objects/8a/383cc16de36ab1912ff8a6c5f4076998bc35f9": "8645ee6ad5c017a1dee377953f493f50",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/7ea2e96d717f747317a7d45d038c00935ea0a4": "43d3cab603ee188cbce0bdce9039499a",
".git/objects/4c/8c44ba103b2e7ed35853e2c89fa99b73f55b42": "974dca83e270ee73e025c82423343579",
".git/objects/4c/65ce890b849e9f3a459380aa11b6c3514ad7cd": "3648209b2d54c16f02952a6a7ffb1fb7",
".git/objects/26/c0a606160caea71facc19be009ef2ac4f09622": "bfe2398fdc882ee9cccdf5f8de6f43b1",
".git/objects/21/265e760ac93e19e7fb5fc43ba0ab2b9c027664": "2df4e32e234a19841c3422c2e7c24758",
".git/objects/21/cd45dc5ab930bccf4c7af543e81369c9a8561e": "367d6d75bf5d2a4fd4e48eb0c270b409",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/75/fa340d8720bb0990fbc7192571b7269e0c4a31": "c3e24bc736c333c8faaf3e480da8c39e",
".git/objects/81/2eee7d3219ae74de0e6ebfb07922b16c97635f": "10e28a86d496f1a1cd1c8a24f0dc7a07",
".git/objects/86/78e659fd0d5bff081b4a719d0e4863fbc049e4": "95e37afa505c8714922c0c1abbb9689c",
".git/objects/86/970cc01edfcae09dba45115c1c87aa13f31858": "fde9a0608eb7094ced924056372d2e95",
".git/objects/72/af85e1d24e10bab1dc4589ab327cf35c1eb812": "572cc5cdf49952ffcf6c82c4eb233ec8",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/43/deb996b4b7621e34e0e2617ccf22fc9652a4c9": "11f8a9845d0ebd8ccb391fab9621c42a",
".git/objects/43/0c776b36f9325fb6e378349f9e9b748c9744ee": "3fb10cbfdd4a66a45d159f73fcc56266",
".git/objects/88/49447a007803bcb825973d3bb1a0a2f7f26151": "e6e930cf09ecc230fb5cacd2b17cfbcd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/046701173de9c47e9fc15a0406d87e3daa09fd": "48565ab0ecf837b6f0d02ba623195166",
".git/objects/07/4f1b809a3f6b555e344b351705671705276194": "2fd39c7abc8fb987ab52db22c4714ca4",
".git/objects/07/3f79da0ec4afcd536089ccfeec33efcccc4140": "aa8e1b9cd8468b3bb3f254c770e4eac0",
".git/objects/38/ff49a7ec408fea49613ccd95627d1aa280ed1a": "86c23576d94df62369f8ee339c5205e0",
".git/objects/00/b1a3f014d122adecde5d0a76709c066e11c581": "ac48ce17ea21ab23c5de162f59ea7442",
".git/objects/6e/31578eff15329ba6c95d833b3cf1237a7b0654": "9c0110a8793fc666611513c7eb63667a",
".git/objects/6e/8a2cba32550589ddb0536b16270b0542b466b0": "4ce0e0d77d276b128138854458498ea2",
".git/objects/65/156ac4aef4afc3bd886c371fa603bb210501e7": "75c94680acde216a6c1fbae6a278d03a",
".git/objects/62/3fc8302b1e66041141f3b2576c571cf90fe63c": "a76c0744b019dd80315a6c84eafb573e",
".git/objects/3a/99e9a622bc25d1d2f6c74343801b0dc1c7d119": "48edf0bca3b3065441240ddc2569130c",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/53/518b5eafaf7ff55d6df9575964a7a3d0c75166": "19d0621cc4e351586bdbcaf132e8423e",
".git/objects/30/845c2e8e9fcc911dca02f15f6ac4ac77dcde31": "94e6eeffec8a57a8240c579f30cf0127",
".git/objects/5e/fd1b7fed6fb00a973e7f5a8a1643e37d5134e6": "d5438637119c97c78b5bdf431428cb54",
".git/objects/5e/4acd38753d047c030023c1afe0c3d61f2bc825": "a8391c85619d39683fe826255b43ba69",
".git/objects/37/e347480b33e5a29fac9ca5d697ca6918bec9b5": "ef26b6f8f45185074b5c9ae0e2cafa88",
".git/objects/06/8d42dd6cfc0d3292fe5738aa5b8980488521bb": "2276793874981b8c793c1762c5febdf6",
".git/objects/6c/4160f864e60e36f4045fd09f62bd49278624ad": "dddc1f84eed59386c3005f116d5ae07e",
".git/objects/39/4dfe4b0879a6c98c3948177168ab307d774e95": "75fd615e6eefa720370961500f00edeb",
".git/objects/39/e4f58856877dd1975d8c710011fef2b6b9c9af": "c3319a20604ae8dfb019c62c195c5c4c",
".git/objects/99/7536bb7b95d68969d47757b735d4e969ba8632": "2c87c9b9fa65d8782b88821a49794698",
".git/objects/99/3451fd7e1e9e6e607c92aa41c40405518107ac": "be74f1aa451dcbf693c17f384ceec2d3",
".git/objects/52/bb9beb34c37d2d5ef892e0120606cf45517989": "304c6bd1a7cd72be4477af819838313e",
".git/objects/52/915f0ca82772b7932e5f5fef3cec073474ac7e": "17c39a7ea545227e8824f696aa24a8f1",
".git/objects/55/87ab9ba6986289d8d8f402c692817f4e8522dd": "a4dad57bed00bade7c6898dc7a30e4af",
".git/objects/55/30efeb28b285f49968e00f0193050969fece4a": "c1efd5abb45bd00de8b55a79efbbe8be",
".git/objects/97/8c0a755eedb3ae907f348ed0a438d2cbb0f66c": "23f364af448d5103991594c33f5656f4",
".git/objects/0f/944fff08d63bc740b014b3b6b3af13faeeb618": "86fbe560747ffa47dfc3fa67cc6fc003",
".git/objects/0f/14b3d257592967a68c581059581ad4b3282d46": "9e04076e619320439bf93fa3f7b7d78f",
".git/objects/0a/886dfe56f0bb4a78bd615fd10f13532224941e": "c58016fe902bcb5903b3534dce082db0",
".git/objects/bf/8a416186a7b268086c60bbd6cccd59cb06e5ec": "5ca61fdd92a7137cdb1e34fdf6f26389",
".git/objects/d3/690eb3014d39f6190e96d89891267672a7d253": "8c6a13a0f631d098025079854edf24b4",
".git/objects/d3/d34f89ce899ee2dbf547fac90479d6c33782dc": "3bd687af576f3fee10fa45282bdb0d30",
".git/objects/d3/73adf7abdf083736288e3b531ffa336d12c2d2": "cf0ec48c188c2dd139848edd3ddfb5be",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8d1baa4635eaa905d2a52c922167f5e5995b03": "f0da5f37d9bbbc07de90cf0623acff9a",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/071b7100650ea32b71a758e267a847d835243f": "7062b5cb95b5b558db329bc0c14a5658",
".git/objects/b1/d7f409205d80ff27620e50f3f5497ba57cd7ce": "72714575960d5f0e39b8021b40397976",
".git/objects/dc/1c9e6ba970b3eef236e75310ae6f3f0c96bba8": "03dd09902f28fceee0a5ae86837ffbe5",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/8d36ebd70a6ceb0beb0229f8eda54e08afcff3": "0803b730337e665cf1716ffc7a236e5c",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/d2/9f6321e4954fd1c2012436522a67c6c50fe39b": "28e733eeac26b4036f2ea6b43482ca50",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c2b36f19bd2a4b880fdb0f62b8cc02cfbd4316": "4bb336cfa719baf9548185f25e96d73b",
".git/objects/a6/599b3c0d50dd2cb7231b0de6eb403629fd063b": "dc2bd4901292d84ce7d9f64f5e1b76ad",
".git/objects/a6/165f68d057f8def762fc20f613200006b03faf": "344618a7320213ba5db225401dabb6bb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/e8ea7a75696373c5f140fe8d9c36b9e9ae753f": "0e175d02acac30ce560b870ed5e08424",
".git/objects/ef/9e5ede551acfcb35b1570dfa0297263e93bfb3": "9a3c5ada3742ab9793268762b5e78741",
".git/objects/c3/4ee7a375a49f27cde0d71519bdfafc8be98fd8": "2d0426c13bc95876703910bb5e9bcbaa",
".git/objects/c3/d618cfc8c61489b579786923a55b8aa539ab87": "ae87e9b127155e50f095a30df739d251",
".git/objects/c3/696ca2b4b3883c6675c5e4a67256c52fe7377c": "4794d1554238791f6417002668d3a2d2",
".git/objects/c4/b0e4fda904c2f7120bd4a9c150609211db2c58": "620770deff6591c3e366155e5dfb7824",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ea/1747c5a636aa554a387ed9281a97bc8518a29f": "01aaf1fb21f39e4ede9ebb055b6d614c",
".git/objects/e1/71076aaa6eb66f8565111c03b216b70128c7a7": "94e4591e5310bacc711c7031984b0af8",
".git/objects/e1/c2e850fcee517ce53954ae0d7f407efd2ae92b": "8b636b6457cae017d7e8c1efe1301afa",
".git/objects/e1/b5dd99bf03e475683482e675710e5b2ce232be": "e5d3aa49fa522e93c0ad5b8cefceb310",
".git/objects/cd/40c07c5f3e10e1052a3c0a3ebb00cf047acef8": "ba83b16693795898eb7abb203e04a3ab",
".git/objects/cd/4c464386e0dda55b39e08bf9f96058aafe591f": "233043285377ba0248a77c6feddb730a",
".git/objects/cd/46082bc5e05c54eaccc9b8d7d20ff7f028428e": "f4384a55a235b8acb448d2032441a2d5",
".git/objects/cc/541d4f1a1312463925d7e442d443a06e44e637": "bd82e5ae32f1ba2394fcb512ca562ef3",
".git/objects/e6/b1b99a1435cb4a648c84de2fe790cd1b0e3b53": "6e262a386b75db1686786c5797c59b50",
".git/objects/f9/61272ef35d8d34172bb0f33b560ad0fcdf5186": "dde42d8f1df36feeb33f84aa1913c15a",
".git/objects/f7/be0a05b437550fb09ae4ace213ad6e9f95053e": "40390ef3fa0485c51f22e3753114af60",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/44cb06be70fd7b02f2fbe2684b16b33dbb2c4c": "4f61d780be82e8fbf323830b852b9096",
".git/objects/e8/2e5dece61aa629f95fa70cf8ba4c337ea58da7": "2aeb8559fd9bb537d2b99dfb8c2c7fa1",
".git/objects/fa/4d14db3b2d962662b747e7cec2ee2664528b42": "97cef711012e503420b1a605d99d3107",
".git/objects/ff/f73997a4f3e3dc5cb0499dcd3ca4841a964e91": "8a395ed95b08149c8de3aef0d18218a3",
".git/objects/c5/f184b8d98d6c20c88531f53bed214dbeb0f0a5": "394e4f6bfb6e3e50edf3fe79c309dad2",
".git/objects/c5/c059c19852474573a8535d4b8438b54a67a1e6": "a4c12d2e5e64392a37ec508735665d7c",
".git/objects/c5/30f414b95a869d3235bc546c3ff5c6e5037aab": "ab424a05786f73c8c375b091362cac88",
".git/objects/c5/2897169f682375f73e889166ebccc61b157fd4": "3c151b81f680bbc0876055f54a0bd1b5",
".git/objects/c2/5fb6fc73e08630c0fb0b05947d15cf49e86e64": "0ee5315ecd83b14f6d75ec3590649c88",
".git/objects/f6/2bccd7a646a7615f30c9620d07f3260d335084": "66fd9acd1f7a75cc3ff0759862e2b7eb",
".git/objects/f6/4e2061170ddf50929692f9d5b7552db2b9ab25": "48c132d6d6a903f1460779e52b86d3d8",
".git/objects/cb/b3f832c245f8248a66efc2388ec0a451e00cee": "3a072b6719b1f9a4d982dade3bd4104e",
".git/objects/cb/87709c45192eeabb561f32c46317ef3824ba71": "791467597944d7a271729a41732bac95",
".git/objects/ce/2165036a6d65c17a1709eb5c7aed6c8aecd5d9": "6ff20ccf6258791a42afbb8e90a0719c",
".git/objects/ce/7ef84e1f0ad8689a9bbde4b76748c1107bfd2a": "c27259d21af4e628fb40ee0389b58fb0",
".git/objects/e0/921221e6eea0fc5f0cd1e2d05c2baa5c25084e": "188ddeed65c641d8025c430e1f52ad7f",
".git/objects/79/c2b3081c561c25d47f15b9e9107be209740556": "093d5ed41454c29efb10108bde1e4a3d",
".git/objects/79/26ee4f7066c96927f6d99528d497174b571450": "a19c946298bc7c648007cb836f3cfbe3",
".git/objects/41/16083687f566daeb7cb4caa78b210a06d0d889": "51565684479d868fa7086543c0e650e7",
".git/objects/1b/c5017b24b058d5e0775e22092c4f591ab36b1c": "4bde91635dae26c6af623808794b5c4b",
".git/objects/70/43ef32195bceb6ac1bdd49b846454f0a933e1f": "b5f20f9425ec9b11dc8360e8ace86d0b",
".git/objects/1e/70e12c34e819362aa5f6c2d13c85d68a9a90e6": "793e78f67ad4379437f5c2abeebda95c",
".git/objects/84/350966563b1f3acc69a4fe6e3b5d4744e33225": "906fa13e6f670d332240df5983cb2a3c",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/4a62a3d3e2013e10510f7218ca29b55dc13ea8": "759440baafde4300789d560c63412f62",
".git/objects/4f/f173a20dddcfb10a318a9dcffe33404e82571c": "ab2c4e0065792149e09c259694ddd55d",
".git/objects/8d/7a3e20ce4fef339cef81c6db04fd3dedde4999": "1726f3e2ddf15a39df7c3913b5b30a97",
".git/objects/8d/4c0d7236604ddc5dcdf660d83207dbc597ab11": "48a3c83247a715ec011874e5499e13a4",
".git/objects/12/b956f1659e3cee41546cdb807b8c46952b5aa3": "3f81ca9c4b4ce8faf19de5b49f245927",
".git/objects/85/f13bc2711f7bd6cf0d7db7ee79318ba27b20de": "b11c38d1e2c1f51963f15cec4342c843",
".git/objects/85/effec9a41f4c7e3e2d3645185ae3479ef6f1d2": "02a8ffc9821aa43a1965711613df2173",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/82/6869dd9c4c02f9dda7f755d3388d6988257ada": "76e7da763964653f47a01e88cf2cf6eb",
".git/objects/82/44ddf7d5f11d2885e6c52d6cc6358ecb6c6be8": "c8dc2e85904121013b91f8e772b348c6",
".git/objects/40/aa26298ff1da2737d985f03ffbcd9fffd8f855": "cc18ac7c3e5f9b9e8c7b2f2f1edcf5f5",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/78/3d314e0ef57d42419e3a2b7f7797a57acb87a3": "062dbb58628fbb2dfdebf3a858585160",
".git/objects/8b/443a34a0edb340a761f582bbb6adad14731bdb": "a5d35212df6c901732200a7d3acb034a",
".git/objects/13/c6b5c0339583c41c89d4016c02aa99823731c1": "084e7d32e102950091421b911962c6ea",
".git/objects/13/cf426816ef630b11e1f4bc021399cd08a6a2f6": "c48c432ad9fdaae2aa2216d43b39efe1",
".git/objects/7f/02bb7527b9a50a854a556aa025eed3a667595c": "d6d481cd5d1ab2f7183038a4bc7f08a1",
".git/objects/7a/4929eb6f906489eacd2dab0a1ec27103059e05": "6caecd41807d14a888e4e43c10b95812",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7a/7c40b982f1e13f8f1414b1f8937cb3592772dc": "0f22d372b132800db73daf95852fab19",
".git/objects/14/725d72522d25fa739b2ee81a073882b2c5d4d5": "5b4837fed4ca11602912de76df962676",
".git/objects/8e/e4f9067ee58dae22a56e8fd5b4bfc1745f0a99": "ce3976781e8c0a0f417774f4141313b1",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/25/fadbd644874b5e29c6336f415d6671ed420575": "26ebec92a4ab9bdce490d6201a95b981",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "efff76fe47dff087524f3ebda7c75783",
".git/logs/refs/heads/main": "4f1f7b1d7af221c3978a3edc5c0f8ec4",
".git/logs/refs/remotes/origin/HEAD": "1ff034ab4ffaa4b0f60b3cc22440bc24",
".git/logs/refs/remotes/origin/main": "76ccd645b419bb2ccb85fa331b75e778",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/COMMIT_EDITMSG": "481911ae9e09beba7bf6e777b7fb6377",
".git/refs/heads/main": "0032e92ee0a33215112fb4022fce3e69",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0032e92ee0a33215112fb4022fce3e69",
".git/ORIG_HEAD": "c115ec8fc17af1f5287bc431f73ead57",
".git/index": "62817b382fb51d7b4d3329195ea3c1fb",
"assets/AssetManifest.bin.json": "f196aeb081c5964b1d033ba293fcecb3",
"assets/AssetManifest.json": "7535233fd4036758e961706c38247bd2",
"assets/NOTICES": "a750ef16834a9c40545add9188954623",
"assets/FontManifest.json": "093959f9b40774497dae529b28cd1805",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "3a9be006a295e9c5ca921dab13b796a2",
"assets/packages/gpt_markdown/lib/fonts/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1a2d3a7da7a45b7adfa5ba62ff5d0d4c",
"assets/fonts/MaterialIcons-Regular.otf": "dc23a6fc17237f97700766b0dfc1209a",
"assets/assets/images/dark-WORD%2520MARK.png": "93978a9b32f1eecff6e4c422908dc032",
"assets/assets/images/dark-vertical.svg": "65d4681760025f5281d2929788c7683b",
"assets/assets/images/threads_not_loggedin.jpg": "dba30ffe53a1e31833c660f06df0f8cc",
"assets/assets/images/light-ho.png": "4e296e0d0dd2e38ae214098563789b5a",
"assets/assets/images/dark-ho.png": "cbaa292872adaba641db7b24078c3758",
"assets/assets/images/logo_text_light.svg": "a50a7000d2d0b5fe4a48e71cb0c6e0b9",
"assets/assets/images/light-vertical.svg": "06b9466fe81018c72fa4054fd4e6d02a",
"assets/assets/images/img_error_connection.png": "2d5444d4333fe2102e24c9a9ad8988fd",
"assets/assets/images/light-ho%2520copy.png": "f0f3a99361c09817b7302ac02a74cc1e",
"assets/assets/images/light-ve.png": "c2eb7728632295b38989adf33e83072d",
"assets/assets/images/light-ve.jpeg": "f3d7a56a6521d9bf1b824565e97e2e25",
"assets/assets/images/logo_no_text_dark.svg": "04523be90d80992131bbc8bbebf3dd39",
"assets/assets/images/light-WORDMARK.svg": "b6db5733036f7627d580efee539e268a",
"assets/assets/images/dark-LOGOMARK.svg": "3c92d7915fbb28a2c74aaac5157410e8",
"assets/assets/images/light-LOGOMARK.png": "c6f77a69c29dfd29358fe87c78de45d1",
"assets/assets/images/logo_text_dark.svg": "fea907f667a348761e280c1add282cb6",
"assets/assets/images/light-LOGOMARK.svg": "79e337e2049dcbb4e13b06c328937c69",
"assets/assets/images/dark-LOGO%2520MARK.png": "978ad71da52fad62d27b86a832ea095e",
"assets/assets/images/light-WORDMARK.png": "61724a1364294cd600fccc07dadeec10",
"assets/assets/images/dark-WORDMARK.svg": "f5e1591202496d06684d05f524b14158",
"assets/assets/images/dark-ve.png": "867dfc12088cc383afff1c801fb42587",
"assets/assets/images/dark-ho%2520copy.png": "666ae8739e9f54f87d94e4ba1575aafa",
"assets/assets/icons/ic_line_bell.svg": "19346c9cd3811c7a5d0781d94737fcec",
"assets/assets/icons/ic_line_arrow_corner.svg": "207eb4c51e5eef5759659a33edfb318d",
"assets/assets/icons/ic_line_arrow_2_down.svg": "62391d006e87f994d40c0f187505d398",
"assets/assets/icons/icon_astronomy.svg": "53ed664351dd2e2936d2fdbac1bcda38",
"assets/assets/icons/ic_line_arrow_1_right.svg": "fdc101be49393482b43e9d467cc54587",
"assets/assets/icons/ic_dicection_line.svg": "80a5cff51e39a9f1b10512f11862a66f",
"assets/assets/icons/icon_image.svg": "97efe8f83525ce6c8d2d5e80d7949b6c",
"assets/assets/icons/ic_line_arrow_1_down.svg": "00eb7dcaf5191c45b001f7058bcb4ecb",
"assets/assets/icons/ic_line_bell_red.svg": "a73d1b8a99eea0b4bff763589c6c7683",
"assets/assets/icons/ic_line_arrow2_left.svg": "a036ac0295534ecc9fe863f31aad7fc3",
"CNAME": "5cfc9a7d858460355d1d0c5c9eacb5b5",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
