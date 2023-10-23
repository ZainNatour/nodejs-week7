let a: boolean = false;
console.log(a);
let b: number = 56;
console.log(b);
let c: string = "string";
console.log(c);
let d: bigint = 10n;
console.log(d);
console.log(Number.MAX_SAFE_INTEGER);

let e: number[] = [1, 2, 3, 4, 5];
let f: Array<number> = [1, 2, 3, 4, 6, 7, 8];

// Tubles

let g: [string, number] = ["string", 3];
let h: [number] = [1];

// Objects.
let i: { name: string; age: number };
i = { name: "John Doe", age: 30 };
console.log(i);

// optional property.
let j: { prop1: string; prop2?: number };
j = { prop1: "Hello" };

// random object
let k: { prop1: string; prop2?: number; [key: string]: any };
k = { prop1: "zain", prop2: 2, speciality: "web development" };

// enums
// Allows you to define a set of constants that will never change.
// Provides numaric and string based enums.
enum Direction {
  up = 1,
  down,
  left,
  right,
};
console.log(Direction.up,Direction.right);

// string based enums
enum Animals{
    dog:"dog",
    cat:"cat",
    bird:"bird"
};

// interface
interface Student{
    name:string,
    age:number,
}
let l:Student={name:"zain",age:34};

// classes

class C{
    constructor(public name:string){
        this.name=name;
        }
}
console.log()
