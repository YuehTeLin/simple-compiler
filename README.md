# simple-compiler

#### By Yueh-Te

Created as a project for CISC-603-50-B.

### Compiler Checklist

- [x] Parser
- [x] Finished Compiler

---

## Built With

* [PEG.js] - A pure JavaScirpt parser generator.

## Getting Started

Fork or download the content of the repository to your computer.

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]

### Installing

- Install the dependencies:

```
npm install
```

- And run:

```
node compiler.js
```
- Please make sure you are in the correct folder.

### Running

Once ran, you can input arithmetic statement:

    $ node compiler.js
    > 13 + 2/  2 * 4
    17
    >     (  3*3) / 3  +    1
    2

Or `quit` to quit the program:

    $ node compiler.js
    > quit
    quit the program.

## License

Work in progress...

[node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/get-npm
[PEG.js]: https://pegjs.org/documentation
