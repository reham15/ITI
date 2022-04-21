<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store($postId)
    { 
     //  dd("kkkkk");
        $data = request()->all(); 
       $post=Post::find($postId);
      $comment=$post->comments()->create([
            'body' => $data['comment'],
            'commentable_id' =>$postId ,
            'commentable_type' => "App\Models\Post",
            
        ]);
        return redirect()->route('posts.show',['post' => $postId]);
         

    }
}
