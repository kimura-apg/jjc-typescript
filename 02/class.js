/**
 * クラス
 */
class People {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log("Hello, my name is " + this.name);
	}
}

// newキーワードを使用することで、クラスのインスタンスを作成できます
const people1 = new People("John", 30);

console.log(people1.name);
console.log(people1.age);

people1.greet();

// クラスの継承
class Student extends People {
	constructor(name, age, studentId) {
		// superキーワードを使用して、親クラスのコンストラクタを呼び出せます
		super(name, age);
		this.studentId = studentId;
	}

	study() {
		console.log(this.name + " is studying.");
	}
}

const student1 = new Student("Alice", 20, "S12345");

console.log(student1.name);
console.log(student1.age);
console.log(student1.studentId);

// 継承元の関数
student1.greet();
// Studentクラスの関数
student1.study();
