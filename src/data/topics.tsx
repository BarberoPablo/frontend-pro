import { VNode } from "vue";
import { Topic } from "../types/topics";

export const topics: {
  [key in Topic]: {
    name: string;
    image: string;
    questions: { question: string; answer: VNode }[];
  };
} = {
  internet: {
    name: "Internet",
    image: "",
    questions: [
      {
        question: "How does the internet work?",
        answer: (
          <>
            The internet is a global network of computers that communicate using standardized protocols like TCP/IP. DNS (Domain Name
            System) translates domain names into IP addresses. Data is sent in packets using TCP, ensuring reliable transmission between
            devices through multiple routers until it reaches its destination.
          </>
        ),
      },
      {
        question: "What is HTTP?",
        answer: (
          <>
            HTTP is an application protocol that <strong>defines how web servers and web clients communicate</strong> with each other.
            <br />
            HTTP operates on a request-response model: clients (usually web browsers) send requests to servers, which then respond with the
            requested data. The protocol is <strong>stateless</strong>, meaning each request is independent of any previous requests
            <br />
            HTTPS is the secure version, encrypting data exchanged between a user's browser and a web server.
            <br />
            HTTP/HTTPS supports various methods (GET, POST, PUT, DELETE, etc.) for different types of interactions with resources.
          </>
        ),
      },
      {
        question: "What is a Domain name?",
        answer: (
          <>
            A domain name is a human-readable address used to identify a website on the internet, such as www.example.com. It translates to
            an IP address through DNS, allowing browsers to locate and access web resources easily. <br />
            Domain names can be customized, transferred, and renewed, playing a vital role in the structure and accessibility of the World
            Wide Web.
          </>
        ),
      },
      {
        question: "What is Hosting?",
        answer: (
          <>
            Hosting is the process of <strong>making a website accessible</strong> on the internet through the use of a web server. <br />
            It involves renting server space where files and applications are stored. Hosting services range from shared hosting (where
            multiple websites share server resources) to dedicated hosting (where a server is exclusively used by one client).
          </>
        ),
      },
      {
        question: "What is DNS?",
        answer: (
          <>
            DNS (Domain Name System) is a system that translates domain names into IP addresses that computers use to identify each other on
            the network. <br />
            It allows users to access websites easily without needing to remember complex numerical addresses. <br />
            DNS also helps with directing internet traffic efficiently:
            <ul>
              <li>
                <strong>Load Balancing</strong>: If one server is overloaded, DNS can direct users to another server, improving performance
                and reliability.
              </li>
              <li>
                <strong>Caching</strong>: DNS servers store previously resolved domain names and their corresponding IP addresses, saving
                time on redundant lookups.
              </li>
              <li>
                <strong>Geolocation Routing</strong>: DNS can direct users to the nearest server based on their geographical location,
                reducing latency and speeding up loading times.
              </li>
              <li>
                <strong>Failover</strong>: If a server goes down, DNS can quickly redirect traffic to a backup server
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "What is a Browser?",
        answer: (
          <>
            A web browser is a software application that allows users to access and navigate the web. <br />
            It interprets HTML, CSS, and JavaScript to display web pages and it works by sending <strong>HTTP requests</strong> to a web
            server and then parsing the responsedisplaying the content on the screen.
          </>
        ),
      },
    ],
  },
  html: {
    name: "HTML",
    image: "",
    questions: [
      {
        question: "What is HTML?",
        answer: (
          <>
            HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style
            using CSS and make interactive using JavaScript.
          </>
        ),
      },
      {
        question: "What is Semantic HTML?",
        answer: (
          <>
            Semantic HTML is the use of HTML tags that clearly describe the content inside them.
            <br />
            For example, tags like header, footer, article, and nav show what each section of a webpage is about. This helps make websites
            easier to understand for both people and search engines, and it improves accessibility for users with disabilities.
          </>
        ),
      },
      {
        question: "What are Forms and Validations?",
        answer: (
          <>
            Before submitting data to the server, it is important to ensure all required form controls are filled out, in the correct
            format. This is called <strong>client-side form validation</strong>, and helps ensure <strong>data</strong> submitted{" "}
            <strong>matches</strong> the <strong>requirements</strong> set forth in the various form controls.
          </>
        ),
      },
      {
        question: "What is Accessibility?",
        answer: (
          <>
            Accessibility refers to the practice of making websites and applications usable for all people, including those with{" "}
            <strong>disabilities</strong>.<br />
            This includes providing features like text alternatives for images, keyboard navigation, and ensuring that content is readable
            by screen readers.
          </>
        ),
      },
      {
        question: "What is SEO?",
        answer: (
          <>
            SEO (Search Engine Optimization) is the practice of improving a website's visibility on search engines like Google.
            <br />
            The basics include:
            <ul>
              <li>
                <strong>Keywords</strong>: Relevant keywords in your content that people are searching for.
              </li>
              <li>
                <strong>Quality Content</strong>: Creating valuable and informative content that engages users and answers their questions.
              </li>
              <li>
                <strong>On-Page Optimization</strong>: Using proper HTML tags, headings, and <strong>meta</strong> descriptions to help
                search engines understand your content.
              </li>
              <li>
                <strong>Backlinks</strong>: Getting links from other reputable websites to improve your site's authority and ranking
              </li>
              <li>
                <strong>Mobile Friendliness</strong>: Ensuring your website is easy to use on mobile devices, as many users browse on their
                phones.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  css: {
    name: "CSS",
    image: "",
    questions: [
      {
        question: "What is CSS?",
        answer: (
          <>
            CSS stands for Cascading Style Sheets. It is used to style the webpage using <strong>tags</strong> and <strong>classes</strong>.
          </>
        ),
      },
      {
        question: "What are CSS Selectors?",
        answer: (
          <>
            CSS Selectors are used to select elements in an HTML document. <br />
            For example, you can select an element with a specific ID using the <strong>#</strong> selector, or you can select an element
            with a specific class using the <strong>.</strong> selector.
            <br />
            This is useful when styling and also in Web Scrapping.
          </>
        ),
      },
      {
        question: "What is the Box Model in CSS?",
        answer: (
          <>
            The box model in CSS is used to create a border, padding, and margin for an element. <br />
            The box model is the way CSS layouts an element in the browser.
          </>
        ),
      },
      {
        question: "What is Flexbox?",
        answer: (
          <>
            Flexbox is a CSS layout model that allows you to design a layout in a more efficient and predictable way. It provides an easy
            way to align and distribute space among items in a container, even when their sizes are unknown.
          </>
        ),
      },
      {
        question: "What are CSS Selectors",
        answer: (
          <>
            CSS Selectors are used to select elements in an HTML document. <br />
            For example, you can select an element with a specific ID using the <strong>#</strong> selector, or you can select an element
            with a specific class using the <strong>.</strong> selector.
            <br />
            This is useful when styling and also in Web Scrapping.
          </>
        ),
      },
      {
        question: "What is Grid?",
        answer: (
          <>
            CSS Grid is a layout system that allows you to create two-dimensional layouts on a webpage using rows and columns. It provides a
            way to design a grid structure where items can be placed in specific grid cells.
          </>
        ),
      },
      {
        question: "Differences between Flexbox and Grid",
        answer: (
          <>
            <h3>Layout Type:</h3>
            <ul>
              <li>
                <strong>Grid</strong>: Best for two-dimensional layouts (both rows and columns).
              </li>
              <li>
                <strong>Flexbox</strong>: Best for one-dimensional layouts (either a row or a column)
              </li>
            </ul>
            Item Placement:
            <ul>
              <li>
                <strong>Grid</strong>: Items can be positioned anywhere within the grid, allowing for more complex designs.
              </li>
              <li>
                <strong>Flexbox</strong>: Items are placed in a single direction, either horizontally or vertically, and space is
                distributed among them.
              </li>
            </ul>
            Use Cases:
            <ul>
              <li>
                <strong>Grid</strong>: Ideal for creating entire page layouts or complex components like galleries and dashboards.
              </li>
              <li>
                <strong>Flexbox</strong>: Suitable for simpler layouts like navigation bars or aligning elements within a single row or
                column.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "What are Media Queries?",
        answer: (
          <>
            Media queries are CSS rules that allow you to apply styles based on the characteristics of the device, such as its width,
            height, or orientation. This is essential for creating responsive designs that adapt to different screen sizes.
          </>
        ),
      },
      {
        question: "What is the Difference Between Class and ID Selectors?",
        answer: (
          <>
            Class selectors (<strong> . </strong>) can be applied to multiple elements, while ID selectors (<strong> # </strong>) are unique
            and should only be used for one element on a page.
          </>
        ),
      },
      {
        question: "What is a CSS Preprocessor?",
        answer: (
          <>
            A CSS preprocessor is a scripting language that <strong>extends CSS</strong> with features like variables, nested rules, and
            mixins.
            <br />
            Popular preprocessors include <strong>SASS</strong> and <strong>LESS</strong>, which make writing and maintaining CSS easier and
            more efficient.
          </>
        ),
      },
    ],
  },
  javascript: {
    name: "Javascript",
    image: "",
    questions: [
      {
        question: "What is the difference between Interface and Type in TypeScript?",
        answer: (
          <>
            Interface
            <ul>
              <li>Only for objects shapes ex: &#123;name: string, age: number&#125;</li>
              <li>Can be extend and merged</li>
              <li>Can be implemented by classes</li>
            </ul>
            Type
            <ul>
              <li>Can represent various types (unions, tuples, etc.) ex: string | number</li>
              <li>Cannot merge, but can use intersections (&)</li>
              <li>More flexible but not for class implementation</li>
            </ul>
          </>
        ),
      },
      {
        question: "What is a module?",
        answer: (
          <>
            It is a collection of code, like functions, variables, classes and interfaces, that can be imported and used in other files.
            ex:react-router-dom
          </>
        ),
      },
      {
        question: "What is the difference between class and object?",
        answer: (
          <ul>
            <li>Class is a blueprint for creating objects, defininf properties and methods</li>
            <li>Object is an instance of a class</li>
            <li>
              There is also object lieterals that are objects that are defined directly on the code without needing a class to create them
            </li>
          </ul>
        ),
      },
      {
        question: "What is a closure?",
        answer: (
          <>
            A closure is a function in JavaScript that retains access to its lexical scope (the scope where it was defined), even when the
            function is executed outside that scope.,
          </>
        ),
      },
      {
        question: "What is scope?",
        answer: <>Scope determines the variables and functions that are accessible. It defines their visibility and lifespan.</>,
      },
      {
        question: "What is context?",
        answer: <>Is the environment where the code is executed</>,
      },
      {
        question: "How event loop works?",
        answer: (
          <>
            Javascript is a single threaded language (can do only one thing at a time). The event loop is the execution of the code. It
            seems like it runs things asynchronously or in paralel because how it works. <br />
            And it works like: The <strong>event loop</strong> checks the <strong>call stack</strong> for tasks to execute, while the{" "}
            <strong>libuv API</strong> handles asynchronous operations, placing their callbacks in the event queue. The event loop then
            processes these callbacks from the event queue when the call stack is empty.
            <ul>
              <li>Call stack: Everytime we call a function javascript puts it in the call stack (LIFO)</li>
              <li>
                Event loop: checks the call stack for tasks to execute and processes callbacks from event queue if call stack is empty
              </li>
              <li>libuv API: handles asynchronous operations and returns callbacks in the event queue</li>
              <li>Event queue: stores the callbacks from the libuv API</li>
              <li></li>
            </ul>
          </>
        ),
      },
      {
        question: "What is a callback?",
        answer: (
          <>
            A callback is a function passed as an argument to another function, which is then executed after the completion of that
            function.
          </>
        ),
      },
    ],
  },
  vcs: {
    name: "VCS",
    image: "",
    questions: [
      {
        question: "What is a VCS?",
        answer: (
          <>
            Version Control Systems (VCS) are tools that help developers track and manage changes to code over time. They allow multiple
            people to work on a project simultaneously, maintaining a history of modifications and allowing them to roll back changes.
          </>
        ),
      },
      {
        question: "What is a Git?",
        answer: (
          <>
            Git is a distributed version control system that allows developers to track changes in their code and collaborate with others.
            <br />
            It provides features like branching, merging, and history tracking, enabling teams to work on different aspects of a project
            simultaneously.
          </>
        ),
      },
      {
        question: "What is a Github?",
        answer: (
          <>
            GitHub is a web-based platform that uses Git for version control and collaboration. It allows developers to host their code
            repositories, track issues, and work together on projects.
            <br />
            GitHub also provides features like pull requests, code reviews, and project management tools.
          </>
        ),
      },
      {
        question: "What is Gitflow?",
        answer: (
          <>
            Gitflow is a branching model for Git that defines <strong>a set of rules</strong> for managing branches in a project.
            <br />
            It introduces specific branch types such as feature, develop, release, and hotfix branches, making it easier to manage parallel
            development and streamline the release process.
          </>
        ),
      },
      {
        question: "What is a branch in Git?",
        answer: (
          <>
            A branch in Git is a parallel version of the codebase that allows developers to work on different features or fixes without
            affecting the main code. It enables experimentation and isolated changes, which can later be merged back into the main branch.
          </>
        ),
      },
      {
        question: "What is Git Workflow?",
        answer: (
          <>
            Git Workflow refers to the set of guidelines and practices that teams follow when using Git for version control. A common
            workflow includes the following steps:
            <ol>
              <li>
                <strong>Branching</strong>: Developers create a new branch for each feature or bug fix to keep the main branch stable.
              </li>
              <li>
                <strong>Making Changes</strong>: Changes are made to the files in the new branch.
              </li>
              <li>
                <strong>Staging and Committing</strong>: The changes are staged with <code>git add</code> and committed with{" "}
                <code>git commit</code>, often with clear messages.
              </li>
              <li>
                <strong>Pulling Updates</strong>: Before pushing, developers pull updates from the remote repository to ensure their branch
                is up to date.
              </li>
              <li>
                <strong>Push Changes</strong>: The changes are pushed to the remote branch using <code>git push</code>.
              </li>
              <li>
                <strong>Creating Pull Requests</strong>: A pull request is created to merge the changes back into the main branch, allowing
                for code reviews and discussions.
              </li>
              <li>
                <strong>Merging</strong>: After approval, the changes are merged into the main branch, completing the workflow.
              </li>
            </ol>
            This structured approach helps teams collaborate effectively, maintain code quality, and streamline the development process.
          </>
        ),
      },
    ],
  },
  "package-managers": {
    name: "Package Managers",
    image: "",
    questions: [
      {
        question: "What is npm?",
        answer: (
          <>
            npm (Node Package Manager) is the default package manager for Node.js.
            <b />
            It allows developers to install, share, and manage libraries (packages) that can be used in their projects, simplifying the
            process of adding third-party tools and frameworks.
          </>
        ),
      },
      {
        question: "How do you initialize a new npm project?",
        answer: (
          <>
            To initialize a new npm project, run <code>npm init</code> in your project folder. This command creates a{" "}
            <code>package.json</code> file that stores information about your project and its dependencies. Use <code>npm init -y</code> to
            quickly generate a default <code>package.json</code> file.
          </>
        ),
      },
      {
        question: "What is the package.json file?",
        answer: (
          <>
            The <code>package.json</code> file is a configuration file that contains metadata about your project, including the project
            name, version, author, scripts, and a list of dependencies. It helps npm understand the structure of your project and its
            dependencies.
          </>
        ),
      },
      {
        question: "What is the difference between dependencies and devDependencies?",
        answer: (
          <>
            <strong>Dependencies</strong> are packages that your project needs to run in production, such as frameworks or utility
            libraries. They are listed under the <code>"dependencies"</code> section in the <code>package.json</code> file.
            <br />
            <strong>devDependencies</strong> are packages that are only needed during development, like testing tools or build scripts. They
            are listed under the <code>"devDependencies"</code> section.
          </>
        ),
      },
      {
        question: "What is node_modules?",
        answer: (
          <>
            <code>node_modules</code> is a folder that contains all the installed npm packages and their dependencies for a project. It acts
            as a local storage for packages, allowing the project to use the required libraries without needing to reinstall them each time.
            This folder is crucial for npm to resolve and link the packages specified in the <code>package.json</code> file.
          </>
        ),
      },
    ],
  },
  react: {
    name: "React",
    image: "",
    questions: [
      {
        question: "What is React?",
        answer: <>React is a JavaScript library for building user interfaces.</>,
      },
      {
        question: "How does React work?",
        answer: (
          <>
            React creates a Virtual DOM to efficiently update and render components. It compares the virtual DOM with the real DOM and makes
            only necessary changes, improving performance.,
          </>
        ),
      },
      {
        question: "What is virtual DOM and how is it used in React?",
        answer: (
          <>
            <br />
            The <strong>DOM (Visual representation of the Document Object Model)</strong> is basically what you see on the browser: all the
            objects rendered.
            <br />
            The Virtual DOM is a tool that React uses to track changes and it acts as a virtual layer between the real DOM and the
            application. When a state or data change occurs in the application, React updates the Virtual DOM first. Then, it efficiently
            updates only the parts of the real DOM that have changed, rather than re-rendering the entire DOM.,
          </>
        ),
      },
      {
        question: "Name disadvantage of Virtual DOM",
        answer: (
          <>Everything in React has to go through the Virtual DOM. So if you have a lot of stuf you could have a performance issue.</>
        ),
      },
      {
        question: "How could you bypass the Virtual DOM?",
        answer: (
          <>
            With signals. Signals are a mechanism that allow you to directly manipulate the DOM. This can be useful when you want to
            optimize performance for specific cases like to avoid having too many objects in the Virtual DOM
          </>
        ),
      },
      {
        question: "What is .jsx?",
        answer: (
          <>.jsx is a JavaScript file with JSX syntax. JSX allows you to write HTML elements in JavaScript and place them in the DOM.</>
        ),
      },
      {
        question: "Why is 'class' used as 'classname' in React?",
        answer: (
          <>
            In React, 'className' is used instead of 'class' to avoid conflicts with the JavaScript 'class' keyword. 'className' specifies
            CSS classes for an element.
          </>
        ),
      },
      {
        question: "What is the difference between controlled and uncontrolled inputs?",
        answer: (
          <>
            Controlled: A controlled input has its value managed by React state. You access the input value through state and update it
            using a setState function when the onChange event is triggered.
            <br />
            Uncontrolled: An uncontrolled input does not have its value managed by React state. Instead, you use a ref to directly access
            the input value from the DOM.
          </>
        ),
      },
      {
        question: "What are some of the hooks commonly used in React?",
        answer: (
          <>
            <div>
              One of the most common hooks in React are:
              <ul>
                <li>useEffect: for performing side effects such as data fetching.</li>
                <li>useState: for managing state in a functional component. It triggers a re-render when the state changes.</li>
                <li>
                  useRef: for holding mutable values that do not trigger a re-render when updated. It is also used to access DOM elements
                  directly, meaning you can get a reference to a DOM element and manipulate it as needed (e.g., focusing an input field).
                </li>
                <li>
                  useContext: for accessing <strong>global state</strong> across the component tree without passing props down manually at
                  every level avoiding <strong>prop drilling</strong>.
                </li>
                <li>
                  useReducer: for managing state, especially complex state logic or when there are multiple state variables that need to be
                  managed together. It is often used with useContext for global state management.
                </li>
                <li>
                  useCallback: for memorizing functions to prevent them from being recreated on every render, improving performance in
                  components with expensive calculations. Very useful for when we need to use a function inside a useEffect to not enter on
                  a loop.
                </li>
                <li>
                  useMemo: for memoizing values to prevent expensive calculations on every render. It recomputes the value only when one of
                  its dependencies changes
                </li>
                <li>useTransition: for managing state transitions, giving a smoother user experience.</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        question: "What is the difference between useContext and useReducer?",
        answer: (
          <>
            useContext is used for consuming context values created by React Context API.
            <br />
            useReducer is a hook used for managing state in a more complex way than useState by dispatching actions (type and payload) to
            the reducer.
            <br />
            One creates the initial state and the other manages the state changes.
          </>
        ),
      },
      {
        question: "What is the difference between useMemo and useCallback?",
        answer: (
          <>
            In essence, useMemo is used to memoize values (like computed results) and useCallback is used to memoize functions (like event
            handlers), both aiming to improve performance by reducing unnecessary computations or renders.
          </>
        ),
      },
      {
        question: "What does it mean that a component is subscribed to a context?",
        answer: <>It means that the component can access the context's values and react to changes in those values. </>,
      },
      {
        question: "What is props drilling?",
        answer: (
          <>
            Prop drilling happens when components pass data through multiple levels of nested components using props, even if the
            intermediate components don't use that data themselves. It can make code harder to manage and understand.
          </>
        ),
      },
      {
        question: "What is the difference between useContext and zustand or Redux?",
        answer: (
          <>
            In essence, useContext is useful for accessing global state in a component tree, whereas state management libraries are for more
            scalable applications. Redux for big apps and Zustand for mid large apps.
          </>
        ),
      },
      {
        question: "What is the recommended way to structure your React code?",
        answer: (
          <>
            When structuring <br />
            React code, it's recommended to focus on clear separation of concerns and maintainability:
            <br />
            <ul>
              <li>
                Use folders to group related files, for example the different UI views or different functionalities like using an API.
              </li>
              <li>
                Modularize code: break the idea into small reusable components, each responsible for a single aspect of the UI or
                functionality.
              </li>
              <li>Use folders to group related files.</li>
            </ul>
            So when people see the code they understand what is going on and they don't spend much time trying to understand what is
            happening.
          </>
        ),
      },
      {
        question: "What is a good way to test React appliactions?",
        answer: (
          <>
            You can use a combination of unit testing, integration testing, and end-to-end (E2E) testing:
            <ul>
              <li>
                Unit testing: test individual components or functions in insolation to ensure that they work as expected. Jest, React
                Testing Library, and Jest matchers are commonly used to write unit tests.
              </li>
              <li>
                Integration Testing: verify interactions between components. Tools like Cypress or Selenium can be used for E2E testing.
              </li>
              <li>E2E: Test application workflows from start to finish</li>
            </ul>
          </>
        ),
      },
    ],
  },
  "build-tools": {
    name: "Build Tools",
    image: "",
    questions: [
      {
        question: "What are Build Tools?",
        answer: (
          <>
            Build tools are software utilities designed to automate the process of creating executable applications from source code. They
            handle tasks such as compiling, linking, minifying, and bundling code, as well as running tests and managing dependencies.
          </>
        ),
      },
      {
        question: "What is Prettier?",
        answer: (
          <>
            Prettier is an opinionated code formatter that automatically formats your code based on predefined rules. It helps ensure
            consistent code style across a project by reformatting the code to look the same.
          </>
        ),
      },
      {
        question: "What are Module Bundlers?",
        answer: (
          <>
            Module bundlers are tools that take your JavaScript code, along with its dependencies, and bundle it into a single file (or
            smaller files) that can be run in a browser. This helps optimize performance and manage different parts of a codebase. Common
            bundlers include Webpack, Vite, Rollup and Parcel.
          </>
        ),
      },
      {
        question: "What is Vite and esbuild?",
        answer: (
          <>
            <ul>
              <li>
                Vite is a modern build tool and development server designed for fast and lean development of web applications.
                <br />
                Vite leverages native ES modules in the browser to enable near-instantaneous server start and lightning-fast hot module
                replacement (HMR).
              </li>
              <li>
                esbuild is a high-performance JavaScript bundler and minifier designed for speed and efficiency. It's written in Go and
                compiles to native code, making it significantly faster than traditional JavaScript-based build tools.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  testing: {
    name: "Testing",
    image: "",
    questions: [
      {
        question: "Name testing types",
        answer: (
          <>
            <ul>
              <li>
                <strong>Unit testing</strong>: Verifying individual components or functions.
              </li>
              <li>
                <strong>Integration testing</strong>: Checking interactions between different parts of the app.
              </li>
              <li>
                <strong>Functional testing / End to end (E2E)</strong>: Ensuring the app meets specified requirements.
              </li>
              <li>
                <strong>UI/UX testing</strong>: Evaluating the user interface and experience.
              </li>
              <li>
                <strong>Performance testing</strong>: Assessing app speed, responsiveness and stability.
              </li>
              <li>
                <strong>Security testing</strong>: Identifying vulnerabilities and ensuring data protection.
              </li>
              <li>
                <strong>Accessibility testing</strong>: Verifying usability for people with disabilities.
              </li>
              <li>
                <strong>Compatibility testing</strong>: Checking functionality across different devices and platforms.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "What is Vitest?",
        answer: (
          <>
            Vitest is a testing framework for JavaScript that allows you to write unit tests for your code.
            <br />
            Vitest provides a Jest-compatible API, making migration easier for projects already using Jest. It supports features like
            snapshot testing, mocking, and code coverage out of the box
          </>
        ),
      },
      {
        question: "What is Playwright?",
        answer: (
          <>
            Playwright is a testing library for automating web applications. It allows you to write tests that can interact with web pages
            in a browser, simulating user actions like clicking, typing, and navigating. Playwright supports multiple browsers (like Chrome,
            Firefox, and Safari) and enables cross-browser testing, making it ideal for end-to-end testing.
          </>
        ),
      },
    ],
  },
  authentication: {
    name: "Authentication",
    image: "",
    questions: [
      {
        question: "What is a cookie?",
        answer: (
          <>
            A cookie is a small piece of data stored on the user's browser by a website. Cookies are used to remember information about the
            user, such as login status, preferences, or session data. They help websites provide a personalized experience and can be used
            for tracking and analytics purposes.
          </>
        ),
      },
      {
        question: "What is the difference between cookie, localStorage, and sessionStorage?",
        answer: (
          <>
            <ul>
              <li>
                <strong>Cookies</strong> are small pieces of data stored on the client side and sent to the server with every request. They
                have an expiration date and are commonly used for authentication or tracking user behavior.
                <br />
                Server-side cookie creation Header:
                <br />
                <code>
                  Set-Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...; HttpOnly; Secure; SameSite=Strict; Path=/; Expires=Fri, 31 Dec
                  2024 12:00:00 GMT;
                </code>
                <br />
                The client's browser stores the cookie. The next requests to the server, the JWT is automatically included in the Cookie
                header.
              </li>
              <li>
                <strong>localStorage:</strong> Used for storing larger amounts of data locally with no expiration date.
                <br />
                <code>localStorage.setItem("theme", "dark");</code>
                <br />
                This will store a `theme` value set to `"dark"` in the browser. The value persists even if the browser is closed.
              </li>
              <li>
                <strong>sessionStorage</strong> is similar to localStorage, but its data is cleared when the browser tab is closed.
                <br />
                <code>sessionStorage.setItem("currentTab", "home");</code>
                <br />
                This stores `currentTab` with a value of `"home"`. The data will be lost if the tab is closed or the session ends.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "What are Authentication Strategies?",
        answer: (
          <>
            Authentication strategies are methods or techniques used to verify the identity of a user or system in order to grant access to
            a protected resource.
          </>
        ),
      },
      {
        question: "What is Basic Authentication?",
        answer: (
          <>
            <strong>Basic Authentication</strong> is a simple authentication method where the client sends a base64-encoded string
            containing the username and password with each request. While easy to implement, it's not very secure unless used over HTTPS, as
            credentials can be easily intercepted.
          </>
        ),
      },
      {
        question: "What is Session-Based Authentication?",
        answer: (
          <>
            <strong>Session-Based Authentication</strong> relies on storing a session on the server once the user is authenticated. A
            session ID is sent to the client as a cookie, which is included in subsequent requests. The server checks this ID to
            authenticate the user.
            <br />
            This method requires managing sessions and can consume server resources.
          </>
        ),
      },
      {
        question: "What is Token-Based Authentication and JWT?",
        answer: (
          <>
            <strong>Token-Based Authentication</strong> uses a token (usually a JWT) instead of sessions.
            <br />
            After the user logs in, a token is generated and sent to the client. This token is included in each request, and the server
            verifies its validity without the need to store any session information. This method is stateless and suitable for APIs.
            <br />A JWT (JSON Web Token) contains encoded data about the user. It can be signed and optionally encrypted, allowing the
            server to verify its authenticity without needing to look up a session.
          </>
        ),
      },
      {
        question: "What is OAuth?",
        answer: (
          <>
            OAuth (Open Authorization) is an authorization framework that allows third-party applications to access user data without
            exposing user credentials.
            <br />
            For example, logging in to an app using Google or Facebook is often done via OAuth. It typically involves an authorization
            server, resource owner, and client application.
          </>
        ),
      },
      {
        question: "What is SSO (Single Sign-On)?",
        answer: (
          <>
            Single Sign-On (SSO) is an authentication method that allows users to log in once and gain access to multiple systems without
            re-entering credentials. It's commonly used in enterprise environments to simplify user management across different
            applications.
          </>
        ),
      },
      {
        question: "What is Multi-Factor Authentication (MFA)?",
        answer: (
          <>
            Multi-Factor Authentication (MFA) requires users to provide two or more verification factors to access a resource. This could
            include something they know (password), something they have (a phone or token), and something they are (biometric data).
            <br />
            It adds an extra layer of security.
          </>
        ),
      },
      {
        question: "What is Social Authentication?",
        answer: (
          <>
            Social Authentication allows users to log in to an application using credentials from social media platforms like Google,
            Facebook, or Twitter. This simplifies the sign-up and login process for users, as they don't need to create new accounts and
            passwords for every service.
          </>
        ),
      },
      {
        question: "What is API Key Authentication?",
        answer: (
          <>
            API Key Authentication uses a unique key provided to the client when accessing an API.
            <br />
            The client includes this key in the request headers, and the server verifies it to grant or deny access. API keys are less
            secure than other methods like OAuth, as they can be easily shared or leaked.
          </>
        ),
      },
      {
        question: "What is OpenID Connect (OIDC)?",
        answer: (
          <>
            OpenID Connect is an identity layer built on top of OAuth 2.0 that adds authentication to the authorization process. It enables
            clients to verify the identity of a user and obtain basic profile information. OIDC is widely used for single sign-on scenarios.
          </>
        ),
      },
    ],
  },
  "web-security": {
    name: "Web Security",
    image: "",
    questions: [
      {
        question: "How to prevent a Cross-Site Scripting (XSS) attack?",
        answer: (
          <>
            To protect against SQL injection, use prepared statements and parameterized queries when interacting with the database. This
            ensures that user input is treated as data, not executable code. Additionally, always validate and sanitize user input.
          </>
        ),
      },
      {
        question: "How to mitigate Cross-Site Request Forgery (CSRF)?",
        answer: (
          <>
            To mitigate CSRF attacks, implement anti-CSRF tokens in forms and verify them on the server. Also, ensure that state-changing
            requests (like POST) require user authentication and consider using the SameSite cookie attribute.
          </>
        ),
      },
      {
        question: "How to implement Content Security Policy (CSP)?",
        answer: (
          <>
            To implement CSP, add a `Content-Security-Policy` header in your HTTP response.
            <br />
            This header specifies which sources are trusted for loading content, helping to prevent XSS attacks by controlling where
            scripts, styles, and other resources can be loaded from.
          </>
        ),
      },
      {
        question: "How to secure authentication and session management?",
        answer: (
          <>
            Secure authentication by using strong password policies, implementing account lockout mechanisms, and requiring multi-factor
            authentication (MFA). For session management, use secure, HttpOnly cookies and set short expiration times for sessions.
          </>
        ),
      },
      {
        question: "How to validate and sanitize input?",
        answer: (
          <>
            Validate input by checking that it conforms to expected formats (e.g., using regex for email). Sanitize input by escaping
            special characters or using libraries that handle sanitization to prevent injection attacks.
          </>
        ),
      },
      {
        question: "How to protect against clickjacking?",
        answer: (
          <>
            Protect against clickjacking by using the `X-Frame-Options` header set to `DENY` or `SAMEORIGIN`.
            <br />
            This prevents your site from being embedded in iframes on other domains, mitigating the risk of malicious framing attacks.
          </>
        ),
      },
      {
        question: "How to secure cookie handling?",
        answer: (
          <>
            Secure cookie handling involves setting the `HttpOnly` and `Secure` flags on cookies to prevent access via JavaScript and ensure
            they are only sent over HTTPS. Additionally, consider using the `SameSite` attribute to restrict how cookies are sent with
            cross-origin requests.
          </>
        ),
      },
      {
        question: "Why are regular security updates and patch management important?",
        answer: (
          <>
            Regular security updates and patch management are crucial because they fix known vulnerabilities in software. Keeping your
            software up to date reduces the risk of exploitation by attackers, ensuring that your systems remain secure against new threats.
          </>
        ),
      },
    ],
  },
  typescript: {
    name: "Typescript",
    image: "",
    questions: [
      {
        question: "What is TypeScript?",
        answer: (
          <>
            TypeScript is a superset of JavaScript that adds static typing to the language. It allows developers to catch errors at compile
            time rather than runtime, making code more robust and easier to maintain.
          </>
        ),
      },
      {
        question: "What are the benefits of using TypeScript?",
        answer: (
          <>
            The benefits of using TypeScript include improved code quality, better tooling support (like autocompletion and refactoring),
            and the ability to catch errors early during development. It also enhances collaboration in large teams.
          </>
        ),
      },
      {
        question: "What are interfaces in TypeScript?",
        answer: (
          <>
            Interfaces in TypeScript are used to define the structure of an object.
            <br />
            They allow you to specify the properties and methods that an object must implement, providing a contract for classes and
            functions.
          </>
        ),
      },
      {
        question: "What is the difference between 'interface' and 'type' in TypeScript?",
        answer: (
          <>
            The main difference is that `interface` is specifically for defining object shapes and can be extended, while `type` can define
            more complex types, including unions and tuples.
            <br />
            Both can be used to achieve similar outcomes, but interfaces are generally preferred for object definitions.
          </>
        ),
      },
      {
        question: "What are generics in TypeScript?",
        answer: (
          <>
            Generics allow you to create reusable components that can work with any data type while maintaining type safety. They enable you
            to define functions, classes, and interfaces that can take a type parameter.
          </>
        ),
      },
      {
        question: "How does TypeScript handle null and undefined?",
        answer: (
          <>
            TypeScript has strict null checking options that differentiate between `null` and `undefined`. You can enable strict mode to
            ensure that variables must explicitly be assigned a value, helping to avoid runtime errors related to null or undefined values.
          </>
        ),
      },
      {
        question: "What are decorators in TypeScript?",
        answer: (
          <>
            Decorators are special types of declarations that can be attached to classes, methods, or properties to modify their behavior.
            They are commonly used in frameworks like Angular for dependency injection and property binding.
          </>
        ),
      },
      {
        question: "What is the purpose of 'as' in TypeScript?",
        answer: (
          <>
            The `as` keyword in TypeScript is used for type assertions, allowing you to specify a more specific type for a variable.
            <br />
            This is useful when you know more about the type than TypeScript can infer.
          </>
        ),
      },
      {
        question: "What is type inference in TypeScript?",
        answer: (
          <>
            Type inference is a feature in TypeScript where the compiler automatically deduces the type of a variable based on its value.
            <br />
            This means you don't always have to explicitly specify types, making the code cleaner.
          </>
        ),
      },
      {
        question: "What is the spread operator in TypeScript?",
        answer: (
          <>
            The spread operator (`...`) is used to expand or spread iterable objects, such as arrays or objects.
            <br />
            In TypeScript, it allows you to easily merge arrays or objects, clone them, and pass multiple arguments to functions.
            <br />
            <br />
            <code>
              //Cloning an Array (Same idea for Objects)
              <br />
              const originalArray = [1, 2, 3];
              <br />
              const clonedArray = [...originalArray];
              <br />
              console.log(clonedArray); // Output: [1, 2, 3]
            </code>
            <br />
            <code>
              //Mergin Arrays (Same idea for Objects)
              <br />
              const array1 = [1, 2, 3];
              <br />
              const array2 = [4, 5, 6];
              <br />
              const mergedArray = [...array1, ...array2];
              <br />
              console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
            </code>
            <br />
          </>
        ),
      },
      {
        question: "What is destructuring assignment in TypeScript?",
        answer: (
          <>
            Destructuring assignment is a syntax that allows you to unpack values from arrays or properties from objects into distinct
            variables.
            <br />
            <br />
            <code>
              //Extracts the `response` property from the object returned by `myFunction()`.
              <br />
              const &#123; response &#125; = myFunction();
            </code>
            <code>
              //For arrays:
              <br />
              const fruits = ['apple', 'banana', 'cherry'];
              <br />
              const [firstFruit, secondFruit] = fruits;
              <br />
              console.log(firstFruit); // Output: 'apple'
              <br />
              console.log(secondFruit); // Output: 'banana'
            </code>
          </>
        ),
      },
    ],
  },
  ssr: {
    name: "SSR",
    image: "",
    questions: [
      {
        question: "What is Server Side Rendering (SSR)?",
        answer: (
          <>
            Server-side rendering (SSR) is a technique used in web development where web pages are generated on the server and sent to the
            client as fully rendered HTML.
          </>
        ),
      },
    ],
  },
};
