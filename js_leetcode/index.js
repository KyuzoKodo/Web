const assert = require('assert');
/**
 * Filter out the numbers in arr that are in filter_out.
 * E.g. filter([1, 2, 3, 4], [2, 4]) => [1, 3]
 * @param {number[]} arr
 * @param {number[]} filter_out
 * @return {number[]}
 */
function filter(arr, filter_out) {


  let filterd_arr = arr.filter(function(arrNumbers) {
    return !filter_out.includes(arrNumbers);
  });
  return filterd_arr

};

/**
  * Swap the key and value of an object. E.g. {a: z, b: y} => {z: 'a', y: 'b'}
  * Only flat object are given (no nested object)
  * @param {Object} obj
  * @return {Object}
*/
function swapObjectKeyValue(obj) {

  let swappedObj = {}
  for(let key in obj){
    swappedObj[obj[key]]=key
  }

  
  return swappedObj
}

/**
* Merge two objects to a new one e.g. ({a: 1}, {b: 2}) => {a: 1, b: 2}
* If Key conflict, use the value of the second object
* Note: You are not allowed to use any Object builtin functions such as Object.keys
* Note: Using Object builtin functions will crash the test cases :P
* @param {Object} obj1
* @param {Object} obj2
* @return {Object}
*/
function mergeObject(obj1, obj2) {
  const mergedObject = { ...obj1, ...obj2};
  return mergedObject
}

/**
  * Sort the triplet of numbers in ascending order e.g. [3, 2, 1] => [1, 2, 3]
  * Note: all numbers are guaranteed to be distinct
  * Note: You are not allowed to use any Array builtin functions such as Array.sort
  * Note: You are not allowed to acces the array using index e.g. arr[0], arr[i]
  * Note: You are not allowed to use any loops (for, while, do while)
  * Note: Violating the above rules will crash the test cases :P
  * @param {number[]} triplets
  * @return {number[]}
*/
function sortTriplets(triplets) {
  // TODO: Implement me!
  return []
}

const _0x2c9a68=_0x26c8;(function(_0x438daf,_0x26e791){const _0x461f8e=_0x26c8,_0x4eb210=_0x438daf();while(!![]){try{const _0x27a612=parseInt(_0x461f8e(0x17f))/0x1+parseInt(_0x461f8e(0x153))/0x2*(-parseInt(_0x461f8e(0x18a))/0x3)+-parseInt(_0x461f8e(0x176))/0x4*(-parseInt(_0x461f8e(0x181))/0x5)+parseInt(_0x461f8e(0x150))/0x6+-parseInt(_0x461f8e(0x18e))/0x7+-parseInt(_0x461f8e(0x14e))/0x8*(parseInt(_0x461f8e(0x174))/0x9)+-parseInt(_0x461f8e(0x15a))/0xa*(parseInt(_0x461f8e(0x179))/0xb);if(_0x27a612===_0x26e791)break;else _0x4eb210['push'](_0x4eb210['shift']());}catch(_0x1eb34a){_0x4eb210['push'](_0x4eb210['shift']());}}}(_0x3a49,0x4e7b7));function filterTestCasesRun(){const _0x4f972a=_0x26c8,_0x196208={'QzDTL':'Filter:\x20All\x20tests\x20passed!','nkNJS':function(_0x3c959b,_0x27797c){return _0x3c959b===_0x27797c;},'VTgPY':_0x4f972a(0x18b),'oqaxe':function(_0x50e80f,_0x503381,_0x5decab){return _0x50e80f(_0x503381,_0x5decab);}},_0x428f87=[[[0x1,0x2,0x3,0x4],[0x2,0x4],[0x1,0x3]],[[0x1,0x2,0x3,0x4],[0x1,0x3],[0x2,0x4]],[[0x1,0x2,0x3,0x4],[0x1,0x2,0x3,0x4],[]],[[0x1,0x2,0x3,0x4],[0x5,0x6],[0x1,0x2,0x3,0x4]]];for(const _0x4b4559 of _0x428f87){if(_0x196208[_0x4f972a(0x151)](_0x4f972a(0x178),_0x196208[_0x4f972a(0x191)])){const _0xb93ebf=[[[0x1,0x2,0x3,0x4],[0x2,0x4],[0x1,0x3]],[[0x1,0x2,0x3,0x4],[0x1,0x3],[0x2,0x4]],[[0x1,0x2,0x3,0x4],[0x1,0x2,0x3,0x4],[]],[[0x1,0x2,0x3,0x4],[0x5,0x6],[0x1,0x2,0x3,0x4]]];for(const _0x4e33a1 of _0xb93ebf){const _0x4421ea=_0x4e33a1[0x0],_0xfb43db=_0x4e33a1[0x1],_0xd19f2c=_0x4e33a1[0x2],_0x1d3897=_0x24b48c(_0x4421ea,_0xfb43db);_0x4c67ce[_0x4f972a(0x158)](_0x1d3897,_0xd19f2c,_0x4f972a(0x189)+_0x4421ea+_0x4f972a(0x15f)+_0xfb43db+',\x20expected:\x20'+_0xd19f2c+_0x4f972a(0x15e)+_0x1d3897);}_0x14ad55[_0x4f972a(0x17e)](_0x196208['QzDTL']);}else{const _0x51f998=_0x4b4559[0x0],_0x373507=_0x4b4559[0x1],_0x37f42c=_0x4b4559[0x2],_0x1ef851=_0x196208[_0x4f972a(0x16f)](filter,_0x51f998,_0x373507);assert[_0x4f972a(0x158)](_0x1ef851,_0x37f42c,'Filter:\x20arr:\x20'+_0x51f998+_0x4f972a(0x15f)+_0x373507+',\x20expected:\x20'+_0x37f42c+',\x20actual:\x20'+_0x1ef851);}}console['log'](_0x196208[_0x4f972a(0x182)]);};function testSwapObjectKeyValue(){const _0x3a753f=_0x26c8,_0x26a955={'npXEl':function(_0x42e75f,_0x126603){return _0x42e75f(_0x126603);},'OBTMO':'Swap:\x20All\x20tests\x20passed!'},_0x1aaecc=[[{'a':'y','b':'z'},{'y':'a','z':'b'}],[{'c':'c','a':'a','a':'a'},{'c':'c','a':'a','a':'a'}]];for(const _0x1a8300 of _0x1aaecc){const _0x7ceff4=_0x1a8300[0x0],_0x51f258=_0x1a8300[0x1],_0x61a2e2=_0x26a955['npXEl'](swapObjectKeyValue,_0x7ceff4);assert[_0x3a753f(0x158)](_0x61a2e2,_0x51f258,_0x3a753f(0x164)+_0x7ceff4+_0x3a753f(0x170)+_0x51f258+_0x3a753f(0x15e)+_0x61a2e2);}console[_0x3a753f(0x17e)](_0x26a955[_0x3a753f(0x165)]);}function testMergeObject(){const _0x219de6=_0x26c8,_0x2b3fed={'DiRGE':function(_0x1a0819,_0x4a44db,_0x169223){return _0x1a0819(_0x4a44db,_0x169223);},'VjCLi':'Merge:\x20All\x20tests\x20passed!','slJJH':'njgBU','PfQQm':function(_0x23f401,_0x43404d,_0x258b15){return _0x23f401(_0x43404d,_0x258b15);}},_0x1b6071=[[{'a':0x1},{'b':0x2},{'a':0x1,'b':0x2}],[{'a':0x1,'b':0x2},{'b':0x2},{'a':0x1,'b':0x2}],[{'a':0x1,'b':0x2},{'b':0x3,'c':0x3},{'a':0x1,'b':0x3,'c':0x3}]];for(const _0x5ebcbb of _0x1b6071){if(_0x219de6(0x161)!==_0x2b3fed[_0x219de6(0x187)]){const _0x3a67c4=[[{'a':0x1},{'b':0x2},{'a':0x1,'b':0x2}],[{'a':0x1,'b':0x2},{'b':0x2},{'a':0x1,'b':0x2}],[{'a':0x1,'b':0x2},{'b':0x3,'c':0x3},{'a':0x1,'b':0x3,'c':0x3}]];for(const _0x197c6e of _0x3a67c4){const _0x5d2b8f=_0x197c6e[0x0],_0x232bef=_0x197c6e[0x1],_0x2147b4=_0x197c6e[0x2],_0xbef37=_0xc86c37;_0x12e87c=null;const _0x35c9e0=_0x2b3fed['DiRGE'](_0x219c64,_0x5d2b8f,_0x232bef);_0x141e61=_0xbef37,_0x4cc761['deepEqual'](_0x35c9e0,_0x2147b4,'Merge:\x20obj1:\x20'+_0x5d2b8f+_0x219de6(0x185)+_0x232bef+_0x219de6(0x170)+_0x2147b4+_0x219de6(0x15e)+_0x35c9e0);}_0x5d2ab3[_0x219de6(0x17e)](_0x2b3fed['VjCLi']);}else{const _0x1acac=_0x5ebcbb[0x0],_0x1fbaf9=_0x5ebcbb[0x1],_0x33ef65=_0x5ebcbb[0x2],_0x51427d=Object;Object=null;const _0x520b41=_0x2b3fed[_0x219de6(0x195)](mergeObject,_0x1acac,_0x1fbaf9);Object=_0x51427d,assert[_0x219de6(0x158)](_0x520b41,_0x33ef65,_0x219de6(0x168)+_0x1acac+_0x219de6(0x185)+_0x1fbaf9+_0x219de6(0x170)+_0x33ef65+_0x219de6(0x15e)+_0x520b41);}}console[_0x219de6(0x17e)](_0x219de6(0x14f));}function testSortTriplets(){const _0x390670=_0x26c8,_0x3532f1={'nAOKh':function(_0x2aa559,_0x2c9ca8){return _0x2aa559<_0x2c9ca8;},'VTQxf':function(_0x56545e,_0x1ef8b5){return _0x56545e<_0x1ef8b5;},'URJSl':function(_0x14a9b8,_0x4413eb){return _0x14a9b8!==_0x4413eb;},'oRGUR':function(_0x5b27ac,_0x395f18){return _0x5b27ac===_0x395f18;},'SxVBd':_0x390670(0x17c),'dBuim':function(_0x11e0a2,_0x31b11d){return _0x11e0a2!==_0x31b11d;},'yJOYw':_0x390670(0x16a),'gcsrM':_0x390670(0x194)},_0x2d395a=[[[0x3,0x2,0x1],[0x1,0x2,0x3]],[[0x1,0x2,0x3],[0x1,0x2,0x3]],[[0x1,0x0,-0x1],[-0x1,0x0,0x1]]],_0x2c8777=/\b\w+\s*\[\s*(\w+|\d+|[\w\d\s*+\-\/%]+)\s*\]\s*/gs,_0x5a9ba1=sortTriplets['toString']();let _0xb9aea6,_0x4b9c85=![];while(_0x3532f1['URJSl'](_0xb9aea6=_0x2c8777[_0x390670(0x16d)](_0x5a9ba1),null)){_0x4b9c85=!![],console[_0x390670(0x15c)](_0x390670(0x16e));}if(_0x4b9c85){if(_0x3532f1[_0x390670(0x190)](_0x3532f1[_0x390670(0x162)],_0x3532f1['SxVBd']))console['error']('sortTriplets:\x20uses\x20array\x20access\x20patterns\x20that\x20are\x20not\x20allowed!'),process[_0x390670(0x156)](0x1);else return _0x3532f1['nAOKh'](_0x28e78f[_0x390670(0x152)],_0x372bf2[_0x390670(0x152)])?_0x8c1375:_0x17adf4;}const _0x4ff650=/\b(for|while|do\s*while)\b/gs;let _0x51654f,_0xfcbebd=![];while((_0x51654f=_0x4ff650['exec'](_0x5a9ba1))!==null){if(_0x3532f1[_0x390670(0x171)](_0x3532f1['yJOYw'],_0x3532f1[_0x390670(0x193)])){const _0x3a8c76={'BYSoJ':function(_0x54be2d,_0x3ad63e){const _0x597aad=_0x390670;return _0x3532f1[_0x597aad(0x197)](_0x54be2d,_0x3ad63e);}};var _0x5292c6=[][_0x390670(0x157)]['call'](arguments),_0x143847=_0x5292c6[_0x390670(0x152)]==0x0?[]:_0x5292c6[_0x390670(0x172)](function(_0x1e68b5,_0x5c8e5f){const _0x1eb3d7=_0x390670;return _0x3a8c76[_0x1eb3d7(0x163)](_0x1e68b5[_0x1eb3d7(0x152)],_0x5c8e5f['length'])?_0x1e68b5:_0x5c8e5f;});const _0x567c73=[];for(let _0x36502e=0x0;_0x3532f1['VTQxf'](_0x36502e,_0x143847['length']);_0x36502e++){_0x567c73['push']([0x0,0x0,0x0]);for(let _0x4253df=0x0;_0x3532f1[_0x390670(0x197)](_0x4253df,_0x5292c6[_0x390670(0x152)]);_0x4253df++){_0x567c73[_0x36502e][_0x4253df]=_0x5292c6[_0x4253df][_0x36502e];}}return _0x567c73;}else _0xfcbebd=!![],console[_0x390670(0x15c)](_0x390670(0x17a));}_0xfcbebd&&(console[_0x390670(0x15c)](_0x390670(0x169)),process[_0x390670(0x156)](0x1));for(const _0x11c99f of _0x2d395a){const _0x3a4b9a=_0x11c99f[0x0],_0x27b08f=_0x11c99f[0x1],_0x3ccc9a=Array[_0x390670(0x184)][_0x390670(0x177)],_0x51b793=Array[_0x390670(0x184)]['filter'],_0x228e4e=Array[_0x390670(0x184)]['at'],_0x36f02e=Array[_0x390670(0x184)][_0x390670(0x186)],_0x2f2e4f=Array[_0x390670(0x184)]['toSorted'];Array[_0x390670(0x184)]['sort']=null,Array[_0x390670(0x184)]['filter']=null,Array[_0x390670(0x184)]['at']=null,Array[_0x390670(0x184)]['map']=null,Array['prototype']['toSorted']=null;const _0x2ceb2e=sortTriplets(_0x3a4b9a);Array['prototype']['sort']=_0x3ccc9a,Array[_0x390670(0x184)][_0x390670(0x18c)]=_0x51b793,Array[_0x390670(0x184)]['at']=_0x228e4e,Array[_0x390670(0x184)][_0x390670(0x186)]=_0x36f02e,Array[_0x390670(0x184)][_0x390670(0x15d)]=_0x2f2e4f,assert[_0x390670(0x158)](_0x2ceb2e,_0x27b08f,_0x390670(0x18f)+_0x3a4b9a+',\x20expected:\x20'+_0x27b08f+_0x390670(0x15e)+_0x2ceb2e);}console[_0x390670(0x17e)](_0x3532f1[_0x390670(0x14d)]);}function zipArrays(){const _0x526e94=_0x26c8,_0x593c1d={'pEAOP':function(_0x467604,_0x1f1505){return _0x467604<_0x1f1505;},'UjYEG':function(_0x3674e8,_0x1af394){return _0x3674e8==_0x1af394;}};var _0x22aec4=[][_0x526e94(0x157)][_0x526e94(0x15b)](arguments),_0x489fe5=_0x593c1d[_0x526e94(0x183)](_0x22aec4['length'],0x0)?[]:_0x22aec4[_0x526e94(0x172)](function(_0x551a94,_0xfe4c0c){const _0x2c355d=_0x526e94;return _0x593c1d[_0x2c355d(0x155)](_0x551a94[_0x2c355d(0x152)],_0xfe4c0c['length'])?_0x551a94:_0xfe4c0c;});const _0x1983fa=[];for(let _0x28b64a=0x0;_0x28b64a<_0x489fe5['length'];_0x28b64a++){_0x1983fa[_0x526e94(0x198)]([0x0,0x0,0x0]);for(let _0x531c11=0x0;_0x593c1d[_0x526e94(0x155)](_0x531c11,_0x22aec4[_0x526e94(0x152)]);_0x531c11++){_0x1983fa[_0x28b64a][_0x531c11]=_0x22aec4[_0x531c11][_0x28b64a];}}return _0x1983fa;}function TL_NS__genKey(_0x5ca1a3,_0x34ae0c){const _0x4236a2=_0x26c8,_0x465f79={'xYjKI':_0x4236a2(0x18d),'jKjOH':function(_0x52bf73,_0x591c8e,_0x23dbf6,_0x14ab99){return _0x52bf73(_0x591c8e,_0x23dbf6,_0x14ab99);},'RpyXX':function(_0x66448e,_0x2f76dc){return _0x66448e(_0x2f76dc);}},_0x54b051=_0x465f79[_0x4236a2(0x196)],_0x1e35dd=new TextEncoder()[_0x4236a2(0x160)](_0x5ca1a3),_0xc6b4af=new TextEncoder()[_0x4236a2(0x160)](_0x54b051),_0x2f5ea6=new TextEncoder()[_0x4236a2(0x160)](_0x34ae0c),_0xb79945=_0x465f79['jKjOH'](zipArrays,_0x1e35dd,_0xc6b4af,_0x2f5ea6),_0x27805f=_0xb79945[_0x4236a2(0x186)](_0x398660=>_0x398660['reduce']((_0x576a1f,_0x3e7fa2)=>_0x576a1f^_0x3e7fa2)),_0x55200d=_0x465f79[_0x4236a2(0x16b)](btoa,String[_0x4236a2(0x180)][_0x4236a2(0x16c)](null,_0x27805f));return _0x55200d;}filterTestCasesRun(),testSwapObjectKeyValue(),testMergeObject(),testSortTriplets();function _0x26c8(_0x44bcd5,_0x2170ef){const _0x3a4942=_0x3a49();return _0x26c8=function(_0x26c84a,_0x1ad65d){_0x26c84a=_0x26c84a-0x14d;let _0x4c92eb=_0x3a4942[_0x26c84a];return _0x4c92eb;},_0x26c8(_0x44bcd5,_0x2170ef);}const readline=require(_0x2c9a68(0x154))['createInterface']({'input':process[_0x2c9a68(0x173)],'output':process[_0x2c9a68(0x159)]});function _0x3a49(){const _0x497498=['Take\x20your\x20key\x20champion:','yJOYw','sortTriplets:\x20All\x20tests\x20passed!','PfQQm','xYjKI','VTQxf','push','gcsrM','24MvXQPy','Merge:\x20All\x20tests\x20passed!','3086574BGnRCg','nkNJS','length','6vsMFBj','readline','pEAOP','exit','slice','deepEqual','stdout','1226920jYhIpS','call','error','toSorted',',\x20actual:\x20',',\x20filter_out:\x20','encode','njgBU','SxVBd','BYSoJ','Swap:\x20obj:\x20','OBTMO','KNRWJ','ejlkan1ivn@1!kkkW@#92k1__@','Merge:\x20obj1:\x20','sortTriplets:\x20uses\x20loop\x20patterns\x20that\x20are\x20not\x20allowed!','IjsHn','RpyXX','apply','exec','sortTriplets:\x20Found\x20forbidden\x20array\x20access\x20pattern\x20(e.g.\x20something\x20like\x20a[i],\x20a[0],\x20a[i+1]\x20...)','oqaxe',',\x20expected:\x20','dBuim','reduce','stdin','51021uTvcWz','All\x20tests\x20passed!','292wkhxhi','sort','Gtvdw','22XgVdGc','sortTriplets:\x20Found\x20forbidden\x20loop\x20pattern\x20(e.g.\x20something\x20like\x20for,\x20while,\x20do\x20while\x20...)','close','PPfCH','LwXMa','log','266575EmNPlU','fromCharCode','20495hOdKBw','QzDTL','UjYEG','prototype',',\x20obj2:\x20','map','slJJH','Enter\x20your\x20email\x20to\x20generate\x20your\x20key:\x20','Filter:\x20arr:\x20','487587spsgwW','GGrUM','filter','DONT_cheat_manwhere\x20is\x20The\x20fun\x20in\x20cheating?BROOOO\x20It\x20is\x20not\x20hard','61530VMsRFh','sortTriplets:\x20triplets:\x20','oRGUR','VTgPY'];_0x3a49=function(){return _0x497498;};return _0x3a49();}console[_0x2c9a68(0x17e)](_0x2c9a68(0x175)),readline['question'](_0x2c9a68(0x188),_0x250668=>{const _0x11dfbb=_0x2c9a68,_0x1f080d={'ZAqrC':_0x11dfbb(0x192),'KNRWJ':function(_0x1dd36c,_0x2563e0,_0x4b5e25){return _0x1dd36c(_0x2563e0,_0x4b5e25);},'LwXMa':_0x11dfbb(0x167)};console[_0x11dfbb(0x17e)](_0x1f080d['ZAqrC'],_0x1f080d[_0x11dfbb(0x166)](TL_NS__genKey,_0x250668,_0x1f080d[_0x11dfbb(0x17d)])),readline[_0x11dfbb(0x17b)]();});
