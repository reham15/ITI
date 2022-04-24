<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::paginate(8);


        return view('posts.index', [
            'posts' => $posts,
        ]);


    }

    public function create()
    {

        $users = User::all();

        return view('posts.create', [
            'users' => $users,
        ]);


    }

    public function edit($postId)
    {
        $post = Post::find($postId);
        $users = User::all();

        return view('posts.edit', [

            'post' => $post,
            'users' => $users,
        ]);


    }

    public function show($postId)
    {


        $users = User::all();
        $post = Post::find($postId);

        $comments = $post->comments;

        return view('posts.show', [

            'post' => $post,
            'comments' => $comments,
            'users' => $users,
        ]);


    }

    public function store(StorePostRequest $request)
    {

        $data = request()->all();

        $path = Storage::putFile('avatars', $request->file('avatar'));

        Post::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'user_id' => $data['post_creator'],
            'path' => $path,
        ]);


        return redirect()->route('posts.index');


    }

    public function update($postId, StorePostRequest $request)
    {
        $post = Post::find($postId);
        Storage::delete($post->path);
        $path = Storage::putFile('avatars', $request->file('avatar'));
        $data = request()->all();

        Post::where('id', $postId)
            ->update(['title' => $data['title'],
                'description' => $data['description'],
                'user_id' => $data['post_creator'],
                'path' => $path,
            ]);


        return redirect()->route('posts.index');


    }

    public function delete($postId)
    {
        $post = Post::find($postId);
        Storage::delete($post->path);

        $data = request()->all();

        Post::where('id', $postId)
            ->delete();


        return redirect()->route('posts.index');

    }


}



