# Project Title

MindFlex

Check out the the Mindflex-Client repo for more general information on the project, and how to run the project.

## Implementation

### Server Tech Stack

- Server:

  - Express
  - Knex
  - Crypto
  - bcryptjs
  - JWT

- Database:
  - MySQL

### Data

![](/public/read_me/drawSQL.png)

### Endpoints

**POST /auth/signup**

- Sign up a new user account

Parameters:

- name: user's name of choice
- email: user's email
- password: user's password
- confirm password: user's password

Body:

```
[
    {
        "name": "John Doe",
        "email": "jonhdoe@gmail.com",
        "password": "mysecretpassword"
        "confirmPassword": "mysecretpassword"
    },
    ...
]
```

**POST /auth/login**

- Log in an existing user

Parameters:

- email: user's email
- password: user's password

Body:

```
[
    {
        "email": "jonhdoe@gmail.com",
        "password": "mysecretpassword"
    },
    ...
]
```

**GET /user/:id**

- Get a specific user (for personalization of account)

Parameters:

- id: user id

Response:

```
[
    {
       "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "created_at": "2024-02-23T12:00:00.000Z",
        "updated_at": "2024-02-23T12:00:00.000Z"
    },
    ...
]
```

**GET /blogs/**

- Get all blog posts

Response:

```
[
    {
        "id": 1,
        "title": "Sample Blog Post",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "created_at": "2024-02-23T12:00:00.000Z",
        "updated_at": "2024-02-23T12:00:00.000Z"
    },
]
```

**GET /blogs:id**

- Get a blog post by id

Parameters:

- id: user id

Response:

```
[
    {
        "id": 1,
        "title": "Sample Blog Post",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "created_at": "2024-02-23T12:00:00.000Z",
        "updated_at": "2024-02-23T12:00:00.000Z"
    },
]
```

**GET /therapists**

- Get the list of therapists

Response:

```
[
    {
        "id": 1,
        "name": "Dr. Smith",
        "role": "Clinical Psychologist"
        "location": "Oakville",
        "created_at": "2024-02-23T12:00:00.000Z",
        "updated_at": "2024-02-23T12:00:00.000Z"
        ...
    },
]
```

**GET /therapists/:id**

- Get details of a specific therapists

Parameters

- id: user id

Response:

```
[
    {
        "id": 1,
        "name": "Dr. Smith",
        "role": "Clinical Psychologist"
        "location": "Oakville",
        "created_at": "2024-02-23T12:00:00.000Z",
        "updated_at": "2024-02-23T12:00:00.000Z"
        ...
    },
]
```

**POST /reflections/**

- Create a new reflection

Body:

```
[
    {
        "title": "Sample Reflection",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
]
```

## Roadmap

- Client setup

  - Add screens with routing for basic structure
  - Create bottom nav and hamburger menu for navigation

- Server setup

  - Initialize express project with routes for pages
  - Set up middleware for handling requests and responses
  - Create database schema with table definitions for user accounts, blog posts, reflections and therapists.
  - Set up migrations and create seed data

- Feature: Blog page

  - Work on UI components to display blogs
  - GET /blogs to fetch all blog posts and GET /blog/:id to fetch a specific blog post

- Feature: Home page

  - Create mood slider with range of emotions
  - Implement reflection modal form with POST /reflection endpoint to save reflections to the database

- Feature: Therapists page

  - Create therapist cards with relevant information (name, specialization, location, etc.)
  - Get all therapist data from database (i.e. GET /therapists, GET /therapist/:id)
  - Implement therapist details page to display detailed information about each therapist

- Feature: Therapist booking flow

  - Calendar integration for scheduling appointments

- Feature: Create account & log in

  - Design and implement UI & backend logic with JWT, signup & login endpoints
  - Handle errors and authentication

- Styling and refinement

## Nice-to-haves

- Google sign up/log in with Passportjs
- Functional notifications
- User profile page
- Retrieve user reflections and display them in the Reflections tab on hamburger menu
- Third-party API for quote/tip of the day
- Functional booking flow with abiliy to pay for booking
- Ability to view payment details in Payment details tab (hamburger menu)
- Therapist reviews section

- For next sprint:
  - Google sign up/log in with Passportjs
  - Functional booking flow with abiliy to pay for booking
  - Topic based Forums page
  - Self-help exercises page/Exercise of the day
  - Improve UI
