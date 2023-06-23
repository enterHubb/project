//https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/rJ9uejMLt

//1. "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
function greet(name) {
  console.log(`안녕 내 이름은 ${name}야`);
}
greet('제시카');

/*2. 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 
예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”*/
function intro(name) {
  console.log(`안녕 내 이름은 ${name}야`);
}
intro('에밀리');
intro('할리');

//3. 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오

function introD(name) {
  console.log(`안녕 난 ${name}야. 네 이름은 뭐야?`);
  return name;
}
const NAMES = introD('말룽');
console.log(`안녕 내 이름은 ${NAMES}이야`);

/* 4. meetAt 함수를 만들어주세요.
인자를 세개 받습니다.

첫번째 인자는 년도에 해당하는 숫자입니다.
두번째 인자는 월에 해당하는 숫자입니다.
세번째 인자는 일에 해당하는 숫자입니다.
년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을
리턴 해주세요.
년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을
리턴 해주세요.

ex) 결과 예시
meetAt(2022); // 결과 --> 2022년
meetAt(2032, 3); // 결과 --> "2032년 3월"
meetAt(1987, 10, 28); // 결과 --> "1987/10/28"*/

function meetAt(year, month, date) {
  if (year && month && date) {
    return `${year} / ${month} / ${date}`;
  } else if (year && month) {
    return `${year}년 ${month}월`;
  } else if (year) {
    return `${year}년`;
  }
}
const A = meetAt(2003, 4, 28);
console.log(A);

console.log('===================================================');
/*====================================================================================
findSmallestElement 함수를 구현해 주세요.
findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.
arr 의 값들 중 가장 작은 값을 리턴 해주세요.
만일 arr 가 비어있으면 0을 리턴 해주세요.
예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
이용되는 배열
[100,200,3,0,2,1]*/

function findSmallestElement(arr) {
  //array가 비어있다 -> 길이가 0
  if (arr.length == 0) {
    return 0;
  }

  let result = arr[0];
  for (let q = 1; q < arr.length; q++) {
    if (result > arr[q]) {
      result = arr[q];
    }
  }
  //for문에서 false 값이 나온다? 다시 for문으로 들어가서 q가 끝날때까지 계산
  return result;
}
const B = findSmallestElement([100, 30, 1]);
console.log(B);

console.log('===================================================');

/*돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
출력예 )
12300인 경우 => 50000X0 / 10000X1 / 5000X0 / 1000X2 / 500X0 / 100X3 */

let unit = [50000, 10000, 5000, 1000, 500, 100];

function change(money) {
  for (let i = 0; i < unit.length; i++) {
    let nnum = Math.floor(money / unit[i]);

    money = money - unit[i] * nnum;
    console.log(`${unit[i]}원 X ${nnum}개`);
  }
}
change(237900);
