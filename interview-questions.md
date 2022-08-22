# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
I have worked with JSX in React, it is the combination of JS and HTML inside of React. I know when creating a class inside of JSX we aren't able to use the word class to do so. This is because Javascript already has class as a set keyword, so in order for to by pass we must use className instead. This would like <h1 className="CantUseClass"></h1>. Although I believe I may need to work on proper syntax inside of React. The work I have with JSX so far has been good to work with. 
Researched answer:

JSX is an extension of JavaScript inside of React. It stands for JavaScript XML. This allows for the use of HTML inside of React, although this is not a requirement for React. So when we use JSX we are creating a element inside of React. You are able to code without JSX. From what I have researched, it is an easier way of creating React applications. I see it is better because you can work HTML and JavaScript at once instead of going to HTML to put our JS. A syntax difference I know is you cannot create a class using this naming convention.(Like class="madeMyClass") In order to create a class you must use className instead. (className="madeMyClass") This is because JavaScript has class as a reserved key word. 

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: I know yarn is a resource negotiator, it actually stands for Yet Another Resource Negotiator.
When we run yarn on our terminal I believe it grabs the node dependencies which we need to view our app in the browser. 
Researched answer:
I've learned that YARN was developed by FaceBook and several other companies. It works with Node.js. It is how dependencies are managed, dependencies are what projects need into order to work properly. So in my experience I've used it to install node modules. It was also created as better alternative to NPM. Although I don't know about NPM. 

3. What is an anonymous function in JavaScript?

Your answer: I have worked with anonymous functions when it comes to higher order functions. One way I've used it passing it inside the parameters of .map() as an argument. I believe the difference is that these functions have not been declared. When I use an arrow function the way I would create this is have a variable assigned to it. So it would look like const ArrowFunc = () => {}. I believe its usefulness is that we are able to pass it as argument into a parameter. Although I am not completely sure on this but in my usage of it so far, this is what my conclusion would be.

Researched answer:
  It is a function that has been declared but there is no variable assigned to it. I now know that because it has not been assigned we would not be able to access it after. But the reason I am able to use it after a .map() is because I will call upon the variable I used .map on. So its purposes would be we can pass it as a argument to another function. I have also learned that it is executed right after being declared. 

4. What is the difference between a class and an object?

Your answer: While I have worked with class and object, I have more a of liking for classes. I will go ahead an explain what an Object is first. An Object data is stored inside of key: value pairs. I like to think of the key as the name then it is followed by the data. An example would be name: "Luis". Although this is not the actual syntax to complete the Object. I know in order to call on this key:pair I need to use dot notation. This would be needed to pass anything into it also. Next I would like to explain about Class. So a Class is essentially the blueprint we use to create our Objects. It contains Objects inside of it. This is where the differences come in. In order to create a Class we require a constructor. This is how a object is made or called on. Next unlike a Object we need to use this. to create our objects and access them. We also have the keyword new if we are creating a new class to give it access to it.

Object example:
const myObject = {
{name: Luis} <-- key:value pair
{name: Bob}
}

Class example:
class MyClass{
    constructor()  > {
        this.Bird
        this.Fish
        this.Snake <-- Use this. to create my obj
    }
}
var NewClass = new MyClass <--- this var can now access MyClass


Researched answer:
So, essentially I know that Classes are the blueprints for Objects. Classes make up the data and behavior for Objects. It is the properties and methods that our Object will end up having. An Object is just an instance of a class, while Classes are just how Objects are made. I've learned an Object is a physical thing vs Class which is more a of logical entity. Which is something I've known all along just didn't look at it that way.


5. What is the difference between state and props in React?

Your answer: I am aware of how State and Prop work from my experience in React. Although I may not be able to go to deeply in the differences. I know a State is what we use to store our initial data which we can then use a setState to change. We must also create an import for useState. A prop is a property is how we pass data down to our components. It is passed down using props{variablename}. In my example I have gave props could be named anything so it is best to keep it named something that relates to what we are doing. In my component in order for me to access that prop you must use props.<whatever I named it> so props.props. This would not be a good naming convention for it though as it can be confusing.

Researched answer:
 Some of the key differences are props can pass data from one component to another, while State will only pass data in the component only. This is something I should've also realized as we haven't tried to change State in a different component while using React. A better way I learned to understand them is props are immutable while a State is mutable. I also have learned that props have better performance in comparison to State. 


6. STRETCH: Which is the difference between a div and a span?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: A way of creating new objects from a given object. It's based on Objects and Classes.

2. Ruby: It is a fully OOP language. The general use of it is for creating web apps, although not limited to this.

3. Implicit return:
        It returning a value in an arrow func by getting rid of {}. If you use curly braces you will get undefined, ran into this on my challenges. When using this on Obj you have to wrap it in ().
4. Ruby blocks:
 They are anonymous functions that can be passed into a method. 
5. Ruby hashes: A collection of key value pairs. 
