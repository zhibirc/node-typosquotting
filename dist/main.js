!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.typosquotter=e():t.typosquotter=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports={replaceCharAt:function(t,e,r){return t.substr(0,e)+r+t.substr(e+1)},removeCharAt:(t,e)=>t.substr(0,e)+t.substr(e+1),doubleCharAt:function(t,e){return t.slice(0,e)+t.charAt(e)+t.slice(e)},addCharAt:function(t,e,r){return t.substr(0,e)+r+t.substr(e)},switchCharAt:function(t,e){return t.substr(0,e)+t.charAt(e+1,1)+t.substr(e,1)+t.substr(e+2)}}},function(t,e,r){"use strict";const n=/\.(\w{2,63})$/g,o=r(2);t.exports=((t,e={})=>{if(!t||""===t)throw new Error("The domain name is required.");const r=n.exec(t)[1],s=t.replace(n,""),u=s.split(""),c=!(!e.only||!Array.isArray(e.only))&&e.only,i=!(!e.exclude||!Array.isArray(e.exclude))&&e.exclude;let l={};for(const t in o)if(o.hasOwnProperty(t)){if(i&&i.includes(t))continue;if(c&&!1===c.includes(t))continue;l[t]=o[t](u,s,r)}return e.flat&&(l=[].concat.apply([],Object.values(l))),l}),t.exports.techniques=Object.keys(o)},function(t,e,r){t.exports={homoglyphs:r(3),hyphenation:r(4),omission:r(5),repetition:r(6),subdomain:r(7),switching:r(8),tld:r(9),vowelswap:r(10)}},function(t,e,r){"use strict";const{replaceCharAt:n}=r(0),o={0:["𝐨","𝝾","ە","𑣠","ዐ","ⲟ","𐐬","ﮨ","𝓸","𝔬","𐔖","𝐎","ಂ","о","ം","Ο","۵","О","ჿ","𝑶","𝙊","𞺄","𝜪","ھ","Ⲟ","𞹤","𑢵","০","𐐄","ﻬ","౦","𝘰","ه","𝟢","０","𝞼","ﻪ","𝙤","𑓐","ᴏ","𝑂","𝑜","𝕆","၀","๐","ഠ","𝛰","O","𐓪","𝓞","𝔒","𝜎","𝝈","𝗼","օ","ﮭ","٥","ﻫ","ﮬ","ﮫ","𝙾","ﮪ","ଠ","ꓳ","Օ","𝛔","𐊫","σ","𞸤","𐓂","𝝤","ہ","ం","୦","ဝ","𝞞","೦","𝗈","o","०","ℴ","𑣈","ⵔ","ﻩ","𝞸","ﮦ","߀","𝕺","ο","ﮩ","𝟶","૦","𝒪","𝚶","ס","੦","𝜊","௦","𝖮","ං","໐","𝕠","ﮧ","ｏ","𝝄","𝖔","𐊒","𝟬","𝚘","𝛐","𝒐","ᴑ","Ｏ","𝟎","𝗢","𝘖","〇","𝟘","𝞂","𑣗","ꬽ","൦"],1:["𝟭","𝕴","￨","ǀ","𝕀","ℓ","𐌉","ᛁ","ｌ","ⅼ","l","Ｉ","𝗅","𝗹","𝓘","𖼨","|","𝞘","𞺀","𝟙","ߊ","ⵏ","𞣇","׀","𝑙","ℐ","Ɩ","𞸀","𝟣","𐌠","１","Ι","𝖨","ﺍ","ꓲ","𝝞","ו","𝟷","𝘐","𝕝","𝜤","𝐥","۱","I","Ⲓ","Ӏ","ا","𐊊","𝟏","𝐼","Ⅰ","𝚰","ן","١","ℑ","𝓁","І","⏽","𝒍","𝖑","𝚕","𝑰","𝗜","∣","𝔩","ﺎ","𝘭","𝛪","𝐈","𝙄","𝙸","𝓵","𝙡"],2:["𝟚","２","𝟮","𝟤","𝟸","Ƨ","ᒿ","Ꙅ","ꛯ","Ꝛ","𝟐","Ϩ"],3:["Ʒ","𝟹","𖼻","Ⳍ","Ɜ","Ȝ","３","𝟑","𝟛","𝟯","𝟥","Ꝫ","З","𝈆","Ӡ","𑣊"],4:["Ꮞ","𝟜","𝟰","４","𑢯","𝟦","𝟺","𝟒"],5:["５","𝟱","Ƽ","𝟓","𝟻","𝟝","𝟧","𑢻"],6:["𝟲","𝟼","𑣕","Ⳓ","Ꮾ","б","𝟞","𝟨","６","𝟔"],7:["𝈒","𝟳","７","𝟟","𝟩","𝟕","𝟽","𑣆","𐓒"],8:["੪","ȣ","𝟴","৪","Ȣ","𝟪","𐌚","ଃ","𝟾","𝟖","𞣋","𝟠","８"],9:["Ꝯ","৭","୨","𑣖","੧","Ⳋ","９","𑣌","𝟫","𝟿","𝟗","൭","𑢬","𝟡","𝟵"],A:["𝞐","𖽀","𝔄","𝔸","𝗔","А","𝒜","Α","𝖠","ᗅ","𝑨","𝐀","𝘈","𝘼","𐊠","𝕬","𝜜","Ａ","𝐴","ꓮ","Ꭺ","𝚨","ꭺ","𝝖","𝛢","𝓐","ᴀ","𝙰"],B:["𝓑","ᛒ","𐌁","𝑩","𝕭","𐊡","𝖡","𝘽","Β","ꓐ","𝗕","𝘉","ᗷ","𝜝","𐊂","ʙ","𝚩","𝐁","в","𝛣","𝝗","𝐵","𝙱","𝔹","Ᏼ","ℬ","ᏼ","𝞑","В","Ｂ","Ꞵ","𝔅"],C:["𝐂","𝑪","ℭ","𝕮","Ϲ","𐔜","Ⅽ","𝐶","ꓚ","𑣩","𝖢","ℂ","Ꮯ","𝘊","𑣲","𝘾","🝌","С","𝓒","Ⲥ","𐊢","𐌂","𝗖","𝒞","𐐕","𝙲","Ｃ"],D:["𝔻","Ꭰ","𝗗","𝘋","ᗞ","𝙳","𝐷","ᗪ","𝓓","𝐃","𝑫","𝕯","ᴅ","𝖣","Ｄ","𝔇","Ⅾ","𝘿","ꭰ","ⅅ","𝒟","ꓓ"],E:["𝔼","𐊆","𝚬","ꓰ","𝝚","𝞔","𝓔","Е","𝑬","𝗘","ℰ","𑢮","ᴇ","𝛦","𝙴","𝔈","𝐄","𝘌","Ε","ꭼ","𝕰","Ꭼ","Ｅ","𝙀","𑢦","𝜠","𝖤","⋿","𝐸","ⴹ"],F:["𝐅","𝐹","𑢢","𝙵","𝙁","𝔽","ℱ","𐊇","ᖴ","𝔉","Ｆ","𝘍","𝓕","𐊥","𐔥","𑣂","ꓝ","Ꞙ","𝕱","𝈓","𝖥","𝑭","𝗙","Ϝ","𝟊"],G:["𝘎","𝗚","ꓖ","Ᏻ","Ꮐ","ᏻ","𝔾","𝓖","𝑮","𝕲","ԍ","ꮐ","𝒢","𝙂","𝖦","𝙶","Ｇ","ɢ","𝔊","𝐺","𝐆","Ԍ"],H:["𝜢","ꓧ","Ｈ","𝘏","𝐻","𝝜","𝖧","Н","𝐇","𝚮","ᕼ","𝕳","𝙷","𐋏","𝗛","ʜ","𝛨","ꮋ","ℍ","Ꮋ","Η","ℌ","𝙃","Ⲏ","𝑯","𝞖","н","𝓗","ℋ"],I:["𝟭","𝕴","￨","ǀ","𝕀","ℓ","𐌉","ᛁ","ｌ","ⅼ","l","Ｉ","𝗅","𝗹","𝓘","𖼨","|","𝞘","𞺀","𝟙","ߊ","ⵏ","𞣇","׀","𝑙","ℐ","Ɩ","𞸀","𝟣","𐌠","１","Ι","1","𝖨","ﺍ","ꓲ","𝝞","ו","𝟷","𝘐","𝕝","𝜤","𝐥","۱","Ⲓ","Ӏ","ا","𐊊","𝟏","𝐼","Ⅰ","𝚰","ן","١","ℑ","𝓁","І","⏽","𝒍","𝖑","𝚕","𝑰","𝗜","∣","𝔩","ﺎ","𝘭","𝛪","𝐈","𝙄","𝙸","𝓵","𝙡"],J:["𝓙","𝐉","Ꭻ","𝗝","𝕵","𝙹","𝘑","𝐽","𝕁","𝔍","Ʝ","𝙅","𝑱","𝖩","Ј","ꓙ","Ｊ","Ϳ","ꭻ","𝒥","ᴊ","ᒍ"],K:["𝒦","𝕶","𝜥","𝘒","ꓗ","𝙆","𝕂","Ⲕ","𝔎","𝛫","Ꮶ","𝞙","ᛕ","𐔘","К","𝓚","K","𝖪","𝝟","Κ","𝐊","𝚱","𝑲","𝐾","𝙺","𝗞","Ｋ"],L:["𝙻","ꮮ","Ｌ","𑢲","𝐋","𝗟","ᒪ","𐑃","𝓛","ⳑ","𖼖","𝈪","𝘓","Ⅼ","𝕃","𝕷","Ⳑ","𝑳","ʟ","Ꮮ","ꓡ","𐔦","𝖫","ℒ","𝐿","𝙇","𑢣","𝔏","𐐛"],M:["𐌑","𝔐","𝙈","𝖬","𐊰","𝛭","𝙼","ᛖ","𝝡","ꓟ","Ⅿ","𝗠","𝘔","Ｍ","𝑀","Ⲙ","𝕸","Ϻ","ᗰ","Μ","Ꮇ","ℳ","𝐌","𝞛","М","𝚳","𝕄","𝜧","𝑴","𝓜"],N:["𝐍","𝒩","𝞜","ɴ","𝗡","𝘕","𝕹","𝚴","Ｎ","𝑵","𝑁","Ⲛ","Ν","𝜨","𝓝","𝖭","𝔑","𐔓","𝙉","ℕ","ꓠ","𝛮","𝝢","𝙽"],O:["𝐨","𝝾","ە","𑣠","ዐ","ⲟ","𐐬","ﮨ","𝓸","𝔬","𐔖","𝐎","ಂ","о","ം","Ο","۵","О","ჿ","𝑶","𝙊","𞺄","𝜪","ھ","Ⲟ","𞹤","𑢵","০","𐐄","ﻬ","౦","𝘰","ه","𝟢","０","𝞼","ﻪ","𝙤","𑓐","ᴏ","𝑂","𝑜","𝕆","0","၀","๐","ഠ","𝛰","𐓪","𝓞","𝔒","𝜎","𝝈","𝗼","օ","ﮭ","٥","ﻫ","ﮬ","ﮫ","𝙾","ﮪ","ଠ","ꓳ","Օ","𝛔","𐊫","σ","𞸤","𐓂","𝝤","ہ","ం","୦","ဝ","𝞞","೦","𝗈","o","०","ℴ","𑣈","ⵔ","ﻩ","𝞸","ﮦ","߀","𝕺","ο","ﮩ","𝟶","૦","𝒪","𝚶","ס","੦","𝜊","௦","𝖮","ං","໐","𝕠","ﮧ","ｏ","𝝄","𝖔","𐊒","𝟬","𝚘","𝛐","𝒐","ᴑ","Ｏ","𝟎","𝗢","𝘖","〇","𝟘","𝞂","𑣗","ꬽ","൦"],P:["ꓑ","𝚸","𝙿","𝞠","Р","ᑭ","𝙋","ℙ","ꮲ","Ⲣ","𝔓","𝘗","𝓟","𝖯","𝛲","𝕻","ᴘ","Ꮲ","𝒫","𝝦","𝑃","𝑷","𝗣","ᴩ","𝐏","𐊕","Ρ","Ｐ","𝜬"],Q:["𝗤","𝚀","𝓠","𝘘","𝙌","ⵕ","𝐐","𝑄","𝖰","𝕼","Ｑ","𝒬","ℚ","𝔔","𝑸"],R:["𝓡","Ｒ","ᚱ","ꮢ","𝐑","Ʀ","𝖱","ℜ","ℝ","ᖇ","𝈖","ꭱ","ʀ","ℛ","𝙍","𝑹","𝘙","Ꮢ","𝑅","𝗥","𐒴","𝕽","𝚁","𖼵","Ꭱ","ꓣ"],S:["Տ","𝓢","𝗦","𝑺","𖼺","Ꮪ","Ѕ","𝒮","Ꮥ","𝚂","𝐒","ꓢ","𝖲","Ｓ","𝔖","𝙎","𐊖","𝕾","𐐠","𝘚","𝕊","𝑆"],T:["τ","𐌕","𝞃","𝚻","𝛵","𝕋","𝜏","𝞽","𝕿","𝑻","𝝉","𝑇","Τ","ꓔ","𑢼","𝜯","ᴛ","𝓣","𐊱","𝛕","𐊗","𝖳","𝙏","🝨","𝝩","𝞣","𝚃","𝘛","𖼊","⟙","𝐓","Ⲧ","𝗧","Т","т","⊤","𝔗","Ｔ","Ꭲ","ꭲ","𝒯"],U:["𝒰","ሀ","𑢸","⋃","Ｕ","Ս","ꓴ","𖽂","∪","𝚄","𝔘","𝑈","𝙐","𐓎","𝕌","𝘜","𝓤","ᑌ","𝐔","𝖴","𝖀","𝑼","𝗨"],V:["𝘝","Ⅴ","𝈍","𑢠","𝑉","ᐯ","Ѵ","𝔙","ꓦ","Ｖ","𝖵","۷","𝙑","ⴸ","𝐕","𝖁","𝚅","𐔝","٧","𝗩","𝓥","𝕍","𝒱","𖼈","𝑽","Ꮩ","ꛟ"],W:["𝐖","𝖶","𝓦","𝙒","𝖂","𝔚","𝚆","𝕎","Ꮃ","𝑾","ꓪ","𝒲","𑣯","𝗪","Ԝ","Ｗ","Ꮤ","𝘞","𑣦","𝑊"],X:["ꓫ","╳","𝖃","Ｘ","𝞦","𝘟","ᚷ","Χ","𐊐","Х","𝚾","𑣬","𝚇","𝑿","𐌗","Ⲭ","𝙓","𝝬","Ⅹ","𝜲","Ꭓ","𝐗","𐔧","𝛸","𐌢","ⵝ","𝖷","𝒳","𝑋","𝕏","𝓧","𝔛","𐊴","᙭","𝗫"],Y:["Υ","Ү","𝔜","У","𝕐","Ꮍ","𑢤","𝛶","Ꭹ","𝗬","𝐘","ꓬ","𝒀","𝜰","𖽃","Ⲩ","𝚈","𝑌","𐊲","𝖄","𝒴","Ｙ","𝓨","𝚼","𝙔","𝖸","ϒ","𝝪","𝘠","𝞤"],Z:["𝜡","𝓩","𝒵","Ｚ","𝑍","𝙕","Ζ","𝝛","ℨ","𝒁","𝖅","𝞕","ℤ","𑣥","𝚭","𝚉","𐋵","𝛧","𑢩","𝖹","𝗭","𝐙","ꓜ","Ꮓ","𝘡"],a:["𝒶","𝓪","𝛼","𝔞","𝑎","𝐚","𝜶","𝕒","𝖺","⍺","α","𝖆","𝝰","𝚊","𝛂","ɑ","𝗮","𝘢","𝞪","ａ","𝒂","а","𝙖"],b:["𝐛","𝘣","𝒷","𝔟","𝓫","ᖯ","Ь","ｂ","𝖇","𝖻","Ƅ","𝑏","Ꮟ","𝙗","𝕓","𝒃","𝗯","𝚋"],c:["𝖼","𝕔","𝓬","с","𝙘","ᴄ","𐐽","𝗰","𝒄","𝘤","𝚌","ꮯ","𝔠","𝖈","ϲ","𝒸","ⲥ","𝑐","ⅽ","𝐜","ｃ"],d:["𝕕","ｄ","𝖽","𝔡","𝖉","𝑑","𝘥","𝒅","𝙙","𝐝","𝗱","𝚍","ⅆ","𝒹","ԁ","ⅾ","Ꮷ","ᑯ","ꓒ","𝓭"],e:["𝑒","𝓮","ℯ","ⅇ","𝕖","𝖊","𝘦","е","ꬲ","ҽ","𝗲","℮","𝚎","𝙚","𝒆","𝔢","𝖾","ｅ","𝐞"],f:["𝐟","𝖋","𝚏","ｆ","ϝ","𝖿","ꬵ","𝑓","ẝ","𝒻","𝓯","𝟋","𝗳","ք","𝕗","ꞙ","𝒇","𝔣","ſ","𝙛","𝘧"],g:["𝙜","𝓰","𝗴","ᶃ","𝐠","𝑔","𝔤","𝗀","ƍ","𝕘","𝖌","ɡ","𝘨","ց","𝚐","ｇ","ℊ","𝒈"],h:["Ꮒ","𝚑","𝙝","𝒽","𝐡","հ","һ","𝗁","𝖍","ℎ","𝕙","𝒉","𝔥","ｈ","𝘩","𝓱","𝗵"],i:["𝜄","𝒊","⍳","𝑖","𑣃","𝒾","𝖎","𝘪","і","˛","ι","ⅈ","ꭵ","Ꭵ","ⅰ","𝛊","𝕚","ꙇ","𝙞","𝗶","𝓲","ɪ","𝔦","𝝸","ӏ","𝗂","𝐢","ｉ","ͺ","𝜾","𝞲","ɩ","ι","𝚤","ℹ","𝚒","ı"],j:["ⅉ","ј","ｊ","𝕛","𝚓","ϳ","𝖏","𝐣","𝒿","𝘫","𝗷","𝑗","𝙟","𝔧","𝒋","𝗃","𝓳"],k:["𝐤","𝙠","𝑘","ｋ","𝖐","𝓀","𝓴","𝚔","𝘬","𝕜","𝗄","𝒌","𝗸","𝔨"],l:["𝟭","𝕴","￨","ǀ","𝕀","ℓ","𐌉","ᛁ","ｌ","ⅼ","Ｉ","𝗅","𝗹","𝓘","𖼨","|","𝞘","𞺀","𝟙","ߊ","ⵏ","𞣇","׀","𝑙","ℐ","Ɩ","𞸀","𝟣","𐌠","１","Ι","1","𝖨","ﺍ","ꓲ","𝝞","ו","𝟷","𝘐","𝕝","𝜤","𝐥","۱","I","Ⲓ","Ӏ","ا","𐊊","𝟏","𝐼","Ⅰ","𝚰","ן","١","ℑ","𝓁","І","⏽","𝒍","𝖑","𝚕","𝑰","𝗜","∣","𝔩","ﺎ","𝘭","𝛪","𝐈","𝙄","𝙸","𝓵","𝙡"],m:["ｍ"],n:["𝕟","ո","𝘯","𝐧","𝓃","𝒏","𝓷","𝙣","𝑛","𝖓","𝔫","ｎ","𝗇","ռ","𝚗","𝗻"],o:["𝐨","𝝾","ە","𑣠","ዐ","ⲟ","𐐬","ﮨ","𝓸","𝔬","𐔖","𝐎","ಂ","о","ം","Ο","۵","О","ჿ","𝑶","𝙊","𞺄","𝜪","ھ","Ⲟ","𞹤","𑢵","০","𐐄","ﻬ","౦","𝘰","ه","𝟢","０","𝞼","ﻪ","𝙤","𑓐","ᴏ","𝑂","𝑜","𝕆","0","၀","๐","ഠ","𝛰","O","𐓪","𝓞","𝔒","𝜎","𝝈","𝗼","օ","ﮭ","٥","ﻫ","ﮬ","ﮫ","𝙾","ﮪ","ଠ","ꓳ","Օ","𝛔","𐊫","σ","𞸤","𐓂","𝝤","ہ","ం","୦","ဝ","𝞞","೦","𝗈","०","ℴ","𑣈","ⵔ","ﻩ","𝞸","ﮦ","߀","𝕺","ο","ﮩ","𝟶","૦","𝒪","𝚶","ס","੦","𝜊","௦","𝖮","ං","໐","𝕠","ﮧ","ｏ","𝝄","𝖔","𐊒","𝟬","𝚘","𝛐","𝒐","ᴑ","Ｏ","𝟎","𝗢","𝘖","〇","𝟘","𝞂","𑣗","ꬽ","൦"],p:["𝐩","𝙥","𝝔","𝔭","⍴","𝚙","𝜚","𝘱","𝝆","𝛒","𝗽","ϱ","𝓅","𝕡","𝞺","ⲣ","𝜌","𝞀","ρ","𝗉","р","ｐ","𝑝","𝓹","𝞎","𝖕","𝒑","𝟈","𝛠"],q:["ԛ","𝗊","𝑞","𝘲","𝕢","𝚚","𝒒","𝖖","գ","𝐪","𝔮","𝓺","զ","𝙦","𝓆","𝗾","ｑ"],r:["𝙧","𝚛","𝐫","𝖗","𝗿","𝕣","𝑟","ｒ","𝒓","𝔯","г","ꭇ","ⲅ","ꮁ","ꭈ","ᴦ","𝓻","𝓇","𝘳","𝗋"],s:["𝕤","𝗌","ѕ","𑣁","𝔰","𝒔","ꜱ","ƽ","𝑠","ｓ","𝘀","𐑈","𝙨","𝓼","𝐬","𝖘","ꮪ","𝘴","𝚜","𝓈"],t:["𝑡","𝓉","𝘵","𝕥","𝖙","𝘁","ｔ","𝐭","𝒕","𝓽","𝗍","𝚝","𝔱","𝙩"],u:["𝗎","𝐮","𝜐","𝒖","𝝊","𝑢","ꞟ","𝕦","𝘂","𝓊","𝞾","𐓶","ʋ","𝚞","𝞄","ｕ","υ","ꭎ","ꭒ","ս","𝙪","𝔲","𝛖","𝓾","𝖚","ᴜ","𝘶","𑣘"],v:["𝙫","∨","⋁","𝒗","ⅴ","ꮩ","ν","ｖ","𝕧","𑣀","𝝼","𝞶","𝓋","ѵ","ᴠ","𝘃","𝐯","𝔳","𝝂","𝑣","𝖛","𝛎","𝚟","𝜈","𝓿","ט","𝗏","𑜆","𝘷"],w:["𝔴","𝒘","ա","𝚠","𝔀","𝓌","𝕨","𝖜","𝑤","𑜊","𝙬","𝗐","ԝ","ѡ","𑜏","ｗ","ᴡ","𝘄","𝘸","𝐰","𑜎","ꮃ","ɯ"],x:["𝖝","ᕽ","᙮","𝐱","𝔁","ᕁ","𝑥","𝘅","𝓍","ⅹ","𝚡","×","𝙭","𝒙","𝗑","ｘ","𝘹","⨯","𝔵","⤫","⤬","𝕩","х"],y:["ỿ","𝚢","𝜸","ʏ","𝑦","𝞬","𝙮","у","ℽ","ꭚ","ᶌ","𝝲","γ","ɣ","𝗒","𝘺","𝔂","𝛄","ｙ","𝓎","𝕪","𝒚","ү","𝖞","𝛾","𝔶","𝘆","𝐲","ყ","𑣜"],z:["𝖟","𝐳","𝑧","𑣄","ｚ","𝓏","𝔃","𝒛","𝚣","𝘇","𝗓","𝘻","ᴢ","𝙯","𝔷","𝕫","ꮓ"]};t.exports=((t,e,r)=>{let s=[];for(var u=0;u<t.length;u++){let i=t[u];if(o[i])for(var c=0;c<o[i].length;c++){let t=o[i][c],l=`${n(e,u,t)}.${r}`;s.push(l)}}return s})},function(t,e,r){"use strict";const{addCharAt:n}=r(0);t.exports=((t,e,r)=>{let o=[];for(var s=1;s<t.length;s++)o.push(`${n(e,s,"-")}.${r}`);return o})},function(t,e,r){"use strict";const{removeCharAt:n}=r(0);t.exports=((t,e,r)=>Object.keys(t).map(t=>(t=parseInt(t,10),n(e,t)+"."+r)))},function(t,e,r){"use strict";const{doubleCharAt:n}=r(0);t.exports=((t,e,r)=>Object.keys(t).map(t=>n(e,t)+"."+r))},function(t,e,r){"use strict";const{addCharAt:n}=r(0);t.exports=((t,e,r)=>{let o=[];for(var s=1;s<t.length;s++)o.push(`${n(e,s,".")}.${r}`);return o})},function(t,e,r){"use strict";const{switchCharAt:n}=r(0);t.exports=((t,e,r)=>Object.keys(t).reduce((o,s)=>(s=parseInt(s,10))===t.length-1?o:(o.push(n(e,s)+"."+r),o),[]))},function(t,e,r){"use strict";const n=["AC","AD","AE","AERO","AF","AG","AI","AL","AM","AN","AO","AQ","AR","ARPA","AS","ASIA","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BIZ","BJ","BM","BN","BO","BR","BS","BT","BV","BW","BY","BZ","CA","CAT","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","COM","COOP","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EDU","EE","EG","ER","ES","ET","EU","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GOV","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","INFO","INT","IO","IQ","IR","IS","IT","JE","JM","JO","JOBS","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MIL","MK","ML","MM","MN","MO","MOBI","MP","MQ","MR","MS","MT","MU","MUSEUM","MV","MW","MX","MY","MZ","NA","NAME","NC","NE","NET","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","ORG","PA","PE","PF","PG","PH","PK","PL","PM","PN","POST","PR","PRO","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","ST","SU","SV","SX","SY","SZ","TC","TD","TEL","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TRAVEL","TT","TV","TW","TZ","UA","UG","UK","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XN","XXX","YE","YT","ZA","ZM","ZW"];t.exports=((t,e,r)=>{let o=[];for(var s=0;s<n.length;s++){let t=n[s].toLowerCase();t!==r.toLowerCase()&&o.push(`${e}.${t}`)}return o})},function(t,e,r){"use strict";const{replaceCharAt:n}=r(0),o=["a","e","i","o","u","A","E","I","O","U"];t.exports=((t,e,r)=>{let s=[];for(var u=0;u<t.length;u++){let i=t[u];if(o.includes(i))for(var c=0;c<o.length;c++){let t=o[c];t!==i&&s.push(`${n(e,u,t)}.${r}`)}}return s})}])});