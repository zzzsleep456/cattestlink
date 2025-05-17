class CatBlocks {
  getInfo() {
    return {
      id: 'catBlocks',
      name: 'Cat Blocks',
      blocks: [
        {
          opcode: 'catMeow',
          blockType: Scratch.BlockType.COMMAND,
          text: 'cat meows',
        },
        {
          opcode: 'catJump',
          blockType: Scratch.BlockType.MOTION,
          text: 'cat jumps [STEPS] steps',
          arguments: {
            STEPS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'catLook',
          blockType: Scratch.BlockType.REPORTER,
          text: 'cat\'s favorite color',
        },
        {
          opcode: 'catQuestion',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is cat hungry?',
        },
        {
          opcode: 'catHat',
          blockType: Scratch.BlockType.HAT,
          text: 'when cat wakes up',
        },
      ],
    };
  }

  catMeow() {
    alert("Meow!");
  }

  catJump(args) {
    console.log(`Cat jumps ${args.STEPS} steps!`);
  }

  catLook() {
    return "orange";
  }

  catQuestion() {
    return true;
  }

  catHat() {
    return true;
  }
}

Scratch.extensions.register(new CatBlocks());
