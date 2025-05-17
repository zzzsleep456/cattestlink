class CatBlocks {
  getInfo() {
    return {
      id: 'catBlocks',
      name: 'Cat Blocks',
      blocks: [
        {
          opcode: 'meow',
          blockType: Scratch.BlockType.COMMAND,
          text: 'cat meows',
        },
        {
          opcode: 'jump',
          blockType: Scratch.BlockType.COMMAND,
          text: 'cat jumps [STEPS] steps',
          arguments: {
            STEPS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'favColor',
          blockType: Scratch.BlockType.REPORTER,
          text: 'cat\'s favorite color',
        },
        {
          opcode: 'isHungry',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is cat hungry?',
        }
      ],
    };
  }

  meow() {
    alert('Meow!');
  }

  jump(args) {
    console.log(`Cat jumps ${args.STEPS} steps`);
  }

  favColor() {
    return 'orange';
  }

  isHungry() {
    return true;
  }
}

Scratch.extensions.register(new CatBlocks());
