<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();


        return PostResource::collection($posts);


    }

    public function show($postId)
    {


        $post = Post::find($postId);


        return new PostResource($post);


    }
    public function store(StorePostRequest $request)
    {

        $data = request()->all();


       $post= Post::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'user_id' => $data['post_creator'],

        ]);


        return new PostResource($post);


    }
}

