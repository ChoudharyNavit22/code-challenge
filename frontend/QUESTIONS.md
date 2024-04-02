1. What could be changed in Companies page to make the code more maintainable?

After having a look at the code for the companies page i feel the biggest change i would like to do in the company page is to componentize the page. I would prefer using a similar way which i used in the Home page to create a reusable compaonet for the company tiles so that the actual code and css of the tile can be inside the component file and not the main page. The biggest plus point with this way of coding would be the reusability of components for futre use in different pages and also maintaining the uniformtity of the way the component will look at different pages. Right now i made the componet in the most basic way but i would also want to update my component to handle just one tile at a time and not the whole lot of tiles so i would actually update that component and remove the map funtion from there and actually keep the map function on the page file as that would make the component even more reusable as we could then use it for just one tile when needed on a aprtucular page and also use the same component to discplay multiple tiles on other pages.

2. Would you change the way styling is handled in the solution? If so, what would you change?

Yes, definitely i would prefer using a universal libray like MUI for the styling as it saves a lot of time for writting css for most of the classes which can be used from the prebuilt MUI libray. It also helps you maintain uniformity throughout the codebase and helps the developer to focus more on the actual functionality that writting the css to make the thing look exactly same all over the website.

3. Any other improvements or changes you would make?

As of now i dont think of any other changes that i would want to make the two main changes i mentioned that i would make is :

- Use of a more component based structure for the code
- Use of a universal UI libray like MUI.