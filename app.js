const express = require('express')
const app = express

const { Sequalize } = require('sequalize')
const sequalize = new Sequalize("postgres://shelfcontrol_user:postgres://shelf_control_backend_user:qcAjIHkZO8S0NDSYlGM4VOHCnrud3X2W@dpg-cgm9u9jhp8udl0s6nibg-a/shelf_control_backend")