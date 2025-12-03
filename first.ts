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

interface AddInterface {
    (x: number, y: number): number;
}
const add4: AddInterface = (x, y) => x + y;

// 객체
const obj: { lat: number, lon: number } = { lat: 37, lon: 127 };

// 배열
const arr: string[] = ['1', '2', '3'];
const arr2: Array<number> = [1, 2, 3]; // 제네릭 배열
const arr3: [number, number, string] = [1, 2, 'hello']; // 튜플