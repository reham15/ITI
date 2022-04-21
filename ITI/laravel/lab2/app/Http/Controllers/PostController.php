<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    
    public function index()
    {   $posts=Post::paginate(8);


        return view('posts.index',[
            'posts'=>$posts,
        ]);



    }

    public function create()
    {

        $users = User::all();

        return view('posts.create',[
            'users' => $users,
        ]);



    }

    public function edit($postId)
    {
        $post = Post::find($postId);
        $users = User::all();
        
        return view('posts.edit',[

            'post'=>$post,
            'users'=>$users,
        ]);




    }
    public function show($postId){
  


    $post = Post::find($postId);
    
    $comments=$post->comments;
       
        return view('posts.show',[

            'post'=>$post,
            'comments'=>$comments,
        ]);



    }
    public function store()
    {

        $data = request()->all(); 

        
        Post::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'user_id' => $data['post_creator'],
            
        ]);

        
        return redirect()->route('posts.index');



    }
    public function update($postId)
    {

        $data = request()->all(); 

        Post::where('id', $postId)
      ->update(['title' => $data['title'],
      'description' => $data['description'],
      'user_id' => $data['post_creator'],]);

        
        return redirect()->route('posts.index');




    }
    public function delete($postId)
    {

        $data = request()->all(); 

        Post::where('id', $postId)
      ->delete();

        
        return redirect()->route('posts.index');

    }


    }

    

