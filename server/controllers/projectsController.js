const express = require('express')

const projectsController = {};


projectsController.index = (req, res) => {
    const projects = [{
      title: 'Dashboard',
      tags: ['angularjs', 'html', 'css', 'javascript'],
      date: '12/3/2017',
      img: '/img/Weatherzone.png',
      link: 'http://adanabbi.com/WeatherZone/#!/',
      linked: '<a href="http://adanabbi.com/WeatherZone/#!/"><img src="/img/button.jpg" alt=""></a>'
    },
    {
      title: 'Dashboard',
      tags: ['angularjs', 'html', 'css', 'javascript'],
      date: '12/3/2017',
      img: '/img/Weatherzone.png',
      link: 'https://www.google.com/',
      linked: '<a href="http://adanabbi.com/WeatherZone/#!/"><img src="/img/button.jpg" alt=""></a>'
    },
    {
      title: 'Dashboard',
      tags: ['angularjs', 'html', 'css', 'javascript'],
      date: '12/3/2017',
      img: '/img/Weatherzone.png',
      link: 'http://adanabbi.com/WeatherZone/#!/',
      linked: '<a href="http://adanabbi.com/WeatherZone/#!/"><img src="/img/button.jpg" alt=""></a>'
    },
    {
      title: 'Dashboard',
      tags: ['angularjs', 'html', 'css', 'javascript'],
      date: '12/3/2017',
      img: '/img/Weatherzone.png',
      link: 'http://adanabbi.com/WeatherZone/#!/',
      linked: '<a href="http://adanabbi.com/WeatherZone/#!/"><img src="/img/button.jpg" alt=""></a>'
    },
    {
      title: 'Dashboard',
      tags: ['angularjs', 'html', 'css', 'javascript'],
      date: '12/3/2017',
      img: '/img/Weatherzone.png',
      link: 'http://adanabbi.com/WeatherZone/#!/',
      linked: '<a href="http://adanabbi.com/WeatherZone/#!/"><img src="/img/button.jpg" alt=""></a>'
    },
    {
      title: 'Dashboard',
      tags: ['angularjs', 'html', 'css', 'javascript'],
      date: '12/3/2017',
      img: '/img/Weatherzone.png',
      link: 'http://adanabbi.com/WeatherZone/#!/',
      linked: '<a href="http://adanabbi.com/WeatherZone/#!/"><img src="/img/button.jpg" alt=""></a>'
    },

  ]


  res.render('projects/index', {
    projects: projects
  })
}

projectsController.create = (req, res) => {
  res.render('projects/create')
}

projectsController.store = (req, res) => {
  res.send({
    saved: true
  })
}

projectsController.show = (req, res) => {
  res.render('projects/show')
}

projectsController.edit = (req, res) => {
  res.render('projects/edit')
}

projectsController.update = (req, res) => {
  res.send({
    updated: true
  })
}

projectsController.destroy = (req, res) => {
  res.send({
    deleted: true
  })
}













module.exports = projectsController
