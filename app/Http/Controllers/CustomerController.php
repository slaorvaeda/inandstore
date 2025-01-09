<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use Inertia\Inertia;

class CustomerController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Customers', [
            'customers' => Customers::all(),
        ]);
    }
}


