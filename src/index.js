/**
 * const.let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// constで定義したオブジェクトは変更可能
// const val4 = {
//   name: "セイヤ",
//   age: 20,
// };
// val4.name = "聖也"
// val4.address = "seiyaookura"
// console.log(val4)

// constで定義した配列のプロパティは変更可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey")
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "聖也";
// const age = 20;
// //　私の名前は聖也です。年齢は20歳です。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "聖也",
//   age: 20,
// }
// const {name, age} = myProfile
// const message1 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message1);

// const myProfile = ["聖也", 20];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// sayHello("聖也");

/**
 * スプレッド構文...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = [...arr4];
// arr8[0] = 100;
// console.log(arr8)
// console.log(arr4)

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "聖也"];
// for(let  index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name)=>console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=> {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "聖也") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲ないです。';
// }
// console.log(checkSum(1,99));

/**
 * 論理演算子の本当の意味を知ろう
 */
// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// // &&は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
