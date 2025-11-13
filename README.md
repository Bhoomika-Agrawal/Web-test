# React + Vite

-->Is project me humne React, Tailwind CSS aur FakeStore API ka use karke ek simple single-page shopping UI banaya hai jisme koi routing ka use nahi hua. Pure project me ek hi Home page hai jisme Navbar, Search Box UI aur Product Grid show hota hai.

--> i used vite to create a project (npm create vite@latest) 
--> after this i install tailwind for css using the command->npm install tailwindcss @tailwindcss/vite and then i update vite.config file and add tailwind in plugins;

-->Phir  project ka folder structure create kiya. components folder me Navbar aur ProductCard create kiya and pages file me Home.jsx file

-->Home.jsx ke andar sabse important kaam data fetch karna tha.  useEffect ka use isliye kiya kyunki hume component ke load hote hi ek baar FakeStore API se products fetch karne the. fetch("https://fakestoreapi.com/products") se hume products ka array mila aur humne use products state me store kar liya.

-->ProductCard.jsx me  ek card UI design kiya jisme product ka image, title aur price show hota hai.  "View Details" ka button sirf UI ke liye rkha h

-->Home page me Navbar ko top me render kiya aur neeche ek responsive grid banayi jisme API se aaye products ko map karke card ke form me show kiya. Tailwind ki responsive classes jaise grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 use karke grid ko responsive banaya.

-->Finally humne project ko run kiya using npm run dev