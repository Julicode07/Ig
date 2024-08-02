import React from "react";
import "../index.css";
import Nav from "../components/MainPage/Nav";
import Aside from "../components/MainPage/Aside";
import Post from "../components/MainPage/Post";
import Santiago from "../assets/santiago.jpg";
import Post1 from "../assets/post/post1.jpg";
import Post2 from "../assets/post/post2.jpg";
import Post3 from "../assets/post/post3.jpg";
import Post4 from "../assets/post/post4.jpg";

function MainPage() {
  return (
    <div
      id="app"
      className="relative h-screen dark:bg-black cursor-default overflow-hidden grid grid-rows-[auto_1fr] sm:grid-rows-[auto_1fr] sm:grid-cols-[245px_1fr]"
    >
      <nav className="row-span-1 col-span-full bg-white border-b border-slate-300 dark:border-slate-700 sm:col-span-2">
        <Nav />
      </nav>
      <aside className="hidden sm:flex sm:flex-col sm:gap-9 sm:border-r sm:border-slate-300 sm:dark:border-slate-700 sm:px-4 sm:pt-6">
        <Aside />
      </aside>
      <main className="text- row-span-1 col-span-full sm:col-span-1 flex justify-center w-full overflow-y-auto">
        <div className="flex flex-col gap-4">
          <Post
            profile={Santiago}
            user="Santiago"
            location="Santiago, Chile"
            imgpost={Post1}
            likes="20 likes"
            comments="3"
          />
          <Post
            profile={Santiago}
            user="santiagogarcia6966"
            location="Argentina"
            imgpost={Post2}
            likes="25 likes"
            comments="7"
          />
          <Post
            profile={Santiago}
            user="santiagogarcia6966"
            location="Argentina"
            imgpost={Post3}
            likes="18 likes"
            comments="4"
          />
          <Post
            profile={Santiago}
            user="santiagogarcia6966"
            location="Argentina"
            imgpost={Post4}
            likes="15 likes"
            comments="6"
          />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
