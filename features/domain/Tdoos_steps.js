import { Given, When, Then, Fusion } from 'jest-cucumber-fusion';
import axios from 'axios';

let todoId;
let response;

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const isTrue = (input) => input === 'true';

Given(/^A todo with ID (\d)$/, (id) => {
  todoId = id;
});

When('the record is retrieved', async () => {
  response = await instance.get(`/todos/${todoId}`);
});

Then(/^the record has the title (.*)$/, (expectedTitle) => {
  expect(response.data.title).toBe(expectedTitle);
});

Then(
  /^the record has the completed status (.*)$/,
  (expectedCompletedStatus) => {
    expect(response.data.completed).toBe(isTrue(expectedCompletedStatus));
  },
);

Then(/^the record has the ID (\d)$/, (expectedId) => {
  expect(response.data.id).toBe(Number(expectedId));
});

Fusion('Todos.feature');
