       //STRING METHODS & PROPERTIES

//aik command hoti ha double // slash jis se apko global find karna ma asani hoti ha
let a = "js is a all rounder is language"
var a_methods = a.length;
var a_methods = a.toLowerCase();//lower case karna keliye;

var a_methods = a.includes("is");// ye search karna ke kaam ata ha ager mil gaya tu true warna false ya case sentsitive ha;

var a_methods = a.toUpperCase();//upper case karna keliye;

var a_methods = a.startsWith("js is");//apka string me jo sabse se pehla word ha uska search karna ka kaam ata ha;

var a_methods = a.endsWith("e");//apka string me jo sabse se pehla word ha uska search karna ka kaam ata ha;

var a_methods = a.search("e");// ya bhi includes ki tarah kaam karta but ya boolean ki jagah per index value return karta ha variable kis position per ha aur ya space count nhi karta ha aur kuch na milna per ya return karta -1 ;

var a_methods = a.match("e");// ya bhi includes aur search ki tarah ha isko ager koi word mil jai tu ya uska array bana deta ha

var a_methods = a.indexOf("e");//ya bhi search ki tarah ki kaam karta ha ya hamain index return karaga;

var a_methods = a.lastIndexOf("e");// ya peeche dekhna shuru karta ha aur phir value return karta ha;

var a_methods = a.replace(/is/g,'are');// aik replace function hota ha ju kisi word ku replace karna ka kaam ata ha aur isma 2parameters hota hain aik jis ko replace karna hu aur dosra jis se replace karna hu

var a_methods = a.trim();//ya trim method left aur right ke space ko khatam karna ke liye istemaal hota ha ;

var a_methods = a.charAt("4");// is method me ap aik position define karta aur us position per jo bhi value hogi ya use return kardega aur ya space ko count karta ha

var a_methods = a.charCodeAt(1);// is me hum kisi alphabet ka sky code maloom karan hoto istemal karta hain aur isma hum value ya number likata hain na ka alphabet aur khali jaga ya space per ya return karta ha 32value jo ka by default ha;

var a_methods = String.fromCharCode(88);// iska data types se lana dena nhi balka ya sirf jo alphabat ki values return karta ha is ma hum values deta hain aur ya us value ka alphabet return karta ha;

var test = " hello "
var test1 = " world "

var a_methods = a.concat(test,test1);// ya function sirf kisi merge karna ka kaam ata ha

var a_methods = a.split(" ")//ya split is ka kaam ha torna aur ya uska result aik array ma covert kar ke data ha aur ap space bhi aur koi word bhi usko nikal kar ke us jaga per space deta ha;

var a_methods = a.repeat(3);//repeat ko ap jo word do ga aur jitna number doga wo usko itni baar print karadega

var a_methods = a.slice(3,8);//ya string humain beech ma se koi word uthana hu hum is ko use karta hain ager hum is ma aik parameter pass kardain tu ya iske baad se sab print kara dega

// var a_methods = a.substr(3,3);// ya string hum jo value dete hain ya wahin se shuru ker data hai

// console.log(a_methods)

// const str = "Bilal,Ahmed,car";

// const strIter = str[Symbol.iterator]();
// console.log(strIter.next().value)
// console.log(strIter.next().value)

// const myString = "Table of Contents";
// console.log(myString.anchor("contents_anchor"))//ya html ke anchor element banata hai

// var s = "bilal, ahemd, computer"
// console.log(s.at(3,2))//ya bhi slice aur charAt ki tarah hota ha 

// const worldString = "Hello, world";
// console.log(worldString.small()); // <small>Hello, world</small>
// console.log(worldString.big()); // <big>Hello, world</big>
// console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>

// const worldString = "Hello, world";

// console.log(worldString.blink()); // <blink>Hello, world</blink>
// console.log(worldString.bold()); // <b>Hello, world</b>
// console.log(worldString.italics()); // <i>Hello, world</i>
// console.log(worldString.strike()); // <strike>Hello, world</strike>
// console.log(worldString.bold()); // <b>Hello, world</b>

// const anyString = 'Brave new world';
// console.log(`The character at index 0   is '${anyString.charAt()}'`);
// // No index was provided, used 0 as default

// console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
// console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
// console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
// console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
// console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
// console.log(`The character at index 999 is '${anyString.charAt(999)}'`);

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const index = 4;
// console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);//charCodeAt per ap jo value denge ya is jagah per jaker uska  UTF-16 ka aur iska code 0-65535 hota ha code dega 

// const icons = '☃★♲';
// console.log(icons.codePointAt(1));//ya kaam ata ha symbol aur emoji jesi things ke unicode maloom karna ke liye

// slice method
// var text = "Apple, Banana, Kiwi";
// var part = text.slice(7, 13); //slice method space ko bhi count karta ha aur ya 1 se shuru hota ha nake 0 se
// console.log(part);
// var text = "Apple, Banana, Kiwi";
// var part = text.slice(7); //aik parameter ager ap positive de raha hu jese 7 tu shuru ke 7index ko chor ker 7 se leker akhir tak index ko print kardega 
// console.log(part);
// var text = "Apple, Banana, Kiwi";
// var part = text.slice(-12); //ager ap ne negative ma value dali ha tu wo end se shuru aur last character -1 hoga aur is se pehle -2 isi tarah -12 tak ai ga aur phir -1 se leker -12 tak ki values ko print karadega
// var text = "Apple, Banana, Kiwi";
// var part = text.slice(-12, -6); //ab ya pehle -12 se -6 tak value print karaiga aur Banana print hoga
// var text = "Apple, Banana, Kiwi";
// var part = text.slice(7, 13)
// console.log(part);

   // Sub str
