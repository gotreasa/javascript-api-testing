import { Given, When, Then, And, Fusion } from 'jest-cucumber-fusion';
import axios, { HttpStatusCode } from 'axios';

let title;
let userId;
let response;

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

Given(/^a new post with title "(.*)"$/, (inputTitle) => {
  title = inputTitle;
});

And(/^a user ID (\d+)$/, (inputId) => {
  userId = inputId;
});

When('the new post is created', async () => {
  const data = {
    title,
    userId,
  };
  response = await instance.post(`/posts`, data);
});

Then('it has an ID', async () => {});

And(/^the title is "(.*)"$/, (expectedTitle) => {
  expect(response.data.title).toBe(expectedTitle);
});

And(/^the user ID is (\d+)$/, (expectedUserId) => {
  expect(response.data.userId).toBe(expectedUserId);
});

And('the post is created successfully', () => {
  expect(response.status).toBe(HttpStatusCode.Created);
});

Fusion('Posts.feature');
