@extends('layouts.app')

@section('title'){{$post['title']}} @endsection

@section('content')

<div class="card mt-5">
<div class="card-header">
            Post info
        </div>
  <div class="card-body">
  <div>
        <span style="font-size: 1.2rem; font-weight: bold">Title: </span>
                {{$post->title}}
            </div>
            <div>
          <span style="font-size: 1rem; font-weight: bold">Description: </span>
                {{$post->description}}
            </div>
  </div>
</div>


<div class="card mt-5">
<div class="card-header">
           Post Creator info
        </div>
  <div class="card-body">
  <div>
        <span style="font-size: 1.2rem; font-weight: bold">Name: </span>
                {{$post->user->name}}
            </div>
            <div>
          <span style="font-size: 1rem; font-weight: bold">Created at: </span>
          {{\Illuminate\Support\Carbon::parse($post->created_at)->format('l jS \\of F Y h:i:s A')}}
            </div>
  </div>
</div>


<section >
  <div class="card mt-5 text-dark">
    
      
        
          <div class="card-header">
            
                Add a comment</div>
                
            
                <div class="card-body">
                <form method="POST" action="{{route('comments.store',['post' => $post['id']])}}">
                  <textarea class="form-control " id="textAreaExample" name="comment" rows="4"></textarea>
                  
                
                <div class="d-flex justify-content-end ">
                  
                  <form method="POST" action="{{route('comments.store',['post' => $post['id']])}}">
                    @csrf
                    <button  class="my-3 mr-1.5   btn btn-success">Send</button>
                  
                  <form>
                  <button type="button" class="my-3 mr-2 btn btn-danger">cancel</button>
                  
                </div>
                </div>
            
         
      
    
  </div>
</section>


<section>
        <div class="card mt-5 ">
            <div class="card-header ">
                Latest Comments
            </div>
            <div class="card-body">
                
              <div class="d-flex flex-row comment-row m-t-0">
                   @foreach($comments as $comment)
                    <div class="comment-text w-100">
                        <h6 class="font-medium">James Thomas</h6> <span class="m-b-15 d-block">{{$comment->body}} </span>
                        <div class="comment-footer"> <span class="text-muted float-right">April 14, 2019</span>
                         <button type="button" class="btn btn-primary btn-sm">Edit</button>
                          
                           <button type="button" class="btn btn-danger btn-sm">Delete</button> 
                          </div>
                    </div>
                    @endforeach
                
            </div> 
                
                
            
        </div>
 <section>



@endsection
