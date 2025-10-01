// Enhanced Course Data with Complete Lesson Content and Flashcards
const coursesData = [
    {
        id: 1,
        title: "Introduction to HTML",
        description: "Learn the fundamentals of HTML, the standard markup language for creating web pages. This course covers basic tags, structure, and semantic elements.",
        shortDescription: "Learn the basics of HTML structure and tags.",
        image: "https://picsum.photos/400/200?random=1",
        completed: false,
        lessons: [
            {
                title: "Lesson 1: What is HTML?",
                completed: false,
                content: `
                    <h3>Understanding HTML</h3>
                    <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display content.</p>
                    
                    <h4>Key Concepts:</h4>
                    <ul>
                        <li><strong>HyperText</strong>: Text that contains links to other texts</li>
                        <li><strong>Markup</strong>: Using tags to define elements and their properties</li>
                        <li><strong>Language</strong>: A structured way to communicate with browsers</li>
                    </ul>
                    
                    <h4>Basic HTML Structure:</h4>
                    <div class="code-block">
                        <code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;My First Heading&lt;/h1&gt;
    &lt;p&gt;My first paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </code>
                    </div>
                    
                    <h4>Why HTML Matters:</h4>
                    <p>HTML provides the foundation for all web content. Without HTML, web browsers wouldn't know how to structure and display text, images, and other media.</p>
                    
                    <h4>HTML Evolution:</h4>
                    <p>HTML has evolved through several versions: HTML, HTML 2.0, HTML 3.2, HTML 4.01, XHTML, and finally HTML5 - the current standard that introduced many new semantic elements and APIs.</p>
                `,
                notes: [
                    { front: "What does HTML stand for?", back: "HyperText Markup Language" },
                    { front: "What is the purpose of HTML?", back: "To structure content on the web and define webpage elements" },
                    { front: "What is the basic building block of HTML?", back: "Elements defined by tags like &lt;p&gt; for paragraphs" },
                    { front: "What version of HTML is current?", back: "HTML5" },
                    { front: "What does DOCTYPE declaration do?", back: "Tells the browser which version of HTML the page is using" }
                ]
            },
            {
                title: "Lesson 2: Basic HTML Tags",
                completed: false,
                content: `
                    <h3>Essential HTML Tags</h3>
                    <p>HTML tags are the building blocks of web pages. Each tag serves a specific purpose in structuring and formatting content.</p>
                    
                    <h4>Common HTML Tags:</h4>
                    <ul>
                        <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong>: Headings (h1 is largest, h6 is smallest)</li>
                        <li><strong>&lt;p&gt;</strong>: Paragraphs</li>
                        <li><strong>&lt;a&gt;</strong>: Links (anchors)</li>
                        <li><strong>&lt;img&gt;</strong>: Images</li>
                        <li><strong>&lt;ul&gt; and &lt;ol&gt;</strong>: Unordered and ordered lists</li>
                        <li><strong>&lt;li&gt;</strong>: List items</li>
                        <li><strong>&lt;div&gt;</strong>: Division or section</li>
                        <li><strong>&lt;span&gt;</strong>: Inline container</li>
                    </ul>
                    
                    <h4>Example with Common Tags:</h4>
                    <div class="code-block">
                        <code>
&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Subheading&lt;/h2&gt;
&lt;p&gt;This is a paragraph with a &lt;a href="#"&gt;link&lt;/a&gt;.&lt;/p&gt;
&lt;ul&gt;
    &lt;li&gt;First item&lt;/li&gt;
    &lt;li&gt;Second item&lt;/li&gt;
&lt;/ul&gt;
&lt;img src="image.jpg" alt="Description"&gt;
                        </code>
                    </div>
                    
                    <h4>Tag Attributes:</h4>
                    <p>Tags can have attributes that provide additional information:</p>
                    <ul>
                        <li><code>href</code> in <code>&lt;a&gt;</code> specifies the link destination</li>
                        <li><code>src</code> in <code>&lt;img&gt;</code> specifies the image source</li>
                        <li><code>alt</code> in <code>&lt;img&gt;</code> provides alternative text</li>
                        <li><code>class</code> and <code>id</code> for styling and JavaScript</li>
                    </ul>
                    
                    <h4>Self-Closing Tags:</h4>
                    <p>Some tags don't have closing tags because they don't contain content:</p>
                    <div class="code-block">
                        <code>
&lt;img src="photo.jpg" alt="Photo"&gt;
&lt;br&gt;
&lt;hr&gt;
&lt;input type="text"&gt;
                        </code>
                    </div>
                `,
                notes: [
                    { front: "Which tag defines the document type?", back: "&lt;!DOCTYPE html&gt;" },
                    { front: "What tag contains the visible page content?", back: "&lt;body&gt;" },
                    { front: "Which tag is used for the largest heading?", back: "&lt;h1&gt;" },
                    { front: "What tag creates a paragraph?", back: "&lt;p&gt;" },
                    { front: "How to create a hyperlink?", back: "&lt;a href='url'&gt;Link Text&lt;/a&gt;" },
                    { front: "What is a self-closing tag?", back: "A tag that doesn't need a separate closing tag, like &lt;img&gt;" }
                ]
            },
            {
                title: "Lesson 3: Creating Links and Navigation",
                completed: false,
                content: `
                    <h3>Working with Links and Navigation</h3>
                    <p>Links are what make the web "web-like" - they connect different pages and resources together.</p>
                    
                    <h4>Anchor Tag Syntax:</h4>
                    <div class="code-block">
                        <code>
&lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;
                        </code>
                    </div>
                    
                    <h4>Link Types:</h4>
                    <ul>
                        <li><strong>Absolute URLs</strong>: Full web addresses starting with http:// or https://</li>
                        <li><strong>Relative URLs</strong>: Paths relative to current page</li>
                        <li><strong>Internal Links</strong>: Links to other sections on the same page using #id</li>
                        <li><strong>Email Links</strong>: Links that open email client</li>
                        <li><strong>Telephone Links</strong>: Links that dial phone numbers on mobile</li>
                    </ul>
                    
                    <h4>Link Attributes:</h4>
                    <div class="code-block">
                        <code>
&lt;!-- Open in new tab --&gt;
&lt;a href="page.html" target="_blank" rel="noopener"&gt;
    Open in New Tab
&lt;/a&gt;

&lt;!-- Email link --&gt;
&lt;a href="mailto:email@example.com"&gt;Email Us&lt;/a&gt;

&lt;!-- Telephone link --&gt;
&lt;a href="tel:+1234567890"&gt;Call Us&lt;/a&gt;

&lt;!-- Internal link --&gt;
&lt;a href="#section"&gt;Jump to Section&lt;/a&gt;
                        </code>
                    </div>
                    
                    <h4>Creating Navigation Menus:</h4>
                    <div class="code-block">
                        <code>
&lt;nav&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="home.html"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;
                        </code>
                    </div>
                    
                    <h4>Best Practices:</h4>
                    <ul>
                        <li>Use descriptive link text</li>
                        <li>Ensure links are accessible (proper contrast, clear purpose)</li>
                        <li>Use <code>target="_blank"</code> sparingly for external links</li>
                        <li>Include <code>rel="noopener"</code> for security with <code>target="_blank"</code></li>
                        <li>Provide meaningful <code>alt</code> text for image links</li>
                    </ul>
                `,
                notes: [
                    { front: "Which tag creates a hyperlink?", back: "&lt;a&gt;" },
                    { front: "What attribute specifies the link destination?", back: "href" },
                    { front: "How to make a link open in a new tab?", back: 'target="_blank"' },
                    { front: "What is a relative URL?", back: "A URL that is relative to the current page's location" },
                    { front: "How to link to an email address?", back: '&lt;a href="mailto:email@example.com"&gt;Email Us&lt;/a&gt;' },
                    { front: "What does rel='noopener' do?", back: "Prevents security vulnerabilities when opening links in new tabs" }
                ]
            },
            {
                title: "Lesson 4: HTML Forms and Inputs",
                completed: false,
                content: `
                    <h3>Creating Interactive Forms</h3>
                    <p>HTML forms allow users to enter data that can be sent to a server for processing. They're essential for user interaction on websites.</p>
                    
                    <h4>Basic Form Structure:</h4>
                    <div class="code-block">
                        <code>
&lt;form action="/submit" method="POST"&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email"&gt;
    
    &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
                        </code>
                    </div>
                    
                    <h4>Common Input Types:</h4>
                    <ul>
                        <li><code>text</code>: Single-line text input</li>
                        <li><code>email</code>: Email address with validation</li>
                        <li><code>password</code>: Masked password input</li>
                        <li><code>number</code>: Numeric input</li>
                        <li><code>date</code>: Date picker</li>
                        <li><code>checkbox</code>: Multiple selection</li>
                        <li><code>radio</code>: Single selection from options</li>
                        <li><code>file</code>: File upload</li>
                        <li><code>textarea</code>: Multi-line text input</li>
                        <li><code>select</code>: Dropdown menu</li>
                    </ul>
                    
                    <h4>Form Attributes:</h4>
                    <div class="code-block">
                        <code>
&lt;form action="/process" method="POST" enctype="multipart/form-data"&gt;
    &lt;!-- Form content --&gt;
&lt;/form&gt;
                        </code>
                    </div>
                    
                    <h4>Advanced Form Example:</h4>
                    <div class="code-block">
                        <code>
&lt;form&gt;
    &lt;fieldset&gt;
        &lt;legend&gt;Personal Information&lt;/legend&gt;
        
        &lt;label for="username"&gt;Username:&lt;/label&gt;
        &lt;input type="text" id="username" name="username" required&gt;
        
        &lt;label for="birthdate"&gt;Birthdate:&lt;/label&gt;
        &lt;input type="date" id="birthdate" name="birthdate"&gt;
        
        &lt;label&gt;Gender:&lt;/label&gt;
        &lt;input type="radio" id="male" name="gender" value="male"&gt;
        &lt;label for="male"&gt;Male&lt;/label&gt;
        
        &lt;input type="radio" id="female" name="gender" value="female"&gt;
        &lt;label for="female"&gt;Female&lt;/label&gt;
    &lt;/fieldset&gt;
    
    &lt;button type="submit"&gt;Register&lt;/button&gt;
    &lt;button type="reset"&gt;Clear&lt;/button&gt;
&lt;/form&gt;
                        </code>
                    </div>
                    
                    <h4>Form Validation:</h4>
                    <p>HTML5 introduced built-in form validation using attributes like <code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code>, etc.</p>
                `,
                notes: [
                    { front: "Which tag creates a form?", back: "&lt;form&gt;" },
                    { front: "What input type creates a text field?", back: 'type="text"' },
                    { front: "How to create a submit button?", back: '&lt;input type="submit"&gt; or &lt;button type="submit"&gt;' },
                    { front: "What does the 'required' attribute do?", back: "Makes a form field mandatory to fill out" },
                    { front: "How to create a dropdown menu?", back: "Using &lt;select&gt; with &lt;option&gt; elements" },
                    { front: "What's the difference between GET and POST methods?", back: "GET shows data in URL, POST sends data in request body" }
                ]
            },
            {
                title: "Lesson 5: Semantic HTML Elements",
                completed: false,
                content: `
                    <h3>Semantic HTML for Better Structure</h3>
                    <p>Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer, improving accessibility, SEO, and code maintainability.</p>
                    
                    <h4>Why Semantic HTML Matters:</h4>
                    <ul>
                        <li><strong>Accessibility</strong>: Screen readers can better understand page structure</li>
                        <li><strong>SEO</strong>: Search engines can better index content</li>
                        <li><strong>Maintainability</strong>: Code is easier to read and understand</li>
                        <li><strong>Future-proofing</strong>: Better compatibility with future technologies</li>
                    </ul>
                    
                    <h4>Common Semantic Elements:</h4>
                    <div class="code-block">
                        <code>
&lt;header&gt;
    &lt;h1&gt;Website Header&lt;/h1&gt;
    &lt;nav&gt;...&lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
    &lt;article&gt;
        &lt;h2&gt;Article Title&lt;/h2&gt;
        &lt;p&gt;Article content...&lt;/p&gt;
    &lt;/article&gt;
    
    &lt;aside&gt;
        &lt;h3&gt;Related Links&lt;/h3&gt;
        &lt;ul&gt;...&lt;/ul&gt;
    &lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;
    &lt;p&gt;Copyright information&lt;/p&gt;
&lt;/footer&gt;
                        </code>
                    </div>
                    
                    <h4>Semantic vs Non-Semantic:</h4>
                    <div class="code-block">
                        <code>
&lt;!-- Non-semantic --&gt;
&lt;div id="header"&gt;...&lt;/div&gt;
&lt;div class="content"&gt;...&lt;/div&gt;
&lt;div id="footer"&gt;...&lt;/div&gt;

&lt;!-- Semantic --&gt;
&lt;header&gt;...&lt;/header&gt;
&lt;main&gt;...&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;
                        </code>
                    </div>
                    
                    <h4>HTML5 Semantic Elements:</h4>
                    <ul>
                        <li><code>&lt;header&gt;</code>: Introductory content</li>
                        <li><code>&lt;nav&gt;</code>: Navigation links</li>
                        <li><code>&lt;main&gt;</code>: Main content</li>
                        <li><code>&lt;article&gt;</code>: Self-contained composition</li>
                        <li><code>&lt;section&gt;</code>: Thematic grouping</li>
                        <li><code>&lt;aside&gt;</code>: Side content</li>
                        <li><code>&lt;footer&gt;</code>: Footer content</li>
                        <li><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code>: Media with caption</li>
                        <li><code>&lt;time&gt;</code>: Machine-readable time</li>
                    </ul>
                    
                    <h4>Complete Semantic Layout:</h4>
                    <div class="code-block">
                        <code>
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;My Website&lt;/h1&gt;
        &lt;nav&gt;...&lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;article&gt;
            &lt;header&gt;
                &lt;h2&gt;Article Title&lt;/h2&gt;
                &lt;time datetime="2023-01-01"&gt;January 1, 2023&lt;/time&gt;
            &lt;/header&gt;
            &lt;section&gt;
                &lt;h3&gt;Introduction&lt;/h3&gt;
                &lt;p&gt;...&lt;/p&gt;
            &lt;/section&gt;
        &lt;/article&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
        &lt;p&gt;&copy; 2023 My Website&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
                        </code>
                    </div>
                `,
                notes: [
                    { front: "What is semantic HTML?", back: "HTML that conveys meaning about the content" },
                    { front: "Name three semantic elements", back: "&lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, &lt;section&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;aside&gt;" },
                    { front: "Why use semantic elements?", back: "Better accessibility, SEO, and code readability" },
                    { front: "What's the difference between &lt;article&gt; and &lt;section&gt;?", back: "&lt;article&gt; is self-contained, &lt;section&gt; is thematic grouping" },
                    { front: "What does &lt;time&gt; element do?", back: "Represents time in machine-readable format" },
                    { front: "How does semantic HTML help screen readers?", back: "Provides better navigation and understanding of page structure" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "CSS Fundamentals",
        description: "Master the basics of CSS to style your web pages. Learn about selectors, the box model, positioning, and responsive design principles.",
        shortDescription: "Master the basics of CSS styling and layout.",
        image: "https://picsum.photos/400/200?random=2",
        completed: false,
        lessons: [
            {
                title: "Lesson 1: CSS Selectors and Properties",
                completed: false,
                content: `
                    <h3>Understanding CSS Selectors</h3>
                    <p>CSS (Cascading Style Sheets) allows you to control the presentation of HTML documents. Selectors are patterns used to select the elements you want to style.</p>
                    
                    <h4>Basic Selector Types:</h4>
                    <ul>
                        <li><strong>Element Selector</strong>: <code>p { }</code> - selects all &lt;p&gt; elements</li>
                        <li><strong>Class Selector</strong>: <code>.className { }</code> - selects elements with class="className"</li>
                        <li><strong>ID Selector</strong>: <code>#idName { }</code> - selects element with id="idName"</li>
                        <li><strong>Universal Selector</strong>: <code>* { }</code> - selects all elements</li>
                        <li><strong>Attribute Selector</strong>: <code>[type="text"] { }</code> - selects by attribute</li>
                    </ul>
                    
                    <h4>Common CSS Properties:</h4>
                    <div class="code-block">
                        <code>
/* Text and Font Properties */
color: #333;
font-size: 16px;
font-family: Arial, sans-serif;
text-align: center;
line-height: 1.5;
font-weight: bold;

/* Box Model Properties */
width: 100%;
height: 200px;
margin: 10px;
padding: 20px;
border: 1px solid #ccc;

/* Background Properties */
background-color: #f0f0f0;
background-image: url('image.jpg');
background-size: cover;
background-position: center;

/* Display and Positioning */
display: block;
position: relative;
top: 10px;
left: 20px;
                        </code>
                    </div>
                    
                    <h4>CSS Syntax:</h4>
                    <p>CSS rules consist of a selector and a declaration block:</p>
                    <div class="code-block">
                        <code>
selector {
    property: value;
    another-property: value;
}
                        </code>
                    </div>
                    
                    <h4>Example:</h4>
                    <div class="code-block">
                        <code>
/* Make all paragraphs red with larger text */
p {
    color: red;
    font-size: 18px;
}

/* Style elements with class "highlight" */
.highlight {
    background-color: yellow;
    font-weight: bold;
    padding: 10px;
}

/* Style element with ID "main-header" */
#main-header {
    text-align: center;
    border-bottom: 2px solid #000;
}

/* Group selectors */
h1, h2, h3 {
    font-family: 'Georgia', serif;
    color: #2c3e50;
}
                        </code>
                    </div>
                    
                    <h4>Specificity and Cascade:</h4>
                    <p>CSS follows specific rules for which styles get applied when there are conflicts:</p>
                    <ul>
                        <li><strong>Specificity</strong>: ID > Class > Element</li>
                        <li><strong>Importance</strong>: <code>!important</code> overrides everything</li>
                        <li><strong>Source Order</strong>: Later rules override earlier ones</li>
                    </ul>
                `,
                notes: [
                    { front: "What does CSS stand for?", back: "Cascading Style Sheets" },
                    { front: "How to select an element by id?", back: "#idName" },
                    { front: "How to select elements by class?", back: ".className" },
                    { front: "What property changes text color?", back: "color" },
                    { front: "How to add space inside an element?", back: "padding" },
                    { front: "What is CSS specificity?", back: "Rules that determine which CSS styles are applied when there are conflicts" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "JavaScript Basics",
        description: "Get started with JavaScript, the programming language of the web. Learn variables, functions, DOM manipulation, and event handling.",
        shortDescription: "Get started with JavaScript programming.",
        image: "https://picsum.photos/400/200?random=3",
        completed: false,
        lessons: [
            {
                title: "Lesson 1: Variables and Data Types",
                completed: false,
                content: `
                    <h3>JavaScript Variables and Data Types</h3>
                    <p>JavaScript is a dynamic programming language that powers interactive features on websites. Understanding variables and data types is fundamental to writing JavaScript code.</p>
                    
                    <h4>Variable Declaration:</h4>
                    <div class="code-block">
                        <code>
// Using let (block-scoped, can be reassigned)
let name = "John";
name = "Jane"; // Valid

// Using const (block-scoped, cannot be reassigned)
const age = 25;
// age = 26; // This would cause an error

// Using var (function-scoped, older way)
var city = "New York";
                        </code>
                    </div>
                    
                    <h4>Primitive Data Types:</h4>
                    <ul>
                        <li><strong>String</strong>: Text data <code>"Hello World"</code></li>
                        <li><strong>Number</strong>: Numeric data <code>42, 3.14</code></li>
                        <li><strong>Boolean</strong>: True/False values <code>true, false</code></li>
                        <li><strong>Undefined</strong>: Variable declared but not assigned</li>
                        <li><strong>Null</strong>: Intentional absence of value</li>
                        <li><strong>Symbol</strong>: Unique and immutable value (ES6)</li>
                        <li><strong>BigInt</strong>: Large integers (ES2020)</li>
                    </ul>
                    
                    <h4>Type Checking and Conversion:</h4>
                    <div class="code-block">
                        <code>
// Type checking
typeof "hello" // "string"
typeof 42      // "number"
typeof true    // "boolean"

// Type conversion
let stringNum = "123";
let actualNum = Number(stringNum); // 123 (number)

let num = 456;
let stringVersion = String(num); // "456" (string)

// Automatic type conversion (coercion)
"5" + 2 // "52" (string concatenation)
"5" - 2 // 3 (numeric subtraction)
                        </code>
                    </div>
                    
                    <h4>Equality Comparisons:</h4>
                    <div class="code-block">
                        <code>
// Loose equality (==) - checks value only
5 == "5"   // true
0 == false // true

// Strict equality (===) - checks value and type
5 === "5"   // false
0 === false // false

// Best practice: Always use === unless you have a specific reason
                        </code>
                    </div>
                    
                    <h4>Working with Strings:</h4>
                    <div class="code-block">
                        <code>
let greeting = "Hello, World!";

// String methods
greeting.length;          // 13
greeting.toUpperCase();   // "HELLO, WORLD!"
greeting.toLowerCase();   // "hello, world!"
greeting.indexOf("World"); // 7
greeting.slice(0, 5);     // "Hello"

// Template literals (ES6)
let name = "Alice";
let message = \`Hello, \${name}! Welcome to JavaScript.\`;
// "Hello, Alice! Welcome to JavaScript."
                        </code>
                    </div>
                    
                    <h4>Common Variable Patterns:</h4>
                    <div class="code-block">
                        <code>
// Multiple variables
let firstName = "John", lastName = "Doe", age = 30;

// Variable swapping
let a = 1, b = 2;
[a, b] = [b, a]; // a=2, b=1

// Constants for configuration
const API_URL = "https://api.example.com";
const MAX_USERS = 1000;
                        </code>
                    </div>
                `,
                notes: [
                    { front: "How to declare a variable?", back: "let, const, or var" },
                    { front: "What are primitive data types in JS?", back: "string, number, boolean, null, undefined, symbol, bigint" },
                    { front: "Difference between == and ===", back: "== checks value only, === checks value and type" },
                    { front: "What does 'const' mean?", back: "Constant - cannot be reassigned after declaration" },
                    { front: "How to check a variable's type?", back: "Using typeof operator" },
                    { front: "What are template literals?", back: "String literals allowing embedded expressions using backticks and ${}" }
                ]
            }
        ]
    }
];

// User Management
let currentUser = null;
let userProgress = {};

// DOM Elements
const homeView = document.getElementById('home-view');
const courseDetailsView = document.getElementById('course-details-view');
const flashcardsView = document.getElementById('flashcards-view');
const coursesContainer = document.getElementById('courses-container');
const courseDetails = document.getElementById('course-details');
const flashcardsContainer = document.getElementById('flashcards-container');
const backButton = document.getElementById('back-button');
const backFromFlashcards = document.getElementById('back-from-flashcards');
const homeLink = document.getElementById('home-link');
const userInfo = document.getElementById('user-info');
const userAvatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');
const signOutButton = document.getElementById('sign-out');
const signInContainer = document.getElementById('sign-in-container');

// Current lesson state for navigation
let currentCourseId = null;
let currentLessonIndex = null;

// Initialize the application
function init() {
    loadUserProgress();
    renderCourses();
    setupEventListeners();
    createBubbles();
}

// Create background bubbles
function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles');
    // Bubbles are created in CSS, this function is for future enhancements
}

// Load user progress from localStorage
function loadUserProgress() {
    const savedProgress = localStorage.getItem('vibeLearnUserProgress');
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
    }
    
    // If we have a current user, load their specific progress
    if (currentUser) {
        const userData = userProgress[currentUser.email] || {};
        coursesData.forEach(course => {
            if (userData[course.id]) {
                course.completed = userData[course.id].completed || false;
                course.lessons.forEach((lesson, index) => {
                    lesson.completed = userData[course.id].lessons 
                        ? userData[course.id].lessons[index] || false 
                        : false;
                });
            }
        });
    }
}

// Save user progress to localStorage
function saveUserProgress() {
    if (!currentUser) return;
    
    if (!userProgress[currentUser.email]) {
        userProgress[currentUser.email] = {};
    }
    
    coursesData.forEach(course => {
        if (!userProgress[currentUser.email][course.id]) {
            userProgress[currentUser.email][course.id] = {
                completed: false,
                lessons: course.lessons.map(() => false)
            };
        }
        
        userProgress[currentUser.email][course.id].completed = course.completed;
        userProgress[currentUser.email][course.id].lessons = course.lessons.map(lesson => lesson.completed);
    });
    
    localStorage.setItem('vibeLearnUserProgress', JSON.stringify(userProgress));
}

// Render all courses on the homepage
function renderCourses() {
    coursesContainer.innerHTML = '';
    
    if (!currentUser) {
        coursesContainer.innerHTML = `
            <div class="text-center" style="grid-column: 1 / -1; color: white; padding: 3rem;">
                <h3>Please sign in to view courses</h3>
                <p>Sign in with Google to access all learning materials and track your progress.</p>
            </div>
        `;
        return;
    }
    
    coursesData.forEach(course => {
        const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
        const totalLessons = course.lessons.length;
        const progressPercentage = (completedLessons / totalLessons) * 100;
        
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-image">
                ${course.title}
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.shortDescription}</p>
                <div class="progress-bar" style="margin: 1rem 0; height: 8px;">
                    <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                </div>
                <div class="course-footer">
                    ${course.completed 
                        ? '<span class="completed-badge">Completed!</span>' 
                        : completedLessons > 0 
                            ? `<span class="progress-badge">${completedLessons}/${totalLessons} lessons</span>`
                            : '<span></span>'
                    }
                    <button class="btn btn-primary view-course-btn" data-id="${course.id}">View Course</button>
                </div>
            </div>
        `;
        coursesContainer.appendChild(courseCard);
    });
}

// Render course details
function renderCourseDetails(courseId) {
    const course = coursesData.find(c => c.id === parseInt(courseId));
    if (!course) return;
    
    const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
    const totalLessons = course.lessons.length;
    const progressPercentage = (completedLessons / totalLessons) * 100;
    
    courseDetails.innerHTML = `
        <div class="course-detail-header">
            <h2 class="course-detail-title">${course.title}</h2>
            <p class="course-detail-description">${course.description}</p>
        </div>
        
        <div class="course-lessons">
            <h3 class="lessons-title">Course Lessons</h3>
            <ul class="lessons-list">
                ${course.lessons.map((lesson, index) => `
                    <li class="lesson-item">
                        <div class="lesson-checkbox ${lesson.completed ? 'completed' : ''}" 
                             data-course="${course.id}" data-lesson="${index}"></div>
                        <span class="lesson-text ${lesson.completed ? 'completed' : ''}">${lesson.title}</span>
                        <button class="btn btn-outline view-notes-btn" data-course="${course.id}" data-lesson="${index}">
                            Study Lesson
                        </button>
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="progress-section">
            <div class="progress-info">
                <span>Progress: ${completedLessons} of ${totalLessons} lessons</span>
                <span>${Math.round(progressPercentage)}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercentage}%"></div>
            </div>
        </div>
        
        <div class="complete-section">
            <button class="btn ${course.completed ? 'btn-success' : 'btn-primary'}" id="complete-course-btn" 
                    ${course.completed ? 'disabled' : ''}>
                ${course.completed ? 'Course Completed! 🎉' : 'Mark Course as Completed'}
            </button>
        </div>
    `;
    
    // Add event listeners
    if (!course.completed) {
        document.getElementById('complete-course-btn').addEventListener('click', () => {
            markCourseAsCompleted(course.id);
        });
    }
    
    // Add event listeners to lesson checkboxes
    document.querySelectorAll('.lesson-checkbox').forEach(checkbox => {
        if (!checkbox.classList.contains('completed')) {
            checkbox.addEventListener('click', (e) => {
                const courseId = e.target.getAttribute('data-course');
                const lessonIndex = e.target.getAttribute('data-lesson');
                toggleLessonCompletion(courseId, lessonIndex);
            });
        }
    });
    
    // Add event listeners to view notes buttons
    document.querySelectorAll('.view-notes-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const courseId = e.target.getAttribute('data-course');
            const lessonIndex = e.target.getAttribute('data-lesson');
            showFlashcards(courseId, lessonIndex);
        });
    });
    
    // Switch to course details view
    homeView.classList.remove('active');
    courseDetailsView.classList.add('active');
}

// Toggle lesson completion
function toggleLessonCompletion(courseId, lessonIndex) {
    const course = coursesData.find(c => c.id === parseInt(courseId));
    if (!course) return;
    
    const lesson = course.lessons[parseInt(lessonIndex)];
    lesson.completed = !lesson.completed;
    
    // Check if all lessons are completed
    const allLessonsCompleted = course.lessons.every(l => l.completed);
    if (allLessonsCompleted && !course.completed) {
        course.completed = true;
        triggerConfetti();
    }
    
    saveUserProgress();
    renderCourseDetails(courseId);
}

// Mark a course as completed
function markCourseAsCompleted(courseId) {
    const course = coursesData.find(c => c.id === parseInt(courseId));
    if (!course) return;
    
    course.completed = true;
    // Mark all lessons as completed
    course.lessons.forEach(lesson => {
        lesson.completed = true;
    });
    
    saveUserProgress();
    triggerConfetti();
    renderCourseDetails(courseId);
}

// Show flashcards and lesson content
function showFlashcards(courseId, lessonIndex) {
    const course = coursesData.find(c => c.id === parseInt(courseId));
    if (!course) return;
    
    const lesson = course.lessons[parseInt(lessonIndex)];
    const notes = lesson.notes;
    let currentMode = 'content'; // 'content' or 'flashcards'
    let currentCardIndex = 0;
    
    // Store current state for navigation
    currentCourseId = courseId;
    currentLessonIndex = parseInt(lessonIndex);
    
    function renderFlashcardsView() {
        if (currentMode === 'content') {
            renderLessonContent();
        } else {
            renderFlashcards();
        }
    }
    
    function renderLessonContent() {
        flashcardsContainer.innerHTML = `
            <div class="flashcard-modes">
                <button class="flashcard-mode-btn active" data-mode="content">
                    📖 Lesson Content
                </button>
                <button class="flashcard-mode-btn" data-mode="flashcards">
                    🎴 Study Flashcards
                </button>
            </div>
            
            <div class="lesson-content">
                ${lesson.content}
            </div>
            
            <div class="lesson-navigation">
                <div class="lesson-progress">
                    Lesson ${parseInt(lessonIndex) + 1} of ${course.lessons.length}
                </div>
                <button class="complete-lesson-btn" id="complete-lesson-btn">
                    ${parseInt(lessonIndex) === course.lessons.length - 1 ? 'Complete Lesson & Finish Course' : 'Complete Lesson & Continue'}
                </button>
            </div>
        `;
        
        // Add event listeners to mode buttons
        document.querySelectorAll('.flashcard-mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.flashcard-mode-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentMode = e.target.getAttribute('data-mode');
                renderFlashcardsView();
            });
        });
        
        // Add event listener to complete lesson button
        document.getElementById('complete-lesson-btn').addEventListener('click', () => {
            completeCurrentLesson(courseId, lessonIndex);
        });
    }
    
    function renderFlashcards() {
        if (notes.length === 0) {
            flashcardsContainer.innerHTML = `
                <div class="flashcard-modes">
                    <button class="flashcard-mode-btn" data-mode="content">
                        📖 Lesson Content
                    </button>
                    <button class="flashcard-mode-btn active" data-mode="flashcards">
                        🎴 Study Flashcards
                    </button>
                </div>
                <div class="text-center" style="color: white; padding: 3rem;">
                    <h3>No flashcards available for this lesson</h3>
                    <p>Check the lesson content for detailed information.</p>
                </div>
                <div class="lesson-navigation">
                    <div class="lesson-progress">
                        Lesson ${parseInt(lessonIndex) + 1} of ${course.lessons.length}
                    </div>
                    <button class="complete-lesson-btn" id="complete-lesson-btn">
                        ${parseInt(lessonIndex) === course.lessons.length - 1 ? 'Complete Lesson & Finish Course' : 'Complete Lesson & Continue'}
                    </button>
                </div>
            `;
            
            // Add mode switch listeners
            document.querySelectorAll('.flashcard-mode-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.flashcard-mode-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    currentMode = e.target.getAttribute('data-mode');
                    renderFlashcardsView();
                });
            });
            
            // Add complete lesson listener
            document.getElementById('complete-lesson-btn').addEventListener('click', () => {
                completeCurrentLesson(courseId, lessonIndex);
            });
            
            return;
        }
        
        const card = notes[currentCardIndex];
        flashcardsContainer.innerHTML = `
            <div class="flashcard-modes">
                <button class="flashcard-mode-btn" data-mode="content">
                    📖 Lesson Content
                </button>
                <button class="flashcard-mode-btn active" data-mode="flashcards">
                    🎴 Study Flashcards
                </button>
            </div>
            
            <div class="flashcard" id="current-flashcard">
                <div class="flashcard-front">
                    ${card.front}
                </div>
                <div class="flashcard-back">
                    ${card.back}
                </div>
            </div>
            
            <div class="flashcards-nav">
                <button class="btn btn-outline" id="prev-card" ${currentCardIndex === 0 ? 'disabled' : ''}>
                    ← Previous
                </button>
                <div class="flashcard-counter">
                    ${currentCardIndex + 1} / ${notes.length}
                </div>
                <button class="btn btn-outline" id="next-card" ${currentCardIndex === notes.length - 1 ? 'disabled' : ''}>
                    Next →
                </button>
            </div>
            
            <div class="lesson-navigation">
                <div class="lesson-progress">
                    Lesson ${parseInt(lessonIndex) + 1} of ${course.lessons.length}
                </div>
                <button class="complete-lesson-btn" id="complete-lesson-btn">
                    ${parseInt(lessonIndex) === course.lessons.length - 1 ? 'Complete Lesson & Finish Course' : 'Complete Lesson & Continue'}
                </button>
            </div>
        `;
        
        // Add event listener to flip card
        const flashcard = document.getElementById('current-flashcard');
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });
        
        // Add event listeners to navigation buttons
        document.getElementById('prev-card').addEventListener('click', () => {
            if (currentCardIndex > 0) {
                currentCardIndex--;
                renderFlashcards();
            }
        });
        
        document.getElementById('next-card').addEventListener('click', () => {
            if (currentCardIndex < notes.length - 1) {
                currentCardIndex++;
                renderFlashcards();
            }
        });
        
        // Add mode switch listeners
        document.querySelectorAll('.flashcard-mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.flashcard-mode-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentMode = e.target.getAttribute('data-mode');
                renderFlashcardsView();
            });
        });
        
        // Add complete lesson listener
        document.getElementById('complete-lesson-btn').addEventListener('click', () => {
            completeCurrentLesson(courseId, lessonIndex);
        });
    }
    
    function completeCurrentLesson(courseId, lessonIndex) {
        const course = coursesData.find(c => c.id === parseInt(courseId));
        if (!course) return;
        
        const lesson = course.lessons[parseInt(lessonIndex)];
        lesson.completed = true;
        
        // Check if this is the last lesson
        const isLastLesson = parseInt(lessonIndex) === course.lessons.length - 1;
        
        if (isLastLesson) {
            // Mark course as completed
            course.completed = true;
            triggerConfetti();
            saveUserProgress();
            
            // Return to course details view
            flashcardsView.classList.remove('active');
            courseDetailsView.classList.add('active');
            renderCourseDetails(courseId);
        } else {
            // Move to next lesson
            saveUserProgress();
            const nextLessonIndex = parseInt(lessonIndex) + 1;
            showFlashcards(courseId, nextLessonIndex);
        }
    }
    
    // Start with lesson content view
    renderLessonContent();
    
    // Switch to flashcards view
    courseDetailsView.classList.remove('active');
    flashcardsView.classList.add('active');
}

