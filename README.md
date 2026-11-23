![Static Badge](https://img.shields.io/badge/Boolean_Tech_Academy-1565C0?style=for-the-badge)

# Exercise 38/50: Post Form

Building a React application featuring a multi-field form to create and submit new blog posts to an external API using HTTP POST requests.

## Project overview

| Repository | Project | Category | Main Focus | Exercise |
|:--|:--|:--|:--|:--|
| react-post-form | Post Form | Exercise | React, form, state management & POST requests | 38/50 |

## Assignment

Build a React application featuring a multi-field form to create a new blog post and send its data to an API using an HTTP POST request.

The form must collect the following information.

| Field | Type | Description |
|:--|:--|:--|
| `author` | String | The post author's name |
| `title` | String | The post title |
| `body` | String | The post content |
| `public` | Boolean | Whether the post is public (`true`) or a draft (`false`) |

Send the form data to the following endpoint using a POST request:

`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts`

If the request is successful, the API will return the submitted data.

Print the response to the console to verify that all the information has been sent correctly.

#### Bonus challenge

Add and manage an alert to provide users with feedback when the form is submitted.

## Technologies
![JSX](https://img.shields.io/badge/JSX-6A1B9A?style=flat-square&logo=react&logoColor=F7DF1E&labelColor=6A1B9A&color=6A1B9A) 
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) 
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) 
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## What I learned

- Building multi-field forms in React.
- Managing form data and input states.
- Handling form submission events.
- Sending POST requests to external APIs.
- Working with asynchronous JavaScript and API responses.
- Handling boolean values and different input types.
- Providing feedback to users after form submission.

## Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course (Class 152, A.Y. 2025-2026).
