const express = require('express');
const pool = require('../database');

const index = async(req, res) => {
    res.render('index/index');
}

const nosotros = async(req, res) => {
    res.render('index/nosotros');
}

const info = async(req, res) => {
    res.render('info');
}

const error = async(req, res) => {
    res.render('index/error');
}


module.exports = { index, nosotros, info, error };