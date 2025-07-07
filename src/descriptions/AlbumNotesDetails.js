import "../css/ProjectDetails.css"
import editPage from "../images/AlbumNotes/edit-page.png"
import homePage from "../images/AlbumNotes/home-page.png"
import selectedAlbum from "../images/AlbumNotes/selected-album.png"

export const albumNotesDescription = (
    <>
        <p>
            <strong>Note:</strong> Album Notes is deployed! You can check it out {" "}
            <a
                href="https://album-notes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                here
            </a>
            .
        </p>
        <p>
            <strong>Album Notes</strong> is a minimalist, full-stack web app I built recently to keep quick notes on albums I’m listening to. It’s designed to be simple, clean, and fast: users can add albums to their library, jot down thoughts, and search through their collection with ease.
        </p>

        <img src={homePage} alt="Home Page" />

        <p>
            The tech stack includes <strong>Next.js</strong> for the app framework, <strong>React</strong> for the frontend, <strong>Tailwind CSS</strong> and <strong>shadcn</strong> for styling and components, and <strong>Clerk</strong> for authentication and user management. The app is deployed on <strong>Vercel</strong>, which makes pushing updates lightning fast.
        </p>

        <img src={selectedAlbum} alt="Home Page" style={{width: '30%'}} />

        <p>
            Users can create an account or sign in via Clerk, then immediately begin adding albums, each with a title, artist, and a section for personal notes. These notes are saved instantly, letting users quickly jot down thoughts as they listen. There’s also a lightweight search feature, so it’s easy to jump back to an album you’ve written about.
        </p>

        <p>
            On top of adding new albums, users can edit or update the title, artist, and notes for any album in their collection.
        </p>

        <img src={editPage} alt="Home Page" />

        <p>
            The project’s been a great opportunity to explore modern tooling like shadcn and Clerk in a real-world setting. I focused on building something that looks clean and stays out of your way — just enough structure to stay organized, without the clutter.
        </p>

        <p>
            If you interested, you can explore the source code on my{" "}
            <a
                href="https://github.com/AlexWilsonSoftware/album-notes"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            .
        </p>
    </>
);


