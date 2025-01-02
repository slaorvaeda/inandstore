<?php

namespace App\Exceptions;

use Exception;

class Handler extends Exception
{
public function report(Throwable $exception)
{
    // Log the exception or send it to an external service like Sentrycd 
    parent::report($exception);
}

public function render($request, Throwable $exception)
{
    if ($exception instanceof \Symfony\Component\HttpKernel\Exception\NotFoundHttpException) {
        return response()->view('errors.404', [], 404);
    }

    return parent::render($request, $exception);
}


}
