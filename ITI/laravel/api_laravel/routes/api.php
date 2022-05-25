<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\AuthanticationController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/posts', [PostController::class, 'index'])->middleware('auth:sanctum');
Route::get('/posts/{post}', [PostController::class, 'show'])->middleware('auth:sanctum');
Route::post('/posts', [PostController::class, 'store'])->middleware('auth:sanctum');
Route::get('/departments', [\App\Http\Controllers\Api\DepartmentController::class, 'index']);
Route::get('/departments/{department}', [\App\Http\Controllers\Api\DepartmentController::class, 'show']);
Route::delete('/departments/{department}', [\App\Http\Controllers\Api\DepartmentController::class, 'delete']);
Route::put('/departments/{department}', [\App\Http\Controllers\Api\DepartmentController::class, 'update']);
Route::post('/departments', [\App\Http\Controllers\Api\DepartmentController::class, 'store']);
Route::post('/sanctum/token', [AuthanticationController::class,'authenticate']);

Route::get('test', function(){

    return "hello";
}
);
