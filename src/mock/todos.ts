import {Todo} from "../entity/todo";

export const todos: Todo[] = [
  {
    id: 1,
    task: 'Einkaufen gehen',
    done: false,
    user: {
      id: 1,
      email: 'user@training.de'
    }
  },
  {
    id: 2,
    task: 'Abwaschen',
    done: true,
    user: {
      id: 1,
      email: 'user@training.de'
    }
  },
  {
    id: 1,
    task: 'Staubsaugen',
    done: false,
    user: {
      id: 2,
      email: 'admin@training.de'
    }
  }
];
