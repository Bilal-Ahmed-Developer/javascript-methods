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

const icons = '☃★♲';
console.log(icons.codePointAt(1));//ya kaam ata ha symbol aur emoji jesi things ke unicode maloom karna ke liye


