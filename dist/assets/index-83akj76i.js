(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();window.addEventListener("scroll",function(){var t=document.querySelector(".arrow"),r=window.scrollY||document.documentElement.scrollTop;r<100?t.style.animationPlayState="running":t.style.animationPlayState="paused"});document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(r){r.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});let l=0;window.addEventListener("scroll",function(){let t=window.pageYOffset||document.documentElement.scrollTop;t>l?document.querySelector(".header").classList.add("hidden"):document.querySelector(".header").classList.remove("hidden"),l=t<=0?0:t},!1);document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("scroll-to-delete"),r=document.getElementById("deleteProcedure");t.addEventListener("click",function(){r.scrollIntoView({behavior:"smooth"})})});
