class Stack {
  constructor() {
    this.top = -1
    this.items = {}
  }
}

describe('sample', () => {

  let stack;

  beforeEach(() => {
    stack = new Stack()
  })

  it('is empty', () => {
    expect(stack.top).toBe(-1)
    expect(stack.items).toEqual({})
  });

  it.todo('is undefined');

  it.todo('success');
})