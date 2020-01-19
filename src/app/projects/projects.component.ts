import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  cards = [
    {
      source: '../../assets/img/projects/stonie.mp4',
      link: 'https://stonie.herokuapp.com',
      icon: 'fa-shopping-cart',
      icon_color: 'cyan-text',
      category: 'E-commerce',
      title: 'STONIE',
      tech_stack: 'Nodejs + Express + MongoDB + Handlebars',
      intro: 'An E-commerce Website for stones',
      description: [
        {feature: 'Utilized <strong>CSRF</strong> for online session security and <strong>Passport</strong> middleware for unobtrusive authentication'},
        {feature: 'Implemented payment system with <strong>stripe API</strong>'},
        {feature: 'Managed user and product data with <strong>MongoDB</strong>'}
      ],
      try: 'Try it out',
      preview_link: 'https://stonie.herokuapp.com',
      view: 'View source code',
      source_link: 'https://github.com/ambitiousbird/stonie'
    },
    {
      source: '../../assets/img/projects/sharemeshi.mp4',
      link: 'https://sharemeshi.com',
      icon: 'fa-shopping-cart',
      icon_color: 'orange-text',
      category: 'E-commerce',
      title: 'Sharemeshi',
      tech_stack: 'Angular 6 + Express + MongoDB + Node.js',
      intro: 'A food sharing platform',
      description: [
        {feature: 'Implemented user authentication with firebase'},
        {feature: 'Integrated <strong>Paypal API</strong> for payment system'},
        {feature: 'Managed user and product data with <strong>MongoDB</strong>'}
      ],
      try: 'Online preview',
      preview_link: 'https://sharemeshi.com',
      view: 'View source code',
      source_link: 'https://github.com/ambitiousbird/sharemeshi'
    },
    {
      source: '../../assets/img/projects/demographics.mp4',
      link: 'https://smart-demographics.herokuapp.com/',
      icon: 'fa-wrench',
      icon_color: 'cyan-text',
      category: 'Tools',
      title: 'Demographics Analysis',
      tech_stack: 'React + Node.js + Express + Redux + React Router + Webpack',
      intro: 'Enter image link and get a brief demographics analysis report!',
      description: [
        {feature: 'Developed the <strong>ES6</strong> based frontend with <strong>React Router</strong>, <strong>Redux</strong>, and <strong>Clarifai API</strong>'},
        {feature: 'Implemented backend with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>PostgreSQL</strong>; Used <strong>REST</strong> to leverage the HTTP protocol'},
        {feature: 'Performed real-time end-to-end integration with Apache Kafka in Apache Spark’s Structured Streaming'}
      ],
      try: 'Try it out',
      preview_link: 'https://smart-demographics.herokuapp.com/',
      view: 'View source code',
      source_link: 'https://github.com/ambitiousbird/ML-demographics'
    },
    {
      source: '../../assets/img/projects/robofactory.mp4',
      link: 'https://ambitiousbird.github.io/robofactory/',
      icon: 'fa-gamepad',
      icon_color: 'green-text',
      category: 'Entertainment',
      title: 'Robot Factory',
      tech_stack: 'React + ES6 + Redux',
      intro: 'Search for your favorite robots!',
      description: [
        {feature: 'Created responsive, resuable react components'},
        {feature: 'Added a search function that quickly renders the search results'},
        {feature: 'Managed states with <strong>Redux</strong>'}
      ],
      try: 'Try it out',
      preview_link: 'https://ambitiousbird.github.io/robofactory/',
      view: 'View source code',
      source_link: 'https://github.com/ambitiousbird/robofactory'
    },
    {
      source: '../../assets/img/projects/crypto.mp4',
      link: 'http://cryptocurrency-dash.s3-website.us-east-2.amazonaws.com/',
      icon: 'fa-dollar-sign',
      icon_color: 'blue-text',
      category: 'Bitcoin',
      title: 'Crypto Dash',
      tech_stack: 'React + Highcharts + Cryptocompare',
      intro: 'Check your favorite bitcoin prices!',
      description: [
        {feature: 'Designed UI with styled-components'},
        {feature: 'Utilized <Strong>Cryptocompare API</Strong> to get crypto coin prices and list and <Strong>moment</Strong> to validate and manipulate date'},
        {feature: 'Visualized crypto data with <Strong>Highcharts</Strong>'}
      ],
      try: 'Try it out',
      preview_link: 'http://cryptocurrency-dash.s3-website.us-east-2.amazonaws.com/',
      view: 'View source code',
      source_link: 'https://github.com/ambitiousbird/cryptodash'
    },
    {
      source: '../../assets/img/projects/userdash.mp4',
      link: 'https://user-dash.firebaseapp.com/',
      icon: 'fa-table',
      icon_color: 'green-text',
      category: 'Data processing',
      title: 'User Dash',
      tech_stack: 'AngularJS + Node.js + MongoDB + Highcharts + Firebase',
      intro: 'Random data visualization',
      description: [
        {feature: 'Visualized random user data in <strong>Highcharts</strong>'},
        {feature: 'Implemented data manipulation functionalities with <strong>Node.js</strong> and <Strong>MongoDB</Strong>'},
      ],
      try: 'Try it out',
      preview_link: 'https://user-dash.firebaseapp.com/',
      view: 'View source code',
      source_link: 'https://github.com/ambitiousbird/User-dash'
    },
    {
      source: '../../assets/img/projects/hibersense.png',
      source_is_image: true,
      link: 'http://hibersense-dashboard.s3-website.us-east-2.amazonaws.com/',
      icon: 'fa-chart-pie',
      icon_color: 'blue-text',
      category: 'Data Visualization',
      title: 'HiberSense',
      tech_stack: 'React + D3 + Redux + React Router',
      intro: 'Monitor and control room temperatures in real time',
      description: [
        {feature: 'Utilized Redux extensively for state management'},
        {feature: 'Computed and synchronized energy and temperature usage data between multiple graphs'},
        {feature: 'Visualized temperature and energy data with <Strong>D3</Strong>'},
        {feature: 'Hosted the application on <strong>AWS S3</strong>'},
      ],
      try: 'Try it out',
      preview_link: 'http://hibersense-dashboard.s3-website.us-east-2.amazonaws.com/',
      view: 'View source code',
      source_link: 'https://github.com/ambitiousbird/hibersense-dash'
    },
    {
      source: '../../assets/img/projects/socialDetector.png',
      source_is_image: true,
      link: 'http://socialdetection.s3-website.us-east-2.amazonaws.com/',
      icon: 'fa-search',
      icon_color: 'green-text',
      category: 'Data Scrapping',
      title: 'Social Detector',
      tech_stack: 'React + Redux + Node.js + Express + MongoDB + JWT + Passport + Python + BeautifulSoup',
      intro: 'Detect online social traces',
      description: [
        {feature: 'Implemented google scrawler with <strong>Python</strong> and <strong>BeautifulSoup</strong>'},
        {feature: 'Added user authentication with <strong>Node.js</strong>,<strong>Passport</strong>,<strong>JWT</strong> and <Strong>MongoDB</Strong>'},
        {feature: 'Deployed the application with <strong>AWS EC2</strong> and <strong>S3</strong>'}
      ],
      try: 'Try it out',
      preview_link: 'http://socialdetection.s3-website.us-east-2.amazonaws.com/',
      view: 'View source code',
      source_link: 'https://github.com/ambitiousbird/social-detection'
    },

  ];
  slides: any = [[]];
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 2);
  }
}
