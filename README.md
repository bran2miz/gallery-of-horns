# This is my Project for the Horned-Beasts

I built a React app that renders Horned Animals.

## Author: Brandon Mizutani

Links and Resources

  -MDN
  -Netlify: https://beastly-horned.netlify.app/

## Lab 01 - Beginning React JS

### Reflections

1. What went well, that I might forget if I don’t write down?
  First and foremost, the main thing that went well today was being able to get my app to render on the browser. This was an extremely hard day, mainly due to the SSH key that was being a nuisance.
2. What did I learn today?
  SSH keys. Although the error of the SSH key was fairly easy to fix, it was actually going through the entire process of figuring out what the issue was.
3. What should I do differently next time?
  I don't believe I would've done anything differently! I asked for assistance when I needed it, and certainly learned a lot about SSH keys!
4. What still puzzles me, or what do I need to learn more about?
  I still have a few issues with understanding the terminal and why the npm start is so specific with error correction (spaces, etc).
5. Is the assignment complete? If not, where exactly did you leave off, and what work remains?
  I was pleasantly surprised that I was able to get it finished today! Although it may not look that great, with a little CSS via bootstrap, I think I will be able to create a beautiful React app!

## Lab 02 React State and Props

Number and name of feature: state-and-props

Estimate of time needed to complete: 3-4 hours

Start time: 6:45pm

Finish time: 10:00pm

Actual time needed to complete: 3 1/2 hours

### Reflections

1. A question within the context of today’s lab assignment
 Is there a particular reason why I need to add alts to my img tags? I was stuck on being able to render my page on netlify unless I provided alts to two of my img tags.
2. An observation about the lab assignment, or related ‘Ah-hah!’ moment
  Implementing the alts to the img tags in order for my page to render on netlify. By researching the answer on netlify's forum, I was able to do the CI= npm run build and figuring out what the issue was.
3. How long you spent working on this assignment
With all the fun CSS and implementation of state and Props, I would say it took me roughly 4 hours to complete this assignment.

### Retrospective

1. What went well, that I might forget if I don’t write down?
  Bootstrap surprisingly went well for me! I do enjoy CSS, so being able to do some fun stuff such as creating the card, and adding a clickable heart picture was very neat and fun! Once I imported bootstrap in the terminal, it was pretty simple to find code on the website and fill in the gaps in terms of image_URL, title, description and the number of horns.

2. What did I learn today?
  The assignment this week for the state-and-props was pretty challenging! One particular aspect was being able to deploy my page onto Netlify. Upon checking my code, I realized that I needed to add an alt to my img tags. Once I did that, I was able to deploy my page on Netlify. I also learned alot about bootstrap, through trial and error.

3. What should I do differently next time?
  Perhaps the more challenging part was the CSS itself. I wouldn't do anything differently, per say, but I would certainly take a further inspection of what element and class I am actually trying to make aesthetic changes to.

4. What still puzzles me, or what do I need to learn more about?
  I had a bit of an issue in regards to differentiating image_URL vs image within the props . I had trouble finding the reason why the pictures weren't rendering. It was only when I realized that within the main.js, more specifically within my Container, that I needed to write image_url instead of just img or image.

## Lab 03 - Passing Functions in Props

### Reflections

Number and name of feature: functions-in-props

Estimate of time needed to complete: 3 hours

Start time: 12:52

Finish time: 2:50

Actual time needed to complete: Around 2 hours

### Retrospective

1. What went well, that I might forget if I don’t write down?
  This assignment went surprisingly well! Implementing modals were pretty simple, using the code within the bootstrap forum. I added another card css within each horned beasts card with the description and the number of horns.

2. What did I learn today?
  I learned about modals, and how to implement them using props and states. Because the natural flow in React is unilateral, I first had to create a state in the parent (App.js) and pass it down as props to its children (Main.js, HornedBeasts.js, and SelectedBeast.js)

3. What should I do differently next time?
  To examine each and every part of the code. I had some problems again rendering the pictures and content. It was only after I realized that I needed to define each object in my HornedBeast.js with dot notation and the object I created in the Main (beastarr) that it was finally able to render properly.

4. What still puzzles me, or what do I need to learn more about?
  I guess later down the line, im interested to see onClick events within ReactJs link us to different pages on our site.

## Retrospective

1. What went well, that I might forget if I don’t write down?
  I think overall the Horned Beasts lab went well this week! I think what went well was the CSS (through trial and error of course). I think also creating the modal went surprisingly well, but again had to make adjustments with the CSS.

2. What did I learn today?
  I learned a great deal about forms today, especially on how we all can write code differently but attain the same results. In the class demo, I had similar code, but just added in different areas of my js files.

3. What should I do differently next time?
  I think mapping it out like our instructor mentioned would've helped me out a bit more. I think I definitely go in head first with a general idea of how to code, but then I get stuck.

4. What still puzzles me, or what do I need to learn more about?
  It is pretty small, but I think the % and the !== 0 aspect is still quite puzzling to me.
  (ie let integerArr = arr.filter(num => num % 2 === 1);)

5. Is the assignment complete? If not, where exactly did you leave off, and what work remains?
  I completed the lab! 