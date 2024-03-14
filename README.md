# The Planet is your Canvas 2022-2023. WebApp

The webapp went live once the finalists of the contest were selected by the jury. Built with React, the webapp allowed users to vote for their favorite finalist artworks, seamlessly integrating Firebase Database and Authentication to keep track of the votes. Over the span of the 10-day voting period, the webapp registered 2,410 individuals from over 15 countries in Latin America.

## Tech Stack

- **React:** Powering the dynamic and responsive user interface for this bilingual website.
- **Firebase Database:** Storing and retrieving artwork details and votes, ensuring real-time updates.
- **Firebase Authentication:** Registering users and assigning unique IDs for secure and controlled voting.


## Features and Functionality

### Firebase Database Integration
Essential details of the finalist artworks where stored in a Firebase Database; these details include the image URL, title. Leveraging React's capabilities, the WebApp dynamically connects to the database, fetching and rendering the artworks on the webpage. The database also associated the votes submitted by the public for each artwork. 

### Voting Functionality with Firebase Authentication
To facilitate a fair and secure voting process, Firebase  Authentication is employed. Users interested in voting are required to register, receiving a unique ID upon completion. This ensures each user's eligibility to vote. The WebApp then utilizes this authentication system to prevent users from voting multiple times for the same artwork.

### Real-Time Vote Counting
Upon each vote submission, an animation provides visual feedback to the user, confirming the successful submission of their vote and enhancing the interactive experience. The WebApp instantly updates the vote count for the respective artwork across clients.



## Voting widget in use
https://github.com/alejandra-rojas/ThePlanetIsYourCanvas22-23-VoteWidget/assets/113424427/907a9a09-a6c6-40d9-8db8-b9b51e5032c2
> [View video in YouTube](https://www.youtube.com/watch?v=EYCqVVLOMBU)



## Firebase Database
![Associating user votes to each artwork in the database](https://github.com/alejandra-rojas/ThePlanetIsYourCanvas22-23-VoteWidget/assets/113424427/bdd600b3-8715-4ad5-bfaa-2dc2aa59bdfa)
> Associating the public votes to each artwork in the database.