// var str = "Apple, Banana, Kiwi";
// var part = str.substr(7, 6);
// console.log(part)// ya bhi slice ki tarah hai bas slice aur isma ya difference ha ke ye 0 se shuru hota ha aur jo value di jai ya usi value se shuru hota jese Car ko three character me tora aur substr ma dain tu ya 1 a 2 denge tu ya r dega aur ya ju second  value ap doga wo 1 se start hogi na ke 8 se
// var str = "Apple, Banana, Kiwi";
// var part = str.substr(7);//aik parameter dena per ya bilkul slice ki tarah kaam karega
// console.log(part)  
// var str = "Apple, Banana, Kiwi";
// var part = str.substr(-4);// aur negative  value dene per ya bilkul slice ki hi tarah hi kaam keraga
// console.log(part)

// Substring
// var str = "Apple, Banana, Kiwi";
// var part = str.substring(7, 6);//ya bhi slice ki tarah hai bas ya 0 se shuru karta ha
// console.log(part)

//   replace()
// var text = "Please visit Microsoft!";
// var newText = text.replace("Microsoft", "W3Schools");
// console.log(text);//ya replace karna ka kaam ata ha kisi value ku aur ya pehle string change nhi karta balka usi ke uper new layeer lagata ha aur ya sirf pehle hi vala ko replace kerega naka sabko 
// var text = "Please visit Microsoft!";
// var newText = text.replace("/MICROSOFT/i", "W3Schools");
// console.log("this is insensitive",text);// aur ya case sensitive hota ha per ap isko insensitive bhi karsakta hu regular expression ki cheez laga ke /MICROSOFT/i ko ab ya insensitive hogia
// var text = "Please visit Microsoft and intership in Microsoft!";
// var newText = text.replace(/Microsoft/g, "W3Schools");
// console.log("this is global",text)//aur ager iska sath /microsoft/g laga dain tu global ban jai ga jahan bhi hoga wahan per lag jai ga.
// var text = "Please visit Microsoft!.Microsoft is the biggest tech giant.Microsoft and";
// var converstion=text.replaceAll(/Microsoft/g, "W3Schools");
// console.log(converstion)//ya method ager ap text kitna hi word kiun na hun ya sab ku change kerdega

// toUpperCase()
// var text1 = "Hello World!";
// var text2 = text1.toUpperCase();//user for any text to upperCase 
// var text3 = text1.toLowerCase();//user for any text to lowerCase
// console.log(text2,text3);

// // Concat()
// var text = "hello" + ' ' +" world ";//ya method kisi bhi do elemnt ko jorna ke kaam ata ha
// var text3 = "hello" + ' ' +" Bilal";
// var tex2 = text.concat(text3)
// console.log(tex2)

// // trim()
// var text = "    hello world    "
// console.log(text.trim());//ya aga aur peeche ke sata space ko khatam kar deta ha
// var text = "    hello world    Bilal"
// console.log(text.trimStart());//shurur me jo space hoga ya usko khatam kerdega
// var text = "hello world Bilal    "
// console.log(text);//ya akhir ke space ko khatam kar dega

// pad()
// var text = "5"
// console.log(text.padStart(4,"b"));//ya new method ha isma jahan ap zororat para wahan se start se ya end value barha lai firt parameter ma kitna barahana aur dosra ma kia barhanaha
// var num= 5;
// var convertnumintostring=num.toString()
// console.log(convertnumintostring.padStart(4,"9"))
// var num= 5;
// var convertnumintostring=num.toString()
// console.log(convertnumintostring.padEnd(4,"9"))//isi tarah end ma lagana hu tu padEnd use hoga

// There are 3 methods for extracting string characters:
// charAt(position)
// charCodeAt(position)
// Property access [ ]

// charAt()
// var t = "Hello Bilal";
// var t1 = t.charAt(5);// isma ap sirf index value dete hain aur wo apko uska aplphabate deta ha
// console.log(t1);

// charCodeAt()
// var t = "Hello Bilal";
// var t1 = t.charCodeAt(6)//ya hamain alphabet ki unicode-16 batata ha kiu ke computer hamari language nhi samjtha wo sirf 0aur1 samajtha ha tu unicode har alphabat ki aik unique identity hoti ju phir binary code ma change hoker display hoti ha aur hum usi ko dekhta hain
// console.log(t1);

// property access
// var t = "bilal ahmed"
// var t2 = t[1];// ya bus apka alpahbet bata aur hum uski value deta hain
// console.log(t2)

// split()
// let baad = "bilal ahmed"
// let at = baad.split("|");
// console.log(at)

// JavaScript Search Methods
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()



// var b = "bilal ahmed hello";
// var b_methods=b.indexOf("ahmed")// jo word jahan se shuru horaha hota ha ya uski value return karta ha
// console.log(b_methods);
// var b = "bilal ahmed hello ahmed  world";
// var b_methods=b.indexOf("ahmed",12)// ager ap second parameter denge tu jo ap value denge wo wahan se dekhna shuru karega
// console.log(b_methods);
// var b_methods = b.lastIndexOf('ahmed')
// console.log(b_methods)

// search()
// var b_methods = b.search('ahmed')// ya dono bilkul same bas ya regular exprression use karti ha aur index nhi karti 
// console.log(b_methods);

// var b = "bilal ahemd hello world bilal ahmed"
// var b_methods = b.matchAll("bi")// ya word match karke uski index aik array ma deta ha aur ya "g" aur "i" laga wa hain iska matlab g batlab global i ka matlab caseinsensitive
// console.log(b_methods);


