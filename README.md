# Express App with Comments, Posts, and Users

This project is a Node.js and Express application designed to manage comments, posts, and users. It leverages MongoDB for data storage and provides RESTful APIs to perform CRUD operations on each entity.

## Description

The application consists of three main components:

- **Comments**: Allows users to create, read, update, and delete comments associated with posts. Each comment includes content, user reference, and post reference.
- **Posts**: Enables creating, reading, updating, and deleting posts. Each post includes a title, content (limited to 600 characters), and user reference.
- **Users**: Manages user accounts with functionalities to create, read, update, and delete user profiles. Each user profile includes a name and email, with validation to prevent duplicate emails.

The application is built with modern web technologies, following best practices for API development, and includes robust error handling and validation.

## Features

- **RESTful API Endpoints** for managing comments, posts, and users.
- **Data Validation** to ensure integrity and prevent invalid data.
- **Error Handling** to provide meaningful error messages and status codes.

## API Routes

### Comments

- Retrieve all comments: GET /comments - Fetches a list of all comments.
- Retrieve a specific comment by ID: GET /comments/:commentId - Fetches a single comment by its ID.
- Create a new comment: POST /comments/new-comment - Creates a new comment with content, user, and post references.
- Update an existing comment by ID: PATCH /comments/:commentId - Updates a comment’s content, user, or post reference.
- Delete a comment by ID: DELETE /comments/:commentId - Deletes a comment by its ID.

### Posts

- Retrieve all posts: GET /posts - Fetches a list of all posts.
- Retrieve a specific post by ID: GET /posts/:id - Fetches a single post by its ID.
- Create a new post: POST /posts/new-post - Creates a new post with title, content, and user reference.
- Update an existing post by ID: PATCH /posts/:id - Updates a post’s title or content.
- Delete a post by ID: DELETE /posts/:id - Deletes a post by its ID.

### Users

- Retrieve all users: GET /users - Fetches a list of all users.
- Retrieve a specific user by ID: GET /users/:id - Fetches a single user by its ID.
- Create a new user: POST /users/new-user - Creates a new user with name and email.
- Update an existing user by ID: PATCH /users/:id - Updates a user’s name or email.
- Delete a user by ID: DELETE /users/:id - Deletes a user by its ID.
