// components/Composer.jsx
import { ImageIcon, SmileIcon } from "lucide-react";

export default function Composer() {
    return (
        <div className="flex gap-4 my-3">
            <div className="img m-2 w-16">

                <img className="rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACUCAMAAABVwGAvAAAAMFBMVEXk5ueutLeor7Lf4uPn6eqrsbXGyszR1NbKztCxt7rb3t++w8W2u77Y29y5vsHO0dM/i/CTAAADtUlEQVR4nO2b3XqDIAxAEQKi8vP+bzvRdq2b3UKQ4AXnanc7XzAQQipEp9PpdDqdTqfT6XQ6nc61AIBKbH+1lvnBqjaaJQTnXAiL9eJGhiBmM0k9PNGD1lOcxS0MQYxBv9y+HfUy3iGE43Aitwcx+MZ+4J08dduRy9xSEOxwHrnvCE5jOz/1Z+ieAWwkB8r9HbpHAEObFJ4xcsnPqQZ+fsLZbX7sdgort/mx66Fjt/kx5wcY5If39Iucnx+M/+8oRyTnAZLz4T0IfHZiyVvahLZs4fP5wVv9uOzAkfSYwgc+Ny92Jp7NGQhf3ha+yKI3k+RS+Fj0Ii14ae/j0AvU6GnDkByKlhgJjtXNPs/eqH+yUfN2o35hAFmV1BFtattRqoGXXv26gLzrJapX9TCW6FU/18r09Fxbz5boyfp6BfvK7fVqn7p3j14ssGPQu3nmkq5BT+rX82WnRm07IQrsGFotZRVL/YIqs/lzgKHRTLzlbnDcdOnRcxx9AnI1z9LGgJF8z+XpYpA6QGwdXHLujix6QtByl6s9TwufZHtdU5STg2VX2SDVpCztqYdftpxeOB82sssqntbjE8jtQTI/2+c1qnjfrDYC3k9ytEXJfixN218A0k/W7+qdg/r+mqzsBqIfpKeGozYw/zMqIkPTOZs1gNPnFW46ZPPwU2Y4j6CcbIsJkV8oO/wc89J6jdwt5EQaLvRmmbTUO1K7YOc7TMc9WV3U7K1ZFmOin9U9RgvfgCOtdV4kmzV0Y4xmI8bR+1k0l0z/XvloQsoEvSfE64/BLdYr0WjIdY2Yj0sYpPy4761JIlfHNYO5DUHFMH0aGv3hOEzOMI7hgvDWfY7ZqaOcjGfZBgFs+Gdg9NxwWGNYeZXXwC15cTsgq54kAPFsgDpL0JlKXyGIcSqU27E1+mgwhoKu7Tv6+koGFLGpd861JTSIknb8GVdW0eAz7rRI9HTZzdxc9NEdkZdMW4O6PnQ7V9xEADt6TkHaUjvyNBwKvRRt0mVP8xi/krmgouc9pB89QRjskh9Rj8WO/HOEylnx5hcI8aNOJ1P8CF170tMK1S9/f651VpyTWQKCZVvajbxnDyiaViGQ+VDOu7SJjPGl/N/aFJOzu5SM0pD90PU924Z8AF8ckIf2i8A++JInQYrAnh1FU/ElfsjosaftQw91d2uwqzxA7S3QJjEG7Ojmpe2KLDCFC/5nwVejEfdK+oBZuR5mBqz23fEPMAdHo10vgan6nGwHInVVQxDR63Q6nU5DvgBqvy+mDQIvNAAAAABJRU5ErkJggg==" alt="" />
            </div>
            <div className="w-full">
                <input className="w-full h-7 my-2 text-xl bg-black outline-none text-white" type="text"
                    placeholder="What is happening?!" />
                <div className="text-blue-400 flex items-center gap-1 w-full my-4">
                    <span className="material-symbols-outlined ">
                        globe_asia
                    </span>
                    <span className="font-bold">Everyone can reply</span>
                </div>
                <div className="w-[90%] h-[0.2px] bg-gray-700 my-3"></div>
                <div className="flex justify-between">

                    <div className="blueicons flex gap-2 text-blue-400 items-center">
                        <span className="material-symbols-outlined cursor-pointer">
                            image
                        </span>
                        <span className="material-symbols-outlined cursor-pointer">
                            gif
                        </span>
                        <span className="material-symbols-outlined cursor-pointer">
                            ballot
                        </span>
                        <span className="material-symbols-outlined cursor-pointer">
                            sentiment_satisfied
                        </span>
                        <span className="material-symbols-outlined cursor-pointer">
                            calendar_month
                        </span>
                        <span className="material-symbols-outlined cursor-pointer">
                            pin_drop
                        </span>
                    </div>
                    <div className="postbtn">
                        <button
                            className="bg-white px-6 mx-5 text-sm rounded-full py-2 text-black font-bold">Post</button>
                    </div>

                </div>
            </div>

        </div>

    );
}
