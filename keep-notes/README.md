## Tasks

1- Editable Table
2- Keeps Notes Web App
3- Sending and Retrieving Data through API

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Usage

1. Run `npm start` to start the development server.
2. Access the application in your web browser at `http://localhost:3000`.

## Editable Table(Task 1)

This is an editable table web app built using React. The app allows users to view and edit data entries in a table format. Each row in the table represents a data entry, and users can modify the values in each column. The app is designed to prepare data to be posted to any API or database backend of your choice.

## Features

Editable Columns: very column in the table is editable. Users can update data seamlessly by double-clicking on the cell they wish to edit.
Simple Design: The app features a clean and straightforward design for ease of use.
Edit Data: Users can edit existing data entries by directly modifying the values in each column.

## Usage

Editing Data:
Double-click on any cell in the table to enter edit mode.
Modify the value in the cell.
Press Enter or click outside the cell to save changes.

## Notes Web App(Task 2)

This is a simple notes web app built using React for the frontend and MySQL for the backend database. The app allows users to create, delete, and view notes. Each note consists of a title and a content section.

## Features

MySQL Database: Utilizes MySQL as the backend database to store notes data.
Simple Design: The app has a clean and minimalistic design for easy navigation and usage.
Add Note: Users can add new notes by providing a content.
Delete Note: Users can delete existing notes.

## Usage

Automatic Note Addition:
New notes are automatically added when the user enters content and clicks outside the note box.

Deleting a Note:
Click on the "Delete" button next to the note you want to delete.
Confirm the deletion.
Saving Data to API/Database:
Upon editing a note, the updated data is ready to be posted to any API or database backend.
Implement the backend logic to receive and process the updated note data as per your requirements.

## Sending and Retrieving Data through API(Task 3)

Users can input a phone number, and upon submission, the app sends the phone number data to the specified API endpoint https://chimpu.xyz/api/post.php using the phonenumber variable. Upon successful submission, the app retrieves and displays the data received in headers from the API endpoint on the page.

## Technologies Used

- React
- Other technologies used in the project (e.g., Axios for API requests)

## Usage

Input Phone Number:
Enter the phone number in the input field.
Submit Data:
Click on the "Submit" button to send the phone number data to the API endpoint.
Retrieve and Display Response:
Upon successful submission, the app retrieves and displays the data received in headers from the API endpoint on the page.
