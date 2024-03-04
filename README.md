# The Planet is your Canvas 2022-2023. WebApp

The website went live once the finalists of the contest were selected by the jury. The webapp was built with React and allowed users to vote for their favorite finalist artworks, seamlessly integrating Firebase Database and Authentication to keep track of the votes. Over the span of the 10-day voting period, the webapp registered 2,410 individuals from over 15 countries in Latin America.

## Features and Functionality

### Firebase Database Integration
Essential details of the finalist artworks where stored in a Firebase Database. These details include the image URL, title, and more importantly their associated vote count. Leveraging React's capabilities, the WebApp dynamically connects to the database, fetching and rendering the artworks on the webpage.

### Voting Functionality with Firebase Authentication
To facilitate a fair and secure voting process, Firebase  Authentication is employed. Users interested in voting are required to register, receiving a unique ID upon completion. This ensures each user's eligibility to vote. The WebApp then utilizes this authentication system to prevent users from voting multiple times for the same artwork.

### Real-Time Vote Counting
Upon each vote submission, the WebApp instantly updates the vote count for the respective artwork. Users witness the immediate impact of their participation, enhancing the overall interactive experience. A visually appealing CSS animation accompanies the voting process, with a thumbs-up icon moving up and changing color. This animation serves as visual feedback, confirming the successful submission of the user's vote.

## Tech Stack

- **React:** Powering the dynamic and responsive user interface for this bilingual website.
- **Firebase Database:** Storing and retrieving artwork details and votes, ensuring real-time updates.
- **Firebase Authentication:** Registering users and assigning unique IDs for secure and controlled voting.


## Voting widget in use
https://github.com/alejandra-rojas/ThePlanetIsYourCanvas22-23-VoteWidget/assets/113424427/0a51b681-74ab-471e-a68e-33bc0e0b6641
[View video in YouTube](https://www.youtube.com/watch?v=EYCqVVLOMBU)


## Firebase Database
![Associating user votes to each artwork in the database](https://github.com/alejandra-rojas/ThePlanetIsYourCanvas22-23-VoteWidget/assets/113424427/bdd600b3-8715-4ad5-bfaa-2dc2aa59bdfa)
> Associating user votes to each artwork in the database
