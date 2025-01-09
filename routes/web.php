<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// use App\Http\Controllers\CustomerController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/customers', [CustomerController::class, 'index']);
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/customers', function () {
    return Inertia::render('customers');
})->middleware(['auth', 'verified'])->name('customers');

Route::get('/user', function () {
    return view('user');

});

// Route::get('/main', function () {
//     return Inertia::render('Main', [
//         'header' => 'Dashboard Header',
//         'auth' => ['user' => auth()->user()],
//     ]);
// })->middleware(['auth']);

// Route::get('/customers', function () {
//     return Inertia::render('CustomerList', [
//         'header' => 'Customer List',
//         'auth' => ['user' => auth()->user()],
//     ]);
// })->middleware(['auth']);

// use Illuminate\Support\Facades\Route;

// Route::get('/{any}', function () {
//     return view('app'); // Ensure this matches your React app's Blade template
// })->where('any', '.*');

// use Inertia\Inertia;

// public function index()
// {
//     return Inertia::render('CustomerList', [
//         'customers' => Customer::all(), // Example data
//     ]);
// }



// Route::get('/poko/{id}',function ($id){

//     $kp =var_dump((int)$id);
//     return "$kp";
// });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
