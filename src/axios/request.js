import Vue from 'vue'
import axios from 'axios'
import router from '../router'

const service = axios.create({
    baseURL: 'http://127.0.0.1:8000',//本地
    timeout: 50000 //超时时间
});