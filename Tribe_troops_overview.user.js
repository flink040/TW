// ==UserScript==
// @name         Tribe troops overview
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Creates a tribal overview of all available troops, regardless of bow or non bow World
// @author       Flink
// @match        https://*.die-staemme.de/game.php?village=*&screen=ally&mode=members_troops
// ==/UserScript==
//-------------------------------------------------
// 1.6: The table for the troop display is now dynamic, so that archer and mounted archer are only displayed if they are active in the world
//-------------------------------------------------
(function(_0x13b044,_0x484b67){const _0x228c6a=_0x4015,_0x2f92ce=_0x13b044();while(!![]){try{const _0x2ffbd8=parseInt(_0x228c6a(0xce))/0x1*(-parseInt(_0x228c6a(0xfa))/0x2)+parseInt(_0x228c6a(0xc9))/0x3+parseInt(_0x228c6a(0xf8))/0x4+-parseInt(_0x228c6a(0xe4))/0x5*(parseInt(_0x228c6a(0xfb))/0x6)+-parseInt(_0x228c6a(0xbb))/0x7*(-parseInt(_0x228c6a(0xb8))/0x8)+parseInt(_0x228c6a(0xc8))/0x9+-parseInt(_0x228c6a(0xcb))/0xa;if(_0x2ffbd8===_0x484b67)break;else _0x2f92ce['push'](_0x2f92ce['shift']());}catch(_0x549177){_0x2f92ce['push'](_0x2f92ce['shift']());}}}(_0x2ce5,0x44137),(function(){'use strict';const _0x2369b2=_0x4015;var _0x170d9b=window;typeof unsafeWindow!=_0x2369b2(0xfe)&&(_0x170d9b=unsafeWindow);document[_0x2369b2(0xed)]=function(){const _0x7690ee=_0x2369b2;_0x3c2298();let _0x535b3b=0x0;_0x28a751[_0x7690ee(0xe3)](function(_0x5491f8){setTimeout(()=>{_0xb21d49(_0x5491f8);},_0x535b3b),_0x535b3b+=0x64;});};var _0x28a751=[];function _0x3c2298(){const _0x8de349=_0x2369b2;$(_0x8de349(0xcd))[_0x8de349(0x10c)](function(){const _0x268292=_0x8de349;_0x28a751[_0x268292(0xc6)](this[_0x268292(0x117)]);}),_0x28a751[_0x8de349(0x10d)]();}function _0x22d06a(_0xb75a0d){const _0x12b902=_0x2369b2;return _0xb75a0d[_0x12b902(0xf9)]()[_0x12b902(0xdc)](/\B(?=(\d{3})+(?!\d))/g,'.');}var _0x343320=0x0,_0xc6cab=0x0,_0xafa007=0x0;let _0x3cf676=_0x170d9b[_0x2369b2(0xeb)][_0x2369b2(0x114)];var _0x238136=[{'name':_0x2369b2(0xd9),'img':_0x2369b2(0xd1),'title':_0x2369b2(0xb5)},{'name':_0x2369b2(0xb7),'img':_0x2369b2(0x104),'title':'Schwertkämpfer'},{'name':_0x2369b2(0xcf),'img':_0x2369b2(0x10f),'title':_0x2369b2(0xf4)},{'name':_0x2369b2(0xec),'img':_0x2369b2(0xe6),'title':_0x2369b2(0x112)},{'name':_0x2369b2(0xb6),'img':'https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_spy.png','title':_0x2369b2(0xbc)},{'name':_0x2369b2(0xc4),'img':'https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_light.png','title':_0x2369b2(0xf3)},{'name':_0x2369b2(0x106),'img':_0x2369b2(0xf6),'title':_0x2369b2(0xdf)},{'name':_0x2369b2(0x10b),'img':'https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_heavy.png','title':_0x2369b2(0x111)},{'name':_0x2369b2(0xf1),'img':_0x2369b2(0xc7),'title':_0x2369b2(0xd4)},{'name':_0x2369b2(0xbf),'img':_0x2369b2(0xb4),'title':'Katapult'},{'name':_0x2369b2(0xe9),'img':'https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_snob.png','title':_0x2369b2(0x108)}],_0x29686d=_0x238136['filter'](_0x44c0b0=>_0x3cf676[_0x2369b2(0xd3)](_0x44c0b0['name'])),_0x2e505b='',_0x50a401='';_0x29686d['forEach'](_0x1687d2=>{const _0xaa81a6=_0x2369b2;_0x2e505b+=_0xaa81a6(0x100)+_0x1687d2[_0xaa81a6(0xd7)]+'\x22><img\x20src=\x22'+_0x1687d2[_0xaa81a6(0xd5)]+_0xaa81a6(0x113)+_0x1687d2[_0xaa81a6(0x110)]+_0xaa81a6(0xc2),_0x50a401+=_0xaa81a6(0xc1)+_0x1687d2[_0xaa81a6(0xd7)]+'table\x22></th>';}),_0x3cf676[_0x2369b2(0xe3)](_0xc63d07=>{let _0x3124ce='insg'+_0xc63d07;window[_0x3124ce]=0x0;}),_0x3cf676['forEach'](_0x5b5c25=>{const _0x361d5f=_0x2369b2;let _0x3177eb=_0x361d5f(0xc5)+_0x5b5c25;});function _0x1aeded(_0x53f3d2){const _0x333404=_0x2369b2;let _0x28e07d=$(_0x333404(0xdd))[0x0],_0x120644=_0x28e07d[_0x333404(0xca)](-0x1);_0x343320++;let _0x3ab42c=Object[_0x333404(0xef)](_0x53f3d2)[0x0],_0x13c2f0=_0x120644['insertCell'](0x0);_0x13c2f0[_0x333404(0xe5)]['textAlign']=_0x333404(0xf0),_0x13c2f0[_0x333404(0xd6)]=_0x3ab42c,_0x29686d['forEach']((_0x29cc99,_0x19ecb7)=>{const _0x3d87c1=_0x333404;let _0x5b98d8='insg'+_0x29cc99['name'],_0x457877=parseInt(_0x53f3d2[_0x3ab42c][_0x29cc99['name']])||0x0,_0x5e8129=_0x120644[_0x3d87c1(0xe7)](_0x19ecb7+0x1);_0x5e8129[_0x3d87c1(0xe5)]['textAlign']=_0x3d87c1(0xf0),_0x5e8129[_0x3d87c1(0xd6)]=_0x22d06a(_0x457877),window[_0x5b98d8]+=_0x457877,document['getElementById'](_0x5b98d8+'table')[_0x3d87c1(0xd6)]=_0x22d06a(window[_0x5b98d8]);});let _0x3272d4=_0x120644[_0x333404(0xe7)](_0x29686d[_0x333404(0xd8)]+0x1);_0x3272d4[_0x333404(0xe5)][_0x333404(0xc3)]=_0x333404(0xf0);let _0x3538a1=parseInt(_0x53f3d2[_0x3ab42c][_0x333404(0xe0)])||0x0;_0x3272d4['innerHTML']=_0x22d06a(_0x3538a1),_0xc6cab+=_0x3538a1,document[_0x333404(0x109)](_0x333404(0xe2))[_0x333404(0xd6)]=_0x22d06a(_0xc6cab);let _0x34d763=_0x120644[_0x333404(0xe7)](_0x29686d[_0x333404(0xd8)]+0x2);_0x34d763[_0x333404(0xe5)]['textAlign']=_0x333404(0xf0);let _0x471d0c=parseInt(_0x53f3d2[_0x3ab42c][_0x333404(0xfd)])||0x0;_0x34d763[_0x333404(0xd6)]=_0x22d06a(_0x471d0c),_0xafa007+=_0x471d0c,document[_0x333404(0x109)]('insgincstable')['innerHTML']=_0x22d06a(_0xafa007);}function _0xb21d49(_0xb3c83c){const _0x10ec55=_0x2369b2;let _0x33ea90={};$['ajax']({'url':window[_0x10ec55(0xbd)]['origin']+_0x10ec55(0xf5)+_0xb3c83c+_0x10ec55(0xdb)+game_data['village']['id'],'type':_0x10ec55(0xee),'headers':{'Accept':_0x10ec55(0xcc),'TribalWars-Ajax':0x1}})[_0x10ec55(0xf7)](function(_0x210875){const _0xc08163=_0x10ec55,_0x1888ab=new DOMParser();let _0x380129=_0x1888ab[_0xc08163(0xea)](_0x210875,_0xc08163(0xc0)),_0x1dd684=_0x380129[_0xc08163(0x105)](_0xc08163(0x101))[0x0],_0x2f2381=_0x1dd684[_0x1dd684[_0xc08163(0xe8)]][_0xc08163(0xba)]['trim'](),_0x52cd21=_0x380129[_0xc08163(0x105)](_0xc08163(0x102))[0x0],_0x5ab7b5=_0x38cdf6(_0x52cd21);_0x33ea90[_0x2f2381]=_0x5ab7b5,_0x1aeded(_0x33ea90);});}function _0x38cdf6(_0x25688e){const _0x15d094=_0x2369b2;let _0x5506e8={};for(let _0x5a15a1=0x1;_0x5a15a1<_0x25688e[_0x15d094(0x10a)][0x0][_0x15d094(0xd2)]['length'];_0x5a15a1++){let _0x1f5f4f=_0x25688e['rows'][0x0][_0x15d094(0xd2)][_0x5a15a1][_0x15d094(0xff)]['getAttribute'](_0x15d094(0xe1)),_0x2b2b7f=_0x1f5f4f[_0x15d094(0xda)](_0x1f5f4f[_0x15d094(0xb9)]('/')+0x1)[_0x15d094(0xdc)](_0x15d094(0x116),'')[_0x15d094(0xdc)](_0x15d094(0xde),'')[_0x15d094(0x103)]('.')[0x0],_0x30147b=0x0;for(let _0x5f397e=0x1;_0x5f397e<_0x25688e[_0x15d094(0x10a)][_0x15d094(0xd8)];_0x5f397e++){_0x30147b+=parseInt(_0x25688e['rows'][_0x5f397e][_0x15d094(0xd2)][_0x5a15a1][_0x15d094(0xba)]['trim']()[_0x15d094(0xdc)]('.',''));}_0x5506e8[_0x2b2b7f]=_0x30147b||'0';}return _0x5506e8;}var _0x551be8=0x0;$(_0x2369b2(0xfc))[_0x2369b2(0x10c)](function(){_0x551be8+=parseFloat($(this)['text']());}),$(_0x2369b2(0xf2))[_0x2369b2(0xd0)](_0x551be8);let _0x51eeef=$(_0x2369b2(0x115)),_0x3ed1ce=_0x2369b2(0x107)+_0x2e505b+_0x2369b2(0x10e)+_0x50a401+_0x2369b2(0xbe);_0x51eeef['append']($(_0x3ed1ce));}()));function _0x4015(_0x5e619b,_0x4aefac){const _0x2ce5cd=_0x2ce5();return _0x4015=function(_0x40152a,_0x5e2137){_0x40152a=_0x40152a-0xb4;let _0x42072f=_0x2ce5cd[_0x40152a];return _0x42072f;},_0x4015(_0x5e619b,_0x4aefac);}function _0x2ce5(){const _0x583f1e=['substring','&village=','replace','#trooptable\x20>\x20tbody','(1)','Berittene\x20Bogenschützen','commands_outgoing','src','insgcommands_outgoingtable','forEach','15cobRze','style','https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_archer.png','insertCell','selectedIndex','snob','parseFromString','game_data','archer','countTroops','GET','keys','center','ram','#sumall','Leichte\x20Kavallerie','Axtkämpfer','/game.php?screen=ally&mode=members_troops&player_id=','https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_marcher.png','done','564348zIOTjp','toString','318270yUSoDs','455778ncSBWu','#trooptable','att','undefined','firstElementChild','<th\x20style=\x22text-align:center\x22\x20width=\x2235\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22unit_link\x22\x20data-unit=\x22','input-nicer','w100','split','https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_sword.png','getElementsByClassName','marcher','<div\x20id=\x22affeaufskateboard\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<marquee\x20behavior=\x22scroll\x22\x20loop=\x221\x22\x20scrollamount=\x2215\x22\x20direction=\x22left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><img\x20id=\x22affebild\x22\x20src=\x22https://login.steknadel.de/img/affeaufskateboard.png\x22/></center></marquee></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-default\x20float_right\x22\x20onclick=\x22countTroops()\x22\x20type=\x22submit\x22\x20value=\x22Truppen\x20zählen\x22>Truppen\x20z&auml;hlen</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5>Stammestruppen<span\x20id=\x22troops\x22></span></span></h5>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</br>\x0a<table\x20id=\x22trooptable\x22\x20style=\x22margin-bottom:\x2010px\x22\x20class=\x22vis\x22\x20width=\x22100%\x22>\x0a\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20id=\x22tablehead\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:center\x22\x20style=\x22font-weight:bold\x22\x20width=\x22250\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a>Spieler</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','Adelsgeschlecht','getElementById','rows','heavy','each','shift','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:center\x22\x20width=\x2235\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22unit_link\x22\x20data-unit=\x22knight\x22><img\x20src=\x22https://dsde.innogamescdn.com/asset/e9773236/graphic/icons/commands_outgoing.png\x22\x20title=\x22Befehle\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:center\x22\x20width=\x2235\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22unit_link\x22\x20data-unit=\x22incs\x22><img\x20src=\x22https://dsde.innogamescdn.com/asset/e9773236/graphic/unit/att.png\x22\x20title=\x22Incs\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:center\x22\x20width=\x2270\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22unit_link\x22\x20data-unit=\x22Offdeff\x22\x20title=\x22Off-Deff\x20Verhältnis\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://dsde.innogamescdn.com/asset/f29c689e/graphic/command/attack_large.png\x22>\x20|\x20<img\x20src=\x22https://dsde.innogamescdn.com/asset/f29c689e/graphic/command/support.png\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20<tr\x20id=\x22membertroopstable\x22>\x0a\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20id=\x22summall\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:center\x22\x20width=\x22250\x22><b>Insgesamt:</b></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_axe.png','title','Schwere\x20Kavallerie','Bogen','\x22\x20title=\x22','units','#ally_content','unit_','value','https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_catapult.png','Speerträger','spy','sword','112XTAeYw','lastIndexOf','textContent','101129RgBKzc','Späher','location','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:center\x22\x20width=\x2235\x22\x20id=\x22insgcommands_outgoingtable\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:center\x22\x20width=\x2235\x22\x20id=\x22insgincstable\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:center\x22\x20width=\x2250\x22\x20id=\x22offdeffinsg\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a</table>\x0a','catapult','text/html','<th\x20style=\x22text-align:center\x22\x20width=\x2235\x22\x20id=\x22insg','\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</th>','textAlign','light','insg','push','https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_ram.png','1521360FgFjxq','1334793XDAMRY','insertRow','2914530BvpPad','application/json,\x20text/javascript,\x20*/*;\x20q=0.01','.input-nicer\x20>\x20option','1mUCtNm','axe','text','https://dsen.innogamescdn.com/asset/10d39b3d/graphic/unit/unit_spear.png','cells','includes','Rammböcke','img','innerHTML','name','length','spear'];_0x2ce5=function(){return _0x583f1e;};return _0x2ce5();}