const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = 'any'; // 모든 타입 가능
const g: true = true; // 고정값


// 함수
function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;

type AddType = (x: number, y: number) => number;
const add3: AddType = (x, y) => x + y;

function add4(x: number, y: number): number;
function add4(x, y) {
  return x + y;
}

interface AddInterface {
    (x: number, y: number): number;
}
const add5: AddInterface = (x, y) => x + y;


// 객체
const obj: { lat: number, lon: number } = { lat: 37, lon: 127 };


// 배열
const arr: string[] = ['1', '2', '3'];
const arr2: Array<number> = [1, 2, 3]; // 제네릭 배열
const arr3: [number, number, string] = [1, 2, 'hello']; // 튜플


// never
const array = []; // 빈배열: never 타입 -> 변수 할당 불가능 -> type 반드시 추가해야함
array.push('hello');


// !
const header = document.querySelector('header')!; // 값이 있음을 확신
header.innerHTML = ' hello';

const header2 = document.querySelector('header'); // null 또는 HTMLElement -> 더 안전한 방법
if( header2 ) {
  header2.innerHTML = ' hello';
}


// enum : 여러 변수를 하나의 그룹으로 묶고 싶을 때
const enum EDirection { // js에 안남음
  Up = 'up',
  Down = 0,
}
const direction = EDirection.Up;
function walk(dir: EDirection) {}

const ODirection = { // 객체 방식: js에 남음
  Up: 'up',
  Down: 0,
} as const;
const direction2 = ODirection.Up;
type ODrectionType = typeof ODirection[keyof typeof ODirection];
function walk2(dir: ODrectionType) {}


// typeof : 객체의 키를 추출 (값을 타입으로 변환)
const keyArray = { a: '123', b: '456', c: '789' } as const;
type Key = keyof typeof keyArray; // 'a' | 'b' | 'c'
type Value = typeof keyArray[keyof typeof keyArray]; // '123' | '456' | '789'


// union(|): 또는, 두 타입 중 하나만 만족하는 타입 추출
function unionFunc(x: string | number, y: string | number): string | number {
  return x + y;
}
const unionResult: string | number = unionFunc(1, 2); // 타입 불일치 에러 가능성 있음


// intersection(&): 두 타입 모두 만족하는 타입 추출
function intersectionFunc(x: string & number, y: string & number): string & number {
  return x + y;
}


// type 상속, interface extends
type Animal = { breath: true };
type Mammal = Animal & { milk: true };
type Human = Mammal & { language: true };

const Sim1: Human = { breath: true, milk: true, language: true };

interface AnimalInterface {
  breath: true
}
interface MammalInterface extends AnimalInterface {
  milk: true
}
interface HumanInterface extends MammalInterface {
  language: true
}
const Sim2: HumanInterface = { breath: true, milk: true, language: true };


// void: return 값이 없는 함수 타입
function voidFunc(callback: () => void): void { // return 값이 없어야한다
}
voidFunc(() => {
  return '3';
});

interface voidInterface { // return 값이 없는 함수 타입
  talk: () => void;
}
const voidObj: voidInterface = {
  talk: () => {
    return 'hello';
  }
}