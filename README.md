# Mentor-Student Relationship Management API

The Mentor-Student Relationship Management API is a comprehensive solution designed to streamline the administration of mentor-student relationships. It offers a suite of features for creating and managing mentors and students, assigning relationships, and retrieving information.

## Quick Start Guide

Our API server is conveniently hosted at: `https://assigning-mentor-and-student.onrender.com`

## Key API Endpoints

1. **Create Mentor (POST)**: Establish a new mentor profile.
   - Endpoint: `/mentor/createMentor`

2. **Create Student (POST)**: Register a new student.
   - Endpoint: `/student/createStudent`

3. **Assign Student to Mentor (POST)**: Link a student to a mentor, fostering a learning relationship.
   - Endpoint: `/assignment/assignStudent/:mentorId/:studentId`

4. **Assign or Change Mentor for Student (PUT)**: Assign a new mentor to a student or modify an existing mentor-student relationship.
   - Endpoint: `/assignment/assignOrChangeMentor/:studentId/:newMentorId`

5. **Get All Students for a Mentor (GET)**: Retrieve a comprehensive list of all students under the guidance of a specific mentor.
   - Endpoint: `/mentor/getAllStudents/:mentorId`

6. **Get Previously Assigned Mentor for a Student (GET)**: Access the historical data of a student's previously assigned mentor.
   - Endpoint: `/student/getPreviousMentor/:studentId`

## Detailed Documentation

For an in-depth understanding of our API and its usage, we recommend referring to our comprehensive Postman Documentation.

[![Postman Documentation](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/30449072/2s9YeK3Vc8).

## Credits

This project was successfully completed as part of a task assigned by Guvi. We have diligently adhered to all the requirements provided by Guvi in the completion and submission of this task.
