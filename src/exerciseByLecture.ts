interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  batchId: number;
}

interface IBatch {
  id: number;
  code: string;
  programId: number;
}

interface IProgram {
  id: number;
  name: string;
}

// function program(id: IProgram, name: IProgram) {
//   return `id nya ${id.id}, name nya ${name.name}`;
// }
// const person:

class Program {
  //
  #id: number = 1;
  // extend dari interface
  #listProgram: IProgram[] = [];

  // function
  createProgram(name: string) {
    // kondisi
    // method nya array find
    if (this.#listProgram.find((x) => x.name === name)) {
      // x (elemen).name(interface).name(function)
      // return
      return "Program already exists";
    }

    // constructror
    // push => method array
    this.#listProgram.push({
      // #id++ => bertambah
      id: this.#id++,
      // property
      name,
    });

    // return
    return "Program added";
  }

  // function
  deleteProgram(name: string) {
    // constructor
    // find = method array
    const program = this.#listProgram.find((x) => x.name === name); // x (elemen).name(interface).name(function)
    // !program => bukan termasuk dari program
    if (!program) {
      return "Program does not exists";
    }

    // constructor
    // filter =>method array
    this.#listProgram = this.#listProgram.filter((x) => x.name !== name); // jika name(interface) tidak sama dengan name(param)
    // return
    return "Program removed";
  }

  findAll() {
    return this.#listProgram;
  }
}
const aProgram = new Program();
console.log(aProgram);
// add person / program
aProgram.createProgram("JCWDOL");
aProgram.createProgram("ALUR");

// delete
aProgram.deleteProgram("JCWDOL");

// tampilkan semua
console.log(aProgram.findAll());

class Batch {
  // #private
  #id: number = 1;
  // props mengambil dari interface Ibatch
  // data type array
  #listBatch: IBatch[] = [];

  // private function
  #findProgramById(programId: number, programs: IProgram[]): IProgram | null {
    //programs ambil dari interface IProgram
    if (programs.length < 1) {
      return null;
    }
    // variable
    const findProgramById = programs.find((x) => x.id === programId); //elemen (x).id(interface Iprogram) === programid (param private funct)
    // kondisi
    // jika bukan findProgramById
    if (!findProgramById) {
      // null
      return null;
    }

    // kalo ada return
    return findProgramById;
  }
  // fucntion
  createBatch(programId: number, programs: IProgram[] = []) {
    //programs ambil dari interface IProgram, array
    let code = "";
    // constuctor mengambil dari private funct #findProg
    let lastProgram = this.#findProgramById(programId, programs);
    // kondisi
    // jika bukan lastProgram
    if (!lastProgram) {
      // return
      return "Program doesnt exists";
    }
    // construr dari
    // #listbacthc interface
    let lastBatch = this.#listBatch.filter((x) => x.programId === programId)[this.#listBatch.length - 1]; // e.programid(interface).programId(param)
    // kondisi
    if (lastBatch) {
      // belum ngerti
      code = lastBatch.code.substring(0, 6) + "-" + (Number(lastBatch.code.substring(7)) + 1);
    } else {
      // belum ngerti
      code += lastProgram.name.substring(0, 6) + "-1";
    }
    // construr mengambil dari interface IBatch, array buat jadi object
    // constructror
    // push => method array
    this.#listBatch.push({
      // #id++ => object dalam array bertambah
      id: this.#id++,
      // memanggil dari interface IBatch
      code,
      programId,
    });
  }

  deleteProgram(id: number) {
    const program = this.#listBatch.find((x) => x.id === id);
    if (!program) {
      return "Program gak ada";
    }
    this.#listBatch = this.#listBatch.filter((x) => x.id === id);
    return "program DIhapus";
  }

  // mengecek semua data dari interface IBacth
  findAll() {
    // return data dari class bactch interface IBacth
    return this.#listBatch;
  }
}

class Student {
  // #private props
  #id: number = 1;
  #students: IStudent[] = [];

  #findStudentByBatchId(batchId: number) {
    return this.#students.find((x) => x.batchId === batchId);
  }

  createStudent(firstName: string, lastName: string, age: number, batchId: number, batches: IBatch[]) {
    // kondisi
    if (batches.length > 0) {
      const sameBatch = this.#findStudentByBatchId(batchId);

      if (sameBatch) {
        return "Batch already exist for this student";
      }
      // kalo gada di push
      this.#students.push({
        id: this.#id++,
        firstName,
        lastName,
        age,
        batchId,
      });
    }
  }

  //
  deleteProgram(id: number) {
    // constructor
    const program = this.#students.find((x) => x.id === id);
    if (!program) {
      return "Program gak ada";
    }
    this.#students = this.#students.filter((x) => x.id !== id);
    return "Program Dihapus";
  }

  findAll() {
    // menapilkan isi data dari Interface
    return this.#students;
    // tugas => first, last, age
    // props batch => object
    // property detail nya apa aja
    // return nya akan satu object ketika di find all
  }
}
const newStudent1 = new Student();

// const aStudent = new Student();
// aStudent.createStudent("Tukul", "arwana", 12, 2, );

// PROGRAM
const newProgram = new Program();
newProgram.createProgram("JCWDOL");
console.log(newProgram.findAll());
// KASUS JIKA SAMA
newProgram.createProgram("JCWDOL");
console.log(newProgram.findAll());
newProgram.createProgram("TURU");
console.log(newProgram.findAll());

// BATCH
const newBatch = new Batch();
newBatch.createBatch(1, newProgram.findAll());
// KASUS JIKA SAMA
newBatch.createBatch(1, newProgram.findAll());
console.log(newBatch.findAll());
newBatch.createBatch(1, newProgram.findAll());
console.log(newBatch.findAll());

// STUDENT
const newStudent = new Student();
newStudent.createStudent("Tegar", "Hamid", 10, 2, newBatch.findAll());
console.log(newStudent.findAll());
// KASUS JIKA SAMA
newStudent.createStudent("Tegar", "Hamid", 10, 3, newBatch.findAll());
console.log(newStudent.findAll());

// newProgram.deleteProgram("JCWDOL");
// newBatch.createBatch(1, newProgram.findAll());
// newProgram.createProgram("JCWDOL");
// newProgram.createProgram("JCDMOL");
// newBatch.createBatch(3, newProgram.findAll());

// console.log(newProgram.findAll());
// console.log(newBatch.findAll());

// const newStudent = new Student();
// newStudent.createStudent("budi", "john", 22, 2, newBatch.findAll());
// newStudent.createStudent("budi", "john", 22, 1, newBatch.findAll());
// newStudent.createStudent("budi", "john", 22, 2, newBatch.findAll());

// console.log(newStudent.findAll());