// Trigger confetti animation
function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6']
    });
    
    // Additional burst after delay
    setTimeout(() => {
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 250);
}

// Google Sign-In handler
function handleGoogleSignIn(response) {
    // Decode the JWT token to get user info
    const userObject = parseJwt(response.credential);
    currentUser = {
        name: userObject.name,
        email: userObject.email,
        picture: userObject.picture
    };
    
    // Update UI
    userAvatar.src = currentUser.picture;
    userName.textContent = currentUser.name;
    userInfo.classList.remove('hidden');
    signInContainer.classList.add('hidden');
    
    // Load user progress
    loadUserProgress();
    renderCourses();
}

// Parse JWT token
function parseJwt(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

// Sign out user
function signOut() {
    currentUser = null;
    userInfo.classList.add('hidden');
    signInContainer.classList.remove('hidden');
    
    // Clear any sensitive data
    // Note: Google Sign-In state is managed by Google's SDK
    
    renderCourses();
}

// Setup event listeners
function setupEventListeners() {
    // View course button event delegation
    coursesContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-course-btn')) {
            const courseId = e.target.getAttribute('data-id');
            renderCourseDetails(courseId);
        }
    });
    
    // Back button from course details
    backButton.addEventListener('click', () => {
        courseDetailsView.classList.remove('active');
        homeView.classList.add('active');
        renderCourses();
    });
    
    // Back button from flashcards
    backFromFlashcards.addEventListener('click', () => {
        flashcardsView.classList.remove('active');
        courseDetailsView.classList.add('active');
    });
    
    // Home link
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        courseDetailsView.classList.remove('active');
        flashcardsView.classList.remove('active');
        homeView.classList.add('active');
        renderCourses();
    });
    
    // Sign out button
    signOutButton.addEventListener('click', signOut);
    
    // Make handleGoogleSignIn available globally for Google callback
    window.handleGoogleSignIn = handleGoogleSignIn;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);