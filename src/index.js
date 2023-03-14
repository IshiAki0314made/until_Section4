// const val4 = {
//   name:"じゃけ",
//   age:28
// };

// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/*
分割代入
*/

//冗長コード
// const myProfile = {
//   name : "じゃけ",
//   age : 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const {name , age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ["しゃけ", 29];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name_1, age_1] = myProfile;
// const message4 = `名前は${name_1}です。年は${age_1}です`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは。${name}さん`);
// sayHello();

/**
 * スプレッド構文
 */

//配列の展開
const arr = [1, 2];
//  console.log(arr);
//  console.log(...arr)

// const arr2 = [1,2,3,4,5,];
// const[num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * map や filterを使った配列の処理
 */

//通常の書き方
// const nameArr = ["田中", "山田", "鮭"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index+1}番目は${nameArr[index]}さんです`);
// }

//map
// nameArr.map((name) => console.log(`${name}です`));

//filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

//mapを用いて新しい配列を作成する。
// const newNameArr = nameArr.map((name) => {
//   if (name === "鮭") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//if else を１行で
//ある条件　? 条件がTrueの時　: 条件がFalseの時;
// const val1 = 1 < 0 ? 'TRUEです' : 'Flaseです';
// console.log(val1);

// const num = 1300;

// const formattedNum = typeof num === 'number' ? num.toLocaleString(): '数値を入力して下さい';
// console.log(formattedNum);

//return部分に三項演算子を使用するパターン
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
// };
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう
 */

//一般的な使い方
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はTRUEになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もTRUEになります");
// }

//論理演算子の意味の理解

//　「||」は、左側がfalseなら、右側を返す。左側がtrueなら左側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

//「$$」は左側がtrueなら右側を返す。
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

const flag1 = true;
const flag2 = false;

if (flag1 && flag2) {
  console.log("1も2もTRUEになります");
}
//flag1がtrueでもflag2がfalseのため通らない
//flag1がfalseならflag1のfalseを返すため通らない
//結果的に両方trueでないと処理は通らない。
