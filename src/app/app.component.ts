import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  origin = 'http://localhost:8000'
  api = '/produto/'
  arr = [0,1,2,3,4,5,6,7,8,9,10]
  show = false
  newCourse = {
    name: '',
    description: '',
    price: 0
  }

  jsonArr = [
    {
      "name": "Java",
      "description": "This MOOC teaches you how to program core features and classes from the Java programming language that are used in Android, which is the dominant platform for developing and deploying mobile device apps. \n\nIn particular, this MOOC covers key Java programming language features that control the flow of execution through an app (such as Java’s various looping constructs and conditional statements), enable access to structured data (such as Java's built-in arrays and common classes in the Java Collections Framework, such as ArrayList and HashMap), group related operations and data into classes and interfaces (such as Java's primitive and user-defined types, fields, methods, generic parameters, and exceptions), customize the behavior of existing classes via inheritance and polymorphism (such as subclassing and overriding virtual methods). ",
      "price": "10000.00",
      "category": "Data Science",
      "color": "pink",
      "image_url": "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX258_BO1,204,203,200_.jpg"
    },
    {
      "name": "iOS Developer",
      "description": "iOS is Apple's operating system for its iPhone and iPod Touch products, and with more than 1.5 billion users worldwide, developers that can build and maintain iOS are in high demand. By acquiring an expert knowledge of Swift and Objective-C, Apple's programming languages, you will gain the ability to build an iOS app of any complexity that taps into services from all corners of the web.",
      "price": "15000.00",
      "category": "Mobile Development",
      "color": "orange",
      "image_url": "https://insights.dice.com/wp-content/uploads/2020/02/shutterstock_1490302805.jpg"
    },
    {
      "name": "Introduction to UI Design",
      "description": "In this course, you will gain an understanding of the critical importance of user interface design. You will also learn industry-standard methods for how to approach the design of a user interface and key theories and frameworks that underlie the design of most interfaces you use today.\n\nThrough a series of case studies on commercial systems - many of which you likely use on a regular basis - we will illustrate the benefits of good design. We will also demonstrate how the costs of bad design can often be severe (in user experience, money, and even human lives).",
      "price": "20000.00",
      "category": "UI Design Process",
      "color": "yellow",
      "image_url": "https://miro.medium.com/max/1200/1*Xm5el1rMhc65xUq_85fW_A.jpeg"
    },
    {
      "name": "Front-End Web Development with React",
      "description": "This course explores Javascript based front-end application development, and in particular the React library (Currently Ver. 16.3). This course will use JavaScript ES6 for developing React application. You will also get an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design. You will be introduced to various aspects of React components. You will learn about React router and its use in developing single-page applications. You will also learn about designing controlled forms.",
      "price": "12000.00",
      "category": "React Forms",
      "color": "grey",
      "image_url": "https://storage.myseldon.com/news-pict-ac/ACE43E88F8F764EFFEDC6162DBABBCAA"
    },
    {
      "name": "Version Control",
      "description": "Learn how modern software developers collaborate across the world without messing up each other's code. You will look at the different version control systems and how to create an effective software development workflow. You will be introduced to some of the most commonly used Linux commands that you can use to work with files on your hard drive and create powerful workflows that will automate your work, saving you time and effort. ",
      "price": "11000.00",
      "category": "Software collaboration",
      "color": "brown",
      "image_url": "https://i.pinimg.com/originals/4a/94/e8/4a94e80b5dbaad0771797aedeb6150fa.jpg"
    },
    {
      "name": "Server-side Development with NodeJS, Express and MongoDB",
      "description": "This course deals with all things server-side. We base the entire course around the NodeJS platform. We start with a brief overview of the Web protocols: HTTP and HTTPS. We examine NodeJS and NodeJS modules: Express for building web servers. On the database side, we review basic CRUD operations, NoSQL databases, in particular MongoDB and Mongoose for accessing MongoDB from NodeJS. We examine the REST concepts and building a RESTful API. We touch upon authentication and security. Finally we review backend as a service (BaaS) approaches, including mobile BaaS, both open-source and commercial BaaS services.",
      "price": "25000.00",
      "category": "Introduction to Server-side Development",
      "color": "violet",
      "image_url": "https://vev.ru/wp-content/uploads/2022/06/Depositphotos_148138893_l-2015-1-1.jpg"
    },
    {
      "name": "Spring MVC, Spring Boot and Rest Controllers",
      "description": "This course explains some high level patterns used in Microservice architectures and the motivation to move towards these architectures and away from monolithic development of applications. . It then goes on to implement these patterns using Spring Cloud, Netflix OSS one of the most popular Cloud implementations of Microservices used today. Students will learn about Service Registration, Service Discovery, Client Side Load Balancing, Circuit Breakers, and Gateway or Edge Services in a Spring Boot Setting. It will leverage Spring  Cloud and Netflix OSS, Labs will specifically target the projects Eureka, Ribbon, Hystrix, Feign and Zuul.",
      "price": "20000.00",
      "category": "Spring MVC",
      "color": "blue",
      "image_url": "https://stories.isu.pub/60333567/images/4_original_file_I0.jpg"
    },
    {
      "name": "Full Stack Software Developer Assessment",
      "description": "This Professional Certificate will equip you with all the key skills and technical know-how to kickstart your career as a Full-Stack Cloud Native Application Developer. Guided by experts at IBM, you will learn to build your own cloud-based applications and practice working with the technologies behind them. This program consists of ample instructional content as well as hands-on exercises and projects designed to hone your skills and help you build your portfolio. ",
      "price": "19000.00",
      "category": "Assessment for Application Cloud Developer",
      "color": "purple",
      "image_url": "https://cont.ws/uploads/pic/2020/7/Digital-Skills-Scandi-Young-Woman-Coding_web.jpg"
    },
    {
      "name": "Introduction to Git and GitHub",
      "description": "In this course, you’ll learn how to keep track of the different versions of your code and configuration files using a popular version control system (VCS) called Git. We'll also go through how to setup an account with a service called GitHub so that you can create your very own remote repositories to store your code and configuration. ",
      "price": "14000.00",
      "category": "Version Control",
      "color": "green",
      "image_url": "https://miro.medium.com/max/848/1*osmoDtWdLGvO_dVpLx0HHw.jpeg"
    },
    {
      "name": "Programming in Python",
      "description": "Learn how to use Amazon CodeGuru Reviewer to automatically identify issues and vulnerabilities to improve your code quality with Improve your Python Code using Amazon CodeGuru. This course is designed for Python developers who are interested in learning how to use CodeGuru Reviewer to save time and improve their code review process.\n\nIn this course, you’ll learn how to use CodeGuru Reviewer to detect issues and identify recommendations to improve the quality and security of your code. The course demonstrates how CodeGuru Reviewer finds code anomalies and explains how to understand and apply its automated suggestions.",
      "price": "20000.00",
      "category": "Basic Programming with Python",
      "color": "red",
      "image_url": "https://masheka.com/uploads/posts/2020-05/1588775745_developer-at-terminal.jpg"
    }
  
  ]


  courses = []
  // View child element
  @ViewChild("block", {static: true}) block: ElementRef;
  
  constructor(
    private http: HttpClient) {
    
  }
  
  // get function
  getAll(){
    console.log("get");
    /* this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
      console.log(data);
    }); */


    this.http.get(this.api).subscribe((data: Array<any>) => {
      console.log(data);
      this.courses = data
    })
  }

  update(course){
    console.log(course);
    // this.http.put(this.api + 'update/' + course.id , course).subscribe((data: Array<any>) => {
    this.http.post(this.api + 'update/' + course.id , course).subscribe((data: Array<any>) => {
      console.log(data);
      this.getAll()
    })
  }
  add(){
    this.http.post(this.api + 'add/', this.newCourse).subscribe(() => {
      this.getAll()
    })
  }
  delete(id){
    this.http.delete(this.api + 'delete/' + id).subscribe(() => {
      this.getAll()
    })
  }
  // Toggle show value 
  toggle(){
    this.show = !this.show;
  }

  ngOnInit() {
    console.log(this.block);
    // this.block.nativeElement.style.backgroundColor = "red";
    // alert protocol
    // alert(window.location.protocol);
    // loop iteration jsonArr
    /* this.jsonArr.forEach(element => {
      this.http.post(this.api + 'add/', element).subscribe(() => {
        // this.getAll()
      })
    }); */
    this.getAll()
  }

}
