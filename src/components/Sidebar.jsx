export default function Sidebar() {
    return (
        <div className="first w-16 md:w-[70%]">
            <div className="sidebar flex md:items-end  flex-col sticky top-0">
                <div className="logo invert my-4 self-start mx-2 md:mx-16">

                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        className="w-8 m-auto r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
                        <g>
                            <path
                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                            </path>
                        </g>
                    </svg>

                </div>
                <ul className="flex flex-col text-2xl space-y-3 md:px-11 font-bold w-full  ">
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> home </span> <span
                            className="hidden md:block">Home</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> search </span><span
                            className="hidden md:block">Explore</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> notifications </span><span
                            className="hidden md:block">Notifications</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> message </span><span
                            className="hidden md:block">Grok</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> lists </span><span
                            className="hidden md:block">Lists</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> bookmarks </span><span
                            className="hidden md:block">Bookmarks</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> Group </span><span
                            className="hidden md:block">Communities</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> box </span><span
                            className="hidden md:block">Premium</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> person </span><span
                            className="hidden md:block">Profile</span>
                    </li>
                    <li
                        className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined"> pending </span><span
                            className="hidden md:block">More</span>
                    </li>
                    <li>
                        <div className="button w-full text-center my-4">
                            <button
                                className="hidden md:block bg-white px-20 text-xl rounded-full py-3 text-black">Post</button>
                            <button className="md:hidden bg-[#1d9bf0]  px-2 md:px-4 text-xl rounded-full py-1 md:py-3 text-white">
                                <span className="material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                        </div>
                    </li>
                </ul>

                <div className="userprofile w-full mt-10  justify-center mx-9 hidden md:flex">
                    <div
                        className="item p-3 items-center gap-5 justify-end mx-5 flex hover:bg-gray-800 cursor-pointer rounded-full w-fit">

                        <div className="p1">
                            <img className="w-12 h-12 rounded-full"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACUCAMAAABVwGAvAAAAMFBMVEXk5ueutLeor7Lf4uPn6eqrsbXGyszR1NbKztCxt7rb3t++w8W2u77Y29y5vsHO0dM/i/CTAAADtUlEQVR4nO2b3XqDIAxAEQKi8vP+bzvRdq2b3UKQ4AXnanc7XzAQQipEp9PpdDqdTqfT6XQ6nc61AIBKbH+1lvnBqjaaJQTnXAiL9eJGhiBmM0k9PNGD1lOcxS0MQYxBv9y+HfUy3iGE43Aitwcx+MZ+4J08dduRy9xSEOxwHrnvCE5jOz/1Z+ieAWwkB8r9HbpHAEObFJ4xcsnPqQZ+fsLZbX7sdgort/mx66Fjt/kx5wcY5If39Iucnx+M/+8oRyTnAZLz4T0IfHZiyVvahLZs4fP5wVv9uOzAkfSYwgc+Ny92Jp7NGQhf3ha+yKI3k+RS+Fj0Ii14ae/j0AvU6GnDkByKlhgJjtXNPs/eqH+yUfN2o35hAFmV1BFtattRqoGXXv26gLzrJapX9TCW6FU/18r09Fxbz5boyfp6BfvK7fVqn7p3j14ssGPQu3nmkq5BT+rX82WnRm07IQrsGFotZRVL/YIqs/lzgKHRTLzlbnDcdOnRcxx9AnI1z9LGgJF8z+XpYpA6QGwdXHLujix6QtByl6s9TwufZHtdU5STg2VX2SDVpCztqYdftpxeOB82sssqntbjE8jtQTI/2+c1qnjfrDYC3k9ytEXJfixN218A0k/W7+qdg/r+mqzsBqIfpKeGozYw/zMqIkPTOZs1gNPnFW46ZPPwU2Y4j6CcbIsJkV8oO/wc89J6jdwt5EQaLvRmmbTUO1K7YOc7TMc9WV3U7K1ZFmOin9U9RgvfgCOtdV4kmzV0Y4xmI8bR+1k0l0z/XvloQsoEvSfE64/BLdYr0WjIdY2Yj0sYpPy4761JIlfHNYO5DUHFMH0aGv3hOEzOMI7hgvDWfY7ZqaOcjGfZBgFs+Gdg9NxwWGNYeZXXwC15cTsgq54kAPFsgDpL0JlKXyGIcSqU27E1+mgwhoKu7Tv6+koGFLGpd861JTSIknb8GVdW0eAz7rRI9HTZzdxc9NEdkZdMW4O6PnQ7V9xEADt6TkHaUjvyNBwKvRRt0mVP8xi/krmgouc9pB89QRjskh9Rj8WO/HOEylnx5hcI8aNOJ1P8CF170tMK1S9/f651VpyTWQKCZVvajbxnDyiaViGQ+VDOu7SJjPGl/N/aFJOzu5SM0pD90PU924Z8AF8ckIf2i8A++JInQYrAnh1FU/ElfsjosaftQw91d2uwqzxA7S3QJjEG7Ojmpe2KLDCFC/5nwVejEfdK+oBZuR5mBqz23fEPMAdHo10vgan6nGwHInVVQxDR63Q6nU5DvgBqvy+mDQIvNAAAAABJRU5ErkJggg=="
                                alt="vercel" /></div>
                        <div className="p2 ">
                            <div>Ashtika Singh</div>
                            <div className="text-gray-500">@Ashtika08</div>
                        </div>

                        <div className="p3 text-2xl">
                            ...
                        </div>


                    </div>
                </div>

            </div>


        </div>
    );
}
