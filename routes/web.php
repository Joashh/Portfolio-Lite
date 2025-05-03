<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return inertia('main');
});
Route::get('/certificates', fn () => Inertia::render('certifications'));
Route::get('/skills', fn () => Inertia::render('skills'));
