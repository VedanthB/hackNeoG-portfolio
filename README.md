# hackNeogG portfolio template


# hackNeog - React Portfolio Template

## **About**

A simplified personal resume website template  built with webpack and React/Babel. Auto formatted with Prettier and ESLint. Sanity for Content Management. Styled using SASS.

### DEMO WEBSITE: [https://hackneog-portfolio.netlify.app/](https://hackneog-portfolio.netlify.app/)

---

## **Features**

- Proven, scalable, and easy to understand project structure
- Written in modern React, only functional components with hooks
- A variety of custom light-weight UI components.
- Simple local React state management.
- Custom `webpack` setup, without create-react-app.
- Client written in Babel powered JavaScript
- `Sanity CMS` for content management so you dont have to change the code for every content update you want to do on the website.
- Styled using `SASS`.
- Sleek Animations using `framer-motion`
- Dark Mode

---

## **Make it Your Own!**

### **PREREQUISITES:**

- Sign up for a `Netlify` account [HERE](https://www.netlify.com/)
- Install `Node JS` in your computer [HERE](https://nodejs.org/en/)
- Install `Sanity CLI` in your computer by running `sudo npm i -g @sanity/cli`  in your terminal

```bash
sudo npm i -g @sanity/cli
```

### **PROCEDURE:**

- Download the zip folder from Github and unzip it Here is the link to download zip 👉 [HERE](https://github.com/VedanthB/hackNeoG-portfolio/archive/refs/heads/dev.zip)
- Open the folder in VS Code
- Open terminal in VS Code
- Create a new folder called `backend` and change directory to backend

```bash
cd backend
```

![Screenshot 2022-05-09 at 5.57.10 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_5.57.10_AM.png)

- Open terminal in VS Code
- in the `backend` folder run `sanity init` , this will initialize a sanity project in the backend folder. You will be asked a few questions.
1. project name: `any name you wish`
2. use default config: `yes`
3. public output path: `press enter`
4. Select project template: `clean project with no predefined schemas`

![Screenshot 2022-05-09 at 5.39.45 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_5.39.45_AM.png)

![Screenshot 2022-05-09 at 5.39.54 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_5.39.54_AM.png)

![Screenshot 2022-05-09 at 5.40.11 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_5.40.11_AM.png)

![Screenshot 2022-05-09 at 5.41.02 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_5.41.02_AM.png)

![Screenshot 2022-05-09 at 5.41.08 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_5.41.08_AM.png)

- now in the backend folder replace the `schema` folder with this folder

[15kGx_by4cC6yQ94VJJZwSnlEy-s4aUiy?usp=sharing](https://drive.google.com/drive/folders/15kGx_by4cC6yQ94VJJZwSnlEy-s4aUiy?usp=sharing)

- Edit   `frontend/src/portfolio.js` and add your personal details and social media links

- Open terminal in VS Code
- Run `sanity manage` in your `backend` folder , this will open a sanity dashboard

![Screenshot 2022-05-09 at 6.10.32 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_6.10.32_AM.png)

- copy the `project id` and paste it in an `.env` file in a variable called `REACT_APP_SANITY_PROJECT_ID` your frontend folder root
- then navigate to api in the sanity dashboard and add a cors origin [`http://localhost:6060`](http://localhost:6060/)   and select allow credentials

![Screenshot 2022-05-09 at 6.14.00 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_6.14.00_AM.png)

- then create API Token , choose `editor` as permissions name it anything you like, and paste the token in the `.env` file.
    
    ![Screenshot 2022-05-09 at 6.16.29 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_6.16.29_AM.png)
    
- Your `.env` file should look like this

```bash
REACT_APP_SANITY_PROJECT_ID = your project id
REACT_APP_SANITY_TOKEN = your api token
```

- Now run `sanity start` in your backend folder in the terminal which will open the sanity CMS dashboard where you can upload your website content.

![Screenshot 2022-05-09 at 6.19.51 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_6.19.51_AM.png)

<aside>
💡 Things to keep in mind while uploading your content on Sanity , in the works section when you add a project/work make sure you fill the tags field with one of the tags
- “React JS”
- “JavaScript”
- “UI/UX”

</aside>

---

## How to deploy the project ??

- RUN `npm run build`, in the frontend folder,  this command will update the `public` folder for you
- DRAG AND DROP the `public` folder on Netlify, your app is live now for the world to see.
- One last step to make the website load data from Sanity is adding the deployed site link in the cors origin tab on the sanity manage dashboard.

![Screenshot 2022-05-09 at 6.25.48 AM.png](hackNeogG%20portfolio%20template%20365ec77faa4f40caa800e955b1cbef88/Screenshot_2022-05-09_at_6.25.48_AM.png)

---

